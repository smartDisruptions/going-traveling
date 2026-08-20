/**
 * Data audit. Runs the checks a person cannot do reliably by eye across
 * 54 destinations and 12 days: referential integrity, missing fields,
 * duplicate ids, orphaned records, and image/credit agreement.
 *
 *   node audit.mjs
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';

const here = (p) => new URL(p, import.meta.url).pathname;

// The data files are browser scripts that assign to `window`, so they are run
// against a bare context that provides one. Nothing is interpolated into the
// source — each file is executed exactly as it sits in this repo — and the
// context has no fs, no net and no process, so a mistake in a data file cannot
// reach past this script.
const win = {};
const ctx = createContext({ window: win });
/*
 * The module list is READ OFF THE PAGE rather than kept here by hand.
 *
 * A hand-maintained copy of this list is exactly how two data files once got
 * bundled out of the shipped artifact: the page loaded them, the tooling did
 * not, and every render after the first missing global died silently. Deriving
 * it means a new <script src> is audited the moment it is added, and a file
 * that stops being loaded stops being audited.
 */
const pageHtml = readFileSync(here('./index.html'), 'utf8');
const modules = [...pageHtml.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]);
if (!modules.length) throw new Error('no <script src> modules found in index.html');
for (const f of modules) {
  runInContext(readFileSync(here('./' + f), 'utf8'), ctx, { filename: f });
}
const { DESTINATIONS: D, ITINERARY: IT, FOOD, CARD, LODGING, BUDGET, BOOKINGS, CREDITS,
  LOGISTICS, ROUTEMAP, EATING, GROCERY, GROCERY_RULES, ALTS, GEO, REVIEWS, PLANS, ZONE, LEGS, FAR_MINUTES, BASES, TRAVEL_DAYS, ALLERGENS, FORMATS, DEFAULT_ALLERGENS,
  COSTS, LEVERS, STAY_TYPES, STAY_NOTES, COUNTDOWN, PACKING } = win;

let fails = 0, warns = 0;
const fail = (m) => { fails++; console.log('  FAIL  ' + m); };
const warn = (m) => { warns++; console.log('  warn  ' + m); };
const head = (t) => console.log('\n' + t);

/* ── referential integrity ──────────────────────────────────────── */
head('Destination ids');
const ids = D.map((d) => d.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
dupes.length ? fail('duplicate ids: ' + [...new Set(dupes)].join(', ')) : console.log('  ok    all unique');

head('Itinerary -> destination links');
let bad = 0;
for (const day of IT) {
  for (const id of day.dests) {
    if (!ids.includes(id)) { fail(`day ${day.day} references unknown destination "${id}"`); bad++; }
  }
}
if (!bad) console.log(`  ok    every dest referenced by a day exists (${IT.flatMap(d=>d.dests).length} links)`);

head('Destinations never used by any day');
const used = new Set(IT.flatMap((d) => d.dests));
const orphans = D.filter((d) => !used.has(d.id));
console.log(`  info  ${orphans.length} not on the default plan (expected — that is the library):`);
console.log('        ' + orphans.map((o) => `${o.id}[${o.tier}]`).join(', '));
const coreOrphans = orphans.filter((o) => o.tier === 'core');
coreOrphans.length
  ? fail('CORE destinations missing from every day: ' + coreOrphans.map((o) => o.id).join(', '))
  : console.log('  ok    no core destination is stranded');

/* ── required fields ────────────────────────────────────────────── */
head('Required fields on every destination');
const REQ = ['id','name','jp','city','area','tier','tags','time','cost','station','blurb','detail','why','tips','nearby','food'];
for (const d of D) {
  for (const k of REQ) {
    const v = d[k];
    if (v === undefined || v === null || v === '' || (Array.isArray(v) && !v.length)) {
      fail(`${d.id}: missing/empty "${k}"`);
    }
  }
  if (!['core','nearby','optional'].includes(d.tier)) fail(`${d.id}: bad tier "${d.tier}"`);
  if (!d.tips.length) warn(`${d.id}: no tips`);
  if (!d.nearby.length) warn(`${d.id}: no nearby entries`);
  if (d.blurb.length > 260) warn(`${d.id}: blurb is ${d.blurb.length} chars — will crowd the card`);
}
console.log('  ok    field sweep complete');

/* ── images and credits ─────────────────────────────────────────── */
head('Images');
const onDisk = readdirSync(here('./images')).filter((f) => f.endsWith('.jpg'));
const dist = existsSync(here('./dist-images'))
  ? readdirSync(here('./dist-images')).filter((f) => f.endsWith('.jpg')) : [];
for (const d of D) {
  if (!d.img) continue;
  const file = d.img.replace('images/', '');
  if (!onDisk.includes(file)) fail(`${d.id}: image file missing — ${d.img}`);
  if (dist.length && !dist.includes(file)) fail(`${d.id}: no optimised copy — dist-images/${file}`);
  const key = file.replace(/\.jpg$/, '');
  if (!CREDITS[key]) fail(`${d.id}: image has no credit entry`);
}
const withImg = D.filter((d) => d.img).length;
console.log(`  ok    ${withImg} destinations have images; ${D.length - withImg} use placeholders`);
const unusedImgs = onDisk.filter((f) => !D.some((d) => d.img === 'images/' + f));
if (unusedImgs.length) warn(`images on disk used by nothing: ${unusedImgs.join(', ')}`);

head('Credits');
for (const [k, c] of Object.entries(CREDITS)) {
  if (!c.page || !c.licence) fail(`credit "${k}" incomplete`);
  if (!/^(cc0|cc[- ]by|public domain|pd)/i.test(c.licence)) fail(`credit "${k}" licence not creditable: ${c.licence}`);
  if (!c.author || c.author === 'Unknown') warn(`credit "${k}" has no named author`);
}
console.log('  ok    licence sweep complete');

/* ── itinerary shape ────────────────────────────────────────────── */
head('Itinerary');
if (IT.length !== 12) fail(`expected 12 days, found ${IT.length}`);
IT.forEach((d, i) => {
  if (d.day !== i + 1) fail(`day out of sequence at index ${i}: ${d.day}`);
  for (const k of ['city','title','jp','theme','blocks','food']) if (!d[k]) fail(`day ${d.day}: missing "${k}"`);
  if (!d.blocks.length) fail(`day ${d.day}: no blocks`);
  d.blocks.forEach((b) => { if (!b.when || !b.text) fail(`day ${d.day}: malformed block`); });
});
const nights = { Tokyo: 0, Hakone: 0, Kyoto: 0 };
IT.forEach((d) => { if (nights[d.city] !== undefined) nights[d.city]++; });
console.log(`  info  days by base: ${JSON.stringify(nights)} (+ Uji day trip, + departure)`);
const lodgingNights = LODGING.reduce((s, l) => s + l.nights, 0);
if (lodgingNights !== 11) fail(`lodging totals ${lodgingNights} nights; a 12-day trip needs 11`);
else console.log('  ok    11 nights of lodging for 12 days');

/* ── food + card ────────────────────────────────────────────────── */
head('Allergens');
{
  // The app is only useful to a stranger if no page assumes a diet. These
  // checks are the difference between "configurable" and "configured for
  // somebody else".
  const LAWS = ['mandatory', 'mandatory-partial', 'recommended', 'partial', 'none'];
  let ok = 0;
  for (const [id, x] of Object.entries(ALLERGENS ?? {})) {
    for (const k of ['name', 'jp', 'romaji', 'law', 'lawNote', 'lead', 'card', 'cardJp'])
      if (!x[k]) fail(`allergen ${id}: missing ${k}`);
    if (!LAWS.includes(x.law)) fail(`allergen ${id}: unknown law status "${x.law}"`);
    if (!x.hidden?.length) fail(`allergen ${id}: no hidden sources`);
    if (!x.order?.length) fail(`allergen ${id}: nothing to order`);
    if (!x.ask?.length) fail(`allergen ${id}: no questions`);
    if (!x.formats?.length) fail(`allergen ${id}: no format guidance`);
    for (const f of x.formats ?? []) {
      if (!FORMATS[f.id]) fail(`allergen ${id}: format "${f.id}" is not in FORMATS`);
      if (!['easy', 'ok', 'harder'].includes(f.tone)) fail(`allergen ${id}/${f.id}: bad tone`);
      if (!f.why) fail(`allergen ${id}/${f.id}: no reason given`);
    }
    // The Japanese paragraph must actually be Japanese, or the card is useless.
    if (!/[\u3040-\u30ff\u4e00-\u9fff]/.test(x.cardJp)) fail(`allergen ${id}: cardJp has no Japanese in it`);
    ok++;
  }
  for (const d of DEFAULT_ALLERGENS ?? [])
    if (!ALLERGENS?.[d]) fail(`DEFAULT_ALLERGENS names "${d}", which is not an allergen`);
  console.log(`  ok    ${ok} allergens, each with a labelling status, hiding places, formats and a bilingual card`);
}

head('No baked-in diet');
{
  // The old build hard-coded one traveller's restrictions into every page.
  // This is the check that keeps them out. Two exemptions, both deliberate:
  // shojin and vegan cooking really are soy-and-sesame built, which is a fact
  // about the cuisine; and one restaurant has a dish NAMED after a fruit it
  // does not contain, which is worth warning about precisely because of that.
  const files = ['data-plan.js', 'data-eating.js', 'data-plans.js', 'data-alternatives.js', 'data-logistics.js',
    'data-destinations.js', 'data-destinations-2.js', 'data-destinations-3.js',
    'data-destinations-4.js', 'data-destinations-5.js', 'index.html'];
  const banned = [/\bmy wife\b/i, /\bshe carries\b/i, /\bEpiPen\b/, /\bIBS\b/,
    /honeymoon/i, /joshescusa/i, /\bChantal\b/i, /Level 1 (?:screens|exclusion)/i];
  const allowSoy = /sh[oō]jin|vegan|Buddhist vegetarian|yud[oō]fu|soy sauce contains wheat|soy allergy|\bdaizu\b|soy and sesame|soy-and-sesame|recommended list|mandatory eight|The recommended twenty/i;
  let scanned = 0, hits = 0;
  for (const f of files) {
    const text = readFileSync(here('./' + f), 'utf8');
    scanned++;
    for (const re of banned) {
      const m = re.exec(text);
      if (m) { fail(`${f} still contains "${m[0]}" — personal or old-diet content`); hits++; }
    }
    // Line-level check for the old allergens outside their allowed contexts.
    text.split('\n').forEach((line, n) => {
      if (!/\bmango\b/i.test(line)) return;
      if (/mango tan|マンゴータン|ALLERGENS|Mango & tropical|mangō|マンゴー|neither list|recommended list|unlisted/i.test(line)) return;
      fail(`${f}:${n + 1} mentions mango outside the allergen library`);
      hits++;
    });
    text.split('\n').forEach((line, n) => {
      if (!/\bsoy\b/i.test(line)) return;
      if (allowSoy.test(line) || /ALLERGENS|soy: \{|id: 'soy'/.test(line)) return;
      fail(`${f}:${n + 1} mentions soy outside the allergen library or a cuisine fact`);
      hits++;
    });
  }
  if (!hits) console.log(`  ok    ${scanned} content files carry no personal data and no baked-in diet`);
}

head('Budget');
{
  // The table's whole point is that it scales, so the checks scale with it:
  // every row must declare what it scales with and which currency it is in,
  // or the party stepper and the rate box quietly produce nonsense.
  const CUR = ['usd', 'jpy'], PER = ['person', 'room', 'trip'];
  const CATS = new Set();
  for (const r of BUDGET.rows) {
    for (const k of ['k', 'per', 'cur', 'cat', 'note']) if (!r[k]) fail(`budget row "${r.k || '?'}" missing ${k}`);
    if (!CUR.includes(r.cur)) fail(`budget row "${r.k}" has currency "${r.cur}"`);
    if (!PER.includes(r.per)) fail(`budget row "${r.k}" scales by "${r.per}"`);
    if (!(r.lo <= r.mid && r.mid <= r.hi)) fail(`budget row "${r.k}" is not ordered lo <= mid <= hi`);
    CATS.add(r.cat);
  }
  if (!BUDGET.rate || !BUDGET.party) fail('budget is missing its default rate or party size');
  for (const st of BUDGET.styles) for (const k of ['id', 'name', 'jp', 'blurb']) if (!st[k]) fail(`style "${st.id||'?'}" missing ${k}`);
  const ids = BUDGET.styles.map((s) => s.id).sort().join(',');
  if (ids !== 'hi,lo,mid') fail(`styles must be lo/mid/hi, got ${ids}`);

  // Totals at the defaults, so a bad figure shows up as an implausible trip
  // rather than as a number nobody reads.
  const total = (lv, party, rate) => BUDGET.rows.reduce((s, r) => {
    const m = r.per === 'person' ? party : r.per === 'room' ? Math.ceil(party / 2) : 1;
    const raw = r[lv] * m;
    return s + (r.cur === 'jpy' ? raw / rate : raw);
  }, 0);
  const [P, R] = [BUDGET.party, BUDGET.rate];
  const t = { lo: total('lo', P, R), mid: total('mid', P, R), hi: total('hi', P, R) };
  console.log(`  info  ${P} travellers at ¥${R}: lean $${Math.round(t.lo)} / middle $${Math.round(t.mid)} / comfortable $${Math.round(t.hi)}`);
  if (t.lo < 2000 || t.hi > 30000) fail(`totals are implausible for a 12-day trip: ${Math.round(t.lo)}-${Math.round(t.hi)}`);
  if (!(t.lo < t.mid && t.mid < t.hi)) fail('the three styles do not increase in order');
  // A single traveller must not be charged for half a room.
  const solo = total('mid', 1, R);
  if (solo >= t.mid) fail('a solo trip costs at least as much as a trip for two');
  console.log(`  ok    13 rows across ${CATS.size} categories, scaling by party and rate`);

  // Lodging lines and lodging stays have to stay in step, or the budget
  // silently drops a city when the itinerary changes.
  const lodgeRows = BUDGET.rows.filter((r) => r.cat === 'Lodging');
  if (lodgeRows.length !== LODGING.length) fail(`budget has ${lodgeRows.length} lodging lines for ${LODGING.length} stays`);
  for (const l of LODGING) if (!lodgeRows.some((r) => r.k.startsWith(l.city))) fail(`no budget line for the ${l.city} stay`);
  for (const r of lodgeRows) {
    const city = LODGING.find((l) => r.k.startsWith(l.city));
    if (city && !r.k.includes(`${city.nights} nights`)) fail(`"${r.k}" disagrees with the ${city.nights}-night ${city.city} stay`);
  }
  console.log(`  ok    every lodging line matches a stay and its night count`);
}

head('Price reference');
{
  let items = 0;
  for (const g of COSTS) {
    for (const k of ['group', 'jp', 'tone', 'items']) if (!g[k]) fail(`cost group "${g.group||'?'}" missing ${k}`);
    for (const it of g.items) {
      items++;
      for (const k of ['what', 'yen', 'note']) if (!it[k]) fail(`"${it.what||'?'}" missing ${k}`);
      // Yen figures are printed after a literal ¥, so a second one doubles it.
      if (/¥|\$/.test(it.yen)) fail(`"${it.what}" carries its own currency symbol`);
      if (!/\d/.test(it.yen)) fail(`"${it.what}" has no number in its price`);
    }
  }
  if (items < 30) fail(`only ${items} reference prices; the table needs to be worth opening`);
  for (const l of LEVERS) for (const k of ['t', 'd', 'tone']) if (!l[k]) fail(`lever "${l.t||'?'}" missing ${k}`);
  console.log(`  ok    ${items} prices in ${COSTS.length} groups, ${LEVERS.length} levers`);
}

head('Bookings');
if (!BOOKINGS.some((b) => b.critical)) fail('nothing marked critical in the booking order');
console.log(`  ok    ${BOOKINGS.length} steps, ${BOOKINGS.filter((b)=>b.critical).length} critical`);

head('Logistics');
for (const g of LOGISTICS) {
  for (const k of ['id','title','jp','lead','items']) if (!g[k]) fail(`logistics "${g.id||'?'}" missing ${k}`);
  g.items.forEach((i) => { if (!i.k || !i.v) fail(`logistics "${g.id}" has a malformed item`); });
}
const critical = LOGISTICS.filter((g) => g.critical).map((g) => g.id);
if (!critical.includes('meds')) fail('the medication section is not flagged critical');
console.log(`  ok    ${LOGISTICS.length} sections, ${LOGISTICS.reduce((s,g)=>s+g.items.length,0)} items, critical: ${critical.join(', ')}`);

head('Route map');
{
  const stops = ROUTEMAP.stops.filter((s) => s.id);
  const legs = ROUTEMAP.stops.filter((s) => s.leg);
  for (const s of stops) {
    for (const k of ['id','label','jp','sub','meta','day']) if (!s[k]) fail(`stop "${s.id||'?'}" missing ${k}`);
    if (!IT.some((d) => d.day === s.day)) fail(`stop "${s.id}" points at day ${s.day}, which is not in the itinerary`);
  }
  for (const l of legs) if (!l.leg || !l.time) fail('a leg is missing its label or time');
  const branches = stops.flatMap((s) => s.branches || []);
  for (const b of branches) {
    if (!IT.some((d) => d.day === b.day)) fail(`branch "${b.id}" points at day ${b.day}, which is not in the itinerary`);
    if (!b.time) fail(`branch "${b.id}" has no journey time`);
  }
  const mapBases = stops.filter((s) => s.kind === 'base').map((s) => s.label);
  const stayCities = LODGING.map((l) => l.city);
  for (const b of mapBases) if (!stayCities.includes(b)) fail(`map shows a base with no lodging entry: ${b}`);
  for (const c of stayCities) if (!mapBases.includes(c)) fail(`lodging city missing from the map: ${c}`);
  console.log(`  ok    ${stops.length} stops, ${legs.length} connectors, ${branches.length} branches, all day links valid`);
}

head('Lodging');
{
  // Named properties are search links, never booking links: a booking URL
  // rots into a 404 or, worse, into somebody else's hotel.
  const TIERS = ['Lean', 'Middle', 'Splurge'];
  let picks = 0;
  for (const t of STAY_TYPES) {
    for (const k of ['name', 'jp', 'yen', 'what', 'who', 'watch', 'tone']) if (!t[k]) fail(`stay type "${t.name||'?'}" missing ${k}`);
  }
  // The per-person / per-room distinction is the single most expensive thing
  // to get wrong here, so every type has to state its unit.
  for (const t of STAY_TYPES) if (!/\/\s*(room|person|house)/.test(t.yen)) fail(`stay type "${t.name}" does not say what its price is per`);
  for (const l of LODGING) {
    for (const k of ['city', 'jp', 'nights', 'where', 'why', 'avoid', 'tiers']) if (!l[k]) fail(`${l.city||'?'} missing ${k}`);
    if (l.tiers.map((t) => t.tier).join(',') !== TIERS.join(',')) fail(`${l.city} does not carry all three tiers in order`);
    for (const t of l.tiers) {
      if (!t.yen || !t.fit) fail(`${l.city}/${t.tier} missing price or fit`);
      if (!['practical', 'best', 'splurge'].includes(t.fit)) fail(`${l.city}/${t.tier} bad fit "${t.fit}"`);
      if (!t.picks?.length) fail(`${l.city}/${t.tier} names no properties`);
      for (const p of t.picks) {
        picks++;
        for (const k of ['name', 'note', 'find']) if (!p[k]) fail(`${l.city}/${p.name||'?'} missing ${k}`);
        if (!/^https:\/\/www\.google\.com\/maps\/search\//.test(p.find)) fail(`${l.city}/${p.name} find link is not a maps search`);
        // Compare decoded, because encoders disagree about apostrophes.
        if (!decodeURIComponent(p.find).includes(p.name)) fail(`${l.city}/${p.name} find link does not search for its own name`);
      }
    }
    if (!l.tiers.some((t) => t.fit === 'best')) fail(`${l.city} has no recommended tier`);
  }
  for (const n of STAY_NOTES) if (!n.k || !n.v) fail('a lodging note is malformed');
  console.log(`  ok    ${STAY_TYPES.length} stay types, ${picks} properties across ${LODGING.length} cities at 3 tiers, ${STAY_NOTES.length} notes`);
}

head('Prep');
{
  let tasks = 0;
  for (const c of COUNTDOWN) {
    for (const k of ['when', 'jp', 'tone', 'lead', 'items']) if (!c[k]) fail(`countdown "${c.when||'?'}" missing ${k}`);
    if (!c.items.length) fail(`countdown "${c.when}" has no tasks`);
    tasks += c.items.length;
  }
  if (!COUNTDOWN.some((c) => c.critical)) fail('nothing in the countdown is flagged critical');
  // Checklist state is keyed by position, so a reordered countdown would tick
  // the wrong boxes for anyone who has already used it. Keys must stay unique.
  const keys = new Set();
  COUNTDOWN.forEach((c, i) => c.items.forEach((_, j) => keys.add(`d${i}-${j}`)));
  if (keys.size !== tasks) fail('countdown checklist keys collide');
  let packed = 0;
  for (const p of PACKING) {
    for (const k of ['group', 'jp', 'tone', 'items']) if (!p[k]) fail(`packing group "${p.group||'?'}" missing ${k}`);
    for (const it of p.items) { packed++; if (!it.t || !it.d) fail(`packing item in "${p.group}" is malformed`); }
  }
  console.log(`  ok    ${tasks} countdown tasks in ${COUNTDOWN.length} stages, ${packed} packing items in ${PACKING.length} groups`);
}

head('Eating out');
{
  for (const k of ['model','statuses','screen','cuisines','harder','places','excluded','inquiry','accept','reject','pattern','asOf']) {
    if (!EATING[k]) fail(`EATING.${k} missing`);
  }
  // The two-question model is the whole point: one screens the venue, the other
  // picks the dish. If that inverts the app gets over-restrictive for everyone,
  // whatever they avoid — and it must stay allergen-neutral so it can.
  if (EATING.model.levels.length !== 2) fail('the model must have exactly two questions');
  const [l1, l2] = EATING.model.levels;
  if (!/venue|restaurant/i.test(l1.title)) fail('question 1 must be the one that screens the venue');
  if (!/dish|plate/i.test(l2.title)) fail('question 2 must be framed at the dish level');
  if (!/only/i.test(l1.rule)) warn('question 1 rule does not stress that this is the only venue-level test');
  for (const l of [l1, l2])
    if (/\bmango\b|\bsoy\b|\bpeanut\b/i.test(l.lead + l.rule))
      fail(`the model names a specific allergen ("${l.title}") — it has to work for any of them`);

  const STATUS = EATING.statuses.map((x) => x.id);
  if (EATING.statuses.some((x) => /^(approved|rejected|safe)$/i.test(x.label))) {
    fail('the status vocabulary has slipped back to approved/rejected/safe');
  }
  for (const p of EATING.places) {
    for (const k of ['id','name','jp','venue','city','travel','cuisine','status','rank','use','why','order','ask','allergen']) {
      if (!p[k]) fail(`place "${p.name || '?'}" missing ${k}`);
    }
    if (!STATUS.includes(p.status)) fail(`place "${p.name}" bad status "${p.status}"`);
    if (p.url && !/^https:\/\//.test(p.url)) fail(`place "${p.name}" url is not https`);
    if (p.day && !IT.some((d) => d.day === p.day)) fail(`place "${p.name}" points at day ${p.day}, not in the itinerary`);
    if (!Array.isArray(p.order) || !p.order.length) fail(`place "${p.name}" names no dish to order`);
  }
  const ids = EATING.places.map((p) => p.id);
  const dupe = ids.filter((x, i) => ids.indexOf(x) !== i);
  if (dupe.length) fail(`duplicate venue ids: ${dupe.join(', ')}`);

  // One booked restaurant per day, and the day must actually name it.
  const days = EATING.places.filter((p) => p.day).map((p) => p.day);
  const dupeDay = days.filter((d, i) => days.indexOf(d) !== i);
  if (dupeDay.length) fail(`more than one restaurant booked on day(s): ${[...new Set(dupeDay)].join(', ')}`);
  for (const p of EATING.places.filter((x) => x.day)) {
    const txt = IT.find((d) => d.day === p.day).blocks.map((b) => b.text).join(' ');
    const key = p.name.split(/[ ,\u2014]/)[0];
    if (!txt.includes(key)) fail(`day ${p.day} never mentions "${p.name}" but the venue claims it`);
  }

  // Japanese formats should outrank the Western fallbacks now.
  const JP = /yakiniku|sushi|yakitori|teppan|shabu|tempura|shioyaki|tonkatsu|izakaya|grill/i;
  const jpPlaces = EATING.places.filter((p) => JP.test(p.cuisine));
  if (jpPlaces.length < EATING.places.length / 2) {
    fail(`only ${jpPlaces.length} of ${EATING.places.length} venues are Japanese formats — the list has drifted back to hotel Western`);
  }
  const strong = EATING.places.filter((p) => p.status === 'strong');
  for (const city of [...new Set(EATING.places.map((p) => p.city))]) {
    if (!strong.some((p) => p.city === city)) warn(`${city} has no strong-options venue`);
  }

  // Cuisine guidance has to say what to order and what to ask.
  for (const c of EATING.cuisines) {
    for (const k of ['id','name','jp','rank','why','order','ask','avoid']) if (!c[k]) fail(`cuisine "${c.name || '?'}" missing ${k}`);
  }
  for (const h of EATING.harder) if (!h.name || !h.why) fail('a harder-cuisine entry is incomplete');
  // These must be ranked lower, never silently removed.
  for (const must of ['Ramen', 'Kaiseki', 'Sukiyaki']) {
    if (!EATING.harder.some((h) => h.name.includes(must))) fail(`"${must}" vanished from the harder list`);
  }
  if (EATING.excluded.some((e) => /ramen|sushi|izakaya|yakitori|yakiniku/i.test(e.name))) {
    fail('a whole Japanese cuisine has been excluded at venue level again');
  }
  if (EATING.screen.length !== 4) fail(`expected 4 screening questions, found ${EATING.screen.length}`);

  const all = JSON.stringify(EATING).toLowerCase();
  for (const claim of ['safe restaurant', 'guaranteed safe', 'certified safe', 'confirmed safe']) {
    if (all.includes(claim)) fail(`EATING contains an unsafe claim: "${claim}"`);
  }
  console.log(`  ok    ${EATING.places.length} venues (${jpPlaces.length} Japanese formats, ${strong.length} strong), ` +
    `${EATING.cuisines.length} cuisines mapped, ${EATING.harder.length} ranked lower, ${EATING.excluded.length} excluded, ` +
    `${EATING.places.filter(p=>p.day).length} booked into days`);
}

head('Groceries');
{
  const cities = GROCERY.map((g) => g.city);
  for (const c of ['Tokyo', 'Hakone', 'Kyoto']) if (!cities.includes(c)) fail(`no grocery entry for ${c}`);
  for (const g of GROCERY) {
    if (!g.primary?.length) fail(`${g.city} has no primary shop`);
    for (const x of [...(g.primary || []), ...(g.emergency || [])]) {
      if (!x.name || !x.note) fail(`${g.city} has a malformed shop entry`);
    }
  }
  if (!GROCERY_RULES.buy?.length || !GROCERY_RULES.avoid?.length) fail('grocery buy/avoid rules missing');
  console.log(`  ok    ${GROCERY.reduce((n,g)=>n+g.primary.length+(g.emergency||[]).length,0)} shops across ${GROCERY.length} cities, ` +
    `${GROCERY_RULES.buy.length} buy / ${GROCERY_RULES.avoid.length} avoid rules`);
}

head('Itinerary options');
{
  // If you can swipe to a place, the day should own it. An option whose
  // destination is not in that day's `dests` means the library and the
  // itinerary disagree about what the day contains — which is exactly the gap
  // that let 25 museums sit in the library reachable from nowhere.
  let bad = 0;
  for (const [key, opts] of Object.entries(ALTS ?? {})) {
    const day = IT.find((d) => String(d.day) === key.split('|')[0]);
    if (!day) { fail(`alternatives keyed to a day that does not exist: ${key}`); continue; }
    if (!day.blocks.some((b) => `${day.day}|${b.when}` === key))
      fail(`alternatives keyed to a block that does not exist: ${key}`);
    for (const o of opts) {
      if (!o.fits) fail(`${key} / "${o.label}" has no "fits" line`);
      if (!o.dest) continue;
      if (!D.some((d) => d.id === o.dest)) { fail(`${key} / "${o.label}" points at unknown ${o.dest}`); bad++; continue; }
      if (!day.dests.includes(o.dest)) { fail(`${key} / "${o.label}" offers ${o.dest}, which day ${day.day} does not list`); bad++; }
    }
  }
  const opts = Object.values(ALTS ?? {}).flat();
  if (!bad) console.log(`  ok    ${opts.length} options across ${Object.keys(ALTS).length} blocks; ` +
    `${opts.filter((o) => o.dest).length} open a destination, all owned by their day`);
}

head('Day plans');
{
  // The engine, duplicated here on purpose: the audit must be able to fail a
  // build without loading the page, so it computes the same minutes the app
  // shows rather than trusting a number written into the data.
  const mins = (a, b) => {
    const ga = GEO[a], gb = GEO[b];
    if (!ga || !gb) return null;
    const R = 6371, rad = (x) => (x * Math.PI) / 180;
    const dLat = rad(gb.lat - ga.lat), dLng = rad(gb.lng - ga.lng);
    const h = Math.sin(dLat / 2) ** 2 +
      Math.cos(rad(ga.lat)) * Math.cos(rad(gb.lat)) * Math.sin(dLng / 2) ** 2;
    const km = R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
    const za = ZONE[a], zb = ZONE[b];
    if (za && zb && za === zb) return Math.max(3, Math.round(km * 13));
    const leg = za && zb ? LEGS[[za, zb].sort().join('|')] : undefined;
    if (leg != null) return leg;
    if (km <= 1) return Math.max(3, Math.round(km * 13));
    return Math.round((10 + km * 3) / 5) * 5;
  };
  const nearest = (id, stops) =>
    stops.reduce((best, s) => {
      if (s === id) return 0;
      const m = mins(id, s);
      return m == null ? best : best == null ? m : Math.min(best, m);
    }, null);

  let plans = 0, far = 0;
  for (const d of IT) {
    const P = PLANS[d.day];
    if (!P) { fail(`day ${d.day} has no plan entry`); continue; }
    if (P.single) { if (typeof P.single !== 'string') fail(`day ${d.day}: single-plan note is not text`); continue; }
    for (const key of ['a', 'b']) {
      const pl = P[key];
      if (!pl) { fail(`day ${d.day} plan ${key} missing`); continue; }
      plans++;
      if (!pl.title || !pl.thesis) fail(`day ${d.day} plan ${key}: no title or thesis`);
      if (!pl.stops?.length) { fail(`day ${d.day} plan ${key}: no stops`); continue; }
      for (const id of pl.stops) {
        if (!D.some((x) => x.id === id)) fail(`day ${d.day} plan ${key}: unknown stop ${id}`);
        else if (!GEO[id]) fail(`day ${d.day} plan ${key}: ${id} has no coordinate`);
      }
      // A plan has to hang together: every stop within FAR_MINUTES of another
      // stop in the same plan. This is the check the whole feature rests on —
      // if a plan cannot pass it, offering it as "carefully picked" is a lie.
      if (pl.stops.length > 1) {
        for (const id of pl.stops) {
          const m = nearest(id, pl.stops.filter((x) => x !== id));
          if (m != null && m > FAR_MINUTES)
            fail(`day ${d.day} plan ${key}: ${id} is ${m} min from anything else in the plan`);
        }
      }
      // Plan B's blocks and its own alternatives.
      if (key === 'b') {
        if (!pl.blocks?.length) fail(`day ${d.day} plan b: no blocks`);
        for (const b of pl.blocks || []) if (!b.when || !b.text) fail(`day ${d.day} plan b: malformed block`);
        for (const [when, opts] of Object.entries(pl.alts || {})) {
          if (!(pl.blocks || []).some((b) => b.when === when))
            fail(`day ${d.day} plan b: alternatives for a block "${when}" that does not exist`);
          for (const o of opts) {
            if (!o.label || !o.text || !o.fits) fail(`day ${d.day} plan b / "${o.label}": incomplete`);
            if (o.dest && !D.some((x) => x.id === o.dest))
              fail(`day ${d.day} plan b / "${o.label}": unknown ${o.dest}`);
          }
        }
      }
      // Options that leave the plan's area are allowed, but the text has to say
      // so — the app prints a computed travel note, and a written ⚠️ in `fits`
      // is how the data itself owns the trade-off.
      const opts = key === 'b'
        ? Object.values(pl.alts || {}).flat()
        : d.blocks.flatMap((b) => ALTS[`${d.day}|${b.when}`] || []);
      for (const o of opts) {
        if (!o.dest || !GEO[o.dest]) continue;
        const m = nearest(o.dest, pl.stops);
        if (m != null && m > FAR_MINUTES) {
          far++;
          if (!/⚠️/.test(o.fits))
            fail(`day ${d.day} plan ${key} / "${o.label}" is ${m} min from the plan and its "fits" line does not warn`);
        }
      }
    }
  }
  console.log(`  ok    ${plans} plans across ${IT.length} days, every stop within ${FAR_MINUTES} min of another; ` +
    `${far} option(s) leave their plan's area and say so`);
}

head('Plan assignment');
{
  // A plan is portable inside its base and nowhere else, so the base map has to
  // partition the trip exactly: every day in one base, no day in two.
  const seen = new Map();
  for (const b of BASES ?? []) {
    if (!b.base || !b.days?.length) { fail('malformed base entry'); continue; }
    for (const day of b.days) {
      if (!IT.some((d) => d.day === day)) fail(`base ${b.base} lists day ${day}, which is not in the itinerary`);
      if (seen.has(day)) fail(`day ${day} is in two bases: ${seen.get(day)} and ${b.base}`);
      seen.set(day, b.base);
    }
  }
  for (const d of IT) if (!seen.has(d.day)) fail(`day ${d.day} belongs to no base, so its plan cannot be swapped`);

  // The city a day is labelled with is where the day happens; the base is where
  // you sleep. They differ on the Uji day, deliberately — that check would be
  // wrong, so what is checked instead is that the base actually has lodging.
  const lodgingCities = new Set(LODGING.map((l) => l.city));
  for (const b of BASES ?? [])
    if (b.base !== 'Home' && !lodgingCities.has(b.base))
      fail(`base ${b.base} has no lodging entry`);

  let swappable = 0, shapes = 0;
  for (const b of BASES ?? []) {
    const pool = b.days.filter((day) => PLANS[day] && !PLANS[day].single);
    shapes += pool.length * 2;
    swappable += pool.length;
    // A base whose only day has plans still works, but the picker is pointless.
    if (pool.length === 1)
      warn(`base ${b.base} has only one swappable day, so its picker offers just that day's two shapes`);
  }
  // A travel day must be single-shape — no picker on it, and nothing of its
  // own offered to anybody else. Most of it is already spent on a train.
  for (const day of TRAVEL_DAYS ?? []) {
    if (!IT.some((d) => d.day === day)) fail(`TRAVEL_DAYS names day ${day}, which does not exist`);
    if (!PLANS[day]?.single) fail(`day ${day} is a travel day but still offers a plan picker`);
  }
  for (const [day, P] of Object.entries(PLANS))
    if (P.single && !(TRAVEL_DAYS ?? []).includes(+day))
      fail(`day ${day} has one shape but is not listed as a travel day — say which it is`);
  console.log(`  ok    ${shapes} shapes across ${swappable} swappable days; ` +
    `${(TRAVEL_DAYS ?? []).length} travel days excluded from every pool`);
}

head('Map links');
{
  // Every destination needs a coordinate, and every coordinate has to sit in
  // the country and the city it claims. A geocoder returning the right name in
  // the wrong place is the failure this catches — it has happened here before,
  // with a Kyoto temple resolving to a park in Sakai.
  const BOX = {
    Tokyo: [35.5, 139.4, 35.85, 139.95], Hakone: [35.15, 138.95, 35.32, 139.15],
    Kyoto: [34.85, 135.55, 35.25, 135.9], Uji: [34.83, 135.7, 34.95, 135.9],
    Osaka: [34.55, 135.35, 34.78, 135.65], Nara: [34.63, 135.75, 34.75, 135.9],
  };
  let ok = 0;
  for (const d of D) {
    const g = GEO?.[d.id];
    if (!g) { fail(`${d.id}: no coordinate, so no map link`); continue; }
    if (!g.q) { fail(`${d.id}: no Maps search string`); continue; }
    const b = BOX[d.city];
    if (b && (g.lat < b[0] || g.lat > b[2] || g.lng < b[1] || g.lng > b[3])) {
      fail(`${d.id}: ${g.lat},${g.lng} is outside ${d.city}`);
      continue;
    }
    ok++;
  }
  // Two destinations sharing a coordinate is fine — three restaurants live in
  // the Tokyo Station Hotel — but a coordinate shared by places in different
  // cities means a stale or copied entry.
  const byPoint = {};
  for (const d of D) {
    const g = GEO?.[d.id]; if (!g) continue;
    (byPoint[`${g.lat},${g.lng}`] ||= []).push(d);
  }
  for (const [pt, list] of Object.entries(byPoint)) {
    if (new Set(list.map((d) => d.city)).size > 1)
      fail(`${pt} is shared across cities: ${list.map((d) => d.id).join(', ')}`);
  }
  console.log(`  ok    ${ok}/${D.length} destinations map to a verified point inside their city`);
}

head('Review links');
{
  // A review URL is only trustworthy if it still carries the feature id of the
  // place it was harvested from and the flag that opens the Reviews tab. Both
  // are checked here, because a hand-edit to this file would otherwise produce
  // a link that silently opens the wrong panel — or the wrong place.
  let ok = 0;
  const seen = new Map();
  for (const [id, r] of Object.entries(REVIEWS ?? {})) {
    const d = D.find((x) => x.id === id);
    if (!d) { fail(`review entry "${id}" matches no destination`); continue; }
    if (!r.url || !r.name) { fail(`${id}: review entry incomplete`); continue; }
    if (!/!9m1!1b1$/.test(r.url)) fail(`${id}: review URL does not end in the reviews flag`);
    const ftid = (r.url.match(/!1s(0x[0-9a-f]+:0x[0-9a-f]+)/) || [])[1];
    if (!ftid) { fail(`${id}: review URL carries no place feature id`); continue; }
    if (seen.has(ftid) && seen.get(ftid) !== id)
      fail(`${id} and ${seen.get(ftid)} point at the same Google listing`);
    seen.set(ftid, id);
    if (!(r.rating > 0 && r.rating <= 5)) fail(`${id}: rating ${r.rating} out of range`);
    if (!(r.count > 0)) fail(`${id}: no review count`);
    ok++;
  }
  const without = D.filter((d) => !REVIEWS?.[d.id]).map((d) => d.id);
  console.log(`  ok    ${ok} review pages verified; ${without.length} without one (${without.join(', ')})`);
}

head('Element ids');
{
  /*
   * A duplicated id is silent and total. The page fills most sections by bare
   * global — `principles.innerHTML = ...` — and when two elements share an id
   * that global resolves to an HTMLCollection, so the assignment lands on
   * nothing and the tab opens with a heading over an empty box. That is
   * exactly how the overview and the food tab both lost three sections.
   */
  const ids = [...pageHtml.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const seen = new Set(), dupes = new Set();
  for (const id of ids) (seen.has(id) ? dupes : seen).add(id);
  if (dupes.size) fail(`duplicate element ids: ${[...dupes].join(', ')}`);

  // Every id the script writes to must exist exactly once in the markup.
  const written = new Set([...pageHtml.matchAll(/^\s*([A-Za-z][A-Za-z0-9_]*)\.innerHTML\s*=/gm)].map((m) => m[1]));
  const known = new Set(['document', 'body', 'el', 'host', 'tr', 'sw']);
  const missing = [...written].filter((n) => !known.has(n) && !seen.has(n));
  if (missing.length) fail(`script writes innerHTML on ids not in the markup: ${missing.join(', ')}`);
  if (!dupes.size && !missing.length) console.log(`  ok    ${seen.size} unique element ids, ${written.size} written by the script, none duplicated`);
}

head('Scroll safety');
{
  // A CSS-only regression that no data check can see. The itinerary carries 25
  // horizontally-scrolling snap containers; on a phone a vertical drag that
  // starts inside one has to be handed back to the page, and these two lines
  // are what decide whether it is.
  const html = readFileSync(here('./index.html'), 'utf8');
  // Strip comments first: the rule that was removed is named in a comment
  // explaining why, and a naive match would fail the build on its own epitaph.
  const raw = html.slice(html.indexOf('.track{'), html.indexOf('.track::-webkit-scrollbar'));
  const track = raw.replace(/\/\*[\s\S]*?\*\//g, '');
  // Inverted, because the original version of this check enforced the bug.
  // `touch-action:pan-x` FORBIDS vertical panning for a touch starting on the
  // element — it does not delegate it to the page. On a horizontal carousel
  // inside a vertically scrolling page, any touch-action that omits pan-y
  // means the page cannot be scrolled from a card at all.
  const ta = /touch-action:\s*([a-z\- ]+)/.exec(track)?.[1]?.trim();
  if (ta && ta !== 'auto' && ta !== 'manipulation' && !/\bpan-y\b/.test(ta))
    fail(`.track sets \`touch-action:${ta}\`, which forbids vertical panning — a finger on a card will not scroll the page`);
  if (/-webkit-overflow-scrolling/.test(track))
    fail('.track sets `-webkit-overflow-scrolling` — a no-op since iOS 13 that promotes every track to its own scroll layer');
  if (!/height:var\(--tk/.test(track))
    fail('.track is not height-managed — a flex row sizes to its tallest option, so every block reserves the height of the longest');
  if (!/if\(!tr\.clientWidth\)return;/.test(html))
    fail('fitTrack does not bail on a zero-width track — it will pin blocks to a measurement taken before layout');

  // The rule that actually broke scrolling on a phone. `overflow:hidden` makes
  // a scroll container; `clip` does not. Anything on this page that only wants
  // to clip a rounded corner must use `clip`, or a touch that lands on a day
  // card starts inside a nested scroller it then has to escape.
  const css = html.slice(html.indexOf('<style>'), html.indexOf('</style>'))
    .replace(/\/\*[\s\S]*?\*\//g, '');
  const allowedScrollers = ['.nav-in', '.track', '.dlg-body'];
  // `overflow-y:hidden` on a horizontal carousel is correct and deliberate: it
  // is what stops the track panning vertically under a finger. Everywhere else,
  // hidden is a scroll container nobody asked for and `clip` is the right word.
  const hidden = [...css.matchAll(/([^{}]+)\{[^{}]*overflow(-x|-y)?:\s*hidden/g)]
    .map((m) => ({ sel: m[1].trim().split('\n').pop().trim(), axis: m[2] || '' }))
    .filter((h) => !(h.axis === '-y' && allowedScrollers.some((a) => h.sel.includes(a))));
  if (hidden.length)
    fail(`overflow${hidden[0].axis}:hidden creates a scroll container — use clip: ${hidden.map((h) => h.sel).join(' , ')}`);
  const scrollers = [...css.matchAll(/([^{}]+)\{[^{}]*overflow(?:-x|-y)?:\s*(?:auto|scroll)/g)]
    .map((m) => m[1].trim().split('\n').pop().trim());
  for (const sel of scrollers)
    if (!allowedScrollers.some((a) => sel.includes(a)))
      fail(`${sel} is a scroll container that is not on the allow-list — it will compete with the page for touch gestures`);
  console.log(`  ok    nothing blocks vertical panning; ${scrollers.length} scrollers on the whole page, all intentional`);
}

console.log(`\n${fails} failures, ${warns} warnings`);
process.exit(fails ? 1 : 0);
