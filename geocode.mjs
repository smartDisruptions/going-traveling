/**
 * Resolve every destination to a coordinate, then write data-geo.js.
 *
 * The app needs a Google Maps link per destination that is provably the right
 * place. A bare `?q=Camellia` link is not that — it resolves to whatever
 * Google ranks highest worldwide, which for a hotel café called Camellia is
 * not in Tokyo. So each destination gets a coordinate first, and the Maps URL
 * is built as `/maps/search/<name>/@<lat>,<lng>,17z`: the map opens centred on
 * the verified point and the search is biased to it, so the place card that
 * comes up is the one at those coordinates.
 *
 * Coordinates come from OpenStreetMap via Nominatim, which is authoritative
 * for temples, stations and museums and patchy for restaurants. Anything
 * Nominatim cannot resolve is pinned by hand in MANUAL below, with a source.
 *
 * Nominatim's usage policy: one request per second, real User-Agent, cache the
 * results. Results are cached in geo.json and only missing ids are fetched.
 *
 *   node geocode.mjs            # fill in anything missing
 *   node geocode.mjs --refetch tokyo-station   # redo one
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';

const here = (p) => new URL(p, import.meta.url).pathname;
const UA = 'GoingTraveling/1.0 (+https://github.com/smartDisruptions/going-traveling)';

const win = {};
const ctx = createContext({ window: win });
for (const f of ['data-destinations.js', 'data-destinations-2.js', 'data-destinations-3.js', 'data-destinations-4.js', 'data-destinations-5.js']) {
  runInContext(readFileSync(here('./' + f), 'utf8'), ctx, { filename: f });
}
const DESTS = win.DESTINATIONS;

/**
 * The search string sent to Nominatim, in Japanese wherever Japanese is what
 * OSM actually holds. The destination's own `jp` field is often a compound
 * label built for the card ("祇園・花見小路"), which geocodes badly — these are
 * single, canonical names instead.
 */
const QUERY = {
  'tokyo-station': '東京駅',
  sensoji: '浅草寺',
  nakamise: '仲見世通り 台東区',
  akihabara: '秋葉原駅',
  'meiji-jingu': '明治神宮',
  harajuku: '竹下通り',
  omotesando: '表参道 渋谷区',
  shibuya: '渋谷パルコ',
  'shibuya-sky': '渋谷スクランブルスクエア',
  teamlab: '麻布台ヒルズ',
  'tokyo-tower': '東京タワー',
  ginza: '銀座四丁目交差点',
  nihonbashi: '日本橋 中央区 東京',
  skytree: '東京スカイツリー',
  'shinjuku-gyoen': '新宿御苑',
  yanaka: '谷中銀座',
  nakano: '中野ブロードウェイ',
  odaiba: 'お台場海浜公園',
  'ghibli-museum': '三鷹の森ジブリ美術館',
  'wb-studio': 'ワーナー ブラザース スタジオツアー東京',
  'hakone-yumoto': '箱根湯本駅',
  'hakone-openair': '彫刻の森美術館',
  'lake-ashi': '箱根神社',
  'hakone-ropeway': '大涌谷',
  gora: '強羅公園',
  'pola-museum': 'ポーラ美術館',
  sengokuhara: '仙石原すすき草原',
  gion: '花見小路通',
  shirakawa: '祇園白川',
  yasaka: '八坂神社',
  'kiyomizu-dera': '清水寺',
  sannenzaka: '産寧坂',
  'kodai-ji': '高台寺',
  'nanzen-ji': '南禅寺',
  'philosophers-path': '哲学の道',
  'ginkaku-ji': '銀閣寺',
  'fushimi-inari': '伏見稲荷大社',
  arashiyama: '竹林の小径 嵐山',
  'tenryu-ji': '天龍寺',
  togetsukyo: '渡月橋',
  'sagano-train': 'トロッコ嵯峨駅',
  'kinkaku-ji': '金閣寺',
  'ryoan-ji': '龍安寺',
  'nijo-castle': '二条城',
  nishiki: '錦市場',
  'manga-museum': '京都国際マンガミュージアム',
  kibune: '貴船神社',
  ohara: '三千院',
  'nintendo-museum': '任天堂資料館',
  byodoin: '平等院',
  uji: '宇治橋 宇治市',
  'den-den-town': 'でんでんタウン 大阪',
  usj: 'ユニバーサル・スタジオ・ジャパン',
  nara: '東大寺',
  'nezu-museum': '根津美術館',
  'kanda-myojin': '神田明神',
  'hama-rikyu': '浜離宮恩賜庭園',
  'teamlab-planets': 'チームラボプラネッツ 豊洲',
  kappabashi: 'かっぱ橋道具街',
  'okada-museum': '岡田美術館',
  'venetian-glass': '箱根ガラスの森美術館',
  'hakone-yuryo': '箱根湯寮',
  'okochi-sanso': '大河内山荘',
  'honen-in': '法然院',
  'daitoku-ji': '大徳寺',
  pontocho: '先斗町',
  'kasuga-taisha': '春日大社',

  /* The art / museum / history pass. */
  'tokyo-national-museum': '東京国立博物館',
  'ueno-park': '上野恩賜公園',
  'mitsubishi-ichigokan': '三菱一号館',   // OSM records the building, not the museum
  artizon: 'アーティゾン美術館',
  'mori-art': '森美術館',
  nact: '国立新美術館',
  'hokusai-museum': 'すみだ北斎美術館',
  'imperial-east-gardens': '皇居東御苑',
  'nezu-shrine': '根津神社 文京区',
  'hakone-museum-art': '箱根美術館',
  narukawa: 'Narukawa Art Museum Hakone',
  'hakone-sekisho': '箱根関所',
  lalique: '箱根ラリック美術館',
  sanjusangendo: '三十三間堂',
  'kyoto-national-museum': '京都国立博物館',
  'kyocera-museum': '京都市京セラ美術館',
  'kennin-ji': '建仁寺',
  'to-ji': '東寺',
  'ninna-ji': '仁和寺',
  'kyoto-imperial-palace': '京都御所',
  'genji-museum': '宇治市源氏物語ミュージアム',
  ujigami: '宇治上神社',
  'nara-national-museum': '奈良国立博物館',
  'kofuku-ji': '興福寺 奈良',
  'osaka-castle': '大阪城',

  // Restaurants resolve through the building they occupy, which is what OSM
  // records. The Maps search string still carries the restaurant's own name,
  // so the card that opens is the restaurant and not the lobby.
  'eat-seo': '東京ステーションホテル',
  'eat-asanogawa': '東京ステーションホテル',
  'eat-camellia': '東京ステーションホテル',
  'eat-daian': '丸ノ内ホテル',
  'eat-sumida': 'ロイヤルパークホテル 日本橋',
  'eat-gora': '強羅ブリュワリー',
  'eat-rock': '焼肉ロック 箱根湯本',
  'eat-hyatt': 'ハイアットリージェンシー箱根',
  'eat-hiro': '京の焼肉処弘 四条木屋町店',
  'eat-yonefuku': '米福 四条烏丸',
  'eat-hyoto': '瓢斗 四条烏丸',
  'eat-hanaroku': 'ホテルカンラ京都',
  'eat-forni': 'HOTEL THE MITSUI KYOTO',
  'eat-yasaka': 'パークハイアット京都',
};

/**
 * The string the Google Maps link searches for. Defaults to the geocoding
 * query, which is already the canonical Japanese name — Google resolves those
 * far more reliably inside Japan than a romanised one. Restaurants override it,
 * because their coordinate is the building and their name is the restaurant:
 * the map opens on the verified point and the search names the right tenant.
 */
const MAPQ = {
  'mitsubishi-ichigokan': '三菱一号館美術館',
  narukawa: '成川美術館',
  // Google Maps returns "can't find" for 谷中銀座商店街 and for 先斗町 in any
  // form — both are places OSM knows and Google's index files differently.
  // Checked by loading each URL and reading the result.
  yanaka: '谷中銀座',
  pontocho: 'Pontocho Alley Kyoto',
  'eat-seo': '焼鳥 瀬尾 東京ステーションホテル',
  'eat-asanogawa': '鮨処 あさの川 東京ステーションホテル',
  'eat-camellia': 'カメリア 東京ステーションホテル',
  'eat-daian': '丸ノ内ホテル',   // Google has no listing named 大安くらぶ; the hotel resolves cleanly
  'eat-sumida': '鉄板焼 すみだ ロイヤルパークホテル',
  'eat-gora': 'GORA BREWERY & GRILL',
  'eat-rock': '焼肉ロック 箱根湯本',
  'eat-hyatt': 'ハイアットリージェンシー箱根',  // naming the outlet landed on the Living Room lounge
  'eat-hiro': '京の焼肉処弘 四条木屋町店',
  'eat-yonefuku': '天ぷら寿司海鮮 米福 四条烏丸店',
  'eat-hyoto': '京都 瓢斗 四条烏丸店',
  'eat-hanaroku': '鉄板料理 花六 ホテルカンラ京都',
  'eat-forni': 'FORNI HOTEL THE MITSUI KYOTO',
  'eat-yasaka': '八坂 パークハイアット京都',
};

/**
 * Pinned by hand where OSM has no record. `src` says where the number came
 * from so the next person can re-check it rather than trust it.
 */
const MANUAL = {};

/**
 * Every result must land inside the box for its city. This is the check that
 * catches a geocoder returning the right name in the wrong country — the
 * failure mode that put Daisen Park in Sakai on a Kyoto temple card earlier in
 * this project. Boxes are deliberately generous; they are a sanity bound, not
 * a location.
 */
const BOX = {
  Tokyo: [35.5, 139.4, 35.85, 139.95],
  Hakone: [35.15, 138.95, 35.32, 139.15],
  Kyoto: [34.85, 135.55, 35.25, 135.9],
  Uji: [34.83, 135.7, 34.95, 135.9],
  Osaka: [34.55, 135.35, 34.78, 135.65],
  Nara: [34.63, 135.75, 34.75, 135.9],
};

const cache = existsSync(here('./geo.json'))
  ? JSON.parse(readFileSync(here('./geo.json'), 'utf8'))
  : {};

const args = process.argv.slice(2);
const refetch = args[0] === '--refetch' ? args.slice(1) : [];

const lookup = (q) => {
  const url =
    'https://nominatim.openstreetmap.org/search?' +
    new URLSearchParams({ q, format: 'json', limit: '3', addressdetails: '1' });
  const out = execFileSync('curl', ['-s', '--max-time', '30', '-H', `User-Agent: ${UA}`, url], {
    maxBuffer: 8 * 1024 * 1024,
  });
  return JSON.parse(out.toString());
};

const sleep = (ms) => execFileSync('sleep', [String(ms / 1000)]);

let fetched = 0;
const missing = [];
for (const d of DESTS) {
  if (MANUAL[d.id]) { cache[d.id] = MANUAL[d.id]; continue; }
  if (cache[d.id] && !refetch.includes(d.id)) continue;

  const q = QUERY[d.id] ?? `${d.name} ${d.city}`;
  let hit = null;
  try {
    const box = BOX[d.city];
    for (const r of lookup(q)) {
      const lat = Number(r.lat), lng = Number(r.lon);
      if (box && (lat < box[0] || lat > box[2] || lng < box[1] || lng > box[3])) continue;
      hit = { lat: +lat.toFixed(6), lng: +lng.toFixed(6), osm: r.display_name, q, src: 'nominatim' };
      break;
    }
  } catch (e) {
    console.log(`ERR   ${d.id}: ${e.message}`);
  }
  fetched++;
  sleep(1100); // Nominatim's rate limit, honoured rather than raced.

  if (!hit) { missing.push(`${d.id} (${q})`); continue; }
  cache[d.id] = hit;
  console.log(`OK    ${d.id.padEnd(18)} ${hit.lat},${hit.lng}  ${hit.osm.slice(0, 70)}`);
}

writeFileSync(here('./geo.json'), JSON.stringify(cache, null, 2) + '\n');

/* The browser copy: coordinates plus the query string the Maps URL searches. */
const geo = {};
for (const d of DESTS) {
  const g = cache[d.id];
  if (!g) continue;
  geo[d.id] = { lat: g.lat, lng: g.lng, q: MAPQ[d.id] ?? QUERY[d.id] ?? `${d.name} ${d.city}` };
}
writeFileSync(
  here('./data-geo.js'),
  '/**\n' +
    ' * Verified coordinates and Maps search string per destination.\n' +
    ' * Generated by geocode.mjs — do not hand-edit. `src` for each, and the OSM\n' +
    ' * record it came from, is in geo.json.\n' +
    ' */\n' +
    'window.GEO=' + JSON.stringify(geo, null, 1) + ';\n'
);

console.log(`\n${Object.keys(geo).length}/${DESTS.length} located, ${fetched} fetched this run.`);
if (missing.length) console.log('MISSING:\n  ' + missing.join('\n  '));
