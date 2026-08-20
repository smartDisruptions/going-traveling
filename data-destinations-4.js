/**
 * The screened restaurants, as destinations.
 *
 * These are the same fourteen venues as the Eating out tab, entered into the
 * destination library so they can be filtered, searched, linked from the
 * itinerary prose and opened in the same detail panel as a temple. The Eating
 * out tab answers "what do I order and what do I ask"; these answer "where is
 * it, when is it open, what does it cost, and what else is round the corner".
 *
 * `food` on a restaurant is the two-level verdict, in the app's own order:
 * question one decides the venue, question two decides the plate.
 *
 * On photography — Wikimedia Commons, the only source whose licences this app
 * can honour, has essentially no pictures of individual Japanese restaurants.
 * So every image here is one of two honest things, and `imgNote` says which on
 * the card: a real photograph of the BUILDING the restaurant occupies, or a
 * photograph of the FORMAT it cooks. Neither pretends to be the room.
 *
 * Prices and hours checked August 2026. They drift; the app says so.
 */
window.DESTINATIONS.push(
  /* ─────────────────────────── TOKYO ─────────────────────────── */
  {
    id: 'eat-seo',
    name: 'Yakitori Seo',
    jp: '焼鳥 瀬尾',
    city: 'Tokyo',
    area: 'Marunouchi',
    tier: 'core',
    tags: ['food', 'romance'],
    img: 'images/eat-seo.jpg',
    imgNote: 'Negima, salt only — the format, not this counter.',
    url: 'https://www.tokyostationhotel.jp/restaurants/seo/',
    time: 'Dinner, 1.5–2 h',
    cost: 'Course dinner — price confirmed at booking',
    station: 'Tokyo Station, Marunouchi south exit — B1 of the Tokyo Station Hotel',
    blurb:
      'Eighteen seats, ten of them at the counter, and every skewer grilled one at a time over Kishū binchōtan. Named to the Japan Restaurant Award Best 100 three years running.',
    detail:
      'A yakitori counter is the format that fits this trip most naturally, and this is the good version of it five minutes from the apartment. Shio and tare are a standing choice on every skewer here, so asking for salt is not a special request — it is half the menu, and at a counter this serious the salt version is often the one the chef prefers. Ingredients are brought in from named producers around the country and cooked in front of you, which is exactly the transparency the food plan needs.',
    why: 'The first Japanese dinner of the trip, and the easiest possible one: an outstanding meal that requires no negotiation, a short walk from where you sleep.',
    tips: [
      'Dinner 17:00–22:00, last entry 21:00, last orders 21:30. Closed Sundays.',
      'Ten counter seats out of eighteen — book well ahead, and ask for the counter.',
      'Order momo, mune and tebasaki shio. Skip tsukune, where the binder is a list nobody recites.',
      'Ask whether garlic is in the salt blend, and whether one brush is used across both shio and tare skewers.',
    ],
    nearby: [
      { name: 'Tokyo Station & Marunouchi', note: 'You are inside it. Naka-dori is one street west.' },
      { name: 'Nihonbashi', note: '15 min walk — the old merchant heart of Edo.' },
      { name: 'Ginza', note: '10 min walk south for the evening window-shopping.' },
    ],
    food:
      'Question 1 — a charcoal counter with a short menu; ask what arrives free at the bar and what is on the dessert list. Question 2 — shio skewers are about as simple as Japanese food gets: chicken, salt, fire.',
  },
  {
    id: 'eat-asanogawa',
    name: 'Sushidokoro Asanogawa',
    jp: '鮨処 あさの川',
    city: 'Tokyo',
    area: 'Marunouchi',
    tier: 'core',
    tags: ['food', 'romance'],
    img: 'images/eat-asanogawa.jpg',
    imgNote: 'The Tokyo Station Hotel, which houses it — not the sushi counter.',
    url: 'https://www.sushiasanogawa.jp/en/tokyo',
    time: 'Dinner, ~2 h',
    cost: 'Courses ¥9,075 / ¥12,100 / ¥16,940, tax and service included',
    station: 'Tokyo Station Hotel 2F — direct from the Marunouchi south exit',
    blurb:
      'Edomae sushi inside the 1914 station hotel, where the chef seasons each piece himself and three named courses mean the bill is known before you sit down.',
    detail:
      'Sushi is one of the few great Japanese formats that needs nothing removed to work here: raw fish and rice, and shari is vinegar, salt and sugar. The dipping bowl is optional and easy to leave alone. At a counter like this the chef finishes many pieces with salt and citrus by preference anyway, so the request lands as a preference rather than a problem — and being inside a hotel means a dietary note can be attached to the reservation and reach the kitchen before you arrive, which a standalone counter often cannot promise.',
    why: 'The last Tokyo night, at a counter you can walk home from, with the price fixed in advance and the format already on your side.',
    tips: [
      'Dinner 17:30–22:00, last orders 21:00.',
      'Ougi ¥9,075 · Hōō ¥12,100 · Kikusui ¥16,940 — all-in, so no service-charge surprise.',
      'Ask for nigiri served unbrushed: nikiri is a glaze painted on before the plate reaches you.',
      'Ask about zuke (marinated) fish, and about the specialty rolls and dessert — creative rolls are where the unexpected turns up in Japan.',
    ],
    nearby: [
      { name: 'Camellia', note: 'Same hotel — the Western fallback if the counter is full.' },
      { name: 'Tokyo Station & Marunouchi', note: 'Downstairs. The floodlit façade is the after-dinner walk.' },
      { name: 'KITTE rooftop garden', note: 'Opposite, free, and open into the evening.' },
    ],
    food:
      'Question 1 — a hotel sushi counter carries fruit and a pastry section; ask about the specialty rolls and dessert. Question 2 — sashimi and unbrushed nigiri arrive with nothing added; the dipping bowl and any zuke fish are the variables.',
  },
  {
    id: 'eat-daian',
    name: 'Teppanyaki Daian Club',
    jp: '鉄板焼処 大安くらぶ',
    city: 'Tokyo',
    area: 'Marunouchi',
    tier: 'core',
    tags: ['food', 'romance'],
    img: 'images/eat-daian.jpg',
    imgNote: 'Wagyu on a teppan — the format, not this griddle.',
    url: 'https://www.marunouchi-hotel.co.jp/en/restaurant/daian/index.html',
    time: 'Dinner, ~2 h',
    cost: '≈¥12,000 a head; the longer courses ¥15,000–20,000',
    station: 'Marunouchi Hotel 7F — 1 min from the Marunouchi north exit',
    blurb:
      'Shizuoka Sodachi and Kobe beef, live abalone, and a griddle a metre from your seat in the hotel next door to the station.',
    detail:
      'Teppanyaki is the most watchable format in Japanese dining and, for this trip, the most auditable: nothing is assembled out of sight. Sauces and garnishes are standard on a teppan and standard to leave off one portion — the request just has to arrive before the cooking does, which means at reservation rather than at the table. Counter seats, table seats and private rooms; the counter is the point.',
    why: 'The special Tokyo dinner, one minute from the station and close enough that a long meal does not cost you the evening.',
    tips: [
      'Seventh floor. Dinner 17:30–22:00, last orders 21:00; lunch 11:30–15:00. ⚠️ Closed Sundays.',
      'Ask for a cleaned section of the griddle and clean tools — a normal request here, not an odd one.',
      'Order the wagyu salt-and-pepper only, and plain rice rather than the garlic fried rice.',
      'Confirm which oil is on the teppan. Butter is fine.',
    ],
    nearby: [
      { name: 'Tokyo Station & Marunouchi', note: '1 min. Naka-dori runs past the door.' },
      { name: 'Yakitori Seo', note: '5 min — the other Marunouchi dinner.' },
      { name: 'Nihonbashi', note: '15 min walk east.' },
    ],
    food:
      'Question 1 — hotel pastry kitchens and bars are where the surprises live; ask about both by name, and about anything sharing the griddle. Question 2 — a salt-only wagyu portion on a cleaned section of teppan is about as controlled as a restaurant meal gets.',
  },
  {
    id: 'eat-sumida',
    name: 'Teppan-yaki Sumida',
    jp: '鉄板焼 すみだ',
    city: 'Tokyo',
    area: 'Nihonbashi Kakigara-chō',
    tier: 'nearby',
    tags: ['food', 'romance'],
    img: 'images/eat-sumida.jpg',
    imgNote: 'The Royal Park Hotel, which houses it — not the restaurant.',
    url: 'https://www.rph.co.jp/restaurants/sumida/',
    time: 'Dinner, 2–2.5 h',
    cost: 'Dinner from ¥7,000; the seven-course Kachidoki ¥25,410',
    station: 'Royal Park Hotel 20F — direct from Suitengūmae, ~10 min by taxi from Tokyo Station',
    blurb:
      'Top-floor teppanyaki over Nihonbashi, and the most rigorous allergen process of any Tokyo venue considered here — including the part where it says it might refuse.',
    detail:
      'What earns this a place is not the view, though the view is real. It is that the hotel publishes an allergen system with soybean inside it, encourages requests in advance, and states plainly that its kitchens are shared and that it may decline a severe-allergy request rather than guess. That honesty is exactly why everything else it says can be trusted. Worth the taxi on a night when you want the process to be somebody else\'s job.',
    why: 'The higher-end teppanyaki, and the venue whose allergen handling is documented rather than promised.',
    tips: [
      'Dinner 17:30–21:30, last orders 21:00.',
      '⚠️ Its published system covers Japan\'s mandatory eight. Anything outside those has to be raised as its own separate inquiry.',
      'Ask for a cleaned section of the teppan or a separate pan, and confirm the oil.',
      'Ask for the sauces, the soup and the bread to be omitted rather than served and ignored.',
    ],
    nearby: [
      { name: 'Nihonbashi', note: '10 min walk — the bridge and the old merchant quarter.' },
      { name: 'Hama-rikyū Gardens', note: '15 min. Tidal pond, tea house, skyscrapers behind.' },
      { name: 'Ginza', note: '15 min by taxi.' },
    ],
    food:
      'Question 1 — its published system covers Japan\'s mandatory eight; anything outside those needs raising separately. Question 2 — the strongest formal process of the Tokyo venues, and it says plainly when it cannot help.',
  },
  {
    id: 'eat-camellia',
    name: 'Camellia',
    jp: 'カメリア',
    city: 'Tokyo',
    area: 'Marunouchi',
    tier: 'nearby',
    tags: ['food'],
    img: 'images/eat-camellia.jpg',
    imgNote: 'The Tokyo Station Hotel lobby — the building, not the room.',
    url: 'https://www.tokyostationhotel.jp/restaurants/',
    time: 'All day',
    cost: 'À la carte — café through to a full plate',
    station: 'Tokyo Station Hotel — direct from the Marunouchi south exit',
    blurb:
      'The all-day bar and café inside the station hotel: broad Western menu, no fixed course, and far more room to improvise than anywhere else on this list.',
    detail:
      'This one is here for a specific job. There will be an evening when nobody has the energy to negotiate a Japanese menu, and the failure mode this whole plan exists to prevent is hunger making the decision. A grilled protein, salt, plain sides and butter is a meal that can be assembled here without a conversation, and it is downstairs from the sushi counter if the plan changes late.',
    why: 'The fallback that keeps eating out relaxed — a known, flexible kitchen inside the building you already know.',
    tips: [
      'À la carte rather than a set course, which is exactly the point.',
      'Ask what is in the stock and the marinade, and whether there is wine in the pan.',
      'All-day hotel dining means a pastry section and a bar — ask about both.',
      'Butter is fine, so a butter-basted plain protein is on the table.',
    ],
    nearby: [
      { name: 'Sushidokoro Asanogawa', note: 'Same hotel, second floor.' },
      { name: 'Tokyo Station & Marunouchi', note: 'The floodlit façade is the walk after.' },
      { name: 'Yakitori Seo', note: 'Same building, B1.' },
    ],
    food:
      'Question 1 — an all-day room with a pastry section and a bar; ask about both. Question 2 — the most adjustable menu of the Tokyo venues, and a plain grilled plate is easy to name here.',
  },

  /* ─────────────────────────── HAKONE ─────────────────────────── */
  {
    id: 'eat-gora',
    name: 'Gōra Brewery & Grill',
    jp: '強羅ブリュワリー&グリル',
    city: 'Hakone',
    area: 'Gōra',
    tier: 'core',
    tags: ['food', 'romance'],
    img: 'images/eat-gora.jpg',
    imgNote: 'Sashimi — the format, not this kitchen.',
    url: 'https://www.gorabrewery.com/',
    time: 'Dinner, 2 h',
    cost: 'À la carte — food from ¥400, drinks from ¥300; reckon ¥4,000–6,000 a head',
    station: '8 min walk from Gōra Station — 1300-72 Gōra',
    blurb:
      'The sister restaurant to Itoh Dining by Nobu: grilled steak, sushi and Japanese plates, à la carte, eight minutes downhill from the villa.',
    detail:
      'In a valley where nearly every dinner is a fixed kaiseki served in your ryokan at a set hour, an à-la-carte grill-and-sushi kitchen is worth a great deal — you can order two dishes rather than accept nine. The house brews its own beer and runs a happy hour from one to four in the afternoon. The one thing to sidestep is the signature: Nobu\'s black cod is finished in miso, a long-fermented paste made off-site. Everything either side of it on the menu is simpler.',
    why: 'The Hakone dinner, walkable from the villa, and the only nearby kitchen that lets you choose plate by plate.',
    tips: [
      'Book ahead — it is small and it is the obvious choice in Gōra.',
      '⚠️ The black cod miso is the house signature and the least transparent thing on the menu. Order from the grill and the sushi side instead.',
      'Ask for a protein served unmarinated and salt-only, and ask what is in the sauces served alongside.',
      'Happy hour runs 13:00–16:00 if the afternoon is free.',
    ],
    nearby: [
      { name: 'Gōra Park', note: '5 min — French-style hillside garden with a greenhouse.' },
      { name: 'Hakone Open-Air Museum', note: '10 min on the mountain railway.' },
      { name: 'Pola Museum of Art', note: '15 min by bus, uphill.' },
    ],
    food:
      'Question 1 — a cocktail and dessert programme is the risk here rather than the kitchen; ask about the bar explicitly. Question 2 — grilled fish or steak with salt, plus sashimi, is a short list of ingredients you can see.',
  },
  {
    id: 'eat-rock',
    name: 'Yakiniku ROCK',
    jp: '焼肉ロック',
    city: 'Hakone',
    area: 'Hakone-Yumoto',
    tier: 'nearby',
    tags: ['food', 'romance'],
    img: 'images/eat-rock.jpg',
    imgNote: 'A yakiniku sign — the format, not this restaurant.',
    url: 'https://tabelog.com/en/kanagawa/A1410/A141001/14090373/',
    time: 'Dinner, 1.5–2 h',
    cost: 'Dinner ≈¥6,000–8,000; lunch ≈¥3,000–4,000',
    station: '3 min walk from Hakone-Yumoto Station',
    blurb:
      'Every table is a fully private room, and yakiniku is the format that gives you more control than any other restaurant in Japan.',
    detail:
      'You choose raw meat and cook it yourself over your own grill. Nothing is marinated unless you order it marinated, nothing is sauced unless you sauce it, and the good places compete on beef quality rather than on tare. Doing that in a private room on a trip is not a hardship. ⚠️ The catch is geography: this is at Hakone-Yumoto at the bottom of the mountain, not Gōra — about forty minutes down the switchback railway — so it is a dinner you build a day around rather than one you wander to.',
    why: 'The most controllable format on the whole trip, in a private room, at a fraction of what the hotel dining rooms cost.',
    tips: [
      '⚠️ Hakone-Yumoto, not Gōra — pair it with an arrival or departure day rather than a mountain day.',
      'Order shio (salt) cuts, unmarinated. Ask whether they are salted at the table or seasoned in the kitchen.',
      'Ask whether the grill is brushed with tare before use.',
      'Ask what comes as the free starter before it arrives.',
    ],
    nearby: [
      { name: 'Hakone-Yumoto', note: 'The hot-spring town itself, and the gateway station.' },
      { name: 'Hakone Open-Air Museum', note: '25 min up the mountain railway.' },
      { name: 'Gōra', note: '40 min up the switchbacks — the ride is part of the trip.' },
    ],
    food:
      'Question 1 — a yakiniku house has a short menu and few sauces; check the dessert list and the dips. Question 2 — the best-fitting format of the trip: you choose raw cuts and cook them yourself, salted rather than marinated.',
  },
  {
    id: 'eat-hyatt',
    name: 'The Dining Room, Hyatt Regency Hakone',
    jp: 'ダイニングルーム',
    city: 'Hakone',
    area: 'Gōra',
    tier: 'nearby',
    tags: ['food'],
    img: 'images/eat-hyatt.jpg',
    imgNote: 'The Hyatt Regency Hakone lounge — the hotel, not the dining room.',
    url: 'https://www.hyatt.com/hyatt-regency/en-US/hakrh-hyatt-regency-hakone-resort-and-spa',
    time: 'Dinner, 2 h',
    cost: 'Set dinner; the French course swaps to a sushi kaiseki for +¥1,130',
    station: 'Gōra — a short hop from the villa',
    blurb:
      'A French kitchen in the valley that invites allergy contact by email before you arrive, and will trade its course for a sushi kaiseki if you ask.',
    detail:
      'A French kitchen is far more likely than a ryokan to have an unseasoned protein and a spare clean pan, and this one asks for restrictions in advance rather than at the table. The detail worth knowing is the swap: the standard dinner is a French course, but a sushi kaiseki is available in its place for about a thousand yen more — and sushi is the better-fitting of the two by some distance. Ask about it at booking rather than on the night.',
    why: 'The Western backup in Gōra if the à-la-carte places do not work out, with the option to turn it into sushi instead.',
    tips: [
      'Dinner 17:00–22:00, last orders 21:00.',
      'Email the allergy details before arrival — the hotel asks for exactly this.',
      'Ask about the sushi kaiseki substitution when you book, not when you sit down.',
      '⚠️ No wine, brandy or alcohol in the sauce — including cooked off. Say it plainly; many kitchens assume heating solves it.',
    ],
    nearby: [
      { name: 'Gōra Park', note: 'Walkable — the hillside garden and greenhouse.' },
      { name: 'Gōra Brewery & Grill', note: 'The à-la-carte alternative in the same town.' },
      { name: 'Hakone Ropeway', note: 'Sōunzan is the next stop up from Gōra.' },
    ],
    food:
      'Question 1 — a resort hotel with a pastry section and a breakfast buffet; a buffet is the one setting where separation is nobody\'s job. Question 2 — a French kitchen has a spare clean pan and an unseasoned protein more readily than a ryokan does.',
  },

  /* ─────────────────────────── KYOTO ─────────────────────────── */
  {
    id: 'eat-hiro',
    name: 'Kyō no Yakiniku-dokoro Hiro',
    jp: '京の焼肉処 弘 四条木屋町店',
    city: 'Kyoto',
    area: 'Shijō-Kiyamachi',
    tier: 'core',
    tags: ['food', 'romance'],
    img: 'images/eat-hiro.jpg',
    imgNote: 'A table charcoal grill — the format, not this restaurant.',
    url: 'https://yakiniku-hiro.com/english/',
    time: 'Dinner, 1.5–2 h',
    cost: 'Dinner ≈¥4,000–5,000 a head',
    station: '10 min walk from the apartment; Kyoto-Kawaramachi is 3 min away',
    blurb:
      'A Kyoto butcher\'s own yakiniku house, on the Takasegawa canal a minute from Pontochō — so dinner and the evening walk are the same trip.',
    detail:
      'Run by a long-established Kyoto meat wholesaler, which is why the beef is better than the price suggests. It sits directly on the Takasegawa, the narrow canal that runs parallel to Kiyamachi, and in spring the cherry trees along the water are the reason people book. Yakiniku is the most controllable format there is — you pick raw cuts and cook them yourself — and here the beef is so obviously the point that ordering it salted is ordering it the way it is meant to be eaten.',
    why: 'The first Kyoto dinner, the cheapest good one on this list, and it puts you exactly where the Gion evening starts.',
    tips: [
      '⚠️ Their signature マンゴータン ("mango tan") is thick-cut beef tongue fanned to look like mango slices — no fruit in it at all. Worth knowing before the word appears on a menu and ends the evening.',
      'Order premium cuts shio and unmarinated; ask whether they are salted at the table.',
      'Ask whether the grill is wiped with tare between courses.',
      'Pontochō is one minute west, the Kamo riverbank two — walk it after.',
    ],
    nearby: [
      { name: 'Pontochō', note: '1 min — the lantern-lit alley along the river.' },
      { name: 'Gion', note: '5 min across the Shijō bridge.' },
      { name: 'Nishiki Market', note: '10 min west, for the daytime version of the district.' },
    ],
    food:
      'Question 1 — low risk in the kitchen; confirm the \"mango tan\" is the beef-tongue dish and check the dessert list. Question 2 — salt-ordered cuts arrive with nothing on them; the tare and the sesame dip are the questions.',
  },
  {
    id: 'eat-yonefuku',
    name: 'Yonefuku',
    jp: '天ぷら寿司海鮮 米福 四条烏丸店',
    city: 'Kyoto',
    area: 'Shijō-Karasuma',
    tier: 'core',
    tags: ['food'],
    img: 'images/eat-yonefuku.jpg',
    imgNote: 'Prawn tempura — the format, not this kitchen.',
    url: 'https://komefuku-karasuma.owst.jp/',
    time: 'Dinner, 1.5 h',
    cost: 'Casual — comfortably under ¥5,000 a head',
    station: '2 min from Shijō-Karasuma — 3 min from the apartment',
    blurb:
      'Tempura fried in 100% rice oil rather than a blended vegetable oil, which answers the soybean-oil question before anyone has to ask it. Sushi and sashimi on the same menu.',
    detail:
      'Soybean oil is the quiet problem with tempura in Japan: most kitchens fry in a blend, most cannot tell you what is in it, and the answer arrives too late to change the order. This is a chain that made rice oil its whole identity — it is on the sign, on the menu and in the marketing — which turns the hardest question about the format into one that is already answered. Forty-odd tempura items, plus nigiri and sashimi, three minutes from the door. It is a cheerful, noisy, cheap place rather than a special-occasion one, and that is a useful thing to have within walking distance on the tenth day.',
    why: 'The one tempura kitchen on the trip where the oil is not a gamble, and it is around the corner from where you sleep.',
    tips: [
      'Confirm the rice oil is used for every fryer, not only the tempura counter.',
      '⚠️ Order tempura with salt, not tentsuyu — the house dipping sauce is a separate ingredient list.',
      '⚠️ "Creative sushi" menus are where unexpected ingredients turn up in Japan. Ask about the specialty rolls specifically.',
      'A second branch sits at Kiyamachi by Sanjō Station if this one is full.',
    ],
    nearby: [
      { name: 'Nishiki Market', note: '5 min north — knives and ceramics rather than food.' },
      { name: 'Kyoto Hyōtō', note: '4 min — the shabu-shabu option in the same district.' },
      { name: 'Pontochō', note: '10 min east, toward the river.' },
    ],
    food:
      'Question 1 — creative sushi menus are where the unexpected turns up; ask about the specialty rolls and the desserts. Question 2 — 100% rice oil settles the fryer question whichever oil you avoid, and salt instead of tentsuyu settles the rest.',
  },
  {
    id: 'eat-hyoto',
    name: 'Kyoto Hyōtō',
    jp: '京都 瓢斗 四条烏丸店',
    city: 'Kyoto',
    area: 'Shijō-Karasuma',
    tier: 'nearby',
    tags: ['food', 'romance'],
    img: 'images/eat-hyoto.jpg',
    imgNote: 'A shabu-shabu pot — the format, not this restaurant.',
    url: 'https://hyoto.jp/shop/kyotoshijokarasuma/',
    time: 'Dinner, 2 h',
    cost: 'Dinner ¥6,000–8,000; the dashi-shabu kaiseki from ¥5,000',
    station: '4 min walk from Karasuma or Shijō Station',
    blurb:
      'Twenty years of dashi-shabu on tatami, in private rooms — and the whole thing turns on a single answer about the broth.',
    detail:
      'Shabu-shabu is as plain as cooked food gets: meat and vegetables swirled through hot liquid at your own table, nothing hidden. That makes it one of the best-fitting formats here in principle. In practice it depends entirely on the pot, and this restaurant\'s reputation rests on its dashi — a house broth twenty years in the making, which means it is a house recipe rather than a published one. Ask before booking, not on arrival. If they will serve a plain kombu or plain-water pot, this becomes one of the best evenings on the list; if not, it is a polite no and nothing is lost.',
    why: 'A tatami room, a private table, and a format that is transparent by design — subject to one question that has to be asked first.',
    tips: [
      '⚠️ THE question, asked at booking: what is in the broth, and can a plain kombu or plain-water pot be served instead?',
      'Ask separately what is in the ponzu and the goma-dare — both are blends rather than single ingredients.',
      'Private rooms are available and worth requesting.',
      'The pork dashi-shabu is the house speciality rather than beef, which is unusual for Kyoto.',
    ],
    nearby: [
      { name: 'Yonefuku', note: '4 min — the tempura and sushi option in the same district.' },
      { name: 'Nishiki Market', note: '7 min north.' },
      { name: 'Manga Museum', note: '10 min north — 50,000 volumes on open shelves.' },
    ],
    food:
      'Question 1 — low risk in the kitchen; check the dessert. Question 2 — the dish itself is meat and vegetables in hot liquid; the broth and both dipping sauces are the whole question, and one answer decides it.',
  },
  {
    id: 'eat-hanaroku',
    name: 'Teppan Hanaroku',
    jp: '鉄板料理 花六',
    city: 'Kyoto',
    area: 'Karasuma-Gojō',
    tier: 'core',
    tags: ['food', 'romance'],
    img: 'images/eat-hanaroku.jpg',
    imgNote: 'Hotel Kanra Kyoto, which houses it — not the restaurant.',
    url: 'https://www.hotelkanra.jp/en/',
    time: 'Dinner, 2–2.5 h',
    cost: 'Courses from ≈¥8,000; the eight-course anniversary menu ¥19,400 all-in',
    station: 'Hotel Kanra Kyoto B1 — Gojō Station, 10 min walk from the apartment',
    blurb:
      'A5 black wagyu cooked at a forty-seat counter in a machiya-styled hotel, in a kitchen that asks for allergy information in advance and admits its equipment is shared.',
    detail:
      'The signature Hanaroku course runs six plates — seasonal appetisers, a hot starter, the day\'s seafood, an A5 fillet-and-sirloin comparison off the teppan, a rice dish and dessert. Everything happens on the griddle in front of you, which is the transparency this trip wants on its last night. The hotel takes allergy information at reservation and says plainly that its kitchens and utensils are shared rather than claiming a guarantee it cannot keep — the same honesty that makes Sumida trustworthy in Tokyo.',
    why: 'The last Kyoto night: a counter you can walk home from, cooked in front of you, at a fraction of what the Park Hyatt asks.',
    tips: [
      'Counter, table and semi-private seating across forty seats. Ask for the counter.',
      'Ask for a cleaned, isolated section of the teppan and clean tools.',
      'Confirm the oil, and ask for it cooked plain — no marinade, no finishing sauce.',
      'Send the allergy note with the reservation — the hotel expects it there.',
    ],
    nearby: [
      { name: 'Pontochō', note: '15 min north along the river.' },
      { name: 'Gion', note: '15 min north-east.' },
      { name: 'Nishiki Market', note: '15 min north.' },
    ],
    food:
      'Question 1 — hotel pastry section and bar; ask about both by name. Question 2 — a salt-only wagyu portion on a cleaned griddle, cooked where you can watch it.',
  },
  {
    id: 'eat-forni',
    name: 'FORNI',
    jp: 'フォルニ',
    city: 'Kyoto',
    area: 'Nijōjō-mae',
    tier: 'nearby',
    tags: ['food', 'romance'],
    url: 'https://www.hotelthemitsui.com/en/kyoto/restaurants-bar/forni/',
    time: 'Dinner, 2–2.5 h',
    cost: 'Four-course and six-course set menus — price confirmed at booking',
    station: 'Hotel The Mitsui Kyoto — opposite Nijō Castle',
    blurb:
      'Italian cooking around a wood-burning oven built in the shape of an okudo-san, the old Kyoto kitchen range — in a hotel whose allergen framework goes beyond the legal minimum.',
    detail:
      'Italian is a quietly good fit here: a short ingredient list per plate, and most of it visible on the plate — one question rather than five. The hotel publishes an allergen framework covering Japan\'s recommended twenty, which is where soybean actually sits, and takes restrictions at reservation. The centrepiece is the oven itself, a wood-fired range reimagined from the sunken hearth of a traditional Kyoto house, used for roasting as much as for pizza.',
    why: 'The Western special-occasion dinner, in the one hotel here whose written allergen policy goes past the mandatory eight.',
    tips: [
      'Dinner 17:30–21:30. Four-course menu, or the six-course "Primo piatto" with a pasta or risotto choice.',
      '⚠️ No wine or cooking alcohol in any sauce, including cooked off. This is the whole risk in an Italian kitchen.',
      '⚠️ Its framework covers Japan\'s recommended twenty as well as the mandatory eight — unusually thorough. Dessert is still the place to ask.',
      'Ask that garlic be kept to an agreed small amount rather than left to the kitchen.',
    ],
    nearby: [
      { name: 'Nijō Castle', note: 'Opposite. The nightingale floors and the Ninomaru palace.' },
      { name: 'Manga Museum', note: '10 min east.' },
      { name: 'Daitoku-ji', note: '15 min north — the sub-temple gardens.' },
    ],
    food:
      'Question 1 — pastry section and bar; Italian dessert leans on nut pastes and praline. Question 2 — its allergen framework covers Japan\'s recommended twenty as well as the mandatory eight, which is unusually thorough here.',
  },
  {
    id: 'eat-yasaka',
    name: 'YASAKA, Park Hyatt Kyoto',
    jp: '八坂',
    city: 'Kyoto',
    area: 'Higashiyama',
    tier: 'optional',
    tags: ['food', 'romance'],
    img: 'images/eat-yasaka.jpg',
    imgNote: 'Griddled wagyu with salt and citrus — the format, not this counter.',
    url: 'https://www.tablecheck.com/en/kyoto-park-hyatt-yasaka',
    time: 'Dinner, 2.5–3 h',
    cost: '⚠️ ¥33,000–55,000 a head — the single most expensive meal on this trip',
    station: 'Park Hyatt Kyoto, above the Yasaka Pagoda — 10 min walk from Gion-Shijō',
    blurb:
      'Teppanyaki cooked with French technique, in the Park Hyatt on the hillside above the Yasaka Pagoda. The view is the one on the postcards.',
    detail:
      'Everything happens on a griddle in front of you, which is the transparency this trip keeps looking for, executed at the highest level available in Kyoto. It is also, by a wide margin, the most expensive thing considered here: the summer course is ¥33,000 a head, the champagne pairing ¥35,000 and the wine pairing ¥55,000. Two covers at the base course is roughly a tenth of the whole trip budget, so this belongs in the plan as the one big night — chosen deliberately, booked early — rather than as a default Gion dinner.',
    why: 'The splurge. If there is one meal worth breaking the budget for, the argument for this one is the room, the hillside and the fact that nothing is cooked out of sight.',
    tips: [
      '⚠️ ¥33,000 base, ¥35,000 with champagne, ¥55,000 with wine pairing — pairings are alcohol, so the base course is the one to book.',
      'Ask for a cleaned section of the griddle and clean tools.',
      '⚠️ No wine or brandy in any finish, including cooked off — a French-technique kitchen reaches for it by habit.',
      'Book weeks ahead, and put the allergy detail on the reservation.',
    ],
    nearby: [
      { name: 'Kiyomizu-dera', note: '10 min uphill — the veranda and the approach streets.' },
      { name: 'Sannenzaka', note: '5 min. The preserved stone lanes below the hotel.' },
      { name: 'Gion', note: '10 min down the hill, and the walk back is the good part.' },
    ],
    food:
      'Question 1 — a hotel of this class runs a full pastry section and a cocktail bar; ask about both by name. Question 2 — wagyu or fish from the teppan with salt only, cooked a metre away.',
  }
);
