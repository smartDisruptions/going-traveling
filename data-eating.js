/**
 * Eating out, without a diet baked into it.
 *
 * The model is two questions asked in order, and which allergen fills them is
 * yours to choose on the Food safety page — the guidance here is about the
 * shape of Japanese restaurants rather than about any one ingredient:
 *
 *   Question 1 decides the RESTAURANT. Only an allergen a kitchen genuinely
 *   cannot keep apart rules a place out entirely.
 *   Question 2 decides the DISH. Everything else is per-plate.
 *
 * The distinction matters because getting it backwards is what turns a trip to
 * one of the world's great food countries into a cooking holiday. A kitchen
 * can use your allergen all evening and still be an excellent choice, so long
 * as one or two genuinely good dishes avoid it. The goal is not a kitchen that
 * has never met the ingredient. It is a dish that is naturally clear of it, or
 * trivially adjusted, in a restaurant that answered the door question honestly.
 */
window.EATING = {
  asOf: 'Researched August 2026. Menus, oils and seasonal specials change — reconfirm before every booking, and confirm your own allergen rather than trusting a note written for somebody else.',

  model: {
    title: 'How to judge a restaurant',
    lead: 'Two questions, asked in this order. Confusing them is what makes an allergy far more restrictive than it needs to be.',
    levels: [
      {
        n: 1, tone: 'critical', title: 'Question 1 screens the venue',
        lead: 'Is your allergen used here at all, and if so can the kitchen keep it apart?',
        points: [
          'Is it in use today — in a sauce, a dessert, a seasonal menu, a free bar snack?',
          'Where is it handled? Fryers, blenders, pastry stations, boards and tongs are the risk, not the recipe.',
          'Can staff describe their separation clearly, without hedging?',
        ],
        rule: 'Walk away only when the allergen is actively in use AND nobody can describe how it is kept apart. A vague answer about a severe allergy is a no, not a maybe.',
      },
      {
        n: 2, tone: 'strict', title: 'Question 2 picks the dish',
        lead: 'Which plates are naturally clear, and which become clear with one change?',
        points: [
          'What is already free of it, before anyone adapts anything?',
          'What becomes fine by leaving off a sauce, a dressing, a garnish?',
          'Will the kitchen serve it salt-grilled, unmarinated, or with the sauce on the side?',
        ],
        rule: 'Ask what the kitchen CAN do rather than whether it can guarantee an allergen-free kitchen. The first question has an answer; the second almost never does.',
      },
    ],
  },

  /* Six states, not approved/rejected. */
  statuses: [
    { id: 'strong', label: 'Strong options', tone: 'matcha' },
    { id: 'several', label: 'Several workable dishes', tone: 'matcha' },
    { id: 'one', label: 'One promising dish', tone: 'kin' },
    { id: 'confirm', label: 'Requires advance confirmation', tone: 'kin' },
    { id: 'venue', label: 'Venue-level concern', tone: 'shu' },
    { id: 'none', label: 'No suitable dishes identified', tone: 'shu' },
  ],

  /* The four things to establish for any venue. */
  screen: [
    { k: 'Is it here at all', v: 'Is your allergen used anywhere in the building — kitchen, bar, pastry section, free snacks? This is the only question that can rule out the restaurant itself.' },
    { k: 'Compatible dishes', v: 'Which menu items are naturally free of it, and which become so by removing a sauce, a dressing or a topping?' },
    { k: 'Modification flexibility', v: 'Will they serve it salt-grilled? Omit the dressing? Put sauce on the side? Cook a protein unmarinated on a cleaned surface?' },
    { k: 'Quality', v: 'Is the compatible dish actually good food, or a plain emergency plate? A dinner out should be worth eating, not merely survivable.' },
  ],

  /* The formats that work — ranked by how easily a great dish comes out of
     them for MOST allergies. Your own may reorder this; the reasons are given
     so you can. */
  cuisines: [
    {
      id: 'yakiniku', name: 'Yakiniku', jp: '焼肉', rank: 'best',
      why: 'Possibly the single best format available. You choose raw meat and cook it yourself over your own grill — more control than any other Japanese restaurant offers, and the good places are about beef quality rather than sauce.',
      order: ['Unmarinated cuts, ordered shio (salt) rather than tare', 'Salt-seasoned wagyu — tongue, short rib, loin', 'Plain grilled vegetables', 'White rice'],
      ask: ['Are the shio cuts salted at the table or pre-seasoned in the kitchen?', 'Is the grill brushed with anything before use?', 'What is in the dipping sauce and the oil-and-salt dip?'],
      avoid: 'The dipping tare and pre-marinated cuts, which are where every added ingredient lives.',
    },
    {
      id: 'sushi', name: 'Sushi & sashimi', jp: '寿司・刺身', rank: 'best',
      why: 'Raw fish and rice, and at a good counter the chef seasons each piece in front of you. Shari is vinegar, salt and sugar. Almost nothing is added that you cannot see.',
      order: ['Plain sashimi', 'Nigiri that has not been brushed with nikiri', 'Salt-and-citrus seasoned fish — many chefs prefer it', 'Plain rice', 'Simple rolls, after checking'],
      ask: ['Is any fish marinated or cured before serving?', 'Is anything brushed onto the nigiri before it reaches me?', 'Is there anything beyond vinegar, salt and sugar in the rice?', 'What is in the specialty rolls and the dessert?'],
      avoid: 'Anything described as zuke (marinated), and the creative rolls, where the unexpected ingredients live.',
    },
    {
      id: 'yakitori', name: 'Yakitori, ordered shio', jp: '焼き鳥', rank: 'best',
      why: 'Every yakitori counter offers a shio–tare choice as standard. Ordering salt is not a special request, it is half the menu — and a shio-grilled thigh over binchōtan charcoal is one of the best things in Japan.',
      order: ['Momo (thigh) shio', 'Mune (breast) shio', 'Tebasaki (wings) shio', 'Negima, salt only', 'Plain grilled vegetables'],
      ask: ['Is the meat pre-marinated before skewering?', 'What is in the salt blend?', 'Is the same brush used across tare and shio skewers?', 'What arrives as a free starter?'],
      avoid: 'Tare skewers, tsukune (bound with several things you cannot see), and the free bar snack.',
    },
    {
      id: 'shioyaki', name: 'Salt-grilled fish', jp: '塩焼き', rank: 'best',
      why: 'The most naturally simple traditional Japanese meal there is: a whole fish, salt, charcoal. A shioyaki teishoku is rice, fish, vegetables and pickles — and only the soup and the pickles need a question.',
      order: ['Shioyaki fish — saba, sanma, ayu, nodoguro', 'White rice', 'Plain grilled or simmered vegetables', 'Pickles, after checking'],
      ask: ['Is the fish brined or marinated before grilling?', 'What is in the pickles and the soup?'],
      avoid: 'The soup that comes with the set, unless the stock has been explained.',
    },
    {
      id: 'teppanyaki', name: 'Teppanyaki', jp: '鉄板焼き', rank: 'best',
      why: 'Cooked in front of you, one course at a time, by a chef standing close enough to ask. Nothing is assembled out of sight, which makes it the most auditable format in Japanese dining.',
      order: ['Japanese beef, salt and pepper only', 'Seafood — scallop, prawn, abalone', 'Grilled vegetables', 'White rice rather than the garlic fried rice'],
      ask: ['Can a cleaned section of the griddle and clean tools be used?', 'Which oil is on the griddle?', 'Can the garnishes and the table sauces be left off entirely?'],
      avoid: 'The sauce set at each place, and dessert unless confirmed.',
    },
    {
      id: 'shabu', name: 'Shabu-shabu', jp: 'しゃぶしゃぶ', rank: 'good',
      why: 'As plain as cooked food gets: meat and vegetables swirled through hot liquid at your own table. Whether it works depends entirely on one answer.',
      order: ['Plain beef or pork', 'Vegetables', 'Rice', 'Salt or a verified seasoning'],
      ask: ['⚠️ THE question: what is in the broth? Can a plain kombu or plain-water pot be served instead?', 'What is in the ponzu and the sesame dip?'],
      avoid: 'Both standard dips until they have been described to you.',
    },
    {
      id: 'tempura', name: 'Tempura', jp: '天ぷら', rank: 'good',
      why: 'Batter is flour, egg and water, and a good counter fries to order. The questions are the oil and what else has been through it.',
      order: ['Prawn, white fish and vegetables', 'Salt rather than tentsuyu', 'Sashimi if the counter also serves it', 'Plain rice'],
      ask: ['Which oil, and is it used for every fryer?', 'Is there anything beyond flour, egg and water in the batter?', 'What else goes through the same oil?'],
      avoid: 'Tentsuyu, which is a sauce rather than a seasoning.',
    },
    {
      id: 'tonkatsu', name: 'Tonkatsu', jp: 'とんかつ', rank: 'good',
      why: 'One protein, one crumb, one fryer — a short ingredient list by Japanese standards, and the shops are usually specialists rather than generalists.',
      order: ['Plain katsu with salt rather than sauce', 'Rice', 'Shredded cabbage, dressing on the side'],
      ask: ['What is in the crumb and the batter?', 'Is the fryer shared with anything else?', 'Can the sauce and the dressing come separately?'],
      avoid: 'The house sauce, which is a long list, and the pre-dressed cabbage.',
    },
    {
      id: 'izakaya', name: 'Izakaya', jp: '居酒屋', rank: 'good',
      why: 'A long menu of small plates is genuinely useful — there is almost always something simple on it — but it is also a shared-fryer, many-hands environment, so it rewards questions more than most.',
      order: ['Grilled fish or meat, salt only', 'Sashimi', 'Plain grilled vegetables', 'Rice'],
      ask: ['What arrives as the otōshi, the seated-charge starter?', 'Which dishes share a fryer?', 'Can this come without the dressing or the topping?'],
      avoid: 'The otōshi you did not order, and anything fried unless the oil has been explained.',
    },
  ],

  /* Harder rather than forbidden. Each of these has several ingredients you
     cannot see; each usually has a simpler neighbour on the same menu. */
  harder: [
    { name: 'Ramen', why: 'Tare, broth, noodle and topping are four separate ingredient lists, and the broth is rarely made in-house from a recipe anyone can recite.' },
    { name: 'Kaiseki', why: 'A set sequence decided days ahead. There is no single plate to modify, which is the one thing that makes everything else workable.' },
    { name: 'Sukiyaki', why: 'The warishita sauce is the dish. Removing it removes the point.' },
    { name: 'Japanese curry', why: 'Roux is a long, industrial ingredient list and very few shops make their own.' },
    { name: 'Okonomiyaki & takoyaki', why: 'Batter, sauce, mayonnaise and topping all need checking at once, usually at a counter that is also a griddle for everyone else.' },
    { name: 'Buffets', why: 'Shared tongs, shared surfaces, no one accountable for any single dish.' },
    { name: 'Convenience-store prepared meals', why: 'Packaged, so the mandatory eight are declared — but nothing else is, and the recommended twenty are optional.' },
    { name: 'Bakery and patisserie', why: 'Cream, paste and nut fillings are common, in-store labelling is rare, and everything shares a counter.' },
  ],

  places: [
    /* ───────────────── TOKYO — near Tokyo Station ───────────────── */
    {
      id: 'seo', name: 'Yakitori Seo', jp: '焼鳥 瀬尾',
      venue: 'The Tokyo Station Hotel, B1', city: 'Tokyo', travel: 'Walkable from the apartment',
      cuisine: 'Yakitori — chef-led counter', status: 'strong', rank: 1, day: 2,
      use: 'The first Japanese dinner, and an easy one',
      url: 'https://tabelog.com/en/tokyo/A1302/A130201/13230631/',
      why: 'Named to the Japan Restaurant Award Best 100 three years running, and a yakitori counter is the format that most naturally fits: shio and tare are a standing choice on every skewer, so ordering salt is not a favour. Chef-led, close, and genuinely one of the best meals in the district.',
      order: ['Momo, mune and tebasaki — all shio', 'Negima, salt only', 'Grilled vegetables', 'Rice'],
      ask: ['Is any meat pre-marinated before skewering?', 'What is in the salt blend?', 'Is the same brush used across shio and tare skewers?', 'What is on the dessert list, and what arrives free at the bar?'],
      allergen: 'A yakitori counter is one of the lowest-risk formats there is — charcoal, chicken, salt. Ask what arrives as a free bar snack, and about the dessert course.',
    },
    {
      id: 'asanogawa', name: 'Sushidokoro Asanogawa', jp: '鮨処 あさの川',
      venue: 'The Tokyo Station Hotel, 2F', city: 'Tokyo', travel: 'Direct from the Marunouchi south exit',
      cuisine: 'Edomae sushi', status: 'strong', rank: 2, day: 4,
      use: 'The sushi dinner, a few minutes from the door',
      url: 'https://www.sushiasanogawa.jp/en/tokyo',
      why: 'A counter inside the Tokyo Station Hotel where the chef seasons each piece himself. Sashimi and unbrushed nigiri need nothing removed — the dipping bowl simply goes untouched. Three named courses at ¥9,075, ¥12,100 and ¥16,940 including tax and service, so the bill is known before you sit down, and a hotel restaurant will take a dietary request at reservation in a way a standalone counter often will not.',
      order: ['Sashimi selection', 'Nigiri served unbrushed, salt and citrus instead of nikiri', 'Plain rice', 'Cucumber roll'],
      ask: ['Is any fish cured or marinated (zuke) before serving?', 'Is nikiri brushed on before it reaches the plate?', 'Is anything beyond vinegar, salt and sugar in the shari?', 'What is in the specialty rolls and the dessert course?'],
      allergen: 'An Edomae counter has no nuts in the tradition. Ask about specialty rolls and the dessert course, which is where hotel sushi bars improvise.',
    },
    {
      id: 'daian', name: 'Teppanyaki Daian Club', jp: '鉄板焼処 大安くらぶ',
      venue: 'Marunouchi Hotel', city: 'Tokyo', travel: '1 min from the Marunouchi north exit',
      cuisine: 'Teppanyaki — Wagyu and seafood', status: 'several', rank: 3, day: 3,
      use: 'The special Tokyo dinner',
      url: 'https://www.marunouchi-hotel.co.jp/en/restaurant/daian/index.html',
      why: 'A minute from Tokyo Station, and the whole meal is cooked a metre away by someone you can talk to — Shizuoka Sodachi and Kobe beef, live abalone, on a counter. Sauces and garnishes are standard here and standard to leave off one portion; the request just has to arrive before the cooking does.',
      order: ['Wagyu, salt and pepper only', 'Seafood — scallop or prawn', 'Grilled vegetables', 'Plain rice, not the garlic fried rice', 'Butter is fine'],
      ask: ['Can a cleaned section of the griddle and clean tools be used?', 'Which oil is on the teppan?', 'Can the garnishes and table sauces be left off entirely?', 'What is in the dessert course?'],
      allergen: 'Hotel pastry kitchens carry nut pastes and garnishes. Ask about the dessert course and the bar by name, and ask whether anything nut-coated shares the griddle.',
    },
    {
      id: 'sumida', name: 'Teppan-yaki Sumida', jp: '鉄板焼 すみだ',
      venue: 'Royal Park Hotel, 20F', city: 'Tokyo', travel: 'Suitengūmae, direct from the station — 10 min by taxi',
      cuisine: 'Teppanyaki — Wagyu', status: 'several', rank: 4,
      use: 'The higher-end teppanyaki, if you will travel for it',
      url: 'https://www.rph.co.jp/restaurants/sumida/',
      why: 'Top floor of the hotel, so the griddle comes with a view over Nihonbashi. The strongest formal allergen process of the Tokyo venues — it runs a published system, encourages advance requests, and states plainly that its kitchens are shared and that it may refuse a severe-allergy request rather than guess. That honesty is why the rest of what it says is worth trusting.',
      order: ['Unmarinated steak or fish fillet', 'Salt only', 'Plain rice', 'Plain vegetables'],
      ask: ['A cleaned teppan section, or a separate pan?', 'Which oil?', 'Can the sauces, soup and bread be omitted?'],
      allergen: '⚠️ Its published allergen system covers Japan\'s mandatory eight, which includes peanut and walnut — genuinely useful. Cashew and almond are only on the recommended list, so raise those separately if they apply.',
    },
    {
      id: 'camellia', name: 'Camellia', jp: 'カメリア',
      venue: 'The Tokyo Station Hotel', city: 'Tokyo', travel: 'A few minutes on foot',
      cuisine: 'Bar and café — all-day Western', status: 'several', rank: 5,
      use: 'The Western fallback, and a flexible one',
      url: 'https://www.tokyostationhotel.jp/restaurants/',
      why: 'A broad Western menu from sandwiches to steak, with more room to improvise than a fixed course. Useful on a night when nobody wants to negotiate a Japanese menu — grilled protein, salt, plain sides, and butter is allowed.',
      order: ['Plain steak or grilled fish, clean pan', 'Salt only', 'Plain rice or potatoes', 'Steamed vegetables'],
      ask: ['What is in the stock and the marinade?', 'Any wine in the pan?', 'What is in the dessert and at the bar?'],
      allergen: 'All-day hotel dining means a pastry section and a bar. Ask about both, and about nut garnishes on the Western plates.',
    },

    /* ───────────────── HAKONE — around Gōra ───────────────── */
    {
      id: 'gora-brewery', name: 'Gōra Brewery & Grill', jp: '強羅ブリュワリー&グリル',
      venue: 'Gōra', city: 'Hakone', travel: '8 min walk from Gōra Station',
      cuisine: 'Grill, sushi and Japanese', status: 'strong', rank: 1, day: 6,
      use: 'The Hakone dinner — and it is walkable from the villa',
      url: 'https://www.gorabrewery.com/',
      why: 'The sister restaurant to Itoh Dining by Nobu, doing grilled steak, sushi and Japanese plates eight minutes from the villa. A grill-and-sushi menu is exactly the shape that works here, and in a valley where nearly every dinner is a fixed kaiseki, an à-la-carte kitchen is worth a great deal.',
      order: ['Grilled steak or fish, salt', 'Sashimi', 'Plain grilled vegetables', 'Rice'],
      ask: ['Can a protein be served unmarinated and salt-only?', 'What is in the sauces served alongside?', 'What is in the desserts, the cocktails and the beer flights?'],
      allergen: 'A bar with a cocktail and dessert programme is the risk here rather than the kitchen. Ask about the bar explicitly, and about nut garnishes on the grill plates.',
    },
    {
      id: 'yakiniku-rock', name: 'Yakiniku ROCK', jp: '焼肉ロック',
      venue: 'Hakone-Yumoto', city: 'Hakone', travel: '3 min from Hakone-Yumoto Station — 40 min down the mountain railway from Gōra',
      cuisine: 'Yakiniku — fully private rooms', status: 'strong', rank: 2,
      use: 'The format with the most control, in a private room',
      url: 'https://tabelog.com/en/kanagawa/A1410/A141001/14090373/',
      why: 'Every table is a fully private room, and yakiniku is the best-fitting format on the whole trip — you pick raw meat and cook it yourself. Dinner runs about ¥6,000–8,000 a head. The catch is the geography: it is at Hakone-Yumoto, not Gōra, so this is a dinner you build the day around rather than one you wander to from the villa.',
      order: ['Unmarinated wagyu cuts, ordered shio', 'Plain vegetables', 'White rice'],
      ask: ['Are the shio cuts salted at the table or pre-seasoned?', 'Is the grill brushed with tare before use?', 'Is the sesame-oil dip pure or blended?'],
      allergen: 'Rare in a yakiniku house, but the salt-and-sesame-oil dip is where to ask — peanut is a frequent extender in cheaper sesame blends. Check the dessert list too.',
    },
    {
      id: 'hyatt-hakone', name: 'Dining Room — French', jp: 'ダイニングルーム',
      venue: 'Hyatt Regency Hakone', city: 'Hakone', travel: 'Short hop from Gōra',
      cuisine: 'French', status: 'several', rank: 3,
      use: 'The Western alternative in the valley',
      url: 'https://www.hyatt.com/hyatt-regency/en-US/hakrh-hyatt-regency-hakone-resort-and-spa',
      why: 'Invites allergy contact by email in advance, and a French kitchen is far more likely than a ryokan to have an unseasoned protein and a spare clean pan. The backup if the Gōra places do not work out.',
      order: ['Grilled meat or fish, clean pan, salt', 'Plain potato or rice', 'Steamed vegetables', 'Butter permitted'],
      ask: ['No wine, brandy or alcohol in the sauce — including cooked off?', 'What is in the stock?', 'What is in the dessert and the breakfast buffet?'],
      allergen: 'A resort hotel with a pastry section and a breakfast buffet. Ask about both — a buffet is the one setting where separation is nobody\'s job.',
    },

    /* ───────────────── KYOTO — Shijō–Karasuma ───────────────── */
    {
      id: 'hiro', name: 'Kyō no Yakiniku-dokoro Hiro', jp: '京の焼肉処 弘 四条木屋町店',
      venue: 'Shijō-Kiyamachi', city: 'Kyoto', travel: '10 min walk from the apartment, on the Takasegawa',
      cuisine: 'Kyoto wagyu yakiniku', status: 'strong', rank: 1, day: 7,
      use: 'The first Kyoto dinner, and it sits where the evening walk goes',
      url: 'https://yakiniku-hiro.com/english/',
      why: 'A Kyoto butcher\'s own yakiniku house, on the Takasegawa canal a minute from Pontochō — so dinner and the evening walk are the same trip. Yakiniku is the most controllable format there is, the beef is the point rather than the sauce, and at roughly ¥4,000–5,000 a head it is the cheapest of the good dinners on this list.',
      order: ['Premium cuts ordered shio, unmarinated', 'Plain vegetables', 'White rice'],
      ask: ['Salted at the table, or seasoned in the kitchen?', 'Is the grill wiped with tare between courses?', 'Is the sesame-oil-and-salt dip pure?'],
      allergen: '⚠️ Their signature マンゴータン (mango tan) is thick-cut beef tongue fanned out to look like mango slices — no fruit and no nuts in it at all. Worth knowing before the word appears on a menu. The real question here is the sesame-oil dip and whether peanut is in the blend.',
    },
    {
      id: 'yonefuku', name: 'Yonefuku', jp: '米福',
      venue: 'Shijō Karasuma', city: 'Kyoto', travel: '3 min walk',
      cuisine: 'Tempura, sushi and seafood', status: 'strong', rank: 2, day: 10,
      use: 'Tempura and sushi in one place, three minutes away',
      url: '',
      why: 'The detail that puts this near the top: it fries in 100% rice oil rather than a blend nobody can describe — which answers the oil question before it has to be asked, whichever oil you are avoiding. Tempura with salt, plus sashimi and nigiri on the same menu, three minutes from the apartment.',
      order: ['Tempura — prawn, white fish, vegetables — with salt, not tentsuyu', 'Sashimi', 'Nigiri, unbrushed', 'Plain rice'],
      ask: ['Confirm the rice oil is used for every fryer, not just the tempura counter.', 'Anything in the batter beyond flour, egg and water?', 'Is any fish marinated?', 'What is in the creative rolls and the dessert?'],
      allergen: '⚠️ "Creative sushi" menus are where unexpected ingredients turn up in Japan — ask about the specialty rolls specifically, and about the dessert list.',
    },
    {
      id: 'hyoto', name: 'Kyoto Hyōtō', jp: '京都 瓢斗',
      venue: 'Shijō Karasuma', city: 'Kyoto', travel: '4 min walk from Karasuma or Shijō Station',
      cuisine: 'Shabu-shabu', status: 'confirm', rank: 3,
      use: 'Shabu-shabu, if the broth clears',
      url: 'https://hyoto.jp/shop/kyotoshijokarasuma/',
      why: 'Twenty years of dashi-shabu on tatami with private rooms, at about ¥6,000–8,000 a head, and the dish itself is as plain as food gets — meat and vegetables cooked in liquid at your table. Whether it works depends entirely on one answer.',
      order: ['Plain beef or pork', 'Vegetables', 'Rice', 'Salt or a verified seasoning'],
      ask: ['⚠️ THE question: what is in the broth? Their signature dashi is a house recipe rather than a published one. Can a plain kombu or plain-water pot be served instead?', 'What is in the ponzu and the goma-dare?'],
      allergen: 'Low risk in the kitchen; the questions are the broth and both dipping sauces. Sesame dip is standard and peanut is a common extender in the cheaper blends — ask which they use.',
    },
    {
      id: 'hanaroku', name: 'Teppan Hanaroku', jp: '鉄板 花六',
      venue: 'Hotel Kanra Kyoto', city: 'Kyoto', travel: 'Walkable',
      cuisine: 'Teppanyaki — Wagyu', status: 'several', rank: 4, day: 11,
      use: 'The last-night teppanyaki',
      url: 'https://www.hotelkanra.jp/en/',
      why: 'Wagyu and seasonal vegetables at a counter you can walk home from, in a hotel that asks for allergy information in advance and says plainly that its kitchens and utensils are shared. Everything is cooked where you can watch it.',
      order: ['Plain wagyu, salt only', 'Plain rice', 'Plain vegetables'],
      ask: ['A cleaned, isolated section of the teppan and clean tools?', 'Which oil?', 'Can this be cooked plain — no marinade, no finishing sauce?'],
      allergen: 'Hotel pastry section — ask about dessert and the bar. On the griddle itself, ask about the garnishes and the finishing oils.',
    },
    {
      id: 'forni', name: 'FORNI', jp: 'フォルニ',
      venue: 'Hotel The Mitsui Kyoto', city: 'Kyoto', travel: 'Short hop — Nijō',
      cuisine: 'Italian', status: 'several', rank: 5,
      use: 'The Western special-occasion dinner',
      url: 'https://www.hotelthemitsui.com/en/kyoto/restaurants/forni/',
      why: 'A published allergen framework that covers Japan\'s recommended twenty as well as the mandatory eight, at a hotel that asks for restrictions at reservation. That is unusually thorough for Japan, and it is the reason this is on the list at all.',
      order: ['Oven-roasted or pan-cooked fish or meat, salt', 'Plain potato, rice or roasted vegetables', 'No olive-oil blend unless verified'],
      ask: ['No wine or cooking alcohol, including cooked off?', 'Can the garnishes and finishing oils be left off?', 'What is in the dessert course and at the bar?'],
      allergen: '⚠️ Its allergen framework covers Japan\'s recommended twenty as well as the mandatory eight, which is unusually thorough. Italian dessert is still the place to ask: nut pastes and praline are standard.',
    },
    {
      id: 'yasaka', name: 'YASAKA', jp: '八坂',
      venue: 'Park Hyatt Kyoto', city: 'Kyoto', travel: 'Higashiyama, above Yasaka Pagoda — 10 min walk from Gion-Shijō',
      cuisine: 'Teppanyaki, French technique', status: 'several', rank: 6,
      use: 'The splurge, on a Gion evening',
      url: 'https://www.tablecheck.com/en/kyoto-park-hyatt-yasaka',
      why: 'Teppanyaki cooked with French technique, in the Park Hyatt above the Yasaka Pagoda — everything happens on a griddle in front of you, which is the transparency this trip wants, and the view is the one on the postcards. ⚠️ It is also by far the most expensive meal considered here: courses run ¥33,000–55,000 a head, so two covers is roughly a tenth of the trip budget. Worth it as the one big night, not as a default.',
      order: ['Wagyu or fish from the teppan, salt only', 'Plain vegetables', 'Plain rice', 'Butter is permitted'],
      ask: ['A cleaned section of the griddle and clean tools?', 'Which oil, and is there butter or wine in the finish?', 'No wine or brandy in any sauce, including cooked off?', 'What is in the dessert course and at the bar?'],
      allergen: 'A hotel of this class runs a full pastry section and a cocktail bar. Ask about both, by name.',
    },
  ],

  /* Places to skip, and why. Kept short on purpose — a long exclusion list is
     usually a sign the screening question was asked too broadly. */
  excluded: [
    { name: 'Buffets, anywhere', city: 'All', reason: 'Shared serving utensils defeat a kitchen\'s controls however carefully the food was made. No amount of asking fixes a communal pair of tongs.' },
    { name: 'Osteria IL VIAGGIO & The Grill Toranomon', city: 'Tokyo', reason: 'Not an ingredient problem — a policy one. The operator states plainly that it cannot accommodate allergy requests. Believe a restaurant that tells you this; it is doing you a favour.' },
    { name: 'Standing bars and yatai', city: 'All', reason: 'No table, no menu you can read, nobody with time to answer, and a free snack you did not order already on the counter.' },
    { name: 'Kaiseki and meal-inclusive ryokan dinners', city: 'All', reason: 'A set sequence agreed days in advance. Some will substitute with enough notice — but the default is a menu nobody can change on the night.' },
  ],

  /* The email to send before booking. Fill in your own allergens; the shape is
     what matters, and it is deliberately short. A restaurant that has to read
     three paragraphs before it understands the question tends not to reply. */
  inquiry: {
    subject: 'Dining request — severe food allergy',
    opening: 'I would like to book a table, and I have a severe food allergy. I am not asking you to change your kitchen — I am asking which of your dishes you can serve for me, so that I know before we arrive.',
    fields: [
      { k: 'The allergen', v: 'Name it plainly, in English and in Japanese, and say what a reaction looks like. "Severe" and "anaphylaxis" both translate; "intolerance" does not, and blurs the two.' },
      { k: 'The venue question', v: 'Is it used anywhere in the restaurant, the bar or the pastry section, and how is contact prevented? This is the only question that can rule you out.' },
      { k: 'The dish question', v: 'Which dishes can you serve without it — or with it left off? Salt-grilled fish or meat, plain rice and plain vegetables are usually the easiest starting point.' },
      { k: 'The exit', v: 'Say that a no is a perfectly good answer and that you will not be offended. This is the sentence that gets you honest replies rather than reassuring ones.' },
    ],
    allowed: 'The framing that works: not "can you guarantee an allergen-free kitchen" — nobody can, and the honest answer is no — but "which of your dishes can you serve me". The first question ends the conversation. The second starts it.',
    questions: [
      'Is [allergen] used anywhere in the restaurant, bar or pastry kitchen, and how is contact prevented?',
      'Which dishes can you serve with none of it — including in the stock, the marinade and the finishing sauce?',
      'Can a protein be cooked plain, salt only, on a cleaned surface with clean tools?',
      'Which oil do you fry in, and is it shared with anything else?',
      'What arrives unordered — an otōshi, a free bar snack, a garnish?',
    ],
  },

  /* What a good answer looks like. */
  accept: [
    'It answers the venue question directly — used or not, and how separation works',
    'It names specific dishes rather than saying "we can accommodate"',
    'It confirms the stock, the marinade and the finishing sauce, not just the main ingredient',
    'It says plainly where it cannot help',
    'It replies at all, in reasonable time, before you have arrived',
  ],

  /* And what a bad one looks like. Two of these together is a no. */
  reject: [
    'It cannot answer the venue question, or answers it vaguely',
    'The allergen is in active use with no separation anyone can describe',
    'It says "we will do our best" and names nothing',
    'It cannot say whether a stock or a seasoning contains it',
    'It offers to "remove" an ingredient that was cooked into the dish',
    'It stops replying',
  ],

  /* The pattern underneath all of it. */
  pattern: [
    'Ask before you go, in writing, so the answer arrives while you can still change plans.',
    'Ask the venue question first and the dish question second. Getting that order wrong rules out most of the good food in Japan for no reason.',
    'Name the allergen in Japanese as well as English. 落花生, 大豆, えび, 卵 — the word doing the work should not be the one being translated on the spot.',
    'Treat "I am not sure" as a no, and thank them for it. It is the most useful answer a kitchen can give you.',
    'Carry a printed card and a photo of it. Phones die, and the person who can read it is not always the person you are talking to.',
  ],
};

/* Where the food comes from on the days you do cook. */
window.GROCERY = [
  {
    city: 'Tokyo',
    primary: [
      { name: 'Seijo Ishii, Shin-Marunouchi Building', note: 'Premium supermarket by Tokyo Station — imported and specialty packaged goods.' },
      { name: 'Maruetsu Petit Hatchōbori 4-chōme', note: 'Near Hatchōbori Station, open late. The everyday source for eggs, rice, produce, plain meat and fish.' },
    ],
  },
  {
    city: 'Hakone',
    primary: [
      { name: 'Seijo Ishii at Lusca Odawara', note: 'Beside Odawara Station — fresh meat, frozen, packaged and specialty.' },
      { name: 'Odakyu OX, Odawara east side', note: 'The other full grocery by the station.' },
    ],
    emergency: [
      { name: 'Greenmarket MOA Hakone', note: 'Small organic shop near Gōra, limited hours. Not a supermarket.' },
      { name: 'Daily Yamazaki Hakone Gōra', note: 'Basic convenience items only.' },
    ],
    warn: 'Now that both Hakone dinners can plausibly be eaten out, provision for breakfasts, lunches and one fallback dinner rather than for everything.',
  },
  {
    city: 'Kyoto',
    primary: [
      { name: 'Life Shijō Karasuma', note: 'A full supermarket in the lodging area, open late. Breakfasts and the occasional cooked dinner.' },
    ],
  },
];

window.GROCERY_RULES = {
  buy: ['Single-ingredient fresh meat and fish', 'Eggs', 'Plain white rice', 'Plain oatmeal, after label verification', 'Plain potatoes', 'Fresh vegetables', 'Familiar safe fruit', 'Salt', 'A verified cooking oil — rice or olive', 'Herbal caffeine-free drinks'],
  avoid: ['Pre-marinated meat', 'Deli counters and prepared salads', 'Dressings', 'Seasoned fish', 'Bakery creams', 'Juice and smoothie blends', 'Granola without a full ingredient review', 'Meat substitutes and protein bars', 'Matcha products and chocolate', 'Mixed fruit cups unless every piece is visible'],
};
