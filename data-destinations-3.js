/**
 * Additions from the second research pass — places that were already named in
 * the plan's prose or in a "nearby" list but had no entry of their own, so
 * nothing could link to them and the swipe alternatives had nowhere to point.
 *
 * Prices and hours checked August 2026. They drift; the app says so.
 */
window.DESTINATIONS.push(
  /* ─────────────────────────────── TOKYO ─────────────────────────────── */
  {
    id: 'nezu-museum',
    name: 'Nezu Museum & Garden',
    jp: '根津美術館',
    city: 'Tokyo',
    area: 'Minami-Aoyama',
    tier: 'nearby',
    tags: ['art', 'nature', 'romance'],
    img: null,
    time: '1.5–2 h',
    cost: '≈¥1,300 pp (more for special exhibitions)',
    station: 'Omotesandō — 8 min walk',
    blurb:
      'A Kengo Kuma building at the quiet end of Omotesandō, holding pre-modern Asian art — and behind it, a 17,000㎡ garden of bamboo, ponds, stone paths and four teahouses that almost nobody expects.',
    detail:
      'The collection runs to seven National Treasures, but the garden is the reason to come: you walk out of a hard-edged modern gallery straight into a hillside of moss, water and old stone lanterns, in the middle of one of the most expensive districts in Tokyo. It is one of very few places in the city where you can be genuinely alone with someone in daylight. The bamboo-lined approach to the entrance is itself a small piece of theatre.',
    why: 'The calmest hour available in west Tokyo, at the far end of a boulevard you are already walking. Ends the Harajuku noise cleanly.',
    tips: [
      'Closed Mondays, and between exhibitions — check before making the walk.',
      'The garden alone justifies the ticket; the galleries are a bonus.',
      'The café overlooks the garden and has a queue at lunchtime.',
    ],
    nearby: [
      { name: 'Omotesandō', note: 'The boulevard, 8 min back toward the station.' },
      { name: 'Aoyama Cemetery', note: '10 min. Cherry avenue, quiet, unexpectedly lovely.' },
    ],
    food: 'Café on site with a fixed menu. Treat as a garden visit, not a meal.',
  },
  {
    id: 'kanda-myojin',
    name: 'Kanda Myōjin',
    jp: '神田明神',
    city: 'Tokyo',
    area: 'Chiyoda',
    tier: 'nearby',
    tags: ['history', 'anime'],
    img: 'images/kanda-myojin.jpg',
    time: '30–45 min',
    cost: 'Free',
    station: 'Ochanomizu / 7 min uphill from Akihabara',
    blurb:
      'A 1,300-year-old shrine that sits directly above Akihabara and has quietly become the patron shrine of the electronics district — it sells anime charms and blesses IT equipment.',
    detail:
      'Founded in 730 and rebuilt in 1934 in reinforced concrete, which is why it survived the firebombing that took almost everything around it. It protects Tokyo\'s north-east — the unlucky direction — and its parishioners now include Akihabara\'s shops, so alongside the ordinary charms for health and marriage there are charms for data safety, and a hall decorated by anime collaborations. Nothing else in Tokyo compresses thirteen centuries and last week into one courtyard quite like it.',
    why: 'Seven minutes uphill from Akihabara, free, and the single strangest and best juxtaposition on this trip.',
    tips: [
      'Grounds are open at all hours; the shop keeps daytime hours.',
      'Buy the marriage charm (縁結び) — this is a shrine known for it, and you are on a trip.',
      'The approach from Akihabara is a real hill. From Ochanomizu it is flat.',
    ],
    nearby: [
      { name: 'Akihabara', note: '7 min downhill.' },
      { name: 'Yushima Seidō', note: '5 min. A Confucian temple in black lacquer, almost always empty.' },
    ],
    food: 'A few small shops sell amazake and snacks. Nothing verifiable.',
  },
  {
    id: 'hama-rikyu',
    name: 'Hama-rikyū Gardens',
    jp: '浜離宮恩賜庭園',
    city: 'Tokyo',
    area: 'Chūō',
    tier: 'nearby',
    tags: ['nature', 'romance', 'history'],
    img: 'images/hama-rikyu.jpg',
    time: '1–1.5 h',
    cost: '≈¥300 pp',
    station: 'Shiodome / 15 min walk from Ginza',
    blurb:
      'A shogunal duck-hunting estate from the 1600s with the only remaining seawater tidal pond in Tokyo — it rises and falls with the bay — and a teahouse on an island in the middle of it.',
    detail:
      'The contrast is the whole point: a 300-year-old landscape garden with a wall of Shiodome skyscrapers standing directly behind it. The pond is connected to Tokyo Bay by a sluice, so the water level and the fish change with the tide. A 300-year-old pine planted in 1709 spreads across the lawn on crutches. Nakajima-no-Ochaya, the teahouse on the island, is reached by a wooden bridge and serves matcha looking back at the towers.',
    why: 'Fifteen minutes from Ginza, ¥300, and one of the very few Tokyo gardens where sitting still for an hour feels like the point.',
    tips: [
      'Open 9:00–17:00, last entry 16:30. Closed over New Year.',
      '✅ Bringing your own food is fine here — a good safe-lunch spot near Ginza.',
      '⚠️ The teahouse serves matcha, which is caffeine. The garden is the reason to come.',
      'A water bus runs from here to Asakusa up the Sumida — a pleasant way to link the two.',
    ],
    nearby: [
      { name: 'Ginza', note: '15 min walk north.' },
      { name: 'Tsukiji Outer Market', note: '10 min. Morning only.' },
    ],
    food: '✅ Picnic-friendly. The teahouse is caffeinated.',
  },
  {
    id: 'teamlab-planets',
    name: 'teamLab Planets',
    jp: 'チームラボプラネッツ',
    city: 'Tokyo',
    area: 'Toyosu',
    tier: 'optional',
    tags: ['art', 'tech', 'romance'],
    img: null,
    time: '1.5–2 h',
    cost: 'from ≈¥3,800 pp, varies by date',
    station: 'Shin-Toyosu',
    blurb:
      'The barefoot one. You leave your shoes at the door and walk through water to your knees, through a room of floating orchids, and across a mirrored infinity of light.',
    detail:
      'A different proposition from Borderless rather than a lesser one: where Borderless is a museum whose works wander between rooms, Planets is a single choreographed route that you walk through with your body — water, moss, mirrors, scent. The water rooms are warm. It photographs extraordinarily well, which is not nothing on a trip.',
    why: 'The alternative to Borderless if the timed slots do not line up, or the addition if one digital-art morning is not enough.',
    tips: [
      'Wear or bring shorts — you wade to the knee, and long trousers get rolled or lent.',
      '⚠️ Mirrored floors throughout. Skirts and dresses are impractical; the venue lends shorts.',
      'Timed entry, book ahead. Allow 90 minutes minimum.',
      'Bare feet the whole way: the floors are warm, but pack accordingly.',
    ],
    nearby: [
      { name: 'Toyosu Market', note: '10 min. The tuna auction; very early morning only.' },
      { name: 'Odaiba', note: 'Two stops on the Yurikamome.' },
    ],
    food:
      'A vegan ramen stand on site. Worth knowing that plant-based Japanese cooking leans hard on soy and sesame — vegan is a diet, not an allergen process.',
  },
  {
    id: 'kappabashi',
    name: 'Kappabashi Kitchen Town',
    jp: '合羽橋道具街',
    city: 'Tokyo',
    area: 'Taitō',
    tier: 'nearby',
    tags: ['culture', 'food'],
    img: 'images/kappabashi.jpg',
    time: '1–2 h',
    cost: 'Free to browse',
    station: 'Tawaramachi / 15 min walk from Sensō-ji',
    blurb:
      'Eight hundred metres of shops selling nothing but the tools of cooking — knives, ceramics, cast iron, lacquer, and the plastic food models that sit in restaurant windows.',
    detail:
      'This is where Tokyo\'s restaurants buy their equipment, and it is open to anyone. Kamata Hakensha and Tsubaya sell hand-forged knives and will engrave a name while you wait. There are shops that sell only moulds, only chopsticks, only noren curtains. Given that this trip runs on a kitchen rather than on restaurants, a knife or a donabe bought here is the souvenir that actually gets used — every week, for years.',
    why: 'The most useful souvenir street in Japan for two people who are about to cook their way across it. Fifteen minutes from Sensō-ji.',
    tips: [
      'Most shops open 10:00–17:00 and many close Sundays — a weekday morning is the right time.',
      'Tax-free with your passport over ¥5,000 at the larger stores.',
      'A carbon-steel knife needs drying after every use; stainless is the honest choice for most people.',
      'The plastic food models make good, light, unbreakable gifts.',
    ],
    nearby: [
      { name: 'Sensō-ji', note: '15 min walk east.' },
      { name: 'Yanaka', note: '20 min north — pair the two for a quiet morning.' },
    ],
    food: 'A tool street, not a food street. Nothing to eat, nothing to worry about.',
  },

  /* ─────────────────────────────── HAKONE ─────────────────────────────── */
  {
    id: 'okada-museum',
    name: 'Okada Museum of Art',
    jp: '岡田美術館',
    city: 'Hakone',
    area: 'Kowakidani',
    tier: 'nearby',
    tags: ['art', 'history'],
    img: 'images/okada-museum.jpg',
    time: '2–3 h',
    cost: '≈¥2,800 pp — the most expensive ticket in Hakone',
    station: 'Kowakien bus stop',
    blurb:
      'Five floors of Japanese, Chinese and Korean art behind a 12-metre-high painting of wind and thunder gods, with a free open-air footbath fed by its own hot spring running along the front.',
    detail:
      'Opened in 2013 and startlingly good — screens, scrolls, ceramics and Buddhist sculpture across a collection most people have never heard of, in a building designed to take two or three unhurried hours. The Fūjin Raijin-zu mural across the façade is worth the walk up on its own. There is a garden behind with a stream and a teahouse, and the footbath at the entrance costs a few hundred yen and can be used without a ticket.',
    why: 'The best wet-weather day in Hakone after the Pola, and far less visited.',
    tips: [
      '⚠️ Closed 1 April – 30 May 2026 for maintenance. Check the dates against your trip before counting on it.',
      'Open 9:00–17:00, last entry 16:30.',
      'No photography inside at all.',
      'The footbath at the entrance is separate and cheap — usable even if you skip the museum.',
    ],
    nearby: [
      { name: 'Hakone Open-Air Museum', note: '10 min by bus toward Gōra.' },
      { name: 'Gōra', note: '10 min — the villa end of the valley.' },
    ],
    food:
      'A soba restaurant and a café on site. Soba shops boil buckwheat and wheat in the same water, and the dipping sauce is a long ingredient list — ask before you sit down.',
  },
  {
    id: 'venetian-glass',
    name: 'Hakone Venetian Glass Museum',
    jp: '箱根ガラスの森美術館',
    city: 'Hakone',
    area: 'Sengokuhara',
    tier: 'nearby',
    tags: ['art', 'romance'],
    img: null,
    time: '1.5–2 h',
    cost: '≈¥1,800 pp (¥1,700 with the Hakone Free Pass)',
    station: 'Bus to Hyōseki/Glass no Mori',
    blurb:
      'A reconstructed Venetian villa and garden in the mountains, with a 10-metre crystal arch of 160,000 hand-cut glass beads that catches the light and, in winter, the snow.',
    detail:
      'Unapologetically romantic and slightly kitsch, and it entirely works. Sixteenth-century Venetian glass indoors; outdoors a garden with a canal, a glass-bead arch over the path, and a fountain — all of which sparkle absurdly on a bright day. Live canzone singing in the café most afternoons. It is the single most photographed spot in Sengokuhara for couples, and it is honest about being exactly that.',
    why: 'Ten minutes from the pampas-grass field, indoors when it rains, and shamelessly built for two people on a trip.',
    tips: [
      'Open 10:00–17:30, last entry 17:00.',
      'The glass arch is best in bright sun or under snow — flat cloud does it no favours.',
      'Discounted with the Hakone Free Pass.',
      'A glass-blowing workshop takes walk-ins; you make something and it ships later.',
    ],
    nearby: [
      { name: 'Sengokuhara pampas grass', note: '10 min. 🍂 Silver-gold late September to mid-November.' },
      { name: 'Pola Museum of Art', note: '10 min by bus.' },
    ],
    food: 'Café with fixed menus and cake. Not viable — go for the glass.',
  },
  {
    id: 'hakone-yuryo',
    name: 'Hakone Yuryō',
    jp: '箱根湯寮',
    city: 'Hakone',
    area: 'Hakone-Yumoto',
    tier: 'nearby',
    tags: ['romance', 'nature'],
    img: null,
    time: '1.5–2 h',
    cost: 'Private bath from ≈¥4,000/hour for two; public bath ≈¥1,700',
    station: 'Free shuttle from Hakone-Yumoto',
    blurb:
      'A day-use hot spring in a converted farmhouse five minutes from Yumoto station, with nineteen private open-air baths you can rent by the hour.',
    detail:
      'The private rooms — kashikiri-buro — are individual walled gardens with their own cypress or stone tub, which means no negotiating tattoo policies and no shared bathing at all. A free shuttle runs from Hakone-Yumoto every few minutes. It exists for exactly the gap this trip has: you arrive in Hakone before the villa will let you in, with luggage, wanting the mountain to start.',
    why: 'Fills the arrival-day gap perfectly, and solves the tattoo question outright — the bath is yours, with a door.',
    tips: [
      'Private baths should be reserved, especially at weekends. The public bath is walk-in.',
      'The shuttle from Hakone-Yumoto is free and frequent.',
      'Bring or rent a towel; rental is a few hundred yen.',
      '⚠️ The restaurant is standard Japanese — treat it as out, and eat at the villa.',
    ],
    nearby: [
      { name: 'Hakone-Yumoto', note: '5 min by shuttle — the Evangelion store is by the station.' },
      { name: 'Tenzan', note: 'The other well-regarded Yumoto bathhouse, quieter than the main strip.' },
    ],
    food: 'On-site restaurant only. Plan to eat before or after.',
  },

  /* ─────────────────────────────── KYOTO ─────────────────────────────── */
  {
    id: 'okochi-sanso',
    name: 'Ōkōchi Sansō',
    jp: '大河内山荘',
    city: 'Kyoto',
    area: 'Arashiyama',
    tier: 'nearby',
    tags: ['nature', 'romance', 'history'],
    img: 'images/okochi-sanso.jpg',
    time: '1 h',
    cost: '≈¥1,000 pp, includes matcha and a sweet',
    station: 'At the far end of the bamboo grove',
    blurb:
      'The mountainside villa and garden of Denjirō Ōkōchi, a 1920s film star, who spent thirty years building it. It sits at the end of the bamboo path and almost everyone turns around before reaching it.',
    detail:
      'A circular garden route climbs through moss, maples and stone lanterns to a viewpoint over the whole Kyoto basin and the Hozu gorge, then down past a teahouse where the ticket price includes matcha. The crowd density drops by about ninety percent the moment you pass the gate — the same people who queued shoulder to shoulder in the grove will not pay ¥1,000 to keep walking. That is the entire trick.',
    why: 'The answer to "the bamboo grove was too crowded". It is thirty seconds further on and nearly empty.',
    tips: [
      'Open 9:00–17:00.',
      '⚠️ The included matcha is caffeine — take the sweet, skip the tea, or ask whether hot water is possible.',
      'The viewpoint is a genuine climb on uneven stone. Proper shoes.',
      'Go at the end of the grove walk rather than doubling back later.',
    ],
    nearby: [
      { name: 'Arashiyama bamboo grove', note: 'Directly at the gate.' },
      { name: 'Jōjakkō-ji', note: '10 min. Hillside temple with the best autumn view in Arashiyama.' },
      { name: 'Gio-ji', note: '15 min. A tiny thatched moss temple almost nobody finds.' },
    ],
    food:
      'Tea and a sweet come with the ticket. Japanese sweets commonly contain nut and bean pastes and are almost never labelled in-house — ask, or decline the sweet and keep the tea.',
  },
  {
    id: 'honen-in',
    name: 'Hōnen-in',
    jp: '法然院',
    city: 'Kyoto',
    area: 'Sakyō',
    tier: 'nearby',
    tags: ['history', 'nature', 'romance'],
    img: 'images/honen-in.jpg',
    time: '20–30 min',
    cost: 'Free',
    station: 'Off the Philosopher\'s Path',
    blurb:
      'A thatched gate on a mossy slope a few steps off the Philosopher\'s Path, with two mounds of white sand raked into changing patterns either side of the approach. Free, tiny, and usually empty.',
    detail:
      'You pass under the thatched roof, between the two byakusadan — white sand platforms whose raked design is changed with the seasons — and the temperature seems to drop. The main hall is closed to visitors for most of the year, which is part of why nobody comes. The moss, the stone path and the maples do all the work. It takes twenty minutes and is the thing people remember from the Philosopher\'s Path a year later.',
    why: 'Free, thirty seconds off a walk you are already doing, and the best-kept secret in eastern Kyoto.',
    tips: [
      'Grounds open roughly 6:00–16:00. The halls open only in early April and early November.',
      'Signposted off the Philosopher\'s Path but easy to miss — watch for the uphill lane.',
      'Silence is the point. Talk quietly.',
    ],
    nearby: [
      { name: "Philosopher's Path", note: 'At the bottom of the lane.' },
      { name: 'Ginkaku-ji', note: '10 min north along the path.' },
    ],
    food: 'Nothing on site, which is the point.',
  },
  {
    id: 'daitoku-ji',
    name: 'Daitoku-ji',
    jp: '大徳寺',
    city: 'Kyoto',
    area: 'Kita',
    tier: 'nearby',
    tags: ['history', 'art', 'nature'],
    img: 'images/daitoku-ji.jpg',
    time: '1.5–2 h',
    cost: 'Grounds free; each sub-temple ≈¥400–600',
    station: 'Bus to Daitokuji-mae — 15 min from Kinkaku-ji',
    blurb:
      'A walled city of Zen: two dozen sub-temples behind one gate, four of them permanently open, and gravel lanes between them that are silent even in high season.',
    detail:
      'The headquarters of the Rinzai school and the centre of the tea ceremony\'s development — Sen no Rikyū worked here. Daisen-in has one of the finest dry landscape gardens in Japan, a compressed river of raked gravel that flows around rocks and under a bridge. Kōtō-in is an avenue of maples and a bamboo grove leading to a single-view garden that is, in November, almost unbearably beautiful. You pay per sub-temple, so pick two rather than all four.',
    why: 'Fifteen minutes from Kinkaku-ji and the antidote to it — the same district, none of the crowd.',
    tips: [
      'Grounds and lanes are free and open; only the sub-temple gardens charge.',
      'Daisen-in and Kōtō-in are the two to pick if you only do two.',
      '⚠️ Opening days vary sub-temple by sub-temple and some close in winter. Check on the day.',
      'Photography is often banned inside the sub-temple gardens.',
    ],
    nearby: [
      { name: 'Kinkaku-ji', note: '15 min by bus.' },
      { name: 'Imamiya Shrine', note: '5 min. Two rival aburi-mochi shops by the gate, in business ~1,000 years.' },
    ],
    food:
      'Nothing simple on site. Izusen serves Buddhist vegetarian as a fixed course, which is soy-and-sesame by construction and cannot be adjusted plate by plate.',
  },
  {
    id: 'pontocho',
    name: 'Pontochō',
    jp: '先斗町',
    city: 'Kyoto',
    area: 'Nakagyō',
    tier: 'core',
    tags: ['romance', 'history'],
    img: 'images/pontocho.jpg',
    time: '30–45 min',
    cost: 'Free to walk',
    station: 'Kyoto Kawaramachi / Gion-Shijō',
    blurb:
      'A single alley barely a metre wide running five blocks along the Kamo river, lantern-lit, wooden-fronted, and — unlike Gion across the water — still mostly a working entertainment district.',
    detail:
      'Pontochō is where Kyoto goes at night. It is too narrow for cars, hung with paper lanterns and the plover crest of the district, and every second doorway is a restaurant you cannot see into. In summer the eastern side opens kawadoko — platforms built out over the Kamo — and the whole alley eats above the water. Walking it end to end takes ten minutes and you will do it twice.',
    why: 'The other half of the Gion evening, across the river, and the better walk of the two after dark.',
    tips: [
      'Best after sunset when the lanterns are lit. It is a nightlife street; daytime is unremarkable.',
      'The Kamo riverbank alongside is free, wide, and where couples sit in even spacing along the water — a genuine Kyoto ritual.',
      '⚠️ Photography restrictions apply in parts of the alley as in Gion. Shoot the lanterns, not the people.',
      'Summer kawadoko platforms are fixed-menu dining. Beautiful, and not viable for these restrictions.',
    ],
    nearby: [
      { name: 'Gion', note: 'Across the Shijō bridge, 5 min.' },
      { name: 'Shirakawa Canal', note: '10 min east.' },
      { name: 'Nishiki Market', note: '10 min west — the daytime version of the same district.' },
    ],
    food: 'Dense with restaurants, almost none verifiable. Eat before, walk after.',
  },
  {
    id: 'kasuga-taisha',
    name: 'Kasuga Taisha',
    jp: '春日大社',
    city: 'Nara',
    area: 'Nara Park',
    tier: 'optional',
    tags: ['history', 'nature', 'romance'],
    img: 'images/kasuga-taisha.jpg',
    time: '1–1.5 h',
    cost: 'Grounds free; inner area ≈¥500',
    station: '20 min walk through Nara Park from Tōdai-ji',
    blurb:
      'Three thousand stone lanterns lining a forest approach, and a thousand bronze lanterns hanging from the shrine buildings — all of them lit twice a year, and the rest of the time dark with moss.',
    detail:
      'Founded in 768 and rebuilt every twenty years for centuries. The approach runs for a kilometre through primeval forest that has been protected from logging since 841, so the trees are genuinely ancient and the light is green. The lanterns were donated by worshippers over a thousand years; many carry the names of the families who gave them. Inside the paid area there is a dark corridor where the bronze lanterns are lit permanently, which is the closest thing to standing inside a constellation.',
    why: 'The quietest and most beautiful part of Nara, and the part most day-trippers skip because it is twenty minutes further on.',
    tips: [
      'The lantern corridor inside the paid area is the reason to buy the ticket.',
      'Lanterns are all lit at Setsubun (early February) and mid-August only.',
      'The forest approach is free and worth walking even if you skip the inner area.',
      'The deer follow you here too, and there are fewer people to distract them.',
    ],
    nearby: [
      { name: 'Tōdai-ji', note: '20 min walk back through the park.' },
      { name: 'Isuien Garden', note: '15 min. Borrows Tōdai-ji\'s gate as scenery.' },
      { name: 'Naramachi', note: '25 min. Preserved merchant district.' },
    ],
    food: 'Nothing on site. Nara Park has benches and is a good packed-lunch place.',
  }
);
