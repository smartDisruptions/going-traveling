/**
 * Swipeable alternatives, keyed `day|when` to a block in the itinerary.
 *
 * The planned text is always option 1. These are what sits to the right of it.
 *
 * Every alternative carries `fits` — one line saying why it works in THAT area
 * at THAT time of day. That field is the validation: an option nobody can
 * justify in a sentence does not belong on the swipe, and audit.mjs refuses a
 * build where one is missing. It is also the answer to the real question you
 * ask standing in the street at 2pm: not "what else exists" but "what else
 * works from here, now".
 *
 * `dest` links the option to a library entry so the detail panel is one tap
 * away. Options with no `dest` are activities rather than places.
 */
window.ALTS = {
  /* ── Day 1 · Arrival ── */
  '1|Afternoon': [
    { label: 'Landed early', dest: 'tokyo-station', text: 'If you clear customs before mid-afternoon, drop the bags and walk the Marunouchi side immediately — the KITTE second-floor terrace faces the station façade and is free, indoors and almost always empty.', fits: 'Zero travel from the apartment, no booking, and works at any hour before the shops close.' },
    { label: 'Straight to sleep', text: 'Check in, shower, and do nothing at all until the grocery run. Jet lag westbound is brutal and there is no prize for sightseeing on day one.', fits: 'Always available. The plan has slack built in precisely so this is a real option.' },
    { label: 'The brick courtyard', dest: 'mitsubishi-ichigokan', text: 'Five minutes the other way: the Mitsubishi Ichigokan courtyard, a rebuilt 1894 Conder office block with benches, brick and a restored bank hall doing coffee. You do not need a museum ticket to sit in it.', fits: 'Free, outdoors, five minutes from the door, and asks nothing of a brain that has just crossed nine time zones.' },
    { label: 'Edo Castle keep base', dest: 'imperial-east-gardens', text: 'Ten minutes west: the Imperial Palace East Gardens, free. The donjon burned in 1657 and was never rebuilt, so its stone platform stands alone in a lawn with the Marunouchi towers behind it.', fits: 'Ten minutes on foot, free, no booking, and an hour rather than a commitment. \u26a0\ufe0f Closed Mondays and Fridays.' },
  ],
  '1|Evening': [
    { label: 'Nihonbashi instead', dest: 'nihonbashi', text: 'Walk fifteen minutes east to the bridge that is kilometre zero for every road in Japan, then loop back through the quiet Coredo arcades.', fits: 'Flat, well-lit, fifteen minutes each way, and the district is dead quiet after dark — good for a first night.' },
    { label: 'Ginza windows', dest: 'ginza', text: 'Ten minutes south. The Wakō clock tower, lit shopfronts, and a rooftop garden at Ginza Six that is free and usually empty.', fits: 'Ginza is at its calmest in the evening, and it is walkable from Tokyo Station without a train.' },
  ],

  /* ── Day 2 · Asakusa & Akihabara ── */
  '2|Early morning': [
    { label: 'Yanaka instead', dest: 'yanaka', text: 'The neighbourhood that survived both the earthquake and the firebombing: low wooden houses, seventy temples, a cemetery avenue of cherry trees, and a great many cats.', fits: 'Also best early, also in the north-east, and far quieter than Asakusa if the crowds sound wrong today.' },
    { label: 'Fushimi-style torii, in Tokyo', dest: 'nezu-shrine', text: 'Nezu Shrine, twenty minutes from Asakusa: a small tunnel of vermillion torii, an azalea garden, and almost nobody in it.', fits: 'Open from early morning, free, and a ten-minute walk from Yanaka if you want both.' },
  ],
  '2|Late morning': [
    { label: 'Skytree & the river', dest: 'skytree', text: 'Walk the Sumida riverside to the tower and go up for the daytime view over the Kantō plain — better in daylight than Shibuya Sky.', fits: 'One stop from Asakusa or a twenty-minute walk, and the deck is best used on a clear morning.' },
    { label: 'Kanda Myōjin', dest: 'kanda-myojin', text: 'A 1,300-year-old shrine seven minutes uphill from Akihabara that sells anime charms and blesses electronics — the strangest, best juxtaposition in Tokyo.', fits: 'Directly between the morning and afternoon plans, and open all day.' },
    { label: 'Ueno & the national museum', dest: 'tokyo-national-museum', text: 'Two stops from Asakusa on the Ginza line: Ueno Park, and at the top of it the Tokyo National Museum \u2014 89 National Treasures for \u00a51,000. The Honkan second floor alone is ninety minutes and is the best hour of Japanese art on the trip.', fits: 'Two stops from the morning, indoors if it rains, and it puts you on the right side of town for the Akihabara afternoon.' },
  ],
  '2|Afternoon': [
    { label: 'Nakano Broadway', dest: 'nakano', text: 'The archive rather than the theme park: thirty Mandarake shops in one faded 1966 mall, cheaper and calmer than Akihabara.', fits: '\u26a0\ufe0f 30 min west of the Asakusa\u2013Akihabara line this day runs on, so it swaps the whole afternoon rather than adding to it. Shops open from noon.' },
    { label: 'Odaiba & Gundam', dest: 'odaiba', text: 'The 19.7-metre Unicorn Gundam, the largest model-kit store in the world, and a waterfront that is genuinely romantic after dark.', fits: '\u26a0\ufe0f 30 min south-east of Akihabara and a half-day in itself \u2014 it replaces the afternoon AND the evening, not just one of them.' },
    { label: 'Hokusai in Ry\u014dgoku', dest: 'hokusai-museum', text: 'The Sumida Hokusai Museum, \u00a5400, in the neighbourhood where he was born and moved house ninety times without ever leaving it. A mirrored Sejima box, a life-size diorama of his workroom, and forty minutes well spent.', fits: 'Two stops from Akihabara on the S\u014dbu line, open to 17:30, and small enough to slot in before dinner.' },
  ],

  /* ── Day 3 · Meiji Jingū, Shibuya & Nintendo ── */
  '3|Morning': [
    { label: 'Shinjuku Gyoen', dest: 'shinjuku-gyoen', text: 'Three garden traditions in 58 hectares — French, English and Japanese — and the one major Tokyo garden where bringing your own food is entirely normal.', fits: 'Ten minutes from Harajuku, opens early, and closed Mondays. Also the safest lunch spot in west Tokyo.' },
    { label: 'Nezu Museum garden', dest: 'nezu-museum', text: 'Bamboo, ponds, stone paths and teahouses behind a Kengo Kuma building at the far end of Omotesandō. ¥1,300 and almost silent.', fits: 'At the other end of the same boulevard you were walking anyway, and open from 10.' },
  ],
  '3|Late morning': [
    { label: 'Ura-Harajuku backstreets', dest: 'harajuku', text: 'Skip Takeshita entirely and walk the lanes east of it, where the small labels and vintage shops actually are.', fits: 'Same district, same hour, a fraction of the crowd.' },
    { label: 'Cat Street to Shibuya', text: 'The pedestrian route that runs from Harajuku down to Shibuya — low buildings, no traffic, and it delivers you to the afternoon plan on foot.', fits: 'Replaces a train ride with a twenty-minute walk, and lands exactly where the afternoon starts.' },
  ],
  '3|Afternoon': [
    { label: 'Nakano instead', dest: 'nakano', text: 'If the PARCO floor is heaving — weekends especially — Nakano has the second-hand depth that Shibuya does not.', fits: 'Five minutes from Shinjuku, open until 8pm, and a straight swap for the same slot.' },
    { label: 'Slow it down', dest: 'omotesando', text: 'Drop the gaming floor and spend the afternoon on Omotesandō architecture and the Nezu garden instead.', fits: 'Same district as the morning, no extra travel, and leaves the sunset booking intact.' },
  ],
  '3|Sunset': [
    { label: 'Tokyo Tower & Zōjō-ji', dest: 'tokyo-tower', text: 'The temple gate with the orange lattice rising behind it, lit from dusk. Free, and the better photograph of the two.', fits: 'The fallback when Shibuya Sky closes for rain or wind — it is outdoors but needs no ticket and never sells out.' },
    { label: 'Skytree at blue hour', dest: 'skytree', text: 'Behind glass rather than open air, so it stays open in weather that shuts the Shibuya rooftop.', fits: '\u26a0\ufe0f 40 min from Shibuya, right across the city \u2014 it moves the evening east, so plan dinner there. Buy same-day once you can see the sky.' },
  ],

  /* ── Day 4 · Digital art ── */
  '4|Late morning': [
    { label: 'teamLab Planets', dest: 'teamlab-planets', text: 'The other one, in Toyosu: barefoot, water to the knee, a different experience rather than a lesser one.', fits: 'Same kind of timed booking, same half-day shape — swap at the point of buying tickets, not on the day.' },
    { label: 'Ghibli Museum', dest: 'ghibli-museum', text: 'Miyazaki designed it to be wandered rather than toured, and the Saturn Theatre shows a short film screened nowhere else.', fits: '\u26a0\ufe0f 40 min west of Roppongi in the suburbs, so it replaces the whole morning and the run back. Tickets go on sale the 10th of the month and sell out in hours; a swap made weeks ahead. Closed Tuesdays.' },
  ],
  '4|Afternoon': [
    { label: 'Odaiba waterfront', dest: 'odaiba', text: 'Cross the bay on the driverless Yurikamome, sit at the front, and take the Gundam and the Rainbow Bridge instead.', fits: '\u26a0\ufe0f 30 min from Roppongi across the bay \u2014 a clean half-day swap that also absorbs the evening, so it replaces the rest of the day rather than joining it.' },
    { label: 'Hama-rikyū Gardens', dest: 'hama-rikyu', text: 'Former shogunal duck-hunting grounds with a seawater tidal pond and skyscrapers behind it, fifteen minutes from Ginza.', fits: 'Open until 5pm, walkable from the Ginza end of the afternoon, and a picnic is fine there.' },
    { label: 'Mori Art & the 52nd floor', dest: 'mori-art', text: 'Fifteen minutes on foot from Azabudai Hills: contemporary art on the 53rd floor of the Mori Tower, wrapped by a glass observation ring that looks straight down at Tokyo Tower. Open until 22:00.', fits: 'Walking distance from teamLab, and the only museum in Tokyo that also solves the evening.' },
    { label: 'The National Art Center', dest: 'nact', text: 'Kurokawa\'s glass wave, the biggest exhibition floor in Japan, and no permanent collection at all \u2014 you can walk into the lobby, look at the room and the inverted concrete cones, and leave without paying anything.', fits: 'Ten minutes from the Mori, free to enter, and open when the Roppongi galleries are. \u26a0\ufe0f Closed Tuesdays, not Mondays.' },
  ],
  '4|Flexible': [
    { label: 'Marunouchi museums', dest: 'artizon', text: 'Rather than going back for lunch, stay in the district you sleep in: the Artizon \u2014 Impressionists and modern Japanese painting, five minutes from Tokyo Station \u2014 or the Mitsubishi Ichigokan next to it.', fits: 'Both are within ten minutes of the apartment, so the lunch break and the museum are the same trip.' },
    { label: 'Edo Castle keep base', dest: 'imperial-east-gardens', text: 'The Imperial Palace East Gardens, free, ten minutes west. The donjon burned in 1657 and was never rebuilt, so its stone platform stands alone in a lawn with the Marunouchi towers behind it.', fits: 'Free, ten minutes away, and an hour rather than a commitment. \u26a0\ufe0f Closed Mondays AND Fridays.' },
  ],

  /* ── Day 5 · Transfer ── */
  '5|Side quest': [
    { label: 'Day-use onsen instead', dest: 'hakone-yuryo', text: 'Hakone Yuryō, fifteen minutes from Yumoto, rents private open-air baths by the hour — useful if the villa check-in is late.', fits: 'On the way up the mountain, and it fills exactly the gap between arriving and checking in.' },
    { label: 'Straight to the villa', text: 'Skip the stop entirely, get to Gōra early, and start the two days of doing nothing an hour sooner.', fits: 'Always available, and the transfer day is the one most likely to run long.' },
  ],

  /* ── Day 6 · Slow Hakone ── the day that is already a choice ── */
  '6|Choose exactly one': [
    { label: 'Lake Ashi & the torii', dest: 'lake-ashi', text: 'The vermillion torii standing in the water with Fuji behind it, plus the 400-year-old cedar avenue of the old Tōkaidō highway.', fits: '\u26a0\ufe0f 45 min from G\u014dra each way \u2014 this is really plan B\u2019s day, so switch the plan rather than bolting it on. Go before 9am; the torii queue runs over an hour by midday.' },
    { label: 'Ropeway over Ōwakudani', dest: 'hakone-ropeway', text: 'Four kilometres of cable car over a steaming volcanic valley, with Fuji filling the horizon on the descent.', fits: '⚠️ Check the volcanic status the morning of — closures happen with no notice. Needs a clear sky to be worth it.' },
    { label: 'Pola Museum & the grass field', dest: 'pola-museum', text: 'Monet, Renoir and Van Gogh in a building buried below the beech canopy, then the pampas-grass hillside ten minutes away.', fits: 'The wet-weather answer: almost entirely indoors, open 9–5 daily, and the free forest trail outside works in drizzle. 🍂 The grass is silver-gold late September to mid-November.' },
    { label: 'Gōra Park & a craft hour', dest: 'gora', text: 'A 1914 terraced garden five minutes from the villa, with a craft house that takes walk-ins for glass-blowing and pottery.', fits: 'Closest option to the villa, about an hour, and the workshop is the best rainy-afternoon activity in Hakone for two people.' },
    { label: 'Moss garden above G\u014dra', dest: 'hakone-museum-art', text: 'The oldest museum in Hakone, one cable-car stop above G\u014dra: J\u014dmon-to-Momoyama ceramics, and in front of them a slope of 130 maples over unbroken moss with a tea house at the top.', fits: 'Three minutes from the villa on the cable car you already have a pass for. \u26a0\ufe0f Closed for renovation 7 May \u2013 29 Oct 2026.' },
    { label: 'The Edo checkpoint', dest: 'hakone-sekisho', text: 'The T\u014dkaid\u014d barrier gate at the lake, excavated and rebuilt in 2007 to the shogunate\'s own drawings. For 260 years everyone walking between Edo and Kyoto was stopped and searched here \u2014 mostly for women leaving and guns arriving.', fits: '\u26a0\ufe0f 45 min from G\u014dra. It costs nothing extra once you are at the lake, which is plan B \u2014 from the mountain plan it is most of an afternoon.' },
    { label: 'Fuji from an armchair', dest: 'narukawa', text: 'Narukawa Art Museum at Motohakone: modern Japanese painting, and a fifty-metre lounge window that frames the lake, the torii and Fuji together, with free tea and no time limit.', fits: '\u26a0\ufe0f 45 min from G\u014dra. Indoors on the lake shore and the right answer under cloud \u2014 but it belongs to plan B\u2019s loop, not to a mountain day.' },
    { label: 'Lalique & the Orient Express', dest: 'lalique', text: 'Sengokuhara, the far side of the valley: 230 Ren\u00e9 Lalique pieces, and parked in the garden an actual C\u00f4te d\u2019Azur Pullman carriage he fitted out in 1929, which you book a slot to sit in and be served tea.', fits: 'One bus ride from G\u014dra and next to the susuki grass field, so it makes a whole half-day on that side rather than a detour. \u26a0\ufe0f Book the carriage when you book the museum.' },
  ],

  /* ── Day 7 · Transfer to Kyoto ── */
  '7|After dinner': [
    { label: 'Pontochō instead', dest: 'pontocho', text: 'A single lantern-lit alley one metre wide, running along the river between Shijō and Sanjō. Denser and more atmospheric than Hanamikōji.', fits: 'Five minutes from Gion, same post-sunset window, and it is a two-minute walk rather than a circuit if you are tired from the train.' },
    { label: 'Kiyomizu after dark', dest: 'kiyomizu-dera', text: 'Spring and autumn only: the temple opens at night with the hillside lit and a beam of light thrown over the city.', fits: '🌸 Seasonal — limited windows in spring and autumn, separate evening ticket. Check the dates before counting on it.' },
  ],
  '7|Afternoon': [
    { label: 'Kennin-ji before Gion', dest: 'kennin-ji', text: 'The oldest Zen temple in Kyoto, at the southern end of Hanamik\u014dji: three gardens, and a ceiling in the Hatt\u014d with two dragons painted across 108 tatami mats\' worth of it. You lie on the floor and look up.', fits: 'Its gate is the bottom of the street the evening walk uses, and it closes at 16:30 \u2014 so it is an afternoon thing, not an evening one.' },
    { label: 'Sanj\u016bsangen-d\u014d on the way in', dest: 'sanjusangendo', text: '1,001 life-size gilded Kannon standing ten ranks deep in a 120-metre hall from 1266. No photography inside, which is why nothing has spoiled it for you.', fits: 'One stop from Kyoto Station and on the line into Gion, so it costs no detour \u2014 but last entry is 16:30, so only if the train ran on time.' },
    { label: 'The national museum opposite', dest: 'kyoto-national-museum', text: 'Directly across the road from Sanj\u016bsangen-d\u014d: the regional national collection, \u00a5700 for the masterpieces gallery, in a Taniguchi building quiet enough to do Buddhist sculpture justice.', fits: 'Fifty metres from the hall and on the same way in from the station. \u26a0\ufe0f Closed Mondays.' },
  ],

  /* ── Day 8 · Higashiyama ── */
  '8|Very early': [
    { label: 'Fushimi Inari at dawn', dest: 'fushimi-inari', text: 'Ten thousand torii up a sacred mountain, open every hour of every day. At 6am the most visited place in Kyoto is effectively yours.', fits: 'Open 24 hours and five minutes from Kyoto Station — the single best early-start swap in the city. Two to three hours for the full circuit.' },
    { label: 'Arashiyama at 7', dest: 'arashiyama', text: 'Move the bamboo grove here instead of Day 10 and have it in near-silence, then take Tenryū-ji as it opens at 8:30.', fits: '\u26a0\ufe0f 40 min from Higashiyama, the other side of the city \u2014 it swaps the whole day, not the first hour. The grove is only worth it before 8am.' },
  ],
  '8|Morning': [
    { label: 'Kōdai-ji first', dest: 'kodai-ji', text: 'Built by Nene in memory of her husband — a temple founded as an act of widowhood, with a small bamboo grove behind it and a fraction of the crowd.', fits: 'On the same hillside walk, five minutes off the route, opens at 9.' },
    { label: 'Ishibei-kōji detour', dest: 'sannenzaka', text: 'A hidden stone-paved lane off the main slope, often called the most beautiful street in Kyoto, and almost always empty.', fits: 'A five-minute detour from the lane you are already on.' },
    { label: 'A thousand and one Kannon', dest: 'sanjusangendo', text: 'Sanj\u016bsangen-d\u014d, at the south end of Higashiyama: 1,001 life-size gilded Kannon standing ten ranks deep in a 120-metre hall from 1266. No photography is allowed, which is why nothing has spoiled it for you.', fits: 'The south end of the same hill the day walks down, opens at 8:30, and is the highest-rated destination in this whole library.' },
    { label: 'The national museum opposite', dest: 'kyoto-national-museum', text: 'Directly across the road from Sanj\u016bsangen-d\u014d: the regional national collection, \u00a5700 for the masterpieces gallery, in a Taniguchi building quiet enough to do Buddhist sculpture justice.', fits: 'Fifty metres from the hall \u2014 cross the road and the sculpture you just met in the dark gets explained in daylight. \u26a0\ufe0f Closed Mondays.' },
  ],
  '8|Afternoon': [
    { label: 'Ginkaku-ji & the path', dest: 'ginkaku-ji', text: 'Start at the Silver Pavilion instead and walk the Philosopher\'s Path downhill to Nanzen-ji — gravity on your side, same two kilometres.', fits: 'Same route reversed, and the moss garden at Ginkaku-ji is better in afternoon light.' },
    { label: 'Heian Shrine garden', text: 'A vast vermillion torii and a strolling garden with covered bridges, fifteen minutes from Nanzen-ji.', fits: 'Open until 5:30, in the same district, and rarely crowded in the afternoon.' },
    { label: 'KYOCERA museum at Okazaki', dest: 'kyocera-museum', text: 'The oldest public art museum building in Japan still in use, from 1933, with a glass ribbon slid underneath it in 2020 so the original fa\u00e7ade was never touched. Kyoto-school modern painting inside.', fits: 'In the Okazaki museum district beside Heian Shrine, fifteen minutes from Nanzen-ji \u2014 it is on the same afternoon line. \u26a0\ufe0f Closed Mondays.' },
  ],
  '8|Romantic option': [
    { label: 'Kimono photo session', text: 'A private photographer for an hour in the Higashiyama lanes, in rented kimono, early enough that the streets are still empty.', fits: 'Best booked for the very early slot, which is exactly when this day already starts.' },
    { label: 'Incense or pottery', text: 'A two-hour workshop — blending incense, or throwing a bowl each. Kyoto has both within walking distance of Gion.', fits: 'Indoors, bookable, and the correct answer if the weather turns. ⚠️ Not a tea ceremony: matcha is caffeine and the sweets are rarely labelled.' },
    { label: 'Just walk', text: 'Skip the booking entirely. The lanes, the canal, and an unplanned afternoon together.', fits: 'Always available, costs nothing, and is the option most people wish they had taken.' },
  ],

  /* ── Day 9 · Uji ── */
  '9|Afternoon': [
    { label: 'Uji riverside only', dest: 'uji', text: 'Skip the Byōdō-in interior queue and spend the afternoon on the river instead — Tachibana Island, the thirteen-tier pagoda, and Ujigami Shrine.', fits: 'All free, all outdoors, ten minutes from the museum, and the riverbank is a good place to eat what you brought.' },
    { label: 'Tōfuku-ji on the way back', text: 'A wooden bridge over a maple valley, one stop before Fushimi Inari on the ride home.', fits: 'Directly on the rail corridor back to Kyoto. 🍁 Spectacular in late November, ordinary otherwise.' },
    { label: 'Genji and the oldest shrine', dest: 'genji-museum', text: 'Across the river from By\u014dd\u014d-in: the Tale of Genji Museum, which rebuilds Heian court interiors at full size, and five minutes uphill Ujigami Shrine \u2014 the oldest surviving shrine building in Japan, from about 1060, free and usually empty.', fits: 'Both are on the far bank within ten minutes of each other, so the Uji afternoon becomes a loop rather than an out-and-back.' },
  ],

  /* ── Day 10 · already a three-way choice ── */
  '10|The day, one area only': [
    { label: 'Northern Kyoto', dest: 'kinkaku-ji', text: 'Kinkaku-ji at 9:00 opening, Ryōan-ji\'s rock garden twenty minutes away, then Daitoku-ji\'s walled complex of Zen sub-temples that almost nobody visits.', fits: 'One geographic cluster in the north-west, all opening around 9 — a clean swap for the Arashiyama cluster.' },
    { label: 'Kibune & Kurama', dest: 'kibune', text: 'A lantern-lined stone stair, a two-hour forest walk over the ridge, and a day-use onsen at the far end.', fits: 'Half an hour north by the Eizan line. ⚠️ A real trail — proper shoes, and allow the full day.' },
    { label: 'Ōhara & Sanzen-in', dest: 'ohara', text: 'A farming valley an hour north with a moss garden full of small stone figures hidden in the roots.', fits: '\u26a0\ufe0f 65 min from Arashiyama, up in the northern mountains \u2014 a full-day replacement, not an addition. Bus 17 or 18 from Kyoto Station.' },
    { label: 'Sagano train & river boat', dest: 'sagano-train', text: 'The open-sided sightseeing train up the gorge, then the traditional flat-bottomed boat back down to Togetsukyō.', fits: '⚠️ Closed Wednesdays and all winter; autumn seats sell out. Allow a full half-day for the loop.' },
    { label: 'Ninna-ji & the temple road', dest: 'ninna-ji', text: 'A UNESCO temple headed by an imperial prince for a thousand years, so the halls are a palace: painted sliding doors, a covered corridor walked in stockinged feet, and a squared-off five-storey pagoda. Ry\u014dan-ji is ten minutes east, Kinkaku-ji ten past that.', fits: 'On the Randen tram from Arashiyama and on the same road as Ry\u014dan-ji and Kinkaku-ji \u2014 it slots into the northern route without adding a leg.' },
  ],

  /* ── Day 11 · Manga & a choice ── */
  '11|Morning': [
    { label: 'Nijō Castle', dest: 'nijo-castle', text: 'Nightingale floors that chirp underfoot, 3,000 painted screens, and the room where the last shogun handed power back in 1867.', fits: 'Ten minutes from the Manga Museum and the obvious substitute on a Wednesday, when the museum is closed.' },
    { label: 'Imperial Palace park', dest: 'kyoto-imperial-palace', text: 'Free, enormous, gravel avenues and old pines, ten minutes north of Karasuma Oike.', fits: 'Open daily with no ticket — the reliable answer when something else is shut.' },
    { label: 'Nara instead', dest: 'kofuku-ji', text: 'Forty-five minutes from Kyoto: K\u014dfuku-ji for the Ashura statue \u2014 dry lacquer, 734, three faces, the most loved sculpture in Japan \u2014 then the Nara National Museum next door for the best room of Buddhist sculpture anywhere, and T\u014ddai-ji beyond it.', fits: 'A full-day swap rather than a morning, and the strongest single day of art on this list. \u26a0\ufe0f K\u014dfuku-ji\'s pagoda is wrapped in scaffolding until about 2034.' },
  ],
  '11|Afternoon': [
    { label: 'Den Den Town, Osaka', dest: 'den-den-town', text: 'The gaming afternoon instead: retro games, Mandarake, Super Potato Osaka and Ōta Road, about an hour each way.', fits: 'Shops open around 11 and run to 8pm, so an afternoon start works — but it takes the whole afternoon and evening. ⚠️ Eat before you leave and bring dinner; Osaka street food is the worst-case profile on this trip.' },
    { label: 'Nishiki for knives', dest: 'nishiki', text: 'Four hundred years of a covered market five blocks long. Aritsugu has been making knives since 1560 and will grind your name into the blade while you wait.', fits: 'Quietest before 11am, closes around 5–6pm, ten minutes from the museum. ⚠️ Buy, do not eat.' },
    { label: 'Fushimi Inari at night', dest: 'fushimi-inari', text: 'If you skipped it on Day 8 — the lower tunnels are lit after dark and nearly empty.', fits: 'Open 24 hours, fifteen minutes by train, and it works as a late-afternoon-into-evening swap.' },
    { label: 'Osaka Castle', dest: 'osaka-castle', text: 'If the Osaka day happens, this rather than the shopping: the keep is a 1931 reconstruction, but the hundred-tonne wall stones are real, and since 2025 the ticket also opens an excavated section of Hideyoshi\'s own buried wall seven metres below the current one.', fits: 'Twenty minutes by subway from Den Den Town, so it pairs with the Osaka option rather than replacing it. \u26a0\ufe0f Eat before you go.' },
  ],

  /* ── Day 12 · Departure ── */
  '12|Morning': [
    { label: 'T\u014d-ji on the way out', dest: 'to-ji', text: 'Fifteen minutes on foot from Kyoto Station: the tallest wooden tower in Japan, and in the K\u014dd\u014d a three-dimensional mandala \u2014 twenty-one statues arranged in space as a diagram of the Shingon cosmos, sixteen of them ninth-century originals.', fits: 'Walking distance from the platform you are leaving from, open from 8:00, and it turns a dead departure morning into the best room of sculpture in Kyoto.' },
  ],
};
