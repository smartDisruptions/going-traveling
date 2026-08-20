/**
 * The destination library.
 *
 * `tier` is the planning stance, not a quality judgement:
 *   core     — in the recommended 12-day template
 *   nearby   — worth adding, close to something already in the plan
 *   optional — a real trade-off is involved; the entry says what it is
 *
 * `food` is written per place because the food-safety plan is the thing that
 * makes or breaks a day, and it is different at a temple with no food at all
 * than it is in a market street of shared fryers and unlabelled sauces.
 */
window.DESTINATIONS = [
  /* ─────────────────────────────── TOKYO ─────────────────────────────── */
  {
    id: 'tokyo-station',
    name: 'Tokyo Station & Marunouchi',
    jp: '東京駅・丸の内',
    city: 'Tokyo',
    area: 'Chiyoda',
    tier: 'core',
    tags: ['romance', 'base'],
    img: 'images/tokyo-station.jpg',
    time: 'Evening stroll, 1–2 h',
    cost: 'Free',
    station: 'Tokyo Station (JR, Marunouchi side)',
    blurb:
      'Your base, and quietly one of the most romantic night walks in the city — a restored 1914 red-brick station facing an avenue of illuminated zelkova trees.',
    detail:
      'The Marunouchi façade was rebuilt in 2012 to its original 1914 form, domes and all, after the wartime roof was lost. At night it is floodlit and reflected in the plaza pool, and almost nobody is there after about nine. Naka-dori, one street west, is a broad tree-lined avenue of flagship stores that keeps its lights strung through the branches for much of the year — it is the single easiest romantic evening in Tokyo, and it is downstairs from your apartment.',
    why: 'A trip base you can walk out of at 10pm and still have something beautiful to look at, without planning anything.',
    tips: [
      'The best view of the façade is from the second-floor terrace of the KITTE building opposite — free, indoors, and almost always empty at night.',
      'Daimaru and the Gransta food halls are inside the station: useful for groceries, dangerous for prepared food.',
      'Character Street and Ramen Street are in the basement — a compact anime-merchandise stop with no travel cost.',
    ],
    nearby: [
      { name: 'Imperial Palace East Gardens', note: 'Free, quiet, 10 min walk. Open most days except Mon/Fri.' },
      { name: 'KITTE rooftop garden', note: 'Free terrace over the tracks. Sunset views.' },
      { name: 'Nihonbashi', note: '15 min walk — the old merchant heart of Edo.' },
    ],
    food: 'Supermarkets: Seijo Ishii and Precce in the station complex, plus a full Life supermarket a short walk toward Kyobashi. This is the best-provisioned base of the three cities.',
  },
  {
    id: 'sensoji',
    name: 'Sensō-ji & Asakusa',
    jp: '浅草寺',
    city: 'Tokyo',
    area: 'Asakusa',
    tier: 'core',
    tags: ['history', 'romance'],
    img: 'images/sensoji.jpg',
    time: '2–3 h',
    cost: 'Free',
    station: 'Asakusa (Ginza/Asakusa lines) — ~20 min from Tokyo Station',
    blurb:
      "Tokyo's oldest temple, founded in 645 around a statue two fishermen pulled from the Sumida River. The giant red lantern at Kaminarimon is the most photographed object in the city.",
    detail:
      'The current halls are post-war reconstructions — the originals burned in the 1945 firebombing — but the plan is ancient and the atmosphere is genuine. Go early. Between 7 and 9am the approach is nearly empty, the light is low and gold, and you can actually hear the place. By eleven it is shoulder to shoulder. The five-storey pagoda, the incense cauldron, and the Asakusa Shrine tucked to the right of the main hall are all worth the extra ten minutes.',
    why: 'The classic first-morning-in-Japan experience, and genuinely beautiful before the crowds. Free, unhurried, and it sets the tone.',
    tips: [
      'Arrive before 9am. This is the single highest-leverage timing decision in Tokyo.',
      'The temple grounds are open 24 hours; the main hall opens 6:00 (6:30 in winter). Night visits are lit and almost deserted.',
      'Omikuji fortunes here are famous for being harsh — tie a bad one to the rack and leave it behind.',
    ],
    nearby: [
      { name: 'Nakamise-dōri', note: 'The approach street itself — 250m of stalls, on site.' },
      { name: 'Sumida Park', note: '5 min. Riverside cherry trees, Skytree views.' },
      { name: 'Kappabashi Kitchen Town', note: '15 min walk. Knives, ceramics, cookware — a genuinely great trip souvenir street.' },
      { name: 'Tokyo Skytree', note: 'One stop across the river.' },
    ],
    food:
      'Street food, and the whole of it: shared fryers, shared irons, unlabelled batters and sauces nobody can recite. A hard environment for any allergy, not just a strict one. Eat before you come and treat the street as scenery.',
  },
  {
    id: 'nakamise',
    name: 'Nakamise-dōri',
    jp: '仲見世通り',
    city: 'Tokyo',
    area: 'Asakusa',
    tier: 'core',
    tags: ['history', 'food'],
    img: 'images/nakamise.jpg',
    time: '30–45 min',
    cost: 'Free',
    station: 'Asakusa',
    blurb:
      'The 250-metre shopping street between the outer gate and the temple. Vendors have traded on this spot since the late 1600s, when neighbours were granted the right to sell in exchange for sweeping the grounds.',
    detail:
      'Around ninety stalls: hand fans, folding combs, yukata, lacquer, and a great deal of confectionery made in front of you. It is touristy in the way that a 300-year-old thing is allowed to be. The side lanes running parallel — Denbōin-dōri especially — are quieter, older-feeling, and where the better craft shops actually are.',
    why: 'Souvenir shopping that is also a historic site. Good for gifts; excellent for people-watching.',
    tips: [
      'Photography of individual stalls is discouraged while trading — shoot the street, not the vendor.',
      'Denbōin-dōri, one lane west, has the Edo-style shopfronts and a fraction of the crowd.',
    ],
    nearby: [{ name: 'Sensō-ji', note: 'Directly at the end of the street.' }],
    food:
      '⚠️ Almost everything on this street is made in shared equipment — ningyo-yaki in the same irons, age-manju in the same fryer, senbei brushed from a common pot. There is nobody to ask and no label. Beautiful to walk, not a place to eat.',
  },
  {
    id: 'akihabara',
    name: 'Akihabara Electric Town',
    jp: '秋葉原電気街',
    city: 'Tokyo',
    area: 'Chiyoda',
    tier: 'core',
    tags: ['gaming', 'anime'],
    img: 'images/akihabara.jpg',
    time: '3–4 h',
    cost: 'Free to browse',
    station: 'Akihabara — 4 min from Tokyo Station on the Yamanote line',
    blurb:
      'Post-war radio parts market turned electronics district turned the global centre of gravity for anime, retro gaming, and hobby culture.',
    detail:
      'The district rewards depth over breadth. Super Potato (retro games, 3 floors, an arcade on top), Mandarake Complex (8 floors of second-hand everything), Yodobashi Akiba (nine floors of electronics, the largest in the city), Radio Kaikan (figures and models), and the back streets west of the station where the genuinely obscure shops live. Trying to do all of it produces a blur; picking four buildings produces a memory.',
    why: 'The anchor of the gaming and anime thread of this trip, four minutes from your front door.',
    tips: [
      'Pick four buildings before you go. The district is designed to defeat completionism.',
      'Chūō-dōri closes to traffic on Sunday afternoons — the best time to walk it.',
      'Retro game prices have climbed steeply; Super Potato is the museum, the smaller Mandarake floors are the market.',
      'Tax-free counters need your passport. Bring it if you plan to spend over ¥5,000.',
    ],
    nearby: [
      { name: 'Kanda Myōjin', note: '7 min uphill walk. A 1,300-year-old shrine that sells anime charms and blesses electronics — the strangest, best juxtaposition in Tokyo.' },
      { name: 'Nakano Broadway', note: '25 min west. Denser, cheaper, more collector-focused than Akihabara.' },
      { name: '2k540 Aki-Oka Artisan', note: 'Under the rail arches — craft studios and workshops. A quiet counterweight.' },
    ],
    food: 'Themed cafés here are a hard no — fixed menus, no ingredient control. Eat before or after.',
  },
  {
    id: 'meiji-jingu',
    name: 'Meiji Jingū',
    jp: '明治神宮',
    city: 'Tokyo',
    area: 'Shibuya',
    tier: 'core',
    tags: ['history', 'nature', 'romance'],
    img: 'images/meiji-jingu.jpg',
    time: '1.5–2 h',
    cost: 'Free (Inner Garden ¥500)',
    station: 'Harajuku / Meiji-jingūmae',
    blurb:
      'A Shinto shrine in a 170-acre forest that did not exist a century ago — 100,000 trees donated from every province in Japan and planted by volunteers in 1920.',
    detail:
      'The forest was designed to become, over 150 years, a self-sustaining native woodland. It is ahead of schedule. Walking the gravel approach under the great wooden torii, with traffic noise falling away within about ninety seconds, is one of the genuinely startling transitions in any city. The shrine honours Emperor Meiji and Empress Shōken. If you are lucky you will see a Shinto wedding procession cross the courtyard — the bride under a white silk hood, a priest leading, a red parasol held overhead.',
    why: 'The most likely place on this itinerary to accidentally witness someone else\'s wedding on your trip. Also the calmest 90 minutes in Tokyo.',
    tips: [
      'Opens at sunrise, closes at sunset — hours shift monthly, check the board at the gate.',
      'The Inner Garden (¥500) has an iris field that peaks in mid-June and Kiyomasa\'s Well, a minor power spot.',
      'Bow once before passing through the torii. Walk to the side of the path, not the centre — the middle is for the kami.',
      'Write an ema wish tablet together and hang it at the camphor tree couple. Costs about ¥500.',
    ],
    nearby: [
      { name: 'Yoyogi Park', note: 'Adjacent. Sunday afternoons bring the rockabilly dancers.' },
      { name: 'Takeshita Street', note: '3 min. Total tonal whiplash, which is the fun of it.' },
      { name: 'Omotesandō', note: '10 min. Architecture, calm, expensive coffee.' },
    ],
    food: 'Nothing to eat inside, which makes this an easy safe morning. Carry water.',
  },
  {
    id: 'harajuku',
    name: 'Harajuku & Takeshita Street',
    jp: '原宿・竹下通り',
    city: 'Tokyo',
    area: 'Shibuya',
    tier: 'core',
    tags: ['culture'],
    img: 'images/harajuku.jpg',
    time: '45 min–1.5 h',
    cost: 'Free',
    station: 'Harajuku',
    blurb:
      'A 350-metre pedestrian street that has been the engine room of Japanese youth fashion since the 1970s.',
    detail:
      'Loud, saturated, crowded, and over quickly — which is the right way to take it. The interesting fashion has largely moved to the surrounding backstreets of Ura-Harajuku, where the small labels and vintage shops are. Takeshita itself is now mostly crêpes, photo booths, and character stores, but it remains a genuine spectacle.',
    why: 'Ten minutes from the silence of Meiji Jingū to the loudest street in Tokyo. The contrast is the point.',
    tips: [
      'Walk it north to south and come out at Meiji-dōri — do not try to browse, just experience it.',
      'Ura-Harajuku (the backstreets east of Takeshita) is where the actual shopping is.',
    ],
    nearby: [
      { name: 'Ura-Harajuku', note: 'Immediately east. Small labels, quiet lanes.' },
      { name: 'Cat Street', note: 'Pedestrian route connecting Harajuku to Shibuya.' },
    ],
    food:
      '⚠️ The famous crêpes are the worst case: shared batter irons, cream, chocolate, nut toppings and fruit fillings assembled on one counter. Nothing here is separable. Eat before or after.',
  },
  {
    id: 'omotesando',
    name: 'Omotesandō',
    jp: '表参道',
    city: 'Tokyo',
    area: 'Minato',
    tier: 'core',
    tags: ['romance', 'art'],
    img: 'images/omotesando.jpg',
    time: '1 h',
    cost: 'Free',
    station: 'Omotesandō / Meiji-jingūmae',
    blurb:
      'The zelkova-lined boulevard originally built as the formal approach to Meiji Jingū, now an open-air museum of contemporary architecture.',
    detail:
      'Within a few hundred metres: Herzog & de Meuron\'s crystalline Prada building, Tadao Andō\'s Omotesandō Hills, Kengo Kuma\'s Sunny Hills, Toyo Itō\'s Tod\'s. You do not have to go into any of them. The street is calm, wide, and shaded, and after Takeshita it feels like exhaling. In December the trees carry champagne-gold illumination.',
    why: 'The most adult, unhurried hour in west Tokyo. Good for holding hands and looking at buildings.',
    tips: [
      'The Nezu Museum at the far end (¥1,300) has a superb hidden garden with teahouses — one of the best quiet spots in the city.',
      'Winter illumination usually runs late November to Christmas.',
    ],
    nearby: [
      { name: 'Nezu Museum garden', note: '8 min. Bamboo, ponds, stone paths, almost silent.' },
      { name: 'Aoyama Cemetery', note: 'Unexpectedly beautiful cherry avenue in spring.' },
    ],
    food: 'Plenty of cafés, none pre-vetted. Treat as a walk, not a meal.',
  },
  {
    id: 'shibuya',
    name: 'Shibuya & PARCO',
    jp: '渋谷・パルコ',
    city: 'Tokyo',
    area: 'Shibuya',
    tier: 'core',
    tags: ['gaming', 'anime', 'culture'],
    img: 'images/shibuya.jpg',
    time: '2–3 h',
    cost: 'Free to browse',
    station: 'Shibuya',
    blurb:
      'The scramble crossing, and — six floors up in PARCO — the single most efficient gaming stop in Japan: Nintendo TOKYO, Pokémon Center Shibuya, and CAPCOM STORE TOKYO on one floor.',
    detail:
      'Nintendo TOKYO was the first official Nintendo store in Japan (opened 2019) and carries exclusive merchandise you cannot buy elsewhere. Pokémon Center Shibuya is themed around a hidden laboratory and has a Mewtwo installation. CAPCOM STORE TOKYO covers Monster Hunter, Street Fighter and Resident Evil. They share the 6th floor of PARCO, along with a Jump shop and a Shonen Jump store. One elevator ride covers what would otherwise be three separate trips across the city.',
    why: 'Three gaming pilgrimages, two hours, one building. Then the crossing at night, which is free and genuinely cinematic.',
    tips: [
      'Weekday mornings at opening (11:00) are dramatically calmer than weekend afternoons.',
      'Nintendo TOKYO issues numbered entry tickets on busy days — arrive at opening to avoid this.',
      'The Hachikō statue is on the north-west side. It is small and always surrounded; the story is better than the photo.',
      'Best free crossing view: the Starbucks in Tsutaya, second floor window — if you can get a seat.',
    ],
    nearby: [
      { name: 'Shibuya Sky', note: 'Same station complex — the sunset booking.' },
      { name: 'Miyashita Park', note: 'Rooftop park over a shopping street. Good sunset light.' },
      { name: 'Shimokitazawa', note: '5 min by train. Vintage shops, tiny theatres, no skyscrapers.' },
    ],
    food: 'Shibuya food is fast, crowded and hard to verify. Plan to eat at the apartment either side of this.',
  },
  {
    id: 'shibuya-sky',
    name: 'Shibuya Sky',
    jp: '渋谷スカイ',
    city: 'Tokyo',
    area: 'Shibuya',
    tier: 'core',
    tags: ['romance'],
    img: 'images/shibuya-sky.jpg',
    time: '1–1.5 h',
    cost: '¥2,700 before 3pm, ¥3,400 after — a sunset slot is the higher tier',
    station: 'Shibuya (Scramble Square, direct)',
    blurb:
      'An open-air rooftop 230 metres above the crossing. No glass between you and the city — just a net and a lot of sky.',
    detail:
      'The 46th-floor rooftop deck is genuinely open to the air, which is what separates it from every other Tokyo observatory. On a clear evening Fuji sits on the western horizon with the sun going down behind it. The corner "Sky Edge" is the famous photograph; the hammocks and the sloped lawn on the far side are where you actually want to spend the time.',
    why: 'The romantic set-piece of the Tokyo half. Book a slot ~40 minutes before sunset and stay through blue hour.',
    tips: [
      'Book online in advance — sunset slots sell out days ahead and cost less than at the door.',
      'Closes in rain or high wind; the rooftop is the first thing shut. Have a fallback evening.',
      'No bags, tripods or loose items on the rooftop — everything goes in a free locker. Phones need a wrist strap.',
      'Sunset time shifts a lot by season. Check the actual time for your date, then book the slot before it.',
    ],
    nearby: [
      { name: 'Shibuya PARCO', note: '8 min walk — pair the gaming floor with the sunset.' },
      { name: 'Tokyo Tower / Azabudai', note: 'The alternative skyline evening.' },
    ],
    food: 'There is a bar at the top. Alcohol-free options exist but ingredients are not verifiable — treat drinks as a no.',
  },
  {
    id: 'teamlab',
    name: 'teamLab Borderless',
    jp: 'チームラボボーダレス',
    city: 'Tokyo',
    area: 'Azabudai Hills, Minato',
    tier: 'core',
    tags: ['art', 'romance', 'tech'],
    img: null,
    time: '2–3 h',
    cost: 'from ≈¥3,800 pp, varies by date; +¥200 if bought at the door',
    station: 'Kamiyachō / Roppongi-itchōme',
    blurb:
      'A museum with no map and no fixed rooms. The artworks walk out of their own galleries, move through corridors, and respond to where you stand.',
    detail:
      'Reopened at Azabudai Hills in February 2024 after leaving Odaiba. "Borderless" is literal — works migrate between spaces and interact with each other and with you, so no two visits produce the same sequence. The Lamp Forest, the waterfall room, and the Bubble Universe are the ones people talk about afterwards. It is dark, warm, slow-moving and unusually intimate for a major attraction, which is why it works on a trip in a way most museums do not.',
    why: 'The futuristic-Tokyo thread of this trip, delivered as something you experience together rather than look at.',
    tips: [
      'Book online well ahead — timed entry, and weekend slots go first.',
      'Wear flat shoes and avoid skirts; several floors are mirrored and some rooms have water.',
      'White or light clothing catches the projections and photographs far better than black.',
      'Give it three hours if you can. Two is enough; three is when you stop rushing.',
    ],
    nearby: [
      { name: 'Azabudai Hills', note: 'On site — gardens, plaza, and the Mori JP Tower.' },
      { name: 'Tokyo Tower', note: '12 min walk. Best paired the same evening.' },
      { name: 'Zōjō-ji', note: '15 min. Temple with Tokyo Tower rising directly behind it — the classic layered shot.' },
      { name: 'teamLab Planets, Toyosu', note: 'The other one — barefoot, water to the knee. A different experience, not a substitute.' },
    ],
    food: 'The En Tea House serves tea with projected flowers — beautiful, and caffeinated. Not a fit.',
  },
  {
    id: 'tokyo-tower',
    name: 'Tokyo Tower',
    jp: '東京タワー',
    city: 'Tokyo',
    area: 'Minato',
    tier: 'core',
    tags: ['romance', 'history'],
    img: 'images/tokyo-tower.jpg',
    time: '1 h (or just look at it)',
    cost: 'Free outside; ¥1,500 main deck',
    station: 'Akabanebashi / Kamiyachō',
    blurb:
      'Built in 1958, thirteen metres taller than the Eiffel Tower it was modelled on, and painted international orange because aviation law required it.',
    detail:
      'Skytree is taller and Shibuya Sky has the better view, but Tokyo Tower is the one that looks like something. It is most beautiful from outside and below, lit warm orange on winter nights and white in summer. If you are already at Azabudai Hills for teamLab it is a twelve-minute walk, and the approach from Zōjō-ji temple — old wooden gate in the foreground, orange lattice behind — is the photograph worth having.',
    why: 'A ten-minute detour that produces the most recognisably romantic image of Tokyo. Going up is optional.',
    tips: [
      'The temple-and-tower view from Zōjō-ji costs nothing and beats the observation deck.',
      'Lighting changes seasonally: warm orange October–April, cool white May–September.',
      'The "Landmark Light" turns off at midnight.',
    ],
    nearby: [
      { name: 'Zōjō-ji', note: '5 min. The foreground for every good Tokyo Tower photo.' },
      { name: 'Shiba Park', note: 'Adjacent, quiet, good benches.' },
      { name: 'teamLab Borderless', note: '12 min walk.' },
    ],
    food: 'Nothing needed. This is a walk-past.',
  },
  {
    id: 'ginza',
    name: 'Ginza',
    jp: '銀座',
    city: 'Tokyo',
    area: 'Chūō',
    tier: 'core',
    tags: ['romance'],
    img: 'images/ginza.jpg',
    time: '1–2 h',
    cost: 'Free',
    station: 'Ginza — 10 min walk from Tokyo Station',
    blurb:
      'Built on a former silver mint, rebuilt in brick after the 1872 fire, and still the most composed shopping district in Japan.',
    detail:
      'The Wakō clock tower at the 4-chōme crossing has been keeping Ginza\'s time since 1932. On weekend afternoons the main avenue closes to cars and becomes a pedestrian promenade — "Hokōsha Tengoku", pedestrian heaven — and people simply walk down the middle of Chūō-dōri. Evenings are quiet, well-lit and unhurried. Ginza Six has a rooftop garden that is free, usually empty, and has a good view.',
    why: 'Ten minutes from your apartment, and the most elegant evening walk in Tokyo that costs nothing.',
    tips: [
      'Pedestrian-only: Saturdays, Sundays and holidays, roughly noon–5pm (to 6pm in summer).',
      'Ginza Six rooftop is free and almost nobody knows about it.',
      'Itōya, the twelve-floor stationery store, is a genuinely lovely hour for anyone who likes paper.',
    ],
    nearby: [
      { name: 'Kabukiza Theatre', note: '5 min. Single-act tickets let you see 45–60 min of kabuki without committing to four hours.' },
      { name: 'Hama-rikyū Gardens', note: '15 min. Former shogunal duck-hunting grounds, seawater tidal pond, skyscrapers behind.' },
      { name: 'Tsukiji Outer Market', note: '12 min. Morning only. Fascinating; a food-safety minefield.' },
    ],
    food: 'Depachika food halls under the department stores are excellent for ingredients and terrible for prepared food.',
  },
  {
    id: 'nihonbashi',
    name: 'Nihonbashi',
    jp: '日本橋',
    city: 'Tokyo',
    area: 'Chūō',
    tier: 'nearby',
    tags: ['history'],
    img: 'images/nihonbashi.jpg',
    time: '45 min',
    cost: 'Free',
    station: 'Nihonbashi / Mitsukoshimae',
    blurb:
      'Kilometre zero. Every road distance in Japan has been measured from this bridge since 1604.',
    detail:
      'The current stone bridge dates to 1911 and carries bronze lions and kirin. An elevated expressway was built over it for the 1964 Olympics and has sat there ever since — but it is now being buried underground, with the bridge due to see open sky again in the 2040s. The surrounding district holds the oldest merchant houses in Tokyo: Mitsukoshi, Japan\'s first department store, and shops selling knives, paper and dried bonito that have been in the same family for three centuries.',
    why: 'A fifteen-minute walk from Tokyo Station into the actual origin point of the country\'s road network.',
    tips: [
      'Look for the brass marker set into the middle of the bridge — that is the zero point.',
      'Ninben (bonito, since 1699) and Kiya (knives, since 1792) are still trading.',
    ],
    nearby: [
      { name: 'Coredo Muromachi', note: 'Modern complex with craft and food floors.' },
      { name: 'Tokyo Station', note: '15 min walk.' },
    ],
    food: 'Depachika at Mitsukoshi is a good grocery run.',
  },
  {
    id: 'skytree',
    name: 'Tokyo Skytree & Sumida',
    jp: '東京スカイツリー',
    city: 'Tokyo',
    area: 'Sumida',
    tier: 'nearby',
    tags: ['romance', 'tech'],
    img: 'images/skytree.jpg',
    time: '2 h',
    cost: '¥2,400–3,500 pp',
    station: 'Tokyo Skytree / Oshiage',
    blurb:
      'At 634 metres, the tallest tower in the world — a number chosen because 6-3-4 reads as "mu-sa-shi", the old name for this region.',
    detail:
      'The structure borrows its central column principle from five-storey pagodas, which is why it shrugs off earthquakes. Two decks: 350m and 450m. The higher one has a spiralling glass ramp. It is a better daytime view than Shibuya Sky because you can see Fuji and the Kantō plain properly, and a worse evening one because you are behind glass.',
    why: 'A strong alternative or addition if Shibuya Sky is rained out.',
    tips: [
      'Weather-dependent — buy same-day once you can see the sky, rather than booking ahead.',
      'The Sumida riverside walk between Asakusa and Skytree is free and lovely at dusk.',
      'Pokémon Center Skytree and a Studio Ghibli shop are in the Solamachi mall at the base.',
    ],
    nearby: [
      { name: 'Sensō-ji / Asakusa', note: 'One stop or a 20 min riverside walk.' },
      { name: 'Sumida Park', note: 'Cherry trees along the water.' },
    ],
    food: 'Solamachi has 300 restaurants and no way to verify any of them quickly.',
  },
  {
    id: 'shinjuku-gyoen',
    name: 'Shinjuku Gyoen',
    jp: '新宿御苑',
    city: 'Tokyo',
    area: 'Shinjuku',
    tier: 'nearby',
    tags: ['nature', 'romance'],
    img: 'images/shinjuku-gyoen.jpg',
    time: '2 h',
    cost: '¥500 pp',
    station: 'Shinjukugyoenmae',
    blurb:
      'An imperial garden of 58 hectares holding three complete garden traditions — French formal, English landscape, and Japanese strolling — side by side.',
    detail:
      'Built as a daimyō residence, converted to an imperial garden in 1906, opened to the public after the war. Because it charges admission and bans alcohol, it stays calm even during cherry blossom season when every free park in Tokyo becomes a party. Over a thousand cherry trees across a dozen varieties means the blossom season here runs far longer than anywhere else in the city. The Taiwan Pavilion overlooking the pond is a beautiful place to sit and do nothing.',
    why: 'The best place in Tokyo to spend two unstructured hours together. Also: your own food is welcome here.',
    tips: [
      'Closed Mondays (open daily during cherry and chrysanthemum seasons).',
      'Alcohol is banned, which is exactly why it stays peaceful.',
      'Bringing your own food is allowed and normal — a rare, genuinely safe picnic spot.',
      'The greenhouse is free with admission and excellent on a rainy day.',
    ],
    nearby: [
      { name: 'Shinjuku', note: '10 min walk to the station, if you want the neon.' },
      { name: 'Omoide Yokochō', note: 'Atmospheric alley of tiny bars — worth seeing, not eating in.' },
    ],
    food: '✅ One of the few Tokyo attractions where a packed lunch is entirely normal. Ideal safe-day destination.',
  },
  {
    id: 'yanaka',
    name: 'Yanaka',
    jp: '谷中',
    city: 'Tokyo',
    area: 'Taitō',
    tier: 'nearby',
    tags: ['history', 'romance'],
    img: 'images/yanaka.jpg',
    time: '2–3 h',
    cost: 'Free',
    station: 'Nippori',
    blurb:
      'One of the few Tokyo neighbourhoods that survived both the 1923 earthquake and the 1945 firebombing. Low wooden houses, seventy temples, and a great many cats.',
    detail:
      'This is what Tokyo looked like before it was rebuilt twice. Yanaka Ginza is a short shopping street down a set of steps known as Yūyake Dandan — "sunset stairs" — and it is exactly as unglamorous and pleasant as that suggests. The cemetery, which sounds grim and is not, is a cherry-lined avenue where locals walk their dogs. The whole district moves at about half the speed of the rest of the city.',
    why: 'The antidote day. If Tokyo becomes too much, this is where you go.',
    tips: [
      'Go late afternoon and be on the sunset stairs around golden hour.',
      'SCAI The Bathhouse — a contemporary gallery inside a 200-year-old sentō. Free.',
      'Shops close early, around 5–6pm. This is a daytime neighbourhood.',
    ],
    nearby: [
      { name: 'Ueno Park', note: '15 min. Museums, pond, cherry trees.' },
      { name: 'Nezu Shrine', note: '20 min. A small tunnel of vermillion torii — Fushimi Inari in miniature, without the crowd.' },
    ],
    food:
      'An old-fashioned snack street with the same shared-fryer, shared-counter problem as Nakamise. Lovely to walk. Buy nothing.',
  },
  {
    id: 'nakano',
    name: 'Nakano Broadway',
    jp: '中野ブロードウェイ',
    city: 'Tokyo',
    area: 'Nakano',
    tier: 'nearby',
    tags: ['anime', 'gaming'],
    img: null,
    time: '2–3 h',
    cost: 'Free to browse',
    station: 'Nakano — 5 min from Shinjuku',
    blurb:
      'A 1966 shopping complex that mutated into the densest collection of second-hand anime, manga and collectibles anywhere — the original Mandarake, now spread across some 30 shops in one building.',
    detail:
      'Where Akihabara sells you new things loudly, Nakano sells you old things quietly. Mandarake started here in 1980 as a single second-hand manga stall and colonised the building. Floors three and four are the heart of it: vintage figures, cels from 1970s productions, out-of-print doujinshi, retro games, and cabinets of things you did not know were collectible. The rest of the building is an ordinary, slightly faded local mall, which makes the contrast better.',
    why: 'If Akihabara is the theme park, this is the archive. Cheaper, calmer, and better for actually finding something.',
    tips: [
      'Each Mandarake shop is separately owned — you pay in each one individually.',
      'Most shops open around noon and run to 8pm.',
      'Five minutes from Shinjuku makes this an easy half-day bolt-on.',
    ],
    nearby: [{ name: 'Shinjuku Gyoen', note: '15 min. Pair the chaos with the garden.' }],
    food: 'Eat before you come.',
  },
  {
    id: 'odaiba',
    name: 'Odaiba & Gundam Base',
    jp: 'お台場',
    city: 'Tokyo',
    area: 'Minato',
    tier: 'optional',
    tags: ['anime', 'tech', 'romance'],
    img: 'images/odaiba.jpg',
    time: 'Half day',
    cost: 'Free (Gundam Base free entry)',
    station: 'Tokyo Teleport / Daiba',
    blurb:
      'A reclaimed island of waterfront malls, a 1:1 scale 19.7-metre Unicorn Gundam that transforms on a schedule, and the best night view of Rainbow Bridge.',
    detail:
      'The Gundam statue outside DiverCity performs a transformation sequence several times daily with lights and sound, and The Gundam Base Tokyo inside is the largest model kit store in the world. The waterfront promenade at night — bridge lit, bay, Tokyo skyline across the water — is genuinely romantic. teamLab Planets is a short monorail ride away in Toyosu.',
    why: 'Combines the anime thread with the single best waterfront night walk in Tokyo.',
    tips: [
      'The Yurikamome monorail from Shimbashi runs driverless — sit at the very front for the view over the bridge.',
      'Gundam transformation runs several times a day; the after-dark shows with projection are the good ones.',
      'This is a half-day. Do not try to bolt it onto an already full day.',
    ],
    nearby: [
      { name: 'teamLab Planets, Toyosu', note: 'Barefoot, water-immersive. Separate ticket and concept from Borderless.' },
      { name: 'Toyosu Market', note: 'The tuna auction relocated from Tsukiji. Early morning only.' },
    ],
    food: 'Mall food courts. Nothing verifiable; bring what you need.',
  },
  {
    id: 'ghibli-museum',
    name: 'Ghibli Museum, Mitaka',
    jp: '三鷹の森ジブリ美術館',
    city: 'Tokyo',
    area: 'Mitaka',
    tier: 'optional',
    tags: ['anime', 'art', 'romance'],
    img: null,
    time: '2–3 h + travel',
    cost: '¥1,000 pp',
    station: 'Mitaka — 20 min from Shinjuku, then bus or 15 min walk',
    blurb:
      'Miyazaki designed it himself with the instruction that visitors should "get lost, and wander". No fixed route, no photography inside, and a giant robot from Laputa standing on the roof.',
    detail:
      'Small, hand-built and deliberately unslick — stained glass, spiral staircases, a room reconstructing an animator\'s studio mid-work. The Saturn Theatre shows an original short film that is screened nowhere else, and rotates, so you see whichever one is running. Tickets are date-and-time specific, sold only in advance, and are genuinely hard to get: they go on sale on the 10th of the month for the following month and can sell out within hours.',
    why: 'If Studio Ghibli means something to either of you, this is a better use of a Tokyo morning than almost anything else.',
    tips: [
      'Tickets released the 10th of each month for the following month, via Lawson. Set an alarm.',
      'Closed Tuesdays.',
      'No photography inside at all — this is enforced, and is part of why the atmosphere holds.',
      'The walk from Mitaka station along the Tamagawa canal is prettier than the bus.',
    ],
    nearby: [
      { name: 'Inokashira Park', note: 'Adjacent. Rowing boats on the pond — a classic Tokyo date.' },
      { name: 'Kichijōji', note: '10 min. Consistently voted the most liveable neighbourhood in Tokyo.' },
    ],
    food: 'The Straw Hat Café has fixed menus and long queues. Not viable; eat before.',
  },
  {
    id: 'wb-studio',
    name: 'Warner Bros. Studio Tour Tokyo',
    jp: 'ハリー・ポッター スタジオツアー東京',
    city: 'Tokyo',
    area: 'Nerima',
    tier: 'optional',
    tags: ['culture'],
    img: null,
    time: 'Half to full day',
    cost: '≈¥6,500 pp',
    station: 'Toshimaen',
    blurb:
      'The Making of Harry Potter — the largest indoor Harry Potter attraction in the world, on the site of the old Toshimaen amusement park.',
    detail:
      'Original sets, costumes and props from the films, walkable rather than ridden: the Great Hall, Diagon Alley, the Forbidden Forest, Platform 9¾ with an actual Hogwarts Express. Opened 2023. It takes about four hours and is entirely indoors, which makes it a strong rainy-day contingency.',
    why: 'Only if it is a shared enthusiasm — but as a rain plan it is unbeatable, being fully indoors.',
    tips: [
      'Timed entry, book ahead.',
      'About four hours minimum; most people take longer.',
      'Butterbeer is a fixed recipe — assume it is not viable.',
    ],
    nearby: [{ name: 'Ikebukuro', note: '15 min — Otome Road, Sunshine City, Pokémon Center Mega Tokyo.' }],
    food: 'Fixed-menu cafés only. Bring your own.',
  },
];
