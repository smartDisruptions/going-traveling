/**
 * The allergen library.
 *
 * The old version of this app hard-coded one traveller's restrictions into
 * every page. That made the food pages useless to anybody else and, worse,
 * quietly wrong — a plan built around avoiding one thing tells you nothing
 * about avoiding another. So the restrictions come out of the content and into
 * here, and the Food safety page asks you instead.
 *
 * Each entry carries what actually helps in Japan:
 *
 *   `law`      where it sits in Japan's labelling regime — mandatory,
 *              recommended, or nowhere at all. This is the single most useful
 *              fact per allergen and almost no guide states it.
 *   `hidden`   the places it turns up that are not the obvious ones.
 *   `formats`  Japanese meal formats ranked by how hard they are for you.
 *   `order`    what to order instead, by name, so the answer is not "be careful".
 *   `ask`      the questions that actually resolve it.
 *   `jp`       the phrase, in Japanese, to hand over or read aloud.
 *
 * Japan mandates labelling for eight allergens on packaged food — egg, milk,
 * wheat, buckwheat, peanut, shrimp, crab and walnut — and recommends a further
 * twenty. Restaurants are outside the law entirely. Where an allergen is only
 * "recommended", or absent, the label is not a safety system and the entries
 * below say so rather than implying otherwise.
 */
window.ALLERGENS = {
  peanut: {
    name: 'Peanut', jp: '落花生（ピーナッツ）', romaji: 'rakkasei / piinattsu',
    law: 'mandatory',
    lawNote: 'One of the eight Japan requires on packaged food, so a label that stays silent about peanut is meaningful. Restaurants are still outside the law.',
    lead: 'Rare in traditional Japanese cooking and common in the food that sits next to it — Chinese-influenced dishes, dressings, and anything crushed over the top.',
    hidden: [
      'Sesame dressings and goma-dare — peanut is a frequent extender in the cheaper ones',
      'Chinese-Japanese dishes: tantanmen, bang bang chicken, mābō-dōfu at chain restaurants',
      'Satay and "Asian" sauces on izakaya menus written for tourists',
      'Bar snacks — a dish of peanuts arrives unasked at many izakaya and the same tongs serve the rest',
      'Crushed nut toppings on cold noodles, salads and some sundae desserts',
      'Frying oil at a shop that also fries nut-coated items; peanut oil itself is rare in Japan but blends exist',
      'Ice cream, mochi fillings and bakery creams, where nut pastes are common',
    ],
    formats: [
      { id: 'sushi', tone: 'easy', why: 'Raw fish and vinegared rice. Peanut appears nowhere in the tradition, and a counter prepares each piece in front of you.' },
      { id: 'shioyaki', tone: 'easy', why: 'A whole fish, salt and charcoal. The recipe has three ingredients and none of them is a nut.' },
      { id: 'yakitori', tone: 'easy', why: 'Chicken over charcoal, salted or glazed. Ask about the salt blend and skip the bar nuts.' },
      { id: 'soba-udon', tone: 'ok', why: 'The noodles and broth are clear; the risk is a crushed-nut topping or a sesame dressing on a cold dish.' },
      { id: 'tempura', tone: 'ok', why: 'Batter is flour, egg and water. Ask what else goes through the same oil.' },
      { id: 'yakiniku', tone: 'ok', why: 'You grill it yourself, which is ideal — but the dipping tare and sesame dips are where to ask.' },
      { id: 'ramen', tone: 'harder', why: 'Tantanmen is sesame-and-peanut by design, and shops that serve it use the same counter and ladles.' },
      { id: 'chinese', tone: 'harder', why: 'Chūka restaurants are the single highest-risk format in Japan for peanut. Treat as a no unless the kitchen is certain.' },
      { id: 'izakaya', tone: 'harder', why: 'Long menus, shared fryers, and nuts that arrive as a free starter. Workable with questions, never by assumption.' },
      { id: 'dessert', tone: 'harder', why: 'Bakery creams, mochi fillings and parfaits use nut pastes freely and are rarely labelled in-store.' },
    ],
    order: [
      'Sashimi and plain nigiri', 'Salt-grilled fish (shioyaki teishoku)',
      'Shio yakitori', 'Plain grilled meat or fish', 'White rice', 'Plain eggs',
      'Miso soup — soy, not nut', 'Plain grilled or simmered vegetables',
    ],
    ask: [
      'Is peanut used anywhere in this kitchen — in a sauce, a dressing, a dessert, or as a bar snack?',
      'Is the sesame dressing pure sesame, or is peanut in the blend?',
      'Does anything nut-coated go through the same fryer?',
      'Can the dish come without the crushed topping?',
    ],
    card: 'I have a severe peanut allergy. Exposure can cause anaphylaxis. Please check every sauce, dressing, dessert, oil and garnish for peanut, and tell me if peanut is used anywhere in the kitchen — I am also concerned about shared utensils and fryers. If you are not certain, please say so; we will happily eat elsewhere.',
    cardJp: '重度のピーナッツ（落花生）アレルギーがあります。摂取するとアナフィラキシーを起こす可能性があります。ソース・ドレッシング・デザート・油・トッピングにピーナッツが含まれていないかご確認ください。厨房でピーナッツを使用している場合や、調理器具・揚げ油を共用している場合もお知らせください。確認が難しい場合は遠慮なくお伝えください。他の店で食事いたします。',
  },

  treenut: {
    name: 'Tree nuts', jp: '木の実（くるみ・カシューナッツ等）', romaji: 'ki no mi',
    law: 'mandatory-partial',
    lawNote: 'Walnut is one of the mandatory eight; cashew, almond, macadamia and pecan are only on the recommended list, so their absence from a label proves nothing.',
    lead: 'Walnut has been mandatory to label since 2023 and turns up in Japanese sweets far more than visitors expect.',
    hidden: ['Wagashi and mochi fillings', 'Salad dressings', 'Bakery bread and pastry', 'Kurumi-dare (walnut sauce) with soba in the north', 'Granola and konbini snack bars'],
    formats: [
      { id: 'sushi', tone: 'easy', why: 'Nothing in the tradition uses tree nuts.' },
      { id: 'shioyaki', tone: 'easy', why: 'Fish, salt, fire.' },
      { id: 'yakitori', tone: 'easy', why: 'Charcoal and salt; check only the dessert list.' },
      { id: 'soba-udon', tone: 'ok', why: 'Walnut dipping sauce is a regional speciality — ask which sauce comes with it.' },
      { id: 'dessert', tone: 'harder', why: 'Japanese sweets use walnut and chestnut freely and shops rarely label in-store.' },
      { id: 'izakaya', tone: 'ok', why: 'Fine with questions; the risk is dressings and the free nut plate.' },
    ],
    order: ['Sashimi and nigiri', 'Shioyaki teishoku', 'Shio yakitori', 'Plain rice and grilled vegetables'],
    ask: ['Is walnut or any nut in the sauce or the dressing?', 'Are there nuts in the dessert or the bread?'],
    card: 'I have a severe tree nut allergy — walnut, cashew, almond, pistachio, macadamia. Exposure can cause anaphylaxis. Please check sauces, dressings, breads, desserts and garnishes, and tell me if nuts are used anywhere in the kitchen.',
    cardJp: '重度の木の実アレルギーがあります（くるみ・カシューナッツ・アーモンド・ピスタチオ・マカダミア）。アナフィラキシーを起こす可能性があります。ソース・ドレッシング・パン・デザート・トッピングをご確認いただき、厨房で木の実を使用している場合はお知らせください。',
  },

  shellfish: {
    name: 'Shellfish & crustacean', jp: 'えび・かに', romaji: 'ebi / kani',
    law: 'mandatory',
    lawNote: 'Shrimp and crab are both on the mandatory eight, which is unusually helpful — Japan takes these two seriously because they are the most common serious allergy here.',
    lead: 'The hardest common allergy in Japan, because shrimp is a background ingredient rather than a visible one.',
    hidden: ['Dashi in almost every broth may include dried shrimp', 'Okonomiyaki and takoyaki batter', 'Senbei rice crackers', 'Chawanmushi', 'Shared tempura oil', 'Furikake and instant soup'],
    formats: [
      { id: 'shioyaki', tone: 'easy', why: 'A grilled fish is a grilled fish. Ask about the pickles and skip the soup.' },
      { id: 'yakiniku', tone: 'easy', why: 'Meat you grill yourself, and no seafood on the grill unless you order it.' },
      { id: 'yakitori', tone: 'ok', why: 'Chicken and charcoal; the question is whether seafood shares the grill.' },
      { id: 'sushi', tone: 'harder', why: 'Shared boards, shared hands, shrimp everywhere. Not a format to negotiate.' },
      { id: 'tempura', tone: 'harder', why: 'Prawn is the centrepiece and the oil is shared with everything else.' },
      { id: 'ramen', tone: 'harder', why: 'Seafood dashi is in most broths, often undeclared.' },
    ],
    order: ['Salt-grilled meat', 'Yakiniku, salt only', 'Plain rice', 'Plain grilled vegetables', 'Shio yakitori after checking the grill'],
    ask: ['Is there shrimp or crab in the dashi?', 'Does seafood go through the same oil or the same grill?', 'Is there seafood powder in the seasoning?'],
    card: 'I have a severe shellfish and crustacean allergy — shrimp, prawn, crab, lobster. Exposure can cause anaphylaxis. Please check the dashi and any stock, the frying oil, and the seasoning powders. Many Japanese broths contain dried shrimp; I need to know if this dish does.',
    cardJp: '重度の甲殻類アレルギーがあります（えび・かに）。アナフィラキシーを起こす可能性があります。だし・スープ・揚げ油・調味料に甲殻類が含まれていないかご確認ください。日本のだしには干しえびが含まれることが多いため、必ずご確認をお願いします。',
  },

  egg: {
    name: 'Egg', jp: '卵（たまご）', romaji: 'tamago',
    law: 'mandatory',
    lawNote: 'On the mandatory eight, so packaged food is reliable. Restaurants are not.',
    lead: 'Visible in some dishes and invisible in many — egg is a binder, a glaze and a batter across the whole cuisine.',
    hidden: ['Tempura batter', 'Tsukune and other minced skewers', 'Ramen (ajitama, and egg noodles)', 'Mayonnaise on almost everything', 'Kamaboko and fish cake', 'Custards and bakery glaze'],
    formats: [
      { id: 'sushi', tone: 'ok', why: 'Straightforward if you skip tamago and the mayonnaise rolls.' },
      { id: 'shioyaki', tone: 'easy', why: 'Fish, salt, rice, vegetables.' },
      { id: 'yakiniku', tone: 'ok', why: 'Excellent, provided you skip the raw-egg dip served with some cuts.' },
      { id: 'tempura', tone: 'harder', why: 'Egg is in the batter by definition.' },
      { id: 'ramen', tone: 'harder', why: 'The noodles themselves often contain egg.' },
    ],
    order: ['Sashimi', 'Shioyaki teishoku', 'Yakiniku, salt only', 'Plain rice', 'Soba, after checking the noodle'],
    ask: ['Is there egg in the batter or the noodle?', 'Can this come without mayonnaise?'],
    card: 'I have a severe egg allergy. Exposure can cause anaphylaxis. Please check batter, noodles, sauces, mayonnaise and glazes. I cannot eat tempura or most ramen noodles.',
    cardJp: '重度の卵アレルギーがあります。アナフィラキシーを起こす可能性があります。衣・麺・ソース・マヨネーズ・つや出しに卵が使われていないかご確認ください。天ぷらや多くのラーメンの麺は食べられません。',
  },

  milk: {
    name: 'Milk & dairy', jp: '乳製品', romaji: 'nyūseihin',
    law: 'mandatory',
    lawNote: 'On the mandatory eight for packaged food.',
    lead: 'Genuinely easy in traditional Japanese cooking and difficult everywhere Western food has arrived.',
    hidden: ['Butter on the teppan and in "wafū" pasta', 'Bread and pastry', 'Japanese curry roux', 'Corn potage in set meals', 'Milk bread used for katsu sando'],
    formats: [
      { id: 'sushi', tone: 'easy', why: 'No dairy in the tradition at all.' },
      { id: 'shioyaki', tone: 'easy', why: 'None here either.' },
      { id: 'yakitori', tone: 'easy', why: 'Charcoal, salt, chicken.' },
      { id: 'soba-udon', tone: 'easy', why: 'Buckwheat, wheat, dashi. No dairy.' },
      { id: 'teppanyaki', tone: 'ok', why: 'Butter is standard on the griddle and standard to leave off if you ask first.' },
      { id: 'dessert', tone: 'harder', why: 'Western-style desserts dominate the cafés; wagashi are usually fine.' },
    ],
    order: ['Sashimi and nigiri', 'Shioyaki teishoku', 'Shio yakitori', 'Soba or udon', 'Onigiri', 'Wagashi rather than cake'],
    ask: ['Is butter used on the griddle or in the sauce?', 'Is there milk in the bread or the roux?'],
    card: 'I have a severe dairy allergy — milk, butter, cream, cheese. Exposure can cause a serious reaction. Please check butter on the grill, sauces, bread and curry roux.',
    cardJp: '重度の乳製品アレルギーがあります（牛乳・バター・生クリーム・チーズ）。鉄板のバター、ソース、パン、カレールウなどに乳製品が含まれていないかご確認ください。',
  },

  wheat: {
    name: 'Wheat & gluten', jp: '小麦', romaji: 'komugi',
    law: 'mandatory',
    lawNote: 'Wheat is on the mandatory eight. Gluten as a category is not a Japanese concept, so ask about 小麦 specifically.',
    lead: 'The trap is soy sauce: almost all of it is brewed with wheat, which puts wheat into nearly every Japanese sauce.',
    hidden: ['Soy sauce — wheat is a primary ingredient in standard shōyu', 'Ponzu, teriyaki, tare, mentsuyu', 'Miso, in many varieties', 'Udon and ramen noodles', 'Most soba, which is cut with wheat flour', 'Imitation crab and fish cake'],
    formats: [
      { id: 'shioyaki', tone: 'easy', why: 'Salt-grilled fish with rice is the one classic Japanese meal that needs nothing removed.' },
      { id: 'yakiniku', tone: 'ok', why: 'Order shio, not tare, and skip the dipping sauces.' },
      { id: 'sushi', tone: 'ok', why: 'The rice and fish are fine; the soy sauce is not. Ask for tamari or use salt and citrus.' },
      { id: 'yakitori', tone: 'ok', why: 'Shio skewers only — tare is soy sauce, which is wheat.' },
      { id: 'ramen', tone: 'harder', why: 'Wheat noodles in a wheat-containing broth.' },
      { id: 'tempura', tone: 'harder', why: 'The batter is wheat flour.' },
    ],
    order: ['Shioyaki teishoku', 'Sashimi with salt and citrus', 'Shio yakitori', 'Yakiniku, salt only', 'Plain rice', 'Jūwari soba — 100% buckwheat, after confirming'],
    ask: ['Is this seasoned with soy sauce?', 'Is the soba 100% buckwheat or cut with wheat flour?', 'Can this be salt only?'],
    card: 'I have a severe wheat allergy. Exposure can cause a serious reaction. Please note that ordinary soy sauce contains wheat, so I cannot have soy sauce, ponzu, teriyaki, tare or mentsuyu. Salt-seasoned dishes are ideal.',
    cardJp: '重度の小麦アレルギーがあります。一般的な醤油には小麦が含まれるため、醤油・ポン酢・照り焼き・たれ・めんつゆは摂取できません。塩味のお料理をお願いできますと幸いです。',
  },

  soy: {
    name: 'Soy', jp: '大豆', romaji: 'daizu',
    law: 'recommended',
    lawNote: 'Only on the recommended list, not the mandatory eight. A package can contain soy and say nothing. This is the single most important fact for a soy allergy in Japan.',
    lead: 'The hardest allergy in Japan by some distance, because soy is the base of the seasoning system rather than an ingredient in it.',
    hidden: ['Soy sauce, miso, mirin-based tare, ponzu', 'Dashi that has been seasoned', 'Soybean oil in most blended frying oils', 'Edamame, tofu, yuba, natto', 'Vegan and Buddhist cuisine — built on soy, and marketed as the accommodating option'],
    formats: [
      { id: 'shioyaki', tone: 'easy', why: 'Salt-grilled fish is the one traditional meal with no soy in the recipe.' },
      { id: 'yakiniku', tone: 'ok', why: 'Order raw cuts shio and never touch the tare.' },
      { id: 'sushi', tone: 'ok', why: 'The dipping bowl is simply not used; shari is vinegar, salt and sugar.' },
      { id: 'yakitori', tone: 'ok', why: 'Shio is half the menu, so ordering salt is not a favour.' },
      { id: 'ramen', tone: 'harder', why: 'Soy is in the tare, the broth and often the noodle.' },
      { id: 'shojin', tone: 'harder', why: 'Buddhist vegetarian cooking is soy by definition.' },
    ],
    order: ['Shioyaki teishoku', 'Sashimi without the dipping bowl', 'Shio yakitori', 'Yakiniku ordered shio', 'Plain rice', 'Plain grilled vegetables'],
    ask: ['Is there soy sauce or miso in this?', 'Which oil is the fryer using — is it a soybean blend?', 'Can this be salt only, with no marinade?'],
    card: 'I have a severe soy allergy. I cannot have soy sauce, miso, tofu, edamame, soybean oil, soy lecithin, or any stock, marinade or sauce containing soy. Removing visible tofu does not make a dish soy-free. Salt-seasoned dishes are ideal.',
    cardJp: '重度の大豆アレルギーがあります。醤油・味噌・豆腐・枝豆・大豆油・大豆レシチン、および大豆を含むだしやソースは摂取できません。豆腐を取り除くだけでは対応できません。塩味のお料理をお願いできますと幸いです。',
  },

  fish: {
    name: 'Fish', jp: '魚', romaji: 'sakana',
    law: 'partial',
    lawNote: 'Salmon and mackerel are on the recommended list; fish as a category is not covered. Bonito dashi is almost never flagged.',
    lead: 'Difficult in Japan for one reason: katsuo dashi, dried bonito, is the base of nearly every savoury liquid.',
    hidden: ['Dashi in miso soup, noodle broth, simmered dishes and egg custard', 'Furikake and rice seasonings', 'Okonomiyaki toppings', 'Many "vegetarian" dishes, which are dashi-based'],
    formats: [
      { id: 'yakiniku', tone: 'easy', why: 'Grilled meat, no dashi anywhere near it, and you cook it yourself.' },
      { id: 'yakitori', tone: 'ok', why: 'Charcoal and chicken; ask about the salt blend and the dipping sauces.' },
      { id: 'teppanyaki', tone: 'ok', why: 'Cooked in front of you; ask what is in the sauces.' },
      { id: 'sushi', tone: 'harder', why: 'For obvious reasons.' },
      { id: 'soba-udon', tone: 'harder', why: 'The broth is bonito.' },
      { id: 'shojin', tone: 'ok', why: 'Genuine shōjin ryōri uses kombu dashi rather than bonito — worth asking, because it is one of the few reliable answers.' },
    ],
    order: ['Yakiniku, salt only', 'Shio yakitori', 'Plain grilled meat', 'White rice', 'Kombu-dashi dishes at a shōjin restaurant'],
    ask: ['Is the dashi bonito or kombu?', 'Is there fish powder in the seasoning?'],
    card: 'I have a severe fish allergy. Please note that Japanese dashi is usually made from dried bonito, which is fish. I cannot have miso soup, noodle broth or simmered dishes made with bonito dashi. Kombu dashi is fine.',
    cardJp: '重度の魚アレルギーがあります。日本のだしは鰹節（魚）から作られることが多いため、鰹だしを使った味噌汁・麺つゆ・煮物は摂取できません。昆布だしであれば大丈夫です。',
  },

  sesame: {
    name: 'Sesame', jp: 'ごま', romaji: 'goma',
    law: 'recommended',
    lawNote: 'Recommended only, so a silent label proves nothing.',
    lead: 'Everywhere, and usually visible — which makes it easier than it sounds, provided you check the oils.',
    hidden: ['Sesame oil in the yakiniku dip and much stir-frying', 'Goma-dare on shabu-shabu and salads', 'Furikake', 'Bread and bun toppings', 'Gomashio seasoning on rice'],
    formats: [
      { id: 'sushi', tone: 'easy', why: 'Only the rolls with seeds on the outside, which are obvious.' },
      { id: 'shioyaki', tone: 'easy', why: 'No sesame in the recipe.' },
      { id: 'yakiniku', tone: 'ok', why: 'The salt-and-sesame-oil dip is standard — ask for salt alone.' },
      { id: 'shabu', tone: 'harder', why: 'Goma-dare is one of the two standard dips.' },
    ],
    order: ['Sashimi and plain nigiri', 'Shioyaki teishoku', 'Shio yakitori', 'Yakiniku with a salt dip, no oil'],
    ask: ['Is there sesame oil in the dip or the seasoning?', 'Is the dressing goma-dare?'],
    card: 'I have a severe sesame allergy. Please check sesame oil in dips and stir-frying, goma-dare dressings, furikake, and seeds on bread.',
    cardJp: '重度のごまアレルギーがあります。ごま油・ごまだれ・ふりかけ・パンのごまなどにご注意ください。',
  },

  buckwheat: {
    name: 'Buckwheat', jp: 'そば', romaji: 'soba',
    law: 'mandatory',
    lawNote: 'On the mandatory eight, and Japan treats it as seriously as peanut is treated in the West.',
    lead: 'Well understood in Japan — but the cross-contact risk is real, because soba and udon are boiled in the same water at most noodle shops.',
    hidden: ['Shared boiling water at any shop selling both soba and udon', 'Soba-cha (buckwheat tea), served free in some restaurants', 'Some senbei and pancake mixes', 'Soba-yu, the cooking water, served at the end of a meal'],
    formats: [
      { id: 'sushi', tone: 'easy', why: 'No buckwheat anywhere near it.' },
      { id: 'yakiniku', tone: 'easy', why: 'Nor here.' },
      { id: 'shioyaki', tone: 'easy', why: 'Nor here.' },
      { id: 'soba-udon', tone: 'harder', why: 'Even ordering udon is a cross-contact question at a shop that boils both.' },
    ],
    order: ['Sushi', 'Yakiniku', 'Shioyaki teishoku', 'Yakitori', 'Rice dishes generally'],
    ask: ['Do you cook soba and udon in the same water?', 'Is the tea buckwheat tea?'],
    card: 'I have a severe buckwheat (soba) allergy. Exposure can cause anaphylaxis. I cannot eat at a restaurant that boils soba, even if I order udon, because the water is shared. Please also check the tea.',
    cardJp: '重度のそばアレルギーがあります。アナフィラキシーを起こす可能性があります。そばと同じ釜で茹でたうどんも食べられません。そば茶にもご注意ください。',
  },

  mango: {
    name: 'Mango & tropical fruit', jp: 'マンゴー', romaji: 'mangō',
    law: 'none',
    lawNote: 'On neither list. A Japanese package containing mango has no obligation to say so in any allergen field, and restaurants are outside the law entirely. Label-reading is not a safety system for this one.',
    lead: 'Uncommon in traditional cooking and common in the modern dessert and drinks trade, where it is rarely declared.',
    hidden: ['Tropical fruit blends, smoothies and fruit sours at a bar', 'Seasonal parfaits and afternoon-tea menus', 'Chutneys, dressings and curry accompaniments', 'Shared blenders and pastry stations', 'Convenience-store desserts and jellies'],
    formats: [
      { id: 'sushi', tone: 'ok', why: 'The fish is fine; creative rolls and the dessert course are where mango appears.' },
      { id: 'shioyaki', tone: 'easy', why: 'Nothing tropical in a salt-grilled fish.' },
      { id: 'yakitori', tone: 'easy', why: 'Charcoal counters rarely run a fruit programme — check the bar.' },
      { id: 'dessert', tone: 'harder', why: 'This is the whole risk: pastry sections, blenders and seasonal fruit menus.' },
    ],
    order: ['Sashimi and plain nigiri', 'Shioyaki teishoku', 'Shio yakitori', 'Yakiniku', 'Plain rice and vegetables'],
    ask: ['Is mango used anywhere — in a dessert, a drink or a seasonal menu?', 'Are blenders and pastry stations shared?'],
    card: 'I have a severe mango allergy. Exposure can cause anaphylaxis. Mango is not a labelled allergen in Japan, so it may not appear on any ingredient list. Please check desserts, drinks, blenders and any seasonal fruit menu, and tell me if you cannot be certain.',
    cardJp: '重度のマンゴーアレルギーがあります。アナフィラキシーを起こす可能性があります。日本ではマンゴーは表示義務のあるアレルゲンではないため、原材料表示に記載されない場合があります。デザート・飲み物・ミキサー・季節のメニューをご確認ください。',
  },
};

/** The meal formats the guidance is expressed in. */
window.FORMATS = {
  sushi: { name: 'Sushi & sashimi', jp: '寿司・刺身' },
  shioyaki: { name: 'Salt-grilled fish', jp: '塩焼き' },
  yakitori: { name: 'Yakitori', jp: '焼き鳥' },
  yakiniku: { name: 'Yakiniku', jp: '焼肉' },
  teppanyaki: { name: 'Teppanyaki', jp: '鉄板焼き' },
  tempura: { name: 'Tempura', jp: '天ぷら' },
  'soba-udon': { name: 'Soba & udon', jp: 'そば・うどん' },
  ramen: { name: 'Ramen', jp: 'ラーメン' },
  shabu: { name: 'Shabu-shabu', jp: 'しゃぶしゃぶ' },
  izakaya: { name: 'Izakaya', jp: '居酒屋' },
  chinese: { name: 'Chinese-Japanese', jp: '中華' },
  shojin: { name: 'Buddhist vegetarian', jp: '精進料理' },
  dessert: { name: 'Desserts & cafés', jp: 'デザート' },
};

/** Selected by default, so the page is useful before anyone touches it. */
window.DEFAULT_ALLERGENS = ['peanut'];
