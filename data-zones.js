/**
 * Zones, and the travel time between them.
 *
 * The itinerary now offers two whole plans per day, and lets you swap
 * individual blocks inside the one you pick. That only helps if the app can
 * answer the question you actually have at 2pm: is this swap on my way, or
 * does it cost me an hour I have not got?
 *
 * Straight-line distance cannot answer it. Gōra to Hakone-Yumoto is five
 * kilometres and forty minutes, because the railway switches back up a
 * mountain. Tokyo Station to Ueno is three kilometres and eight minutes,
 * because it is four stops on the Yamanote. So:
 *
 *   1. Every destination belongs to a ZONE — a walkable pocket of the city.
 *   2. Two stops in the same zone are a walk, timed from their real
 *      coordinates at 4.5 km/h.
 *   3. Two stops in different zones use LEGS, a hand-entered table of actual
 *      journey times for the pairs this trip can produce.
 *   4. Anything LEGS does not cover falls back to an estimate from distance,
 *      and the app marks it "≈" so the guess is never dressed as a timetable.
 *
 * Numbers are door-to-door minutes on public transport, rounded to something
 * a person would say out loud, and deliberately a little pessimistic — the
 * failure this feature exists to prevent is being somewhere at 4pm that you
 * cannot get back from by 6.
 */

/** zone id -> the destinations inside it. Anything unlisted gets no zone and
 *  falls through to the distance estimate. */
const ZONES = {
  /* ── Tokyo ── */
  'tokyo:marunouchi': ['tokyo-station', 'mitsubishi-ichigokan', 'imperial-east-gardens',
    'eat-seo', 'eat-asanogawa', 'eat-camellia', 'eat-daian'],
  'tokyo:chuo': ['ginza', 'nihonbashi', 'artizon', 'hama-rikyu', 'eat-sumida'],
  'tokyo:ueno': ['ueno-park', 'tokyo-national-museum'],
  'tokyo:asakusa': ['sensoji', 'nakamise', 'kappabashi'],
  'tokyo:akihabara': ['akihabara', 'kanda-myojin'],
  'tokyo:yanaka': ['yanaka', 'nezu-shrine'],
  'tokyo:sumida': ['skytree', 'hokusai-museum'],
  'tokyo:shibuya': ['shibuya', 'shibuya-sky', 'harajuku', 'meiji-jingu', 'omotesando', 'nezu-museum'],
  'tokyo:roppongi': ['teamlab', 'mori-art', 'nact', 'tokyo-tower'],
  'tokyo:shinjuku': ['shinjuku-gyoen'],
  'tokyo:nakano': ['nakano'],
  'tokyo:odaiba': ['odaiba'],
  'tokyo:toyosu': ['teamlab-planets'],
  'tokyo:mitaka': ['ghibli-museum'],
  'tokyo:nerima': ['wb-studio'],

  /* ── Hakone ── */
  'hakone:yumoto': ['hakone-yumoto', 'hakone-yuryo', 'eat-rock'],
  'hakone:gora': ['gora', 'hakone-openair', 'hakone-museum-art', 'eat-gora', 'eat-hyatt'],
  'hakone:owakudani': ['hakone-ropeway'],
  'hakone:ashinoko': ['lake-ashi', 'narukawa', 'hakone-sekisho'],
  'hakone:sengokuhara': ['sengokuhara', 'pola-museum', 'venetian-glass', 'lalique'],
  'hakone:kowakidani': ['okada-museum'],

  /* ── Kyoto ── */
  'kyoto:higashiyama-s': ['kiyomizu-dera', 'sannenzaka', 'kodai-ji', 'yasaka',
    'sanjusangendo', 'kyoto-national-museum', 'eat-yasaka'],
  'kyoto:higashiyama-n': ['nanzen-ji', 'philosophers-path', 'ginkaku-ji', 'honen-in', 'kyocera-museum'],
  'kyoto:gion': ['gion', 'shirakawa', 'pontocho', 'kennin-ji', 'eat-hiro'],
  'kyoto:karasuma': ['nishiki', 'manga-museum', 'kyoto-imperial-palace', 'nijo-castle',
    'eat-yonefuku', 'eat-hyoto', 'eat-hanaroku', 'eat-forni'],
  'kyoto:kita': ['kinkaku-ji', 'ryoan-ji', 'ninna-ji', 'daitoku-ji'],
  'kyoto:arashiyama': ['arashiyama', 'tenryu-ji', 'togetsukyo', 'sagano-train', 'okochi-sanso'],
  'kyoto:kitayama': ['kibune', 'ohara'],
  'kyoto:minami': ['to-ji', 'fushimi-inari'],

  /* ── Uji, Nara, Osaka ── */
  'uji:uji': ['uji', 'byodoin', 'ujigami', 'genji-museum'],
  'uji:ogura': ['nintendo-museum'],
  'nara:nara-park': ['nara', 'kasuga-taisha', 'kofuku-ji', 'nara-national-museum'],
  'osaka:nipponbashi': ['den-den-town'],
  'osaka:osaka-castle': ['osaka-castle'],
  'osaka:konohana': ['usj'],
};

/** Flattened: destination id -> zone id. */
window.ZONE = {};
for (const [z, ids] of Object.entries(ZONES)) for (const id of ids) window.ZONE[id] = z;
window.ZONE_MEMBERS = ZONES;

/**
 * Real journey times between zones, in minutes, door to door.
 *
 * Written as `a|b` with the two zone ids in any order — the lookup sorts them,
 * so each pair is entered once. These are the journeys this itinerary can
 * actually produce; everything else falls back to the distance estimate.
 */
const L = {
  /* Tokyo — mostly Yamanote and metro hops */
  'tokyo:marunouchi|tokyo:chuo': 8,
  'tokyo:akihabara|tokyo:marunouchi': 6,
  'tokyo:marunouchi|tokyo:ueno': 10,
  'tokyo:asakusa|tokyo:marunouchi': 20,
  'tokyo:marunouchi|tokyo:yanaka': 20,
  'tokyo:marunouchi|tokyo:sumida': 15,
  'tokyo:marunouchi|tokyo:shibuya': 25,
  'tokyo:marunouchi|tokyo:roppongi': 20,
  'tokyo:marunouchi|tokyo:shinjuku': 25,
  'tokyo:marunouchi|tokyo:nakano': 30,
  'tokyo:marunouchi|tokyo:odaiba': 30,
  'tokyo:marunouchi|tokyo:toyosu': 25,
  'tokyo:marunouchi|tokyo:mitaka': 40,
  'tokyo:marunouchi|tokyo:nerima': 50,
  'tokyo:asakusa|tokyo:ueno': 8,
  'tokyo:akihabara|tokyo:ueno': 5,
  'tokyo:ueno|tokyo:yanaka': 12,
  'tokyo:sumida|tokyo:ueno': 15,
  'tokyo:akihabara|tokyo:asakusa': 12,
  'tokyo:asakusa|tokyo:sumida': 12,
  'tokyo:akihabara|tokyo:sumida': 10,
  'tokyo:roppongi|tokyo:shibuya': 15,
  'tokyo:shibuya|tokyo:shinjuku': 8,
  'tokyo:nakano|tokyo:shibuya': 15,
  'tokyo:mitaka|tokyo:shibuya': 25,
  'tokyo:roppongi|tokyo:toyosu': 30,
  'tokyo:chuo|tokyo:roppongi': 20,
  'tokyo:odaiba|tokyo:toyosu': 15,
  'tokyo:chuo|tokyo:ueno': 15,
  'tokyo:chuo|tokyo:shibuya': 25,
  'tokyo:chuo|tokyo:sumida': 15,
  'tokyo:nakano|tokyo:shinjuku': 6,
  'tokyo:roppongi|tokyo:ueno': 30,
  'tokyo:asakusa|tokyo:shibuya': 35,
  'tokyo:akihabara|tokyo:shibuya': 25,
  'tokyo:akihabara|tokyo:yanaka': 12,

  /* Hakone — the mountain railway is the whole story */
  'hakone:gora|hakone:yumoto': 40,
  'hakone:gora|hakone:owakudani': 20,
  'hakone:ashinoko|hakone:gora': 45,
  'hakone:gora|hakone:sengokuhara': 25,
  'hakone:gora|hakone:kowakidani': 10,
  'hakone:ashinoko|hakone:yumoto': 40,
  'hakone:sengokuhara|hakone:yumoto': 45,
  'hakone:kowakidani|hakone:yumoto': 25,
  'hakone:ashinoko|hakone:owakudani': 30,
  'hakone:ashinoko|hakone:sengokuhara': 30,
  'hakone:owakudani|hakone:sengokuhara': 30,

  /* Kyoto — buses and the Karasuma/Tōzai lines */
  'kyoto:gion|kyoto:karasuma': 10,
  'kyoto:higashiyama-s|kyoto:karasuma': 20,
  'kyoto:higashiyama-n|kyoto:karasuma': 25,
  'kyoto:karasuma|kyoto:kita': 30,
  'kyoto:arashiyama|kyoto:karasuma': 30,
  'kyoto:karasuma|kyoto:kitayama': 60,
  'kyoto:karasuma|kyoto:minami': 15,
  'kyoto:gion|kyoto:higashiyama-s': 12,
  'kyoto:gion|kyoto:higashiyama-n': 20,
  'kyoto:gion|kyoto:kita': 35,
  'kyoto:arashiyama|kyoto:gion': 40,
  'kyoto:gion|kyoto:minami': 20,
  'kyoto:higashiyama-n|kyoto:higashiyama-s': 25,
  'kyoto:higashiyama-s|kyoto:minami': 20,
  'kyoto:higashiyama-n|kyoto:kita': 40,
  'kyoto:arashiyama|kyoto:kita': 25,
  'kyoto:arashiyama|kyoto:minami': 35,
  'kyoto:higashiyama-n|kyoto:kitayama': 50,
  'kyoto:kita|kyoto:kitayama': 45,

  /* Between cities */
  'kyoto:karasuma|uji:uji': 30,
  'uji:ogura|uji:uji': 8,
  'kyoto:karasuma|uji:ogura': 30,
  'kyoto:gion|uji:ogura': 40,
  'kyoto:minami|uji:ogura': 25,
  'nara:nara-park|uji:ogura': 45,
  'kyoto:gion|uji:uji': 35,
  'kyoto:minami|uji:uji': 25,
  'kyoto:karasuma|nara:nara-park': 45,
  'kyoto:gion|nara:nara-park': 50,
  'kyoto:karasuma|osaka:nipponbashi': 45,
  'kyoto:karasuma|osaka:osaka-castle': 50,
  'kyoto:karasuma|osaka:konohana': 75,
  'kyoto:gion|osaka:nipponbashi': 50,
  'nara:nara-park|uji:uji': 40,
  'osaka:nipponbashi|osaka:osaka-castle': 20,
  'osaka:konohana|osaka:nipponbashi': 30,

  /* Filled in after the audit showed these pairs falling through to the
     distance estimate. Straight lines across Tokyo Bay and over the Kyoto
     hills are the cases where a crow-flies guess is worst — Roppongi to
     Odaiba is four kilometres and a change at Shimbashi. */
  'tokyo:odaiba|tokyo:roppongi': 30,
  'tokyo:roppongi|tokyo:shinjuku': 20,
  'tokyo:mitaka|tokyo:roppongi': 45,
  'tokyo:akihabara|tokyo:nakano': 30,
  'tokyo:akihabara|tokyo:odaiba': 30,
  'tokyo:asakusa|tokyo:nakano': 40,
  'tokyo:asakusa|tokyo:odaiba': 35,
  'tokyo:asakusa|tokyo:yanaka': 15,
  'tokyo:shibuya|tokyo:sumida': 40,
  'tokyo:sumida|tokyo:yanaka': 25,
  'kyoto:arashiyama|kyoto:higashiyama-n': 50,
  'kyoto:arashiyama|kyoto:higashiyama-s': 45,
  'kyoto:arashiyama|kyoto:kitayama': 75,
  'kyoto:higashiyama-n|kyoto:minami': 30,
  'kyoto:gion|osaka:osaka-castle': 55,
  'nara:nara-park|osaka:osaka-castle': 60,
};

/* Stored with the pair sorted, so the lookup never has to guess the direction. */
window.LEGS = {};
for (const [k, v] of Object.entries(L)) window.LEGS[k.split('|').sort().join('|')] = v;

/** Over this many minutes, an option is treated as leaving the day's area. */
window.FAR_MINUTES = 25;
