/**
 * Two whole plans per day.
 *
 * The swipe alternatives solved one problem — "what else could I do at 2pm" —
 * and created another: nothing stopped you swapping the afternoon for
 * something an hour away and stranding the evening. A day is not a list of
 * blocks you can shuffle independently. It is a shape.
 *
 * So each day now offers two shapes. Plan A is the recommended template and
 * its blocks live in data-plan.js, unchanged. Plan B is a complete alternative
 * day, written here, with its own blocks and its own alternatives. Both carry
 * `stops` — the daytime cluster that plan actually visits — and that list is
 * what every travel time in the app is measured against. Dinner back at the
 * base is deliberately not a stop: it is where you sleep, not somewhere the
 * day has to stay close to, and counting it made three coherent plans look
 * broken.
 *
 * The rule each plan is built to: every stop in a plan is in the same zone as
 * another stop in it, or one short hop away. `audit.mjs` enforces it, and any
 * alternative that breaks it gets a travel note on the card rather than being
 * hidden — you are allowed to blow up the day, you just should not do it by
 * accident.
 *
 * Days 1, 5, 7 and 12 have one shape and no picker. They are travel days — a
 * flight, two transfers and a flight home — and most of each is already spoken
 * for. They are also kept out of every other day's pool, because a plan built
 * around having a whole day is not something you can drop onto an afternoon
 * that starts at Kyoto Station. Their choices live where they belong: in the
 * per-block alternatives.
 *
 * BASES groups the days by where you sleep, because a plan is portable within
 * a base and nowhere else. Day 9 is labelled Uji — that is where the day
 * happens — but you sleep in Kyoto, so it belongs to the Kyoto pool and can
 * take any Kyoto shape. That is the whole point of the assignment: four Tokyo
 * days and seven Tokyo shapes, put them in whatever order suits the weather,
 * the closing days and how tired you are.
 *
 */
window.PLANS = {
  1: { single: 'Arrival. A flight, the provisioning hour, and one flat walk after dark \u2014 that is the day. The alternatives below are the whole choice.' },
  2: {
    a: {
      title: 'Asakusa & Akihabara',
      thesis: 'Old Tokyo at dawn, the electric town after lunch. Two dense districts on the same side of the city, twelve minutes apart.',
      stops: ['sensoji', 'nakamise', 'kappabashi', 'akihabara', 'eat-seo'],
    },
    b: {
      title: 'The Ueno museum day',
      thesis: 'The same corner of the city, indoors. Yanaka to Ueno to Akihabara is a straight line north to south, nothing more than twelve minutes apart, and it is the answer to rain.',
      stops: ['yanaka', 'nezu-shrine', 'ueno-park', 'tokyo-national-museum', 'akihabara', 'eat-seo'],
      blocks: [
        { when: 'Early morning', text: 'Yanaka before the shops open: low wooden houses, seventy temples, a cemetery avenue of cherry trees and a great many cats. Then ten minutes south to Nezu Shrine — a complete 1706 shrine that survived both the earthquake and the firebombing, with a tunnel of vermilion torii on the hill behind it and nobody in it.' },
        { when: 'Late morning', text: '🏛 Twelve minutes to Ueno Park, and at the head of it the Tokyo National Museum. Go straight to the Honkan second floor: Jōmon pottery to Edo screens in ninety minutes, ¥1,000, 89 National Treasures in the building. ⚠️ Closed Mondays.' },
        { when: 'Afternoon', text: '🎮 Five minutes down to Akihabara. Pick four buildings and go deep rather than wide: Super Potato, Mandarake Complex, Yodobashi Akiba, Radio Kaikan. Kanda Myōjin is seven minutes uphill if you want a 1,300-year-old shrine that blesses electronics.' },
        { when: 'Evening', text: 'Six minutes to Marunouchi. Yakitori Seo if it answered — a chef-led counter where shio and tare are a standing choice, so ordering salt is ordering normally.' },
      ],
      alts: {
        'Early morning': [
          { label: 'Sensō-ji first', dest: 'sensoji', text: 'The temple before 9am, then Nakamise and the side lanes, and cut west to Ueno afterwards. Eight minutes between them on the Ginza line.', fits: 'Also best early, also in the north-east, and it puts the crowds behind you before the museums open.' },
        ],
        'Late morning': [
          { label: 'The park, not the museum', dest: 'ueno-park', text: 'Shinobazu Pond in lotus, Ueno Tōshō-gū and its gilded 1651 gate, and the Kiyomizu Kannon-dō — a miniature of the Kyoto original you will stand on later in the trip.', fits: 'Same park, no ticket, and the right call on a Monday when everything indoors is shut.' },
        ],
        'Afternoon': [
          { label: 'Hokusai in Ryōgoku', dest: 'hokusai-museum', text: 'The Sumida Hokusai Museum, ¥400, in the neighbourhood where he was born and moved house ninety times without ever leaving it.', fits: 'Ten minutes from Akihabara on the Sōbu line, open to 17:30, and small enough to do before dinner.' },
          { label: 'Kappabashi & the river', dest: 'kappabashi', text: 'Kitchen Town for knives, ceramics and the plastic food models, then the Sumida riverside walk toward Skytree.', fits: 'North of Ueno rather than south, so it swaps cleanly for the Akihabara afternoon without crossing the city.' },
        ],
      },
    },
  },

  3: {
    a: {
      title: 'Shrine, street, sunset',
      thesis: 'The whole day inside Shibuya ward: forest at nine, youth culture at eleven, three gaming stores at two, a rooftop at sunset. Nothing is more than fifteen minutes on foot from the last thing.',
      stops: ['meiji-jingu', 'harajuku', 'omotesando', 'shibuya', 'shibuya-sky'],
    },
    b: {
      title: 'Gardens, not crowds',
      thesis: 'The same west side with the volume down. Three gardens and an art collection instead of Takeshita Street, ending on the same rooftop at the same hour.',
      stops: ['shinjuku-gyoen', 'meiji-jingu', 'nezu-museum', 'omotesando', 'shibuya-sky'],
      blocks: [
        { when: 'Morning', text: 'Shinjuku Gyoen at opening. Fifty-eight hectares of Japanese, French and English garden inside the loop line, and at nine on a weekday it is close to empty. ⚠️ Closed Mondays.' },
        { when: 'Late morning', text: 'Eight minutes south to Meiji Jingū and the forest approach — 100,000 trees planted by hand in 1920 and left alone since. Consider writing an ema wish tablet together; it costs about ¥500 and is a nice thing to have done on a trip.' },
        { when: 'Afternoon', text: '🖼 Omotesandō for the architecture, then the Nezu Museum: Kuma\'s bamboo approach, a serious collection of Asian art, and behind it a hillside garden with four tea houses that almost nobody expects in Aoyama.' },
        { when: 'Sunset', text: '⭐ Shibuya Sky. Book a slot roughly forty minutes before sunset and stay through blue hour — fifteen minutes from Omotesandō on foot, and the romantic set-piece of the Tokyo half either way.' },
        { when: 'Evening', text: 'Back to Marunouchi for dinner, or the Shibuya crossing at night if the energy is there.' },
      ],
      alts: {
        'Afternoon': [
          { label: 'Shibuya PARCO after all', dest: 'shibuya', text: 'Nintendo TOKYO, Pokémon Center Shibuya and CAPCOM STORE TOKYO are all on the sixth floor. Two hours covers all three, and it is on the way to the rooftop.', fits: 'Ten minutes from Omotesandō and directly under the sunset slot — the gaming hour without leaving the ward.' },
          { label: 'Ura-Harajuku backstreets', dest: 'harajuku', text: 'The lanes behind Takeshita: vintage, coffee, small designers, and none of the queue.', fits: 'Five minutes from Omotesandō, and the version of Harajuku worth having.' },
        ],
        'Sunset': [
          { label: 'Tokyo Tower & Zōjō-ji', dest: 'tokyo-tower', text: 'Fifteen minutes east instead: the temple gate with the orange tower behind it, which is the photograph worth having.', fits: '⚠️ Fifteen minutes by metro from Shibuya, so it works — but it moves the evening to Minato, so plan dinner there.' },
        ],
      },
    },
  },

  4: {
    a: {
      title: 'Digital art & the tower',
      thesis: 'teamLab in the morning, the temple-and-tower photograph at dusk, and a lunch break at home because the base makes it practical.',
      stops: ['teamlab', 'tokyo-tower', 'eat-asanogawa'],
    },
    b: {
      title: 'The Roppongi art hill',
      thesis: 'The tightest day in the plan: four things, all in Roppongi and Azabudai, none more than fifteen minutes on foot from the last. It ends at ten at night because the Mori is open that late.',
      stops: ['teamlab', 'mori-art', 'nact', 'tokyo-tower'],
      blocks: [
        { when: 'Late morning', text: '🤖 teamLab Borderless at Azabudai Hills. Book a timed slot ahead. Give it three hours if you can — two is enough, three is when you stop rushing. Light clothing, flat shoes.' },
        { when: 'Afternoon', text: '🖼 Ten minutes west to the National Art Center: Kurokawa\'s glass wave, the largest exhibition floor in Japan, and no permanent collection at all. The lobby, the shop and the cone cafés cost nothing, so you can look at the building and decide about the show afterwards. ⚠️ Closed Tuesdays, not Mondays.' },
        { when: 'Early evening', text: 'Ten minutes back east to the Mori Art Museum on the 53rd floor, and Tokyo City View wrapped around the 52nd. Contemporary art and a glass ring looking straight down at Tokyo Tower. Open until 22:00, which no other museum here is.' },
        { when: 'Night', text: 'Down and twenty minutes on foot to Zōjō-ji, for the temple gate with the lit tower behind it. Then back to Marunouchi, or eat in Roppongi Hills if the day has run long.' },
      ],
      alts: {
        'Afternoon': [
          { label: 'Hama-rikyū instead', dest: 'hama-rikyu', text: 'Twenty minutes east: a tidal pond that rises and falls with Tokyo Bay, a 300-year-old pine, and a tea house on an island in the middle of it.', fits: '⚠️ Twenty minutes from Roppongi, so it costs a leg — but it is the right swap if two museums in a day is one too many.' },
          { label: 'teamLab Planets', dest: 'teamlab-planets', text: 'The other one, at Toyosu: barefoot, knee-deep in water, and more physical than Borderless.', fits: '⚠️ Thirty minutes from Roppongi. Do this INSTEAD of Borderless in the morning rather than as well, or the day breaks.' },
        ],
        'Early evening': [
          { label: 'Just the observation deck', dest: 'mori-art', text: 'Tokyo City View without the gallery ticket — the 52nd-floor ring, the sunset, and no obligation to have an opinion about contemporary art.', fits: 'Same building, same lift, and cheaper. The open-air Sky Deck above costs extra and shuts in bad weather.' },
        ],
      },
    },
  },

  5: { single: 'Transfer day. Forward the luggage, provision at Odawara, take the Romancecar, arrive early. The shape of the day is the train — there is no plan B.' },

  6: {
    a: {
      title: 'The mountain',
      thesis: 'Everything within a cable-car ride of the villa: the Open-Air Museum, Gōra Park, the moss garden above it. Back early, onsen, cook. The day the food plan pays for itself.',
      stops: ['hakone-openair', 'gora', 'hakone-museum-art', 'eat-gora'],
    },
    b: {
      title: 'The lake',
      thesis: 'One loop, in one direction: ropeway up over the volcano, boat down to Motohakone, the torii in the water, and back by bus. Everything is on the circuit, so nothing doubles back.',
      stops: ['hakone-ropeway', 'lake-ashi', 'narukawa', 'hakone-sekisho', 'eat-gora'],
      blocks: [
        { when: 'Morning', text: '🌋 Sōunzan is two cable-car stops above the villa. Take the ropeway over Ōwakudani — sulphur vents, steam, and Fuji behind you on a clear day. ⚠️ Check the volcanic status the night before; the gondola closes at short notice.' },
        { when: 'Midday', text: 'Stay on to Tōgendai and take the boat down Lake Ashi to Motohakone. Forty minutes on the water, and the Hakone Shrine torii standing in the lake comes into view from it — which is the view everyone queues on the shore for.' },
        { when: 'Afternoon', text: '⛩ Motohakone on foot: the shrine and the torii, then Narukawa Art Museum on the hill — modern Japanese painting, and a fifty-metre lounge window framing the lake, the torii and Fuji together, with free tea and no time limit. Fifteen minutes further along the shore, the Edo checkpoint on the Tōkaidō.' },
        { when: 'Evening', text: 'Bus back up to Gōra, about forty minutes. Onsen, then dinner at Gōra Brewery & Grill eight minutes downhill, or cook.' },
      ],
      alts: {
        'Afternoon': [
          { label: 'The torii queue, skipped', dest: 'lake-ashi', text: 'The shore torii has a permanent queue for the photograph. Walk past it, up the 89 steps to the shrine itself, and take the lake from the boat instead.', fits: 'Same stop, no waiting, and the boat angle is the better picture anyway.' },
          { label: 'The checkpoint only', dest: 'hakone-sekisho', text: 'Skip the museum and give the hour to the Tōkaidō barrier gate — rebuilt in 2007 from the shogunate\'s own drawings, with a lookout tower over the lake and a surviving stretch of the old cedar highway beside it.', fits: 'Fifteen minutes along the same shore, and the boats dock there — so it costs nothing to include.' },
        ],
        'Morning': [
          { label: 'Straight to the lake', dest: 'lake-ashi', text: 'If the ropeway is shut or the sky is grey, take the bus down to Motohakone directly — forty minutes, no transfers, and it buys you the whole day on the shore.', fits: 'Removes the mountain leg entirely; the rest of the plan is unchanged.' },
        ],
      },
    },
  },

  7: { single: 'Transfer. Three hours of trains from Hakone, then settle in and walk Gion between sunset and dark. What can be added on the way in is in the afternoon options.' },
  8: {
    a: {
      title: 'The whole hill, south to north',
      thesis: 'Kiyomizu at dawn down through the stone lanes, then the aqueduct, the canal path and the Silver Pavilion. It is the classic walk and it is long — about six kilometres with the hills in it.',
      stops: ['kiyomizu-dera', 'sannenzaka', 'kodai-ji', 'nanzen-ji', 'philosophers-path', 'ginkaku-ji'],
    },
    b: {
      title: 'The north half, slowly',
      thesis: 'Half the walking, twice the sitting. Everything is in northern Higashiyama within a kilometre of the canal, so the day has room for a garden you stay in rather than pass through.',
      stops: ['nanzen-ji', 'philosophers-path', 'honen-in', 'ginkaku-ji', 'kyocera-museum'],
      blocks: [
        { when: 'Morning', text: 'Nanzen-ji at opening. The Sanmon gate you can climb, the Hōjō rock garden, and behind it the brick aqueduct the Meiji government drove through the temple grounds in 1890 — which should be an outrage and is instead the most photographed thing here.' },
        { when: 'Late morning', text: 'The Philosopher\'s Path north along the canal, two kilometres under cherry trees, named for the Kyoto University philosopher who walked it to work. Turn off at Hōnen-in: a thatched gate, two raked sand mounds, moss, and almost nobody, because it is fifty metres off the path and unsigned.' },
        { when: 'Afternoon', text: '⭐ Ginkaku-ji at the top of the path. The Silver Pavilion was never silvered; the sand cone in the garden is the thing, and the hillside loop behind it looks back over the whole city. Then back down the path — it is a different walk southbound.' },
        { when: 'Late afternoon', text: '🖼 The KYOCERA Museum of Art at Okazaki, fifteen minutes south: the oldest public art museum building in Japan still in use, from 1933, with a glass ribbon slid underneath it in 2020 so the original façade was never touched. ⚠️ Closed Mondays.' },
        { when: 'Evening', text: 'Twenty minutes into Gion, or straight home — this plan exists so the evening is not something you drag yourself to.' },
      ],
      alts: {
        'Late afternoon': [
          { label: 'Heian Shrine garden', text: 'Next door to the museum: a vast circuit garden with a covered bridge over the pond, at its best in late afternoon light. The shrine itself is a 1895 replica and skippable; the garden is not.', fits: 'Five minutes from the KYOCERA and in the same Okazaki block — a straight swap.' },
          { label: 'Kiyomizu after all', dest: 'kiyomizu-dera', text: 'If skipping the famous one feels wrong, it is twenty-five minutes south and open late in some seasons.', fits: '⚠️ Twenty-five minutes each way from the north half. It works, but it is the leg this plan was built to avoid.' },
        ],
        'Morning': [
          { label: 'Fushimi Inari at dawn first', dest: 'fushimi-inari', text: 'Be at the torii gates by 7am, walk as far up as you feel like, and be back in northern Higashiyama by ten with the best hour of the day already banked.', fits: '⚠️ Twenty-five minutes each way, but at dawn nothing else is open — so it costs the day almost nothing.' },
        ],
      },
    },
  },

  9: {
    a: {
      title: 'Nintendo, then Uji, then the gates',
      thesis: 'The museum in the morning, the phoenix hall after lunch, and Fushimi Inari on the way home because the line passes it.',
      stops: ['nintendo-museum', 'byodoin', 'uji', 'fushimi-inari'],
    },
    b: {
      title: 'Uji, all of it',
      thesis: 'No Fushimi detour. Everything is within a fifteen-minute walk of the Uji river, on both banks, and the afternoon becomes a loop instead of an out-and-back.',
      stops: ['nintendo-museum', 'byodoin', 'uji', 'ujigami', 'genji-museum'],
      blocks: [
        { when: 'Morning', text: '🎮 Nintendo Museum at Ogura. ⚠️ Entry is a monthly lottery with no door tickets — this day only exists if you won it, and the whole week should be built around the date.' },
        { when: 'Afternoon', text: 'Ten minutes to Byōdō-in: the Phoenix Hall of 1053, the building on the ten-yen coin, sitting in its pond exactly as it was designed to — a Pure Land paradise you look at across water.' },
        { when: 'Late afternoon', text: '⛩ Cross the Uji Bridge to the far bank. Ujigami Shrine is the oldest surviving shrine building in Japan, from about 1060, free and usually empty; the Tale of Genji Museum is five minutes uphill and rebuilds Heian court interiors at full size. ⚠️ The museum closes Mondays.' },
        { when: 'Evening', text: 'Thirty minutes back to Kyoto. Eat near the apartment — this is a long day on your feet and the kitchen is the point.' },
      ],
      alts: {
        'Late afternoon': [
          { label: 'The riverside only', dest: 'uji', text: 'Skip both and walk the water instead: the two islands, the bridge that has been rebuilt on the same spot since 646, and the tea houses along the bank.', fits: 'The same fifteen minutes of riverbank the other options sit on, with nothing to be inside by a closing time.' },
        ],
        'Evening': [
          { label: 'Fushimi Inari at night', dest: 'fushimi-inari', text: 'The gates are open and lit twenty-four hours and there is nobody there after dark. Get off on the way back rather than making a separate trip.', fits: '⚠️ Twenty-five minutes from Uji and it is on the line home, so it costs one stop rather than a journey.' },
        ],
      },
    },
  },

  10: {
    a: {
      title: 'Arashiyama, one area only',
      thesis: 'Bamboo before eight, then the temple, the villa garden and the bridge — all within a kilometre, in the order that keeps you ahead of the coaches.',
      stops: ['arashiyama', 'tenryu-ji', 'okochi-sanso', 'togetsukyo'],
    },
    b: {
      title: 'The northern temples',
      thesis: 'Three UNESCO sites and a Zen city on one road and one bus line. Kinkaku-ji, Ryōan-ji and Ninna-ji are ten minutes apart in sequence, which is the tightest run of famous temples in Kyoto.',
      stops: ['kinkaku-ji', 'ryoan-ji', 'ninna-ji', 'daitoku-ji'],
      blocks: [
        { when: 'Early morning', text: '⭐ Kinkaku-ji at opening, 9:00. The Golden Pavilion is a 1955 rebuild after a monk burned the original in 1950, and it is still the photograph — three storeys in three different architectures, gold-leafed, reflected in the pond. Twenty minutes, then leave; the loop is one-way and there is nothing else to do there.' },
        { when: 'Late morning', text: 'Ten minutes west to Ryōan-ji: fifteen stones in raked gravel, arranged so that you can never see all fifteen at once from anywhere on the veranda. Sit down. The pond garden below it is older than the rock garden and almost everyone walks past it.' },
        { when: 'Midday', text: '🏛 Ten minutes further to Ninna-ji, headed by an imperial prince for a thousand years — so the Goten is a palace, not a monastery: painted sliding doors, a covered corridor walked in stockinged feet, and a five-storey pagoda whose roofs are all nearly the same width.' },
        { when: 'Afternoon', text: 'Twenty-five minutes east to Daitoku-ji: a walled city of Zen, two dozen sub-temples behind one gate, four of them permanently open, and gravel lanes that stay silent in high season. This is where to spend the part of the day when everywhere else is full.' },
        { when: 'Evening', text: 'Thirty minutes back to Shijō-Karasuma. Yonefuku three minutes from the apartment — tempura fried in 100% rice oil rather than a blend nobody can describe, which answers the oil question whichever oil you avoid.' },
      ],
      alts: {
        'Afternoon': [
          { label: 'Kyoto Imperial Palace', dest: 'kyoto-imperial-palace', text: 'Free, no booking, numbered tickets from 8:40. Where the emperors lived until 1869: the enthronement hall, a raked-gravel courtyard, and 65 hectares of park around it. ⚠️ Closed Mondays.', fits: '\u26a0\ufe0f About 30 min from the northern temples \u2014 but it is on the way back to the apartment, so it costs a leg you were making anyway, if you leave Daitoku-ji by four.' },
          { label: 'Nishiki for knives', dest: 'nishiki', text: 'The covered market five blocks long: Aritsugu for a knife they will grind and engrave while you wait, ceramics, and the shops rather than the food.', fits: '\u26a0\ufe0f 30 min back into the centre from the northern temples \u2014 but that is the journey home, so it costs the shopping time rather than the travel.' },
        ],
        'Early morning': [
          { label: 'Arashiyama at seven first', dest: 'arashiyama', text: 'The bamboo grove is free, unfenced and empty before eight. Do it at dawn, then take the tram east and pick this plan up at Ninna-ji.', fits: '⚠️ Twenty-five minutes from Kinkaku-ji, but the Randen tram links Arashiyama straight to Ninna-ji — so it slots in rather than doubling back.' },
        ],
      },
    },
  },

  11: {
    a: {
      title: 'Manga & central Kyoto',
      thesis: 'A relaxed morning on open shelves, a castle with singing floors ten minutes away, and the market on the walk home. Everything inside the central grid.',
      stops: ['manga-museum', 'nijo-castle', 'nishiki', 'pontocho', 'eat-hanaroku'],
    },
    b: {
      title: 'Nara for the day',
      thesis: 'Forty-five minutes each way for the strongest single day of art on this trip. Everything is inside Nara Park, on foot, in one line east from the station.',
      stops: ['kofuku-ji', 'nara-national-museum', 'nara', 'kasuga-taisha'],
      blocks: [
        { when: 'Morning', text: '🦌 Kintetsu to Nara, about forty-five minutes. Five minutes from the station is Kōfuku-ji and, inside its National Treasure Museum, the Ashura statue — dry lacquer, 734, three faces on an adolescent caught between grief and resolve, and the most loved sculpture in Japan. ⚠️ The five-storey pagoda is fully enclosed for restoration until about 2034.' },
        { when: 'Late morning', text: '🏛 Five minutes east to the Nara National Museum. The Buddhist Sculpture Hall does what no temple can: a hundred figures lit from several sides, at eye level, with space to walk around them. After a week of looking at Buddhist images through incense and grilles, this is where they become sculpture. ⚠️ Closed Mondays.' },
        { when: 'Afternoon', text: '⭐ Tōdai-ji, five minutes north through the deer. The Great Buddha Hall is the largest wooden building in the world even at two-thirds of its original width, and the bronze inside is fifteen metres of eighth-century casting. Then twenty minutes east to Kasuga Taisha — three thousand stone lanterns along a forest approach protected from logging since 841.' },
        { when: 'Evening', text: 'Forty-five minutes back to Kyoto. Teppan Hanaroku at Hotel Kanra for the last Kyoto night — A5 wagyu at a counter you can walk home from.' },
      ],
      alts: {
        'Afternoon': [
          { label: 'Isuien & Naramachi', text: 'Skip Kasuga Taisha and go quieter instead: Isuien Garden, which borrows Tōdai-ji\'s gate as scenery, then the preserved merchant lanes of Naramachi south of the park.', fits: 'Both are within fifteen minutes of Tōdai-ji on foot, and neither has a coach park.' },
          { label: 'Just the deer and the hall', dest: 'nara', text: 'Tōdai-ji, the park, the deer, and a bench. Nara does not have to be a checklist.', fits: 'Removes the twenty-minute walk east and gives the hour back.' },
        ],
        'Morning': [
          { label: 'Osaka instead', dest: 'osaka-castle', text: 'A different day trip: Osaka Castle and the excavated Toyotomi wall seven metres below it, then Den Den Town in the afternoon.', fits: '⚠️ Fifty minutes from Kyoto and a different direction entirely — this replaces the whole day, it does not slot into it. Eat before you go; Osaka street food is the worst-case profile on this trip.' },
        ],
      },
    },
  },

  12: { single: 'Departure. Kyoto → Kansai on the Haruka, three hours at KIX for an international flight. The only real choice is whether Tō-ji fits before the train, and it does — fifteen minutes on foot from the platform.' },
};

/** Where you sleep each night, which is the only place a plan can move within. */
window.BASES = [
  { base: 'Tokyo',  days: [1, 2, 3, 4] },
  { base: 'Hakone', days: [5, 6] },
  { base: 'Kyoto',  days: [7, 8, 9, 10, 11] },
  { base: 'Home',   days: [12] },
];

/** The travel days. Single-shape, no picker, and never in another day's pool. */
window.TRAVEL_DAYS = [1, 5, 7, 12];

