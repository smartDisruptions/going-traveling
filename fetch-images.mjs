/**
 * Pull destination photography from Wikimedia Commons.
 *
 * Commons only, because everything here has to be a licence we can actually
 * honour — each file's licence and author are recorded alongside it in
 * credits.json, and the app renders them. Anything without a usable licence is
 * skipped rather than quietly used.
 *
 * Wikimedia serves only a fixed set of thumbnail widths (1280 is one), so we
 * fetch at 1280 and downscale locally with sips.
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync, existsSync, readFileSync, statSync } from 'node:fs';

const UA = 'GoingTraveling/1.0 (+https://github.com/smartDisruptions/going-traveling)';
const OUT = new URL('./images/', import.meta.url);
const WIDTH = 900; // rendered at most ~450pt wide, 2x for retina
const QUALITY = 58;

/** id -> Commons search term. Ordered roughly as the trip runs. */
const WANTED = {
  'tokyo-station': 'Tokyo Station Marunouchi building night',
  marunouchi: 'Marunouchi Naka-dori illumination',
  sensoji: 'Sensoji Kaminarimon lantern',
  nakamise: 'Nakamise-dori Asakusa street',
  skytree: 'Tokyo Skytree Sumida river',
  akihabara: 'Akihabara Electric Town street',
  'meiji-jingu': 'Meiji Shrine torii forest path',
  harajuku: 'Takeshita Street Harajuku',
  omotesando: 'Omotesando Tokyo zelkova avenue',
  shibuya: 'Shibuya Crossing night',
  'shibuya-sky': 'Shibuya Sky observation deck',
  'tokyo-tower': 'Tokyo Tower night',
  // Deliberately absent: ghibli-museum and teamlab. Both are places that do not
  // permit photography inside, so Commons has only the shuttle bus and the
  // neighbouring tower — licence-clean, correctly keyword-matched, and not
  // pictures of the subject. They use the typographic placeholder instead.
  ginza: 'Ginza Chuo-dori Tokyo',
  nihonbashi: 'Nihonbashi bridge Tokyo',
  'shinjuku-gyoen': 'Shinjuku Gyoen national garden',
  yanaka: 'Yanaka Ginza shopping street Tokyo',
  odaiba: 'Odaiba Rainbow Bridge night',
  'hakone-yumoto': 'Hakone Yumoto station town',
  'hakone-openair': 'Hakone Open-Air Museum sculpture',
  'lake-ashi': 'Lake Ashi Hakone torii Mount Fuji',
  'hakone-ropeway': 'Hakone Ropeway Owakudani',
  gora: 'Gora Park Hakone',
  'pola-museum': 'Pola Museum of Art Hakone',
  sengokuhara: 'Sengokuhara pampas grass Hakone',
  onsen: 'Japanese open air onsen rotenburo',
  gion: 'Gion Hanamikoji street Kyoto',
  shirakawa: 'Shirakawa canal Gion Kyoto',
  'yasaka-shrine': 'Yasaka Shrine lanterns Kyoto',
  'kiyomizu-dera': 'Kiyomizu-dera Kyoto',
  sannenzaka: 'Sannenzaka Kyoto street',
  'kodai-ji': 'Kodaiji temple Kyoto garden',
  'nanzen-ji': 'Nanzen-ji aqueduct Kyoto',
  'philosophers-path': "Philosopher's Path Kyoto",
  'ginkaku-ji': 'Ginkakuji silver pavilion Kyoto',
  'fushimi-inari': 'Fushimi Inari torii gates',
  arashiyama: 'Arashiyama bamboo grove Kyoto',
  'tenryu-ji': 'Tenryuji garden Kyoto',
  togetsukyo: 'Togetsukyo bridge Arashiyama',
  'sagano-train': 'Sagano Scenic Railway romantic train',
  'kinkaku-ji': 'Kinkakuji golden pavilion Kyoto',
  'ryoan-ji': 'Ryoanji rock garden Kyoto',
  'nijo-castle': 'Nijo Castle Ninomaru Kyoto',
  nishiki: 'Nishiki Market Kyoto',
  'manga-museum': 'Kyoto International Manga Museum',
  kibune: 'Kibune Kifune shrine steps lanterns',
  ohara: 'Sanzenin Ohara Kyoto moss garden',
  uji: 'Uji river Kyoto bridge',
  byodoin: 'Byodoin Phoenix Hall Uji',
  'den-den-town': 'Nipponbashi Den Den Town Osaka',
  nara: 'Todaiji Nara deer park',
  'nezu-museum': 'Nezu Museum garden Tokyo Aoyama',
  'kanda-myojin': 'Kanda Myojin shrine Tokyo',
  'hama-rikyu': 'Hamarikyu Gardens Tokyo pond skyscrapers',
  'kappabashi': 'Kappabashi kitchen town Tokyo street',
  'okada-museum': 'Okada Museum of Art Hakone',
  'venetian-glass': 'Hakone Venetian Glass Museum garden',
  'okochi-sanso': 'Okochi Sanso villa garden Arashiyama',
  'honen-in': 'Honen-in temple gate Kyoto moss',
  'daitoku-ji': 'Daitokuji Daisen-in Kyoto temple',
  'pontocho': 'Pontocho alley Kyoto lanterns night',
  'kasuga-taisha': 'Kasuga Taisha stone lanterns Nara',

  /* The art / museum / history pass. */
  'tokyo-national-museum': '東京国立博物館 本館',
  'ueno-park': '上野恩賜公園 不忍池',
  'mitsubishi-ichigokan': '三菱一号館美術館',
  artizon: 'Museum Tower Kyobashi',
  'mori-art': '六本木ヒルズ森タワー',
  nact: '国立新美術館',
  'hokusai-museum': 'すみだ北斎美術館',
  'imperial-east-gardens': '皇居東御苑 天守台',
  'nezu-shrine': '根津神社',
  'hakone-museum-art': '箱根美術館',
  narukawa: '成川美術館',
  'hakone-sekisho': '箱根関所',
  lalique: '箱根ラリック美術館',
  sanjusangendo: '三十三間堂',
  'kyoto-national-museum': '京都国立博物館',
  'kyocera-museum': '京都市美術館',
  'kennin-ji': '建仁寺',
  'to-ji': '東寺 五重塔',
  'ninna-ji': '仁和寺',
  'kyoto-imperial-palace': '京都御所 紫宸殿',
  'genji-museum': '宇治市源氏物語ミュージアム',
  ujigami: '宇治上神社',
  'nara-national-museum': '奈良国立博物館',
  'kofuku-ji': '興福寺 五重塔',
  'osaka-castle': '大阪城 天守閣',

  /**
   * Restaurants. Commons has almost no photography of individual Japanese
   * restaurants, and the alternative — screenshotting a restaurant's own
   * marketing photos — is somebody else's copyright. So each of these is
   * either a genuine photograph of the BUILDING the restaurant is in, or a
   * photograph of the format it cooks. Which of the two is recorded per
   * destination as `imgNote` and printed on the card, so the picture never
   * silently claims to be the room you will sit in.
   */
  'eat-asanogawa': 'Tokyo Station Hotel',
  'eat-camellia': 'Tokyo Station Hotel',
  'eat-sumida': 'Royal Park Hotel Tokyo',
  'eat-hyatt': 'Hyatt Regency Hakone',
  'eat-hanaroku': 'Hotel Kanra Kyoto',
  'eat-seo': 'Yakitori',
  'eat-daian': 'Teppanyaki',
  'eat-yasaka': 'Teppanyaki',
  'eat-gora': 'Sashimi',
  'eat-rock': 'Yakiniku',
  'eat-hiro': 'Yakiniku charcoal',
  'eat-yonefuku': 'Tempura',
  'eat-hyoto': 'Shabu shabu',
};

/**
 * Where relevance ranking picked the wrong subject, the file is named outright.
 * Search gave a city bus for the Ghibli Museum and a convention centre for
 * Tokyo Tower — close enough by keyword, useless as a photograph of the place.
 */
const EXACT = {
  'meiji-jingu': 'Meiji-jingu torii.jpg',
  nakamise: 'Nakamise by heschong in Asakusa, Tokyo.jpg',
  skytree: 'Tokyo Skytree tower from i-link town (27713082902).jpg',
  'tokyo-tower': 'Tokyo Tower at night - DSC00818.JPG',
  ginza: 'Ginza Wako 2016.JPG',
  'ginkaku-ji': 'Ginkakuji Temple in Kyoto, Japan.jpg',
  'den-den-town': 'Nipponbashi 4-chome - panoramio.jpg',
  sengokuhara: 'Hakone sengokuhara susuki1.jpg',
  nara: 'Todai-ji Great Buddha Hall.jpg',
  // Search returned Daisen PARK in Sakai for Daisen-in at Daitoku-ji — a
  // different garden in a different city.
  'daitoku-ji': 'Daitokuji (Kita-Ku Kyoto) Temple area hdsr S5 01.jpg',
  // Search returned a close-up of the Shishinden's name plaque for the palace,
  // and a side tea house for Kennin-ji — both true, neither the subject.
  'kyoto-imperial-palace': 'Kyoto-gosho shishinden zenkei.JPG',
  'kennin-ji': 'Kennin-ji hatto ac.jpg',
  // Restaurants: named outright, because a keyword search for a cuisine
  // returns whatever happens to rank, and "grilled steak restaurant" once
  // offered a mess hall in Guantánamo.
  'eat-asanogawa': '東京ステーションホテルー３.JPG',
  'eat-camellia': '東京ステーションホテルー１.JPG',
  'eat-sumida': 'Royal Park Hotel (Tokyo).JPG',
  'eat-hyatt': 'Hyatt regency hakone resort and spa.JPG',
  'eat-hanaroku': 'Hotel Kanra Kyoto 20210620-001.jpg',
  'eat-seo': 'Negima.jpg',
  'eat-daian': 'KobeBeefOnGrill.jpg',
  'eat-yasaka': 'Griddled wagyu beef.jpg',
  'eat-gora': 'Sashimi-01.jpg',
  'eat-rock': '焼肉.jpg',
  'eat-hiro': 'Matsusaka Beef of Korean barbecue using charcoal fire.jpg',
  'eat-yonefuku': 'Ebi & Vegetable Tempura (6737805387).jpg',
  'eat-hyoto': 'Shabu-shabu (6293791835).jpg',
};

const api = (params) => {
  const url =
    'https://commons.wikimedia.org/w/api.php?' +
    new URLSearchParams({ format: 'json', ...params });
  const out = execFileSync('curl', ['-s', '--max-time', '30', '-H', `User-Agent: ${UA}`, url], {
    maxBuffer: 32 * 1024 * 1024,
  });
  return JSON.parse(out.toString());
};

// Licences we can honour with a credit line. Anything else is skipped.
const OK_LICENCE = /^(cc0|cc[- ]by([- ]sa)?([- ][0-9.]+)?|public domain|pd)/i;

const pick = (extmeta) => {
  const lic = extmeta?.LicenseShortName?.value ?? '';
  const artist = (extmeta?.Artist?.value ?? '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return { lic, artist };
};

const credits = existsSync(new URL('./credits.json', import.meta.url))
  ? JSON.parse(readFileSync(new URL('./credits.json', import.meta.url), 'utf8'))
  : {};

const only = process.argv.slice(2);
const ids = only.length ? only : Object.keys(WANTED);

for (const id of ids) {
  const dest = new URL(`${id}.jpg`, OUT);
  if (existsSync(dest) && credits[id] && !only.length) continue;

  let chosen = null;
  try {
    if (EXACT[id]) {
      const r = api({
        action: 'query',
        titles: `File:${EXACT[id]}`,
        prop: 'imageinfo',
        iiprop: 'url|extmetadata|size',
        iiurlwidth: '1280',
      });
      const p = Object.values(r?.query?.pages ?? {})[0];
      const info = p?.imageinfo?.[0];
      if (!info) throw new Error(`named file not found: ${EXACT[id]}`);
      const { lic, artist } = pick(info.extmetadata);
      if (!OK_LICENCE.test(lic)) throw new Error(`named file licence: ${lic}`);
      chosen = { p, info, lic, artist };
    }
    const r = chosen ? null : api({
      action: 'query',
      generator: 'search',
      gsrsearch: `filetype:bitmap ${WANTED[id]}`,
      gsrnamespace: '6',
      gsrlimit: '12',
      prop: 'imageinfo',
      iiprop: 'url|extmetadata|size',
      iiurlwidth: '1280',
    });
    const pages = Object.values(r?.query?.pages ?? {});
    // Search returns in relevance order; keep that, but require a usable
    // licence and a landscape-ish image that will not look wrong in a card.
    for (const p of chosen ? [] : pages) {
      const info = p.imageinfo?.[0];
      if (!info) continue;
      const { lic, artist } = pick(info.extmetadata);
      if (!OK_LICENCE.test(lic)) continue;
      if (info.width && info.height && info.width / info.height < 1.15) continue;
      chosen = { p, info, lic, artist };
      break;
    }
  } catch (e) {
    console.log(`ERR   ${id}: ${e.message}`);
    continue;
  }

  if (!chosen) {
    console.log(`SKIP  ${id}: nothing with a usable licence`);
    continue;
  }

  const src = chosen.info.thumburl ?? chosen.info.url;
  const tmp = new URL(`${id}.orig`, OUT);
  try {
    execFileSync('curl', ['-sL', '--max-time', '60', '-H', `User-Agent: ${UA}`, '-o', tmp.pathname, src]);
    execFileSync('sips', [
      '-s', 'format', 'jpeg',
      '-Z', String(WIDTH),
      '-s', 'formatOptions', String(QUALITY),
      tmp.pathname, '--out', dest.pathname,
    ], { stdio: 'ignore' });
    execFileSync('rm', ['-f', tmp.pathname]);
  } catch (e) {
    console.log(`ERR   ${id}: download/resize failed — ${e.message}`);
    continue;
  }

  credits[id] = {
    title: chosen.p.title.replace(/^File:/, ''),
    page: chosen.info.descriptionurl,
    author: chosen.artist || 'Unknown',
    licence: chosen.lic,
  };
  const kb = Math.round(execFileSync('stat', ['-f%z', dest.pathname]).toString() / 1024);
  console.log(`OK    ${id}  ${kb}KB  ${chosen.lic}  — ${chosen.p.title.replace(/^File:/, '').slice(0, 60)}`);
}

writeFileSync(new URL('./credits.json', import.meta.url), JSON.stringify(credits, null, 2) + '\n');

/**
 * The two derived artefacts, rebuilt here rather than by hand.
 *
 * `credits.js` is the same data as a browser global, because the page has no
 * fetch under the published CSP. `dist-images/` holds the smaller re-encodes
 * the bundler turns into data: URIs — at 900px each photo would be roughly
 * five times the bytes, and the whole payload arrives with the document.
 *
 * Both used to be produced by hand, which is how thirteen new photographs
 * ended up on disk with no credit entry and no optimised copy.
 */
writeFileSync(
  new URL('./credits.js', import.meta.url),
  'window.CREDITS=' + JSON.stringify(credits, null, 1) + ';\n'
);

const DIST = new URL('./dist-images/', import.meta.url);
const DIST_WIDTH = 500;
const DIST_QUALITY = 45;
let built = 0;
for (const id of Object.keys(credits)) {
  const src = new URL(`${id}.jpg`, OUT);
  const out = new URL(`${id}.jpg`, DIST);
  if (!existsSync(src)) continue;
  if (existsSync(out) && statSync(out).mtimeMs >= statSync(src).mtimeMs) continue;
  execFileSync('sips', [
    '-s', 'format', 'jpeg',
    '-Z', String(DIST_WIDTH),
    '-s', 'formatOptions', String(DIST_QUALITY),
    src.pathname, '--out', out.pathname,
  ], { stdio: 'ignore' });
  built++;
}

console.log(`\n${Object.keys(credits).length} images credited, ${built} re-encoded for the bundle.`);
