/** Itinerary template, food-safety system, lodging, budget, booking order. */

window.ITINERARY = [
  {
    day: 1, city: 'Tokyo', title: 'Arrival', jp: '到着',
    theme: 'Land, provision, do nothing ambitious.',
    blocks: [
      { when: 'Afternoon', text: 'Clear the airport, get to the apartment, check in. Narita is 60–90 min by Narita Express; Haneda is 30–45 min. Buy a Suica/PASMO card or set one up in Apple Wallet before you leave the airport.' },
      { when: 'The provisioning run', text: 'Before anything else, do a full grocery shop. This is the single most important hour of the trip: oatmeal, eggs, white rice, plain proteins, fresh produce, known-safe snacks, bottled water, caffeine-free drinks, and at least two shelf-stable emergency meals. Set up the dedicated safe-food area and keep one pan, board, knife and utensil set separate.' },
      { when: 'Evening', text: 'Eat in. Then walk Marunouchi Naka-dōri or the Tokyo Station façade after dark — five minutes from the door, beautiful, and requires nothing of you.' },
    ],
    dests: ['tokyo-station', 'mitsubishi-ichigokan', 'nihonbashi', 'ginza', 'imperial-east-gardens'],
    food: 'In tonight — jet lag plus a first negotiation with a kitchen is a bad combination. From tomorrow you are eating out.',
    note: 'Deliberately empty. Resist the urge to schedule anything.',
  },
  {
    day: 2, city: 'Tokyo', title: 'Asakusa & Akihabara', jp: '浅草・秋葉原',
    theme: 'Old Tokyo in the morning, the electric town in the afternoon.',
    blocks: [
      { when: 'Early morning', text: 'Sensō-ji before 9am. This is not optional advice — the difference between 8am and 11am here is the difference between a temple and a crowd. Walk Nakamise, the side lanes, and Asakusa Shrine.' },
      { when: 'Late morning', text: 'Optional: Kappabashi Kitchen Town, 15 min walk — knives, ceramics, cookware. Or the Sumida riverside toward Skytree.' },
      { when: 'Afternoon', text: '🎮 Akihabara. Pick four buildings and go deep rather than wide: Super Potato, Mandarake Complex, Yodobashi Akiba, Radio Kaikan. Three to four hours.' },
      { when: 'Evening', text: 'Yakitori Seo in Marunouchi, if it answered — a chef-led counter where shio and tare are a standing choice, so ordering salt is ordering normally. Then a Ginza or Marunouchi night walk.' },
    ],
    dests: ['sensoji', 'nakamise', 'akihabara', 'ginza', 'eat-seo', 'tokyo-national-museum', 'ueno-park', 'nezu-shrine', 'hokusai-museum', 'skytree', 'yanaka', 'kanda-myojin', 'nakano', 'odaiba'],
    food: 'Asakusa street food and themed cafés stay out — shared fryers and unlabelled batters. But lunch at a shioyaki or sushi counter is straightforward. Bring your passport for tax-free shopping.',
  },
  {
    day: 3, city: 'Tokyo', title: 'Meiji Jingū, Shibuya & Nintendo', jp: '明治神宮・渋谷',
    theme: 'Forest silence, youth culture, three gaming stores, then a rooftop at sunset.',
    blocks: [
      { when: 'Morning', text: 'Meiji Jingū. Walk the forest approach slowly. Consider writing an ema wish tablet together — it costs about ¥500 and is a nice thing to have done on a trip.' },
      { when: 'Late morning', text: 'Takeshita Street for the spectacle (20 minutes is plenty), then Omotesandō for the architecture and the calm.' },
      { when: 'Afternoon', text: '🎮 Shibuya PARCO 6F: Nintendo TOKYO, Pokémon Center Shibuya, CAPCOM STORE TOKYO. Two hours covers all three.' },
      { when: 'Sunset', text: '⭐ Shibuya Sky. Book a slot roughly 40 minutes before sunset and stay through blue hour. This is the romantic set-piece of the Tokyo half.' },
      { when: 'Evening', text: 'The vetted Tokyo dinner, if it cleared: Teppanyaki Daian Club at the Marunouchi Hotel, a minute from Tokyo Station — Kobe beef and live abalone cooked in front of you, close enough to walk home from. Teppan-yaki Sumida on the 20th floor of the Royal Park is the higher-end alternative if you will take a taxi. Otherwise a safe dinner at home and the Shibuya crossing at night.' },
    ],
    dests: ['meiji-jingu', 'harajuku', 'omotesando', 'shibuya', 'shibuya-sky', 'eat-daian', 'eat-sumida', 'shinjuku-gyoen', 'nezu-museum', 'nakano', 'tokyo-tower', 'skytree'],
    food: '⚠️ This district is dessert-forward and shared-equipment throughout: crêpe irons, soft-serve machines, fruit blenders, nut toppings. Almost nothing here is separable. Plan lunch around it.',
  },
  {
    day: 4, city: 'Tokyo', title: 'Digital Art & Future Tokyo', jp: 'デジタルアート',
    theme: 'The futuristic thread, done properly.',
    blocks: [
      { when: 'Late morning', text: '🤖 teamLab Borderless at Azabudai Hills. Book a timed slot ahead. Give it three hours if you can — two is enough, three is when you stop rushing. Wear light clothing and flat shoes.' },
      { when: 'Afternoon', text: 'Azabudai Hills gardens, then walk to Zōjō-ji and Tokyo Tower — the temple gate with the orange tower behind it is the photograph worth having.' },
      { when: 'Flexible', text: 'Return to the apartment for lunch when it suits. The central base makes this genuinely practical, and the whole point of the lodging strategy is that you can.' },
      { when: 'Evening', text: 'Sushidokoro Asanogawa on the second floor of the Tokyo Station Hotel — sashimi and unbrushed nigiri need nothing removed, the dipping bowl simply goes untouched, and the courses are priced at ¥9,075, ¥12,100 and ¥16,940 all-in. Camellia in the same hotel is the Western fallback. Last Tokyo night.' },
    ],
    dests: ['teamlab', 'tokyo-tower', 'ginza', 'nihonbashi', 'eat-asanogawa', 'eat-camellia', 'mori-art', 'nact', 'artizon', 'imperial-east-gardens', 'teamlab-planets', 'ghibli-museum', 'odaiba', 'hama-rikyu'],
    food: 'The teamLab tea house is caffeinated and beautiful and not for you. Eat before or at home.',
  },
  {
    day: 5, city: 'Hakone', title: 'Tokyo → Hakone', jp: '箱根へ',
    theme: 'Transfer day. Forward the luggage, provision hard, arrive early.',
    blocks: [
      { when: 'Morning', text: '📦 Send the large suitcases from Tokyo directly to the Kyoto apartment by takkyūbin. Roughly ¥2,000–3,000 per bag, arriving next afternoon. Carry only two nights of clothing, medication, auto-injectors, food and documents.' },
      { when: 'Provisioning', text: 'Buy everything for the full Hakone stay before you get on the mountain: two dinners, breakfasts, packed lunches, snacks, one shelf-stable backup meal, caffeine-free drinks. Do this at Odakyu OX by Odawara Station\u2019s east exit, the last full supermarket before the mountain — Gōra has convenience shopping, not a selection.' },
      { when: 'Transfer', text: 'Odakyu Romancecar from Shinjuku to Hakone-Yumoto, about 85 minutes, reserved seats. Book the front row if you can.' },
      { when: 'Side quest', text: '🎮 The Evangelion Store at Hakone-Yumoto. Hakone is Tokyo-3. Hakone-exclusive merchandise. Fifteen minutes, right on your way.' },
      { when: 'Evening', text: 'Check into the villa early. Cook together. Use the private onsen. Schedule nothing.' },
    ],
    dests: ['hakone-yumoto', 'hakone-yuryo'],
    food: 'This is the day the food plan earns its keep. Arrive at the villa with everything you need for two days.',
    note: 'Luggage forwarding is the difference between a pleasant transfer and hauling suitcases onto a mountain railway.',
  },
  {
    day: 6, city: 'Hakone', title: 'Slow Hakone', jp: '箱根ゆっくり',
    theme: 'One excursion. Then stop.',
    blocks: [
      { when: 'Choose exactly one', text: 'The Open-Air Museum (best all-round: outdoors, unhurried, picnic-friendly, has a free footbath). Or Lake Ashi and the Hakone Shrine torii, early, for the photograph. Or the ropeway over Ōwakudani if the volcanic status is green and the sky is clear.' },
      { when: 'Do not', text: 'Attempt the full Hakone loop. It is a six-hour transport chain designed for day-trippers from Tokyo, and you are not day-tripping — you have a villa with a private hot spring in it.' },
      { when: 'Afternoon', text: 'Back early. Onsen, rest, cook, sit outside.' },
      { when: 'Evening', text: 'The one Hakone restaurant attempt, if approved in writing: Gōra Brewery & Grill, eight minutes on foot — the Nobu sister restaurant, doing grilled steak, sushi and Japanese plates à la carte in a valley where almost every other dinner is a fixed kaiseki. The Hyatt Regency\'s French dining room is the backup. Otherwise cook at the villa. Either way, nothing else scheduled — this should be the least structured day of the trip.' },
    ],
    dests: ['hakone-openair', 'lake-ashi', 'hakone-ropeway', 'gora', 'pola-museum', 'sengokuhara', 'eat-gora', 'eat-rock', 'eat-hyatt', 'hakone-museum-art', 'hakone-sekisho', 'narukawa', 'lalique'],
    food: 'Packed lunch — the Open-Air Museum grounds are made for it. Dinner out, though: Gōra has a grill, a sushi counter and a yakiniku house within reach.',
  },
  {
    day: 7, city: 'Kyoto', title: 'Hakone → Kyoto', jp: '京都へ',
    theme: 'Transfer, settle, and the first Gion evening.',
    blocks: [
      { when: 'Morning', text: 'Breakfast at the villa. Hakone-Yumoto → Odawara → Shinkansen to Kyoto. About 2h15 total. Sit on the right-hand side (E seats) leaving Odawara for the Fuji view.' },
      { when: 'Afternoon', text: 'Check into the Kyoto apartment, collect the forwarded luggage, and repeat the food setup: breakfast shelf, emergency snacks, plain ingredients, flare-up foods, separate utensils, safe drinks, one backup dinner.' },
      { when: 'Evening', text: '⭐ Kyō no Yakiniku-dokoro Hiro on the Takasegawa — a Kyoto butcher\'s own yakiniku house, ordered shio and grilled at your table, which is the most controllable format there is. It sits a minute from Pontochō, so dinner and the first Gion walk are the same trip.',},{ when: 'After dinner', text: 'The Gion circuit. Shirakawa Canal, Hanamikōji, Yasaka Shrine with its lanterns lit, Maruyama Park. Go about 30–60 minutes after sunset when the lanterns are on but the sky still has colour.' },
    ],
    dests: ['gion', 'shirakawa', 'yasaka', 'eat-hiro', 'kennin-ji', 'pontocho', 'kiyomizu-dera', 'sanjusangendo', 'kyoto-national-museum'],
    food: 'Gion itself is kaiseki country and kaiseki stays out — no single plate to modify. Everything else in Kyoto is open.',
  },
  {
    day: 8, city: 'Kyoto', title: 'Classic Higashiyama', jp: '東山',
    theme: 'The famous half of Kyoto, done early enough to enjoy.',
    blocks: [
      { when: 'Very early', text: '⭐ Kiyomizu-dera opens at 6:00. Being on Sannenzaka at 7am with the shops shuttered and mist in the lane is the best hour available in Kyoto, and it is free.' },
      { when: 'Morning', text: 'Down through Ninenzaka, past the Yasaka Pagoda, to Kōdai-ji — far quieter, and its story is a marriage story.' },
      { when: 'Afternoon', text: 'Nanzen-ji and the brick aqueduct, then the Philosopher\'s Path north. Stop at Hōnen-in, which is free, tiny and almost always empty.' },
      { when: 'Romantic option', text: 'A private photography session in kimono, a pottery or incense workshop, or a garden visit. ⚠️ A traditional tea ceremony is not a good fit — matcha is caffeinated and the accompanying sweets are almost never labelled and commonly contain bean and nut pastes.' },
      { when: 'Evening', text: 'The main Kyoto dinner, if it cleared: FORNI at Hotel The Mitsui — Italian, and the only kitchen on the list whose published allergen menu covers the twenty recommended items as well as the mandatory eight. Otherwise Gion again, or home.' },
    ],
    dests: ['kiyomizu-dera', 'sannenzaka', 'kodai-ji', 'nanzen-ji', 'philosophers-path', 'ginkaku-ji', 'eat-hyoto', 'sanjusangendo', 'kyoto-national-museum', 'kyocera-museum', 'arashiyama', 'fushimi-inari'],
    food: '⚠️ Yudōfu — hot tofu — is the Nanzen-ji area speciality. Carry lunch so hunger never makes the decision for you.',
    note: 'Three or four sites, not six. This is the day people overpack and regret.',
  },
  {
    day: 9, city: 'Uji', title: 'Nintendo Museum & Uji', jp: '任天堂・宇治',
    theme: 'Gaming history in the morning, thousand-year-old Japan in the afternoon.',
    blocks: [
      { when: 'Morning', text: '🎮 Nintendo Museum, Uji. Playable oversized controllers, the complete archive from 1889 hanafuda cards onward, and a hanafuda workshop if you want it. 2–3 hours.' },
      { when: 'Afternoon', text: 'Byōdō-in — the Phoenix Hall from 1053, the building on the ¥10 coin. Get the timed interior ticket on arrival. Then the Uji riverside, Tachibana Island, and Ujigami Shrine.' },
      { when: 'Optional return', text: 'Fushimi Inari is on the same rail corridor back into Kyoto, and after dark the lower torii tunnels are lit and nearly empty.' },
    ],
    dests: ['nintendo-museum', 'byodoin', 'uji', 'fushimi-inari', 'genji-museum', 'ujigami'],
    food: '⚠️ Uji is the historic capital of Japanese green tea, and every second shop sells matcha in some form. Delightful to browse; be aware it is caffeine in quantities people underestimate, including in the sweets.',
    note: '🎟️ The whole day depends on winning the Nintendo Museum lottery. Book this before flights and build the week around the date.',
  },
  {
    day: 10, city: 'Kyoto', title: 'Arashiyama or the North', jp: '嵐山',
    theme: 'One geographic area. Do not cross the city twice.',
    blocks: [
      { when: 'The day, one area only', text: '⭐ Bamboo grove before 8am, then Tenryū-ji through the north gate, Ōkōchi Sansō (¥1,000, includes tea, and empty), and the Togetsukyō bridge. Rent a rowboat on the river — genuinely one of the best hours of the trip.' },
      { when: 'Evening', text: 'Yonefuku, three minutes from the apartment — tempura fried in 100% rice oil rather than blended vegetable oil, which answers the soybean-oil question before it is asked. Salt instead of tentsuyu, plus sashimi on the same menu. Do not add another major site to the end of this day.' },
    ],
    dests: ['arashiyama', 'tenryu-ji', 'togetsukyo', 'sagano-train', 'kinkaku-ji', 'ryoan-ji', 'kibune', 'ohara', 'eat-yonefuku', 'ninna-ji'],
    food: 'Packed lunch for the walking. Shigetsu at Tenryū-ji serves shōjin ryōri as a fixed course — beautiful, and not something you can adjust plate by plate.',
  },
  {
    day: 11, city: 'Kyoto', title: 'Manga & a Choice', jp: 'マンガ・選択',
    theme: 'A relaxed morning, then either romance or one more gaming quest.',
    blocks: [
      { when: 'Morning', text: '📚 Kyoto International Manga Museum. 50,000 volumes on open shelves, a converted 1869 schoolhouse, and a lawn people read on for hours. ⚠️ Closed Wednesdays — check before fixing this day.' },
      { when: 'Afternoon', text: 'Nijō Castle and its nightingale floors (10 min walk), Nishiki Market for knives and ceramics rather than food, a craft workshop, or simply an unplanned afternoon.' },
      { when: 'Evening', text: 'Last Kyoto night. Teppan Hanaroku at Hotel Kanra — A5 wagyu cooked at a counter you can walk home from, from about ¥8,000. YASAKA at the Park Hyatt, up above the Yasaka Pagoda, is the splurge alternative at ¥33,000 a head. Then Gion, Pontochō, or the Shirakawa canal one more time.' },
    ],
    dests: ['manga-museum', 'nijo-castle', 'nishiki', 'pontocho', 'den-den-town', 'usj', 'eat-hanaroku', 'eat-yasaka', 'eat-forni', 'kyoto-imperial-palace', 'osaka-castle', 'kofuku-ji', 'nara-national-museum', 'fushimi-inari'],
    food: '⚠️ If you go to Osaka: eat before you leave and bring dinner. Osaka street food is griddles and fryers shared by everyone, sauces made off-site, and no one with time to answer a question — the hardest eating environment on this whole trip.',
  },
  {
    day: 12, city: 'Departure', title: 'Departure', jp: '出発',
    theme: 'Home.',
    blocks: [
      { when: 'Morning', text: 'A familiar breakfast in the apartment. Pack safe food for the airport and the flight — this is a long travel day and airline food is not a solvable problem.' },
      { when: 'Transfer', text: 'Kyoto → Kansai International: the Haruka limited express, about 80 minutes direct. Allow three hours at KIX for an international departure.' },
      { when: 'Booking note', text: '✈️ Fly open-jaw — into Tokyo, out of Osaka. Backtracking to Tokyo costs most of a day and adds nothing.' },
    ],
    dests: ['to-ji'],
    food: 'Pack more food than you think you need. Airport options are limited and the flight is long.',
  },
];

/* ───────────────────────────── FOOD SAFETY ───────────────────────────── */

/**
 * The parts of eating in Japan that are true for everyone.
 *
 * Anything allergen-specific lives in data-allergens.js and is chosen on the
 * page — this file holds only what does not change with the traveller: how the
 * labelling law actually works, which formats are easy to ask in, and the
 * rhythm that keeps a trip from turning into a food-logistics exercise.
 */
window.FOOD = {
  principles: [
    { n: 1, t: 'Screen the restaurant once, then choose the dish', d: 'Only an allergen a kitchen genuinely cannot separate rules out a whole venue. Everything else is a per-plate question — a kitchen can use an ingredient all evening and still be an excellent choice if one or two good dishes avoid it.' },
    { n: 2, t: 'Order Japanese, not around it', d: 'Sushi, salt-grilled fish, shio yakitori, yakiniku, teppanyaki. These are not compromises. They are some of the best food in the country and most of them are naturally simple: few ingredients, cooked in front of you, seasoned at the end.' },
    { n: 3, t: 'Avoid fixed-menu meals', d: 'Kaiseki and meal-inclusive ryokan dinners are a set sequence decided days ahead. There is no single plate to modify, which is the one thing that makes everything else workable. Book à la carte where you can.' },
    { n: 4, t: 'Keep a fallback and use it rarely', d: 'A kitchen at your base and something safe in the bag, so a restaurant saying no is an inconvenience rather than a crisis — and so hunger never makes the decision for you.' },
  ],

  /* The finding that changes how any allergy has to be handled here. */
  labelling: {
    headline: 'Japan labels eight allergens by law, recommends twenty more, and exempts restaurants entirely.',
    points: [
      { k: 'The mandatory eight', v: 'Egg, milk, wheat, buckwheat, peanut, shrimp, crab and walnut must be declared on packaged food. If yours is one of these, a label that stays silent is meaningful — this is the strongest ground you get in Japan.' },
      { k: 'The recommended twenty', v: 'Soy, sesame, salmon, mackerel, squid, beef, pork, chicken, gelatin, cashew, almond, orange, kiwi, banana, peach, apple, yam, matsutake, sesame and abalone are encouraged, not required. A package can contain them and say nothing.' },
      { k: 'Anything else is unlisted', v: 'Mango, other tropical fruit, celery, mustard, lupin and most seeds appear on neither list. For these, reading the label proves nothing at all and the only useful information comes from asking a person.' },
      { k: 'Restaurants are outside the law', v: 'The labelling requirements cover packaged processed food. Food served in a restaurant is not covered, anywhere in Japan. Tokyo\'s own guidance for restaurants is advisory. This is why the strategy below is built on asking rather than reading.' },
    ],
  },

  /* Formats ranked by how easy they are to ask in, for anyone. */
  workable: [
    'Plain salt-grilled fish (shio-yaki)', 'Grilled meat, no marinade', 'Plain white rice',
    'Plain eggs', 'Steamed vegetables', 'Grilled vegetables',
    'Sashimi that has not been marinated, brushed or garnished',
  ],
  workableNote: 'Starting points, not guarantees. Each still needs confirming for your own allergens — but these are the dishes with the fewest ingredients and the shortest path between the kitchen and the plate.',

  dangerNote: 'Not forbidden — complicated. Each of these has several ingredients you cannot see, and most have a simpler neighbour on the same menu.',
  danger: [
    'Ramen', 'Udon and soba broth', 'Teriyaki and tare', 'Miso soup', 'Japanese curry',
    'Okonomiyaki', 'Takoyaki', 'Donburi', 'Salad dressings', 'Mayonnaise-based sauces',
    'Kaiseki', 'Sushi with sauces or marinades', 'Convenience-store prepared meals',
    'Buffets', 'Bakery creams and custards', 'Shared-fryer dishes',
  ],

  falseFriends: {
    title: 'Labels that do not mean what they look like',
    text: 'Do not assume a restaurant is safe because it advertises itself as vegan, vegetarian, gluten-free, organic or allergy-friendly. Those words describe a diet, not a cross-contact process, and in Japan plant-based cooking leans heavily on soy and sesame while gluten-free cooking leans on tamari, which is more soy rather than less. Ask the same questions you would ask anywhere else.',
  },

  rhythm: {
    breakfast: 'At your accommodation. Familiar food, no negotiation, and the one meal of the day that costs you nothing in attention.',
    lunch: 'Out, somewhere a compatible dish is easy to name: a sushi counter, a shioyaki teishoku, shio yakitori. Carry food on the long walking days and in the temple districts, where the options thin out.',
    dinner: 'Out, most nights, somewhere that has answered your questions. Cook when you want the evening in — not because there is nothing else.',
    goal: 'The kitchen is the safety net that makes eating out relaxed. It is not the plan.',
  },

  emergency: [
    'Adrenaline auto-injectors, if prescribed — carry two, together, on your person',
    'Copies of prescriptions',
    'Travel insurance documents',
    'A translated allergy card, printed and on both phones',
    'A list of nearby hospitals and clinics for each city',
    'Known-safe snacks',
    'One shelf-stable safe meal',
    'Usual medications',
    'Oral rehydration supplies',
  ],

  prepBeforeYouGo: [
    'Three safe breakfasts, tested at home',
    'Three safe lunches, tested at home',
    'Three safe dinners, tested at home',
    'Several shelf-stable snacks you actually like',
    'Foods that work when you are tired, stressed or unwell',
    'Your allergy card checked by a native speaker or a medical translation service',
  ],
};

/**
 * The allergy card, assembled on the page from whatever you select.
 *
 * The fixed parts live here; the allergen paragraphs come from
 * data-allergens.js. The disclaimer is not boilerplate — a machine-assembled
 * Japanese paragraph is a strong first draft and nothing more.
 */
window.CARD = {
  disclaimer:
    'Built from the allergens you selected. This is a strong first draft to hand to a professional translator, not a replacement for one — have a native speaker or a medical translation service check it before you rely on it in a restaurant. Print several copies, keep one in each bag, and store a photo on every phone.',
  openingEn: 'I have a serious food allergy. Please read this before we order.',
  openingJp: '食物アレルギーがあります。注文の前にご一読ください。',
  workableEn: 'What usually works: plain salt-grilled fish or meat with no marinade or sauce, plain white rice, plain steamed or grilled vegetables — cooked with clean utensils on a clean surface.',
  workableJp: '食べられるもの：味付けやソースのない塩焼きの魚または肉、白ご飯、蒸し野菜または焼き野菜。清潔な調理器具と清潔な調理面でお願いします。',
  emergency: {
    h: 'EMERGENCY / 緊急時',
    b: 'If I show signs of a severe reaction, call 119 for an ambulance. アナフィラキシーの症状が出た場合は、119番に電話して救急車を呼んでください。',
  },
};

/* ─────────────────────────────── LODGING ─────────────────────────────── */

window.LODGING = [
  {
    city: 'Tokyo', nights: 4, style: 'Luxury serviced apartment',
    where: 'Tokyo Station, Marunouchi, Ginza or Nihonbashi',
    why: 'Tokyo Station puts Akihabara, Asakusa, Ginza, Shibuya, the Hakone train and the Kyoto Shinkansen all within easy reach — and it is calmer and more polished at night than Akihabara or central Shinjuku.',
    examples: ['Oakwood Premier Tokyo — upscale, apartment kitchens', 'MIMARU — less conventionally luxurious, often more spacious, very functional'],
    must: ['Full kitchen', 'Refrigerator with freezer', 'Separate food-storage space', 'In-room laundry', 'Room to eat comfortably', 'Supermarket within a few minutes'],
    est: '$1,400–2,400',
    options: [
      {
        name: 'Oakwood Premier Tokyo',
        url: 'https://www.booking.com/hotel/jp/oakwood-premier-tokyo.html',
        price: '≈$630–695 / night',
        total: '≈$2,500–2,780 for 4 nights',
        note: 'Two minutes from Tokyo Station\'s Yaesu North exit, floors 6–19, full kitchen with fridge, microwave, oven and kitchenware. Full kitchen with oven, IH cooktop, dishwasher, cookware and a full-size fridge, plus a washer-dryer — substantially better than a kitchenette for cooking several days of safe meals. Ask for a Studio Executive or one-bedroom. \u26a0\ufe0f Phased room renovation runs May–September 2026; confirm no work overlaps your dates before booking.',
        fit: 'best',
      },
      {
        name: 'MIMARU Tokyo Station East',
        url: 'https://mimaruhotels.com/en/hotel/tokyo-station-east/',
        price: 'Varies by season — typically well under Oakwood',
        note: 'Hatchobori — quieter and more residential than Marunouchi, two minutes from Hatchobori Station and about fourteen on foot from Tokyo Station. Every room has a furnished kitchen with IH stove, fridge, microwave, pans, knives, boards, tableware and a real dining table, and there is a convenience store in the building. Functional rather than luxurious, and usually well under Oakwood.',
        fit: 'practical',
      },
    ],
  },
  {
    city: 'Hakone', nights: 2, style: 'Private villa with private onsen — room only',
    where: 'Gōra — the hillside hot-spring town on the mountain railway',
    why: 'A room-only villa keeps the most romantic part of Hakone — your own natural hot spring — without committing to a fixed kaiseki dinner nobody will adjust on the night.',
    examples: ['Search "貸切風呂 / 露天風呂付き 素泊まり" — private bath, room only', 'Vacation-rental villas with kitchens in Sengokuhara'],
    must: ['Private natural hot-spring bath', 'Complete kitchen', 'Refrigerator and freezer', 'Cookware and utensils', 'Dishwasher if possible', 'Grocery access or delivery'],
    est: '$1,000–2,000',
    warn: 'Do not buy a meal package unless the property confirms every major restriction in writing, in advance.',
    options: [
      {
        name: 'Rakuten STAY VILLA Hakone Gōra',
        url: 'https://rakuten-stay.jp/en/',
        price: 'from ≈$429 / night',
        total: '≈$860 for 2 nights',
        note: 'The single best lodging match in the whole plan. Seven minutes on foot from Gōra Station, rooms over 111 m\u00b2, and every one has its own private natural hot-spring bath. The kitchen is a real kitchen: IH hob, dishwasher, fridge, oven-microwave, rice cooker, hot plate, pots, pans, knives, boards, utensils, washer-dryer. \u26a0\ufe0f Book ROOM ONLY — its packaged breakfast and dinner sets are hot pots, steak sets and prepared sides whose seasonings are made off-site and cannot be described to you. The villa supplies coffee, creaming powder and welcome snacks: put those out of reach on arrival. It supplies no seasonings, which is useful — you bring your own verified salt and oil.',
        fit: 'best',
      },
      {
        name: 'Provision at Odawara, before the mountain',
        url: '',
        price: '—',
        note: 'Odakyu OX at Odawara Station\u2019s east exit is the last full supermarket before you go up. Gōra has convenience shopping, not a dependable selection. Buy two breakfasts, two dinners, two packed lunches, flare-up meals, safe snacks, verified plain salt and oil, and caffeine-free drinks — then get on the mountain railway. Japanese listings for other villas use 素泊まり (room only), 貸切風呂 (private bath) and 露天風呂付き客室 (room with its own open-air bath); those phrases on Rakuten Travel or Jalan surface places English search never shows.',
        fit: 'practical',
      },
    ],
  },
  {
    city: 'Kyoto', nights: 5, style: 'Kitchen-equipped apartment suite',
    where: 'Shijō–Karasuma — central, but easier to live in than Gion',
    why: 'Shijō–Karasuma is central without being as hard to live in as Gion: short transit to Kyoto Station, Uji and the Nintendo Museum, walking distance to Nishiki, the Manga Museum, Gion and Higashiyama — and, unlike Gion, actual supermarkets. Gion is the better place to walk at night and the worse place to sleep; you can go there every evening without depending on it for meals.',
    examples: ['Serviced apartments around Karasuma Oike', 'Machiya townhouse rentals with modern kitchens'],
    must: ['Full kitchen', 'Washer', 'Space to prepare and store food separately', 'Walking distance to a supermarket', 'Within reach of the Gion evening walk'],
    est: '$1,500–2,500',
    warn: 'Less traditional than a historic ryokan — but you can still spend every evening in Gion, Higashiyama and the lantern-lit streets. You are trading the dinner, not the city.',
    options: [
      {
        name: 'MIMARU SUITES Kyoto Shijo',
        url: 'https://mimaruhotels.com/en/hotel/suites-kyoto-shijo/',
        price: 'Varies by season',
        note: 'Three minutes from Shijō Station, six from Karasuma. Every suite has a fully furnished kitchen and dining area — IH stove, fridge, microwave, cookware, knives, boards, tableware — plus a washing machine and separate bedrooms, which matters over five nights in a way it does not over two. A Welcia drugstore is three minutes away and a FRESCO supermarket about fifteen. Suites are built for larger groups, so expect to pay for more space than two people need.',
        fit: 'best',
      },
      {
        name: 'MIMARU SUITES Kyoto Central',
        url: 'https://mimaruhotels.com/en/hotel/suites-kyoto-central/',
        price: 'Varies by season',
        note: 'Karasuma Oike — quieter evenings, same kitchen fit-out, close to the Manga Museum and Nijō Castle, still on the subway line to everything. The alternative if Shijō is booked or noisy on your dates.',
        fit: 'practical',
      },
      {
        name: '⚠️ Kyoto lodging tax rises in March 2026',
        url: '',
        price: 'Budget an extra ¥200+ pp per night',
        note: 'Kyoto charges an accommodation tax per person per night on top of the room rate, and the rates are scheduled to increase from March 2026. On five nights for two it is small but it is not nothing, and it is charged at checkout rather than shown in the booking price.',
        fit: 'note',
      },
    ],
  },
];

/* ──────────────────────────────── BUDGET ─────────────────────────────── */

window.BUDGET = {
  rows: [
    { k: 'Economy flights from Spokane (open-jaw)', lo: 2000, hi: 3200, note: 'In to Tokyo, out of Osaka' },
    { k: 'Tokyo serviced apartment, 4 nights', lo: 1400, hi: 2400 },
    { k: 'Hakone private-onsen villa, 2 nights', lo: 1000, hi: 2000 },
    { k: 'Kyoto apartment suite, 5 nights', lo: 1500, hi: 2500 },
    { k: 'Groceries and vetted restaurant meals', lo: 1200, hi: 2000, note: 'Lower than a restaurant-led trip' },
    { k: 'Trains and local transport', lo: 500, hi: 900, note: 'Incl. Shinkansen, Romancecar, luggage forwarding' },
    { k: 'Attractions and experiences', lo: 500, hi: 1000 },
    { k: 'Insurance and contingency', lo: 500, hi: 800 },
  ],
  target: { lo: 11000, hi: 12500 },
  note: 'Kitchen-equipped suites and a private villa cost more than ordinary hotels — but groceries and far fewer expensive restaurant meals offset a real part of the difference.',
};

/* ──────────────────────── BOOKING ORDER (by urgency) ─────────────────── */

window.BOOKINGS = [
  { when: 'First — before anything else', what: 'Nintendo Museum lottery', d: 'Monthly lottery, free Nintendo Account required, apply up to 3 months ahead, results on the 1st, pay by the 7th. No door tickets exist. Everything else bends around this date.', critical: true },
  { when: 'Then', what: 'Open-jaw flights', d: 'Into Tokyo (HND preferred), out of Kansai (KIX). Only once the museum date is known.' },
  { when: 'Then', what: 'The three lodgings', d: 'Kitchen-equipped properties in central locations are a much smaller pool than ordinary hotels. Book early and confirm the kitchen in writing.' },
  { when: '2–3 months out', what: 'Ghibli Museum, if wanted', d: 'Tickets released on the 10th of the month for the following month, via Lawson. They can sell out within hours.' },
  { when: '1–2 months out', what: 'teamLab Borderless', d: 'Timed entry. Weekend slots go first.' },
  { when: '1 month out', what: 'Shibuya Sky sunset slot', d: 'Cheaper online than at the door, and sunset slots sell out days ahead.' },
  { when: '1 month out', what: 'Restaurant vetting', d: 'Send the questions in writing to every restaurant you are considering. Allow time for replies and for ruling places out.' },
  { when: '2–4 weeks out', what: 'Allergy cards', d: 'Professional translation and review, then print multiple copies and photograph them.' },
  { when: '2 weeks out', what: 'Sagano train, if wanted', d: 'Reserved seats sell out in autumn. Closed Wednesdays and through winter.' },
  { when: 'Before you fly', what: 'Test every comfort meal at home', d: 'Three breakfasts, three lunches, three dinners, plus flare-day foods. Nothing gets introduced for the first time in Japan.', critical: true },
];
