/* ══════════════════════════════════════════════════════════════════════
   ART DIRECTION
   ─────────────────────────────────────────────────────────────────────
   The app had ninety-one photographs and showed them on exactly one tab
   out of nine. Everything else was grey body text at one size, which is
   what "wall of text" actually means: no second visual layer for the eye
   to rest on between paragraphs.

   Two layers fix it, and the split between them is a rule about honesty.

   PHOTOGRAPHS go where a real photograph exists of the actual thing. The
   library is already inlined as data URIs inside the destination data, so
   reusing an image on another tab costs literally zero extra bytes.

   MOTIFS go everywhere else. There is no honest photograph of "a business
   hotel" or "two weeks before you fly", and borrowing a temple to
   illustrate a packing list is the kind of decoration that makes an app
   feel padded. So those sections get traditional Japanese pattern work
   instead — seigaiha, asanoha, shippo, kikko, ichimatsu — drawn as SVG,
   tinted from the palette, and tiled behind the card header. It is
   generated rather than sourced, so it weighs nothing, scales to any
   screen, and belongs to the subject rather than to a stock library.
   ══════════════════════════════════════════════════════════════════ */

/**
 * Traditional patterns, as tiling SVG.
 *
 * Each returns a `data:` URI ready for `background-image`. The colour is
 * passed in rather than baked, because the same motif has to sit on a warm
 * paper ground in light mode and a near-black one in dark.
 */
window.MOTIF = (function () {
  const wrap = (w, h, body, color, op) =>
    'data:image/svg+xml,' + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">` +
      `<g fill="none" stroke="${color}" stroke-width="1.15" opacity="${op}" stroke-linecap="round">` +
      body + '</g></svg>');

  // 青海波 — overlapping wave crests. The oldest of them, and the one that
  // reads as water at any size.
  const seigaiha = (c, op) => {
    const w = 44, h = 22, R = [20, 14.5, 9, 3.5];
    const arc = (cx, cy, r) => `M${cx - r} ${cy}A${r} ${r} 0 0 1 ${cx + r} ${cy}`;
    let d = '';
    for (const cx of [-22, 0, 22, 44, 66]) for (const r of R) d += arc(cx, h, r);
    for (const cx of [-11, 11, 33, 55]) for (const r of R) d += arc(cx, h / 2, r);
    return wrap(w, h, `<path d="${d}"/>`, c, op);
  };

  // 麻の葉 — hemp leaf. A triangular lattice with the star spokes that make
  // it read as leaves rather than as graph paper.
  const asanoha = (c, op) => {
    const w = 40, h = 34.64, hw = w / 2, hh = h / 2;
    let d = `M0 0L${w} 0M0 ${h}L${w} ${h}M0 0L0 ${h}M${w} 0L${w} ${h}`;
    d += `M0 0L${hw} ${hh}M${w} 0L${hw} ${hh}M0 ${h}L${hw} ${hh}M${w} ${h}L${hw} ${hh}`;
    d += `M0 0L${w} ${h}M${w} 0L0 ${h}`;
    d += `M0 ${hh}L${w} ${hh}M${hw} 0L${hw} ${h}`;
    return wrap(w, h, `<path d="${d}"/>`, c, op);
  };

  // 七宝 — the seven treasures. Interlocking circles; quietly the most
  // decorative of the set, so it is used sparingly.
  const shippo = (c, op) => {
    const s = 30, r = s / 2;
    let d = '';
    for (const [cx, cy] of [[0, 0], [s, 0], [0, s], [s, s], [r, r]])
      d += `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${r * 2} 0a${r} ${r} 0 1 0 ${-r * 2} 0`;
    return wrap(s, s, `<path d="${d}"/>`, c, op);
  };

  // 亀甲 — tortoiseshell hexagons. Structural, architectural, good behind
  // anything about how a thing is built.
  const kikko = (c, op) => {
    const w = 30, h = 17.32, q = h / 2;
    const hexes = ['M7.5 0L0 4.33L0 12.99L7.5 17.32L15 12.99L15 4.33Z',
                   'M22.5 0L15 4.33L15 12.99L22.5 17.32L30 12.99L30 4.33Z'];
    return wrap(w, h, `<path d="${hexes.join('')}"/>`, c, op);
  };

  // 市松 — the chequer that gave Tokyo 2020 its emblem. Flat blocks rather
  // than line work, so it needs fill rather than stroke.
  const ichimatsu = (c, op) => {
    const s = 24, h = s / 2;
    return 'data:image/svg+xml,' + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">` +
      `<g fill="${c}" opacity="${op}"><rect width="${h}" height="${h}"/>` +
      `<rect x="${h}" y="${h}" width="${h}" height="${h}"/></g></svg>`);
  };

  // 格子 — plain lattice. The quietest, for places where the pattern must
  // not compete with a number.
  const koshi = (c, op) => {
    const s = 18;
    return wrap(s, s, `<path d="M0 0L${s} 0M0 0L0 ${s}M0 ${s / 2}L${s} ${s / 2}M${s / 2} 0L${s / 2} ${s}"/>`, c, op);
  };

  const all = { seigaiha, asanoha, shippo, kikko, ichimatsu, koshi };
  return (name, color, opacity) => (all[name] || koshi)(color || '#000', opacity == null ? 1 : opacity);
})();

/**
 * One hero band per tab.
 *
 * `img` names a destination whose photograph already ships with the app, so
 * the band costs nothing. `motif` tints the band and reappears on that tab's
 * card headers, which is what makes each tab feel like a different room
 * rather than a different scroll position.
 */
window.HEROES = {
  overview:     { img: 'lake-ashi',     motif: 'seigaiha',  tone: 'ai',
                  eyebrow: 'The trip', title: 'Twelve days, three bases',
                  jp: '十二日間', line: 'Tokyo for the city, Hakone to stop moving, Kyoto for the evenings.' },
  itinerary:    { img: 'shirakawa',     motif: 'koshi',     tone: 'shu',
                  eyebrow: 'Day by day', title: 'Pick a shape, then bend it',
                  jp: '日程', line: 'Two full plans a day, and every swap priced in minutes.' },
  destinations: { img: 'kiyomizu-dera', motif: 'asanoha',   tone: 'kin',
                  eyebrow: 'Where to go', title: 'A hundred and six places',
                  jp: '行き先', line: 'Each one mapped, reviewed, and placed in a zone that says what it is near.' },
  food:         { img: 'eat-gora',      motif: 'shippo',    tone: 'matcha',
                  eyebrow: 'Eating safely', title: 'Point it at your own allergens',
                  jp: '食事', line: 'Japan labels eight allergens by law and exempts restaurants entirely.' },
  eating:       { img: 'nakamise',      motif: 'ichimatsu', tone: 'shu',
                  eyebrow: 'Eating out', title: 'Choose the format first',
                  jp: '外食', line: 'The shape of the meal decides more than the restaurant does.' },
  stay:         { img: 'gora',          motif: 'kikko',     tone: 'kin',
                  eyebrow: 'Sleeping', title: 'Sleep is a category problem',
                  jp: '宿', line: 'A ryokan is priced per person with dinner. A hotel is priced per room with none.' },
  logistics:    { img: 'tokyo-station', motif: 'koshi',     tone: 'ai',
                  eyebrow: 'Practicalities', title: 'What the plan assumes',
                  jp: '交通', line: 'Borders, trains, money, and what to do when something goes wrong.' },
  budget:       { img: 'ginza',         motif: 'shippo',    tone: 'matcha',
                  eyebrow: 'Money', title: 'Yen in, dollars out',
                  jp: '予算', line: 'Held in yen, converted at your rate, scaled to your party.' },
  prep:         { img: 'meiji-jingu',   motif: 'asanoha',   tone: 'ai',
                  eyebrow: 'Before you fly', title: 'The right task, the right month',
                  jp: '準備', line: 'A passport renewal at six weeks is routine. At six days it is a different trip.' },
};

/** A photograph for each lodging city, reusing what the app already ships. */
window.CITY_IMG = { Tokyo: 'nihonbashi', Hakone: 'hakone-yumoto', Kyoto: 'gion' };
