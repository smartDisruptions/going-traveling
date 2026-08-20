/**
 * Google review pages, one per destination that has one.
 *
 * Generated from a browser pass that, for every destination, opened its map
 * link, read the place Google resolved it to, took that place's feature id and
 * built the reviews URL from it, then LOADED that URL and confirmed the tab
 * Google selected was "Reviews for <the same place>". The rating and count
 * below were read off that page, so they are evidence the link works rather
 * than decoration. Method and full results: geo-validation.md.
 *
 * Five destinations are deliberately absent. Takeshita Street, Omotesandō,
 * Ginza, Gion and the Philosopher's Path are streets and districts; Google
 * files them as roads or areas and gives them no reviews tab. Nearby landmarks
 * do have review pages — Ginza Wako, Omotesandō Hills — but reviews of a
 * department store are not reviews of the district the card describes, so
 * those are left out rather than passed off as the same thing.
 *
 * Ratings and counts drift. There is no script that refreshes them: the pass
 * needs a real browser, because Google resolves the place client-side. The
 * procedure is written out in geo-validation.md so it can be repeated.
 */
window.REVIEWS={
 "tokyo-station": {
  "name": "Tokyo Station",
  "rating": 4.3,
  "count": 874,
  "url": "https://www.google.com/maps/place/Tokyo+Station/@35.68098,139.767057,17z/data=!4m7!3m6!1s0x60188bfbee1467bb:0x410f8b6e7e3ee34f!8m2!3d35.68098!4d139.767057!9m1!1b1"
 },
 "akihabara": {
  "name": "Akihabara Station",
  "rating": 4.1,
  "count": 157,
  "url": "https://www.google.com/maps/place/Akihabara+Station/@35.6979438,139.7744106,17z/data=!4m7!3m6!1s0x60188ea7f90616ab:0x8d405f2c427203d5!8m2!3d35.6979438!4d139.7744106!9m1!1b1"
 },
 "sensoji": {
  "name": "Sensō-ji",
  "rating": 4.6,
  "count": 97649,
  "url": "https://www.google.com/maps/place/Sens%C5%8D-ji/@35.7147651,139.7966553,17z/data=!4m7!3m6!1s0x60188ec1a4463df1:0x6c0d289a8292810d!8m2!3d35.7147651!4d139.7966553!9m1!1b1"
 },
 "nakamise": {
  "name": "Nakamise Shopping Street",
  "rating": 4.3,
  "count": 15594,
  "url": "https://www.google.com/maps/place/Nakamise+Shopping+Street/@35.7118413,139.7964542,17z/data=!4m7!3m6!1s0x60188ec130fbdd3d:0x5135221a7fa19dbc!8m2!3d35.7118413!4d139.7964542!9m1!1b1"
 },
 "meiji-jingu": {
  "name": "Meiji Jingu",
  "rating": 4.6,
  "count": 52060,
  "url": "https://www.google.com/maps/place/Meiji+Jingu/@35.6763976,139.6993259,17z/data=!4m7!3m6!1s0x60188cb79a4c26e5:0x8fca893849103f73!8m2!3d35.6763976!4d139.6993259!9m1!1b1"
 },
 "shibuya": {
  "name": "Shibuya Parco",
  "rating": 4.3,
  "count": 8212,
  "url": "https://www.google.com/maps/place/Shibuya+Parco/@35.6620484,139.6987767,17z/data=!4m7!3m6!1s0x60188ca8e2fe2173:0x1adbb1909538391b!8m2!3d35.6620484!4d139.6987767!9m1!1b1"
 },
 "shibuya-sky": {
  "name": "Shibuya Scramble Square",
  "rating": 4.2,
  "count": 9330,
  "url": "https://www.google.com/maps/place/Shibuya+Scramble+Square/@35.6584638,139.7022621,17z/data=!4m7!3m6!1s0x60188b8427e1c0b1:0x78f6e23397061d6f!8m2!3d35.6584638!4d139.7022621!9m1!1b1"
 },
 "teamlab": {
  "name": "Azabudai Hills",
  "rating": 4.4,
  "count": 7525,
  "url": "https://www.google.com/maps/place/Azabudai+Hills/@35.6615447,139.7408302,17z/data=!4m7!3m6!1s0x60188b2e40342225:0x3f9a1673138a69c1!8m2!3d35.6615447!4d139.7408302!9m1!1b1"
 },
 "tokyo-tower": {
  "name": "Tokyo Tower",
  "rating": 4.5,
  "count": 99173,
  "url": "https://www.google.com/maps/place/Tokyo+Tower/@35.6585805,139.7454329,17z/data=!4m7!3m6!1s0x60188bbd9009ec09:0x481a93f0d2a409dd!8m2!3d35.6585805!4d139.7454329!9m1!1b1"
 },
 "nihonbashi": {
  "name": "Nihonbashi",
  "rating": 4.4,
  "count": 57,
  "url": "https://www.google.com/maps/place/Nihonbashi/@35.6840851,139.7745332,17z/data=!4m7!3m6!1s0x6018890073df179f:0xb61630160180c199!8m2!3d35.6840851!4d139.7745332!9m1!1b1"
 },
 "skytree": {
  "name": "Tokyo Skytree",
  "rating": 4.4,
  "count": 117927,
  "url": "https://www.google.com/maps/place/Tokyo+Skytree/@35.7100627,139.8107004,17z/data=!4m7!3m6!1s0x60188ed0d12f9adf:0x7d1d4fb31f43f72a!8m2!3d35.7100627!4d139.8107004!9m1!1b1"
 },
 "shinjuku-gyoen": {
  "name": "Shinjuku Gyoen National Garden",
  "rating": 4.6,
  "count": 45451,
  "url": "https://www.google.com/maps/place/Shinjuku+Gyoen+National+Garden/@35.6851763,139.7100517,17z/data=!4m7!3m6!1s0x60188cc21b93233f:0x6a1eb1b5a117f287!8m2!3d35.6851763!4d139.7100517!9m1!1b1"
 },
 "yanaka": {
  "name": "Yanaka Ginza",
  "rating": 4.1,
  "count": 11512,
  "url": "https://www.google.com/maps/place/Yanaka+Ginza/@35.7276965,139.7657226,17z/data=!4m7!3m6!1s0x60188dd19c058c3d:0xef3d1026c2974760!8m2!3d35.7276965!4d139.7657226!9m1!1b1"
 },
 "nakano": {
  "name": "Nakano Broadway",
  "rating": 4.2,
  "count": 13333,
  "url": "https://www.google.com/maps/place/Nakano+Broadway/@35.7092475,139.6656524,17z/data=!4m7!3m6!1s0x6018f290b2ddee83:0xe1b67e4ee0eff0be!8m2!3d35.7092475!4d139.6656524!9m1!1b1"
 },
 "odaiba": {
  "name": "Odaiba Marine Park",
  "rating": 4.4,
  "count": 15795,
  "url": "https://www.google.com/maps/place/Odaiba+Marine+Park/@35.6300488,139.7756912,17z/data=!4m7!3m6!1s0x60188a1deb0ac2d7:0x7dd3beb4c8363729!8m2!3d35.6300488!4d139.7756912!9m1!1b1"
 },
 "ghibli-museum": {
  "name": "Ghibli Museum",
  "rating": 4.5,
  "count": 19659,
  "url": "https://www.google.com/maps/place/Ghibli+Museum/@35.696238,139.5704317,17z/data=!4m7!3m6!1s0x6018ee34e5038c2d:0x4de155903f849205!8m2!3d35.696238!4d139.5704317!9m1!1b1"
 },
 "wb-studio": {
  "name": "The Making of Harry Potter - Warner Bros. Studio Tour Tokyo",
  "rating": 4.7,
  "count": 17558,
  "url": "https://www.google.com/maps/place/The+Making+of+Harry+Potter+-+Warner+Bros.+Studio+Tour+Tokyo/@35.745183,139.6460909,17z/data=!4m7!3m6!1s0x6018edf292d73867:0x85ceba2d7e05669b!8m2!3d35.745183!4d139.6460909!9m1!1b1"
 },
 "hakone-yumoto": {
  "name": "Hakone-Yumoto Station",
  "rating": 4.2,
  "count": 1359,
  "url": "https://www.google.com/maps/place/Hakone-Yumoto+Station/@35.2332816,139.1035878,17z/data=!4m7!3m6!1s0x6019a37513517f71:0x9ba58d3f229386a2!8m2!3d35.2332816!4d139.1035878!9m1!1b1"
 },
 "hakone-ropeway": {
  "name": "Ōwakudani Station",
  "rating": 4.3,
  "count": 363,
  "url": "https://www.google.com/maps/place/%C5%8Cwakudani+Station/@35.2445572,139.0198179,17z/data=!4m7!3m6!1s0x60199f37c869c71f:0xb22da272aff5a44b!8m2!3d35.2445572!4d139.0198179!9m1!1b1"
 },
 "lake-ashi": {
  "name": "Hakone Shrine",
  "rating": 4.4,
  "count": 19749,
  "url": "https://www.google.com/maps/place/Hakone+Shrine/@35.2048263,139.0253782,17z/data=!4m7!3m6!1s0x6019988bcd2ac2b5:0xaae4a36847c7e09a!8m2!3d35.2048263!4d139.0253782!9m1!1b1"
 },
 "hakone-openair": {
  "name": "The Hakone Open-Air Museum",
  "rating": 4.5,
  "count": 15768,
  "url": "https://www.google.com/maps/place/The+Hakone+Open-Air+Museum/@35.2451601,139.0507271,17z/data=!4m7!3m6!1s0x6019a204a396f331:0x588e39a7e90a6c5f!8m2!3d35.2451601!4d139.0507271!9m1!1b1"
 },
 "gora": {
  "name": "Hakone Gora Park",
  "rating": 4.1,
  "count": 5508,
  "url": "https://www.google.com/maps/place/Hakone+Gora+Park/@35.2486604,139.0451918,17z/data=!4m7!3m6!1s0x6019a1ffb6655555:0xabb6445665236144!8m2!3d35.2486604!4d139.0451918!9m1!1b1"
 },
 "pola-museum": {
  "name": "Pola Museum of Art",
  "rating": 4.4,
  "count": 5488,
  "url": "https://www.google.com/maps/place/Pola+Museum+of+Art/@35.2567066,139.0212014,17z/data=!4m7!3m6!1s0x60199f6ab39572af:0x8e8bd159610f18df!8m2!3d35.2567066!4d139.0212014!9m1!1b1"
 },
 "yasaka": {
  "name": "Yasaka Shrine",
  "rating": 4.4,
  "count": 33420,
  "url": "https://www.google.com/maps/place/Yasaka+Shrine/@35.0036559,135.7785534,17z/data=!4m7!3m6!1s0x60010879a010eca9:0xc77ac89d5a241ae9!8m2!3d35.0036559!4d135.7785534!9m1!1b1"
 },
 "sannenzaka": {
  "name": "産寧坂",
  "rating": 4.7,
  "count": 45,
  "url": "https://www.google.com/maps/place/%E7%94%A3%E5%AF%A7%E5%9D%82/@34.996247,135.780848,17z/data=!4m7!3m6!1s0x6001090047f98981:0x1eeea57f9f79d48b!8m2!3d34.996247!4d135.780848!9m1!1b1"
 },
 "sengokuhara": {
  "name": "Sengokuhara Susuki Grass Fields",
  "rating": 4.2,
  "count": 2420,
  "url": "https://www.google.com/maps/place/Sengokuhara+Susuki+Grass+Fields/@35.2592974,139.0031858,17z/data=!4m7!3m6!1s0x60199f156f40ce13:0x5afedf15a23226c6!8m2!3d35.2592974!4d139.0031858!9m1!1b1"
 },
 "kodai-ji": {
  "name": "Kōdaiji Temple",
  "rating": 4.4,
  "count": 10096,
  "url": "https://www.google.com/maps/place/K%C5%8Ddaiji+Temple/@35.0007687,135.7812718,17z/data=!4m7!3m6!1s0x600108dacf7b4db9:0x24512a795f6cc880!8m2!3d35.0007687!4d135.7812718!9m1!1b1"
 },
 "kiyomizu-dera": {
  "name": "Kiyomizu-dera",
  "rating": 4.6,
  "count": 71410,
  "url": "https://www.google.com/maps/place/Kiyomizu-dera/@34.9946662,135.784661,17z/data=!4m7!3m6!1s0x600108d385dcfb07:0x62af658650c434ba!8m2!3d34.9946662!4d135.784661!9m1!1b1"
 },
 "fushimi-inari": {
  "name": "Fushimi Inari Taisha",
  "rating": 4.6,
  "count": 90228,
  "url": "https://www.google.com/maps/place/Fushimi+Inari+Taisha/@34.9676945,135.7791876,17z/data=!4m7!3m6!1s0x60010f153d2e6d21:0x7b1aca1c753ae2e9!8m2!3d34.9676945!4d135.7791876!9m1!1b1"
 },
 "nanzen-ji": {
  "name": "Nanzen-ji",
  "rating": 4.5,
  "count": 12531,
  "url": "https://www.google.com/maps/place/Nanzen-ji/@35.0114138,135.7944841,17z/data=!4m7!3m6!1s0x600109217397fbfd:0x38b339a4c7e7004d!8m2!3d35.0114138!4d135.7944841!9m1!1b1"
 },
 "arashiyama": {
  "name": "Arashiyama Bamboo Forest",
  "rating": 4.4,
  "count": 24146,
  "url": "https://www.google.com/maps/place/Arashiyama+Bamboo+Forest/@35.0168187,135.6713013,17z/data=!4m7!3m6!1s0x6001abebbf5c8bad:0xfb9ffc7bbdd67cdd!8m2!3d35.0168187!4d135.6713013!9m1!1b1"
 },
 "tenryu-ji": {
  "name": "Tenryu-ji",
  "rating": 4.5,
  "count": 16861,
  "url": "https://www.google.com/maps/place/Tenryu-ji/@35.0158379,135.6737654,17z/data=!4m7!3m6!1s0x6001aa01b80f9e93:0xcd9c3edaff3348c0!8m2!3d35.0158379!4d135.6737654!9m1!1b1"
 },
 "sagano-train": {
  "name": "Saga Torokko Station",
  "rating": 4.2,
  "count": 367,
  "url": "https://www.google.com/maps/place/Saga+Torokko+Station/@35.018568,135.6807823,17z/data=!4m7!3m6!1s0x6001a9fe9bfe6b87:0x6e4bba830f7834f5!8m2!3d35.018568!4d135.6807823!9m1!1b1"
 },
 "togetsukyo": {
  "name": "Togetsukyō Bridge",
  "rating": 4.5,
  "count": 5442,
  "url": "https://www.google.com/maps/place/Togetsuky%C5%8D+Bridge/@35.0128769,135.6777748,17z/data=!4m7!3m6!1s0x6001075300916977:0xec14f8e82496283d!8m2!3d35.0128769!4d135.6777748!9m1!1b1"
 },
 "kinkaku-ji": {
  "name": "Kinkaku-ji",
  "rating": 4.6,
  "count": 69463,
  "url": "https://www.google.com/maps/place/Kinkaku-ji/@35.03937,135.7292431,17z/data=!4m7!3m6!1s0x6001a820c0eb46bd:0xee4272b1c22645f!8m2!3d35.03937!4d135.7292431!9m1!1b1"
 },
 "ryoan-ji": {
  "name": "Ryōan-ji",
  "rating": 4.5,
  "count": 11381,
  "url": "https://www.google.com/maps/place/Ry%C5%8Dan-ji/@35.0344943,135.7182634,17z/data=!4m7!3m6!1s0x6001a82a301cbaa7:0xe1ab173e46d78542!8m2!3d35.0344943!4d135.7182634!9m1!1b1"
 },
 "ginkaku-ji": {
  "name": "Ginkaku-ji",
  "rating": 4.5,
  "count": 17666,
  "url": "https://www.google.com/maps/place/Ginkaku-ji/@35.0270213,135.7982058,17z/data=!4m7!3m6!1s0x600109050b426fe1:0x258aca1ce888abc9!8m2!3d35.0270213!4d135.7982058!9m1!1b1"
 },
 "pontocho": {
  "name": "Pontocho Alley",
  "rating": 4.5,
  "count": 857,
  "url": "https://www.google.com/maps/place/Pontocho+Alley/@35.0039339,135.7710439,17z/data=!4m7!3m6!1s0x6001091894db603f:0xaa4fd64b17e50202!8m2!3d35.0039339!4d135.7710439!9m1!1b1"
 },
 "shirakawa": {
  "name": "Shirakawa Canal",
  "rating": 4.7,
  "count": 1065,
  "url": "https://www.google.com/maps/place/Shirakawa+Canal/@35.0054737,135.7736491,17z/data=!4m7!3m6!1s0x600109dc68b3c787:0x973caa294d46a998!8m2!3d35.0054737!4d135.7736491!9m1!1b1"
 },
 "nijo-castle": {
  "name": "Nijō Castle",
  "rating": 4.4,
  "count": 42569,
  "url": "https://www.google.com/maps/place/Nij%C5%8D+Castle/@35.0140379,135.7484258,17z/data=!4m7!3m6!1s0x600107d40a2b9b0b:0x106b8759906a2f2f!8m2!3d35.0140379!4d135.7484258!9m1!1b1"
 },
 "manga-museum": {
  "name": "Kyoto International Manga Museum",
  "rating": 4.2,
  "count": 6517,
  "url": "https://www.google.com/maps/place/Kyoto+International+Manga+Museum/@35.0118576,135.7594192,17z/data=!4m7!3m6!1s0x600108867f895a87:0xf21ed27a3085034c!8m2!3d35.0118576!4d135.7594192!9m1!1b1"
 },
 "kibune": {
  "name": "Kifune Shrine",
  "rating": 4.5,
  "count": 12132,
  "url": "https://www.google.com/maps/place/Kifune+Shrine/@35.1220909,135.7629101,17z/data=!4m7!3m6!1s0x6001a608f30a9109:0x1d021ae4b564548b!8m2!3d35.1220909!4d135.7629101!9m1!1b1"
 },
 "nishiki": {
  "name": "Nishiki Market",
  "rating": 4.3,
  "count": 53289,
  "url": "https://www.google.com/maps/place/Nishiki+Market/@35.0050258,135.764723,17z/data=!4m7!3m6!1s0x6001089ccd8ccb4f:0xb69ea31001ec6c9c!8m2!3d35.0050258!4d135.764723!9m1!1b1"
 },
 "nintendo-museum": {
  "name": "Nintendo Museum",
  "rating": 4.5,
  "count": 4830,
  "url": "https://www.google.com/maps/place/Nintendo+Museum/@34.8927989,135.784166,17z/data=!4m7!3m6!1s0x60011188b83087d3:0x646fdf4a68b62b4d!8m2!3d34.8927989!4d135.784166!9m1!1b1"
 },
 "ohara": {
  "name": "Sanzen-in Temple",
  "rating": 4.5,
  "count": 7956,
  "url": "https://www.google.com/maps/place/Sanzen-in+Temple/@35.119726,135.8344058,17z/data=!4m7!3m6!1s0x6001a0d6590baa13:0x532a08b9f00f2f34!8m2!3d35.119726!4d135.8344058!9m1!1b1"
 },
 "byodoin": {
  "name": "Byōdo-in Temple",
  "rating": 4.5,
  "count": 22333,
  "url": "https://www.google.com/maps/place/By%C5%8Ddo-in+Temple/@34.8892908,135.8076783,17z/data=!4m7!3m6!1s0x6001110ce0da2bab:0x608414938ffa07a4!8m2!3d34.8892908!4d135.8076783!9m1!1b1"
 },
 "den-den-town": {
  "name": "Nipponbashi Denden Town",
  "rating": 4.2,
  "count": 9510,
  "url": "https://www.google.com/maps/place/Nipponbashi+Denden+Town/@34.6604678,135.5061904,17z/data=!4m7!3m6!1s0x6000e767fb3facbf:0x77b328bcc17d6a1f!8m2!3d34.6604678!4d135.5061904!9m1!1b1"
 },
 "nara": {
  "name": "Tōdai-ji",
  "rating": 4.7,
  "count": 31592,
  "url": "https://www.google.com/maps/place/T%C5%8Ddai-ji/@34.6889851,135.8398158,17z/data=!4m7!3m6!1s0x600139907a0876dd:0xf890ac3f9dd53c8f!8m2!3d34.6889851!4d135.8398158!9m1!1b1"
 },
 "nezu-museum": {
  "name": "Nezu Museum",
  "rating": 4.5,
  "count": 6499,
  "url": "https://www.google.com/maps/place/Nezu+Museum/@35.6622568,139.7170937,17z/data=!4m7!3m6!1s0x60188b63fb3c4ec5:0xd0ca2110e541cb1c!8m2!3d35.6622568!4d139.7170937!9m1!1b1"
 },
 "usj": {
  "name": "Universal Studios Japan",
  "rating": 4.5,
  "count": 155020,
  "url": "https://www.google.com/maps/place/Universal+Studios+Japan/@34.6656768,135.4323185,17z/data=!4m7!3m6!1s0x6000e0d083d5e25d:0x3605fe25303252aa!8m2!3d34.6656768!4d135.4323185!9m1!1b1"
 },
 "kanda-myojin": {
  "name": "Kanda Myoujin Shrine",
  "rating": 4.4,
  "count": 25821,
  "url": "https://www.google.com/maps/place/Kanda+Myoujin+Shrine/@35.7020186,139.7678943,17z/data=!4m7!3m6!1s0x60188c1ecc161bed:0xf397e4b6bf417c8b!8m2!3d35.7020186!4d139.7678943!9m1!1b1"
 },
 "uji": {
  "name": "Uji Bridge",
  "rating": 4.4,
  "count": 699,
  "url": "https://www.google.com/maps/place/Uji+Bridge/@34.892946,135.80624,17z/data=!4m7!3m6!1s0x6001110a5313ae9d:0x36bff55a841d0d8c!8m2!3d34.892946!4d135.80624!9m1!1b1"
 },
 "hama-rikyu": {
  "name": "Hamarikyu Gardens",
  "rating": 4.5,
  "count": 12542,
  "url": "https://www.google.com/maps/place/Hamarikyu+Gardens/@35.6596559,139.7634091,17z/data=!4m7!3m6!1s0x60188bdcbaa0f7c1:0x9b4a9ebdf898381a!8m2!3d35.6596559!4d139.7634091!9m1!1b1"
 },
 "teamlab-planets": {
  "name": "teamLab Planets TOKYO DMM",
  "rating": 4.5,
  "count": 54818,
  "url": "https://www.google.com/maps/place/teamLab+Planets+TOKYO+DMM/@35.6491207,139.7897739,17z/data=!4m7!3m6!1s0x60188908e728e749:0x6de450c94bd3d622!8m2!3d35.6491207!4d139.7897739!9m1!1b1"
 },
 "kappabashi": {
  "name": "Kappabashi Kitchen Supply Town",
  "rating": 4.3,
  "count": 12741,
  "url": "https://www.google.com/maps/place/Kappabashi+Kitchen+Supply+Town/@35.7105797,139.7879645,17z/data=!4m7!3m6!1s0x60188e95e87e855d:0x214435b365c89bf3!8m2!3d35.7105797!4d139.7879645!9m1!1b1"
 },
 "okada-museum": {
  "name": "Okada Museum of Art",
  "rating": 4.3,
  "count": 1930,
  "url": "https://www.google.com/maps/place/Okada+Museum+of+Art/@35.2381242,139.0461723,17z/data=!4m7!3m6!1s0x6019a208af7ca299:0x9289c7966daecade!8m2!3d35.2381242!4d139.0461723!9m1!1b1"
 },
 "venetian-glass": {
  "name": "Hakone Venetian Glass Museum (Glass Forest)",
  "rating": 4.2,
  "count": 9384,
  "url": "https://www.google.com/maps/place/Hakone+Venetian+Glass+Museum+(Glass+Forest)/@35.2662046,139.0177385,17z/data=!4m7!3m6!1s0x60199f0c4f104ba9:0xba81ae98431c0b0!8m2!3d35.2662046!4d139.0177385!9m1!1b1"
 },
 "hakone-yuryo": {
  "name": "Hakone Yuryo",
  "rating": 4.3,
  "count": 5533,
  "url": "https://www.google.com/maps/place/Hakone+Yuryo/@35.2338594,139.095725,17z/data=!4m7!3m6!1s0x6019a3a6e747da01:0xab7df2b400b857a4!8m2!3d35.2338594!4d139.095725!9m1!1b1"
 },
 "okochi-sanso": {
  "name": "Okochi Sanso Garden",
  "rating": 4.7,
  "count": 1913,
  "url": "https://www.google.com/maps/place/Okochi+Sanso+Garden/@35.0167147,135.6699227,17z/data=!4m7!3m6!1s0x6001aa04f6d03719:0x4f8ea03397773abf!8m2!3d35.0167147!4d135.6699227!9m1!1b1"
 },
 "honen-in": {
  "name": "Hōnenin Temple",
  "rating": 4.5,
  "count": 2057,
  "url": "https://www.google.com/maps/place/H%C5%8Dnenin+Temple/@35.0240638,135.7973229,17z/data=!4m7!3m6!1s0x6001091ada6f787d:0x62ef00e72d5d2003!8m2!3d35.0240638!4d135.7973229!9m1!1b1"
 },
 "daitoku-ji": {
  "name": "Daitoku-ji Temple",
  "rating": 4.3,
  "count": 2966,
  "url": "https://www.google.com/maps/place/Daitoku-ji+Temple/@35.043891,135.74603,17z/data=!4m7!3m6!1s0x600107f8e855ef8f:0x9f9f067119d6baa1!8m2!3d35.043891!4d135.74603!9m1!1b1"
 },
 "kasuga-taisha": {
  "name": "Kasugataisha Shrine",
  "rating": 4.5,
  "count": 15259,
  "url": "https://www.google.com/maps/place/Kasugataisha+Shrine/@34.6815454,135.8484719,17z/data=!4m7!3m6!1s0x600139c06bb06ad5:0x4c97e78382e39596!8m2!3d34.6815454!4d135.8484719!9m1!1b1"
 },
 "eat-seo": {
  "name": "Yakitori Seo",
  "rating": 4.2,
  "count": 87,
  "url": "https://www.google.com/maps/place/Yakitori+Seo/@35.6806342,139.7654919,17z/data=!4m7!3m6!1s0x60188bfbd217af65:0xe113476f4be71299!8m2!3d35.6806342!4d139.7654919!9m1!1b1"
 },
 "eat-asanogawa": {
  "name": "Sushi Dokoro Asanogawa",
  "rating": 4.4,
  "count": 211,
  "url": "https://www.google.com/maps/place/Sushi+Dokoro+Asanogawa/@35.6800391,139.7657505,17z/data=!4m7!3m6!1s0x60188bfbd9f5efb3:0xd9e28e38702a41ad!8m2!3d35.6800391!4d139.7657505!9m1!1b1"
 },
 "eat-daian": {
  "name": "Marunouchi Hotel",
  "rating": 4.4,
  "count": 1052,
  "url": "https://www.google.com/maps/place/Marunouchi+Hotel/@35.683357,139.766589,17z/data=!4m7!3m6!1s0x60188bf9235c14e5:0xa6ac4691a8e0bb1e!8m2!3d35.683357!4d139.766589!9m1!1b1"
 },
 "eat-sumida": {
  "name": "Teppan-Yaki Sumida",
  "rating": 4.4,
  "count": 248,
  "url": "https://www.google.com/maps/place/Teppan-Yaki+Sumida/@35.6822626,139.7866962,17z/data=!4m7!3m6!1s0x601889444eca2a75:0x2b81d3ce2d741476!8m2!3d35.6822626!4d139.7866962!9m1!1b1"
 },
 "eat-camellia": {
  "name": "Camellia",
  "rating": 4.3,
  "count": 275,
  "url": "https://www.google.com/maps/place/Camellia/@35.6801749,139.7655818,17z/data=!4m7!3m6!1s0x60188bfbc99d100f:0x36bcfadfaeb774c0!8m2!3d35.6801749!4d139.7655818!9m1!1b1"
 },
 "eat-gora": {
  "name": "GORA BREWERY&GRILL",
  "rating": 4.3,
  "count": 1500,
  "url": "https://www.google.com/maps/place/GORA+BREWERY%26GRILL/@35.2475519,139.0464277,17z/data=!4m7!3m6!1s0x6019a201ffc71643:0xf8115c35b1e828e3!8m2!3d35.2475519!4d139.0464277!9m1!1b1"
 },
 "eat-rock": {
  "name": "Yakiniku ROCK",
  "rating": 4.3,
  "count": 59,
  "url": "https://www.google.com/maps/place/Yakiniku+ROCK/@35.2320589,139.1011748,17z/data=!4m7!3m6!1s0x6019a39bbd321c6d:0x3787a198aebe8d36!8m2!3d35.2320589!4d139.1011748!9m1!1b1"
 },
 "eat-hyatt": {
  "name": "Hyatt Regency Hakone Resort and Spa",
  "rating": 4.5,
  "count": 1151,
  "url": "https://www.google.com/maps/place/Hyatt+Regency+Hakone+Resort+and+Spa/@35.2501045,139.0373585,17z/data=!4m7!3m6!1s0x60199f5628b33b6f:0xa98f29fc4c3161c7!8m2!3d35.2501045!4d139.0373585!9m1!1b1"
 },
 "eat-hiro": {
  "name": "Yakiniku HIRO Shijo-kiyamachi",
  "rating": 4.4,
  "count": 705,
  "url": "https://www.google.com/maps/place/Yakiniku+HIRO+Shijo-kiyamachi/@35.0043578,135.7704222,17z/data=!4m7!3m6!1s0x60010988fe349001:0x2d86160aff5579a9!8m2!3d35.0043578!4d135.7704222!9m1!1b1"
 },
 "eat-yonefuku": {
  "name": "Komefuku Shijo Karasuma",
  "rating": 4.3,
  "count": 2743,
  "url": "https://www.google.com/maps/place/Komefuku+Shijo+Karasuma/@35.0046824,135.7608648,17z/data=!4m7!3m6!1s0x6001089a0b6aa05d:0x1bf4d79368a2f1ef!8m2!3d35.0046824!4d135.7608648!9m1!1b1"
 },
 "eat-hyoto": {
  "name": "Hyōto Shijō Karasuma",
  "rating": 4.7,
  "count": 2991,
  "url": "https://www.google.com/maps/place/Hy%C5%8Dto+Shij%C5%8D+Karasuma/@35.0055838,135.7581896,17z/data=!4m7!3m6!1s0x6001089bb563b117:0x503ec2e215db04e4!8m2!3d35.0055838!4d135.7581896!9m1!1b1"
 },
 "eat-hanaroku": {
  "name": "Teppan HANAROKU",
  "rating": 4.9,
  "count": 309,
  "url": "https://www.google.com/maps/place/Teppan+HANAROKU/@34.9935052,135.7594658,17z/data=!4m7!3m6!1s0x600108a4843c9d95:0x5e8784f6093f16e0!8m2!3d34.9935052!4d135.7594658!9m1!1b1"
 },
 "eat-forni": {
  "name": "FORNI",
  "rating": 4.4,
  "count": 244,
  "url": "https://www.google.com/maps/place/FORNI/@35.0134333,135.7525946,17z/data=!4m7!3m6!1s0x60010955ee528903:0xf75a68b417973aff!8m2!3d35.0134333!4d135.7525946!9m1!1b1"
 },
 "eat-yasaka": {
  "name": "Park Hyatt Kyoto",
  "rating": 4.6,
  "count": 715,
  "url": "https://www.google.com/maps/place/Park+Hyatt+Kyoto/@34.9991121,135.7811268,17z/data=!4m7!3m6!1s0x60010947e23f5a63:0xdecf1b14734f45cb!8m2!3d34.9991121!4d135.7811268!9m1!1b1"
 },
 "mitsubishi-ichigokan": {
  "name": "Mitsubishi Ichigokan Museum",
  "rating": 4.4,
  "count": 3836,
  "url": "https://www.google.com/maps/place/Mitsubishi+Ichigokan+Museum/@35.6785286,139.7633347,17z/data=!4m7!3m6!1s0x60188bfa653e26bb:0xf45c085d037d8411!8m2!3d35.6785286!4d139.7633347!9m1!1b1"
 },
 "tokyo-national-museum": {
  "name": "Tokyo National Museum",
  "rating": 4.5,
  "count": 30937,
  "url": "https://www.google.com/maps/place/Tokyo+National+Museum/@35.7188351,139.7765215,17z/data=!4m7!3m6!1s0x60188e8314d77d11:0x232fd618bd4977dd!8m2!3d35.7188351!4d139.7765215!9m1!1b1"
 },
 "ueno-park": {
  "name": "Ueno Park",
  "rating": 4.4,
  "count": 34529,
  "url": "https://www.google.com/maps/place/Ueno+Park/@35.7147557,139.7734312,17z/data=!4m7!3m6!1s0x60188e9b45906ac3:0xb1cb3623124e645a!8m2!3d35.7147557!4d139.7734312!9m1!1b1"
 },
 "artizon": {
  "name": "Artizon Museum",
  "rating": 4.5,
  "count": 3255,
  "url": "https://www.google.com/maps/place/Artizon+Museum/@35.6787634,139.7718919,17z/data=!4m7!3m6!1s0x60188be2b131303b:0xfb4496d5c465105b!8m2!3d35.6787634!4d139.7718919!9m1!1b1"
 },
 "mori-art": {
  "name": "Mori Art Museum",
  "rating": 4.3,
  "count": 7321,
  "url": "https://www.google.com/maps/place/Mori+Art+Museum/@35.6604621,139.7292785,17z/data=!4m7!3m6!1s0x60188b770f429483:0xff33d131dc8d6e9!8m2!3d35.6604621!4d139.7292785!9m1!1b1"
 },
 "nact": {
  "name": "The National Art Center, Tokyo",
  "rating": 4.4,
  "count": 22036,
  "url": "https://www.google.com/maps/place/The+National+Art+Center,+Tokyo/@35.665289,139.726374,17z/data=!4m7!3m6!1s0x60188b7bf6ceeb3f:0x4025f2eaf2aa9d18!8m2!3d35.665289!4d139.726374!9m1!1b1"
 },
 "hokusai-museum": {
  "name": "The Sumida Hokusai Museum",
  "rating": 4.1,
  "count": 6907,
  "url": "https://www.google.com/maps/place/The+Sumida+Hokusai+Museum/@35.6963313,139.800414,17z/data=!4m7!3m6!1s0x60188933b7d31881:0x7a02011fb48182aa!8m2!3d35.6963313!4d139.800414!9m1!1b1"
 },
 "imperial-east-gardens": {
  "name": "Imperial Palace East National Gardens",
  "rating": 4.4,
  "count": 10205,
  "url": "https://www.google.com/maps/place/Imperial+Palace+East+National+Gardens/@35.6867824,139.7571445,17z/data=!4m7!3m6!1s0x60188c13425af13d:0xa31b000a35db03f9!8m2!3d35.6867824!4d139.7571445!9m1!1b1"
 },
 "nezu-shrine": {
  "name": "Nezu Shrine",
  "rating": 4.4,
  "count": 9286,
  "url": "https://www.google.com/maps/place/Nezu+Shrine/@35.7201366,139.7607695,17z/data=!4m7!3m6!1s0x60188c32ce217ef9:0xc0a807378062b0d!8m2!3d35.7201366!4d139.7607695!9m1!1b1"
 },
 "hakone-museum-art": {
  "name": "Hakone Museum of Art",
  "rating": 4.3,
  "count": 1302,
  "url": "https://www.google.com/maps/place/Hakone+Museum+of+Art/@35.2481942,139.0426937,17z/data=!4m7!3m6!1s0x6019a1ffa55705cd:0x77ff84196246bbc0!8m2!3d35.2481942!4d139.0426937!9m1!1b1"
 },
 "hakone-sekisho": {
  "name": "Hakone Sekisho",
  "rating": 3.9,
  "count": 7693,
  "url": "https://www.google.com/maps/place/Hakone+Sekisho/@35.1923709,139.0262346,17z/data=!4m7!3m6!1s0x60199864f16917f3:0x2367a5762e15a545!8m2!3d35.1923709!4d139.0262346!9m1!1b1"
 },
 "narukawa": {
  "name": "Narukawa Art Museum",
  "rating": 4.3,
  "count": 1422,
  "url": "https://www.google.com/maps/place/Narukawa+Art+Museum/@35.2,139.0311111,17z/data=!4m7!3m6!1s0x6019987b54858bfb:0x21ddd54a4bf20d5b!8m2!3d35.2!4d139.0311111!9m1!1b1"
 },
 "lalique": {
  "name": "Lalique Museum, Hakone",
  "rating": 4.2,
  "count": 1798,
  "url": "https://www.google.com/maps/place/Lalique+Museum,+Hakone/@35.269479,139.0091798,17z/data=!4m7!3m6!1s0x60199fa825858daf:0xdb006a11f89aec54!8m2!3d35.269479!4d139.0091798!9m1!1b1"
 },
 "kyocera-museum": {
  "name": "Kyoto City KYOCERA Museum of Art",
  "rating": 4.4,
  "count": 7200,
  "url": "https://www.google.com/maps/place/Kyoto+City+KYOCERA+Museum+of+Art/@35.0128613,135.7835544,17z/data=!4m7!3m6!1s0x600108e69215a053:0x91db29e5357cac58!8m2!3d35.0128613!4d135.7835544!9m1!1b1"
 },
 "to-ji": {
  "name": "To-ji Temple",
  "rating": 4.5,
  "count": 19784,
  "url": "https://www.google.com/maps/place/To-ji+Temple/@34.9803395,135.7476935,17z/data=!4m7!3m6!1s0x6001060485fbaa4d:0xd3ee2dd9b0177910!8m2!3d34.9803395!4d135.7476935!9m1!1b1"
 },
 "ninna-ji": {
  "name": "Ninna-ji",
  "rating": 4.4,
  "count": 7885,
  "url": "https://www.google.com/maps/place/Ninna-ji/@35.0310937,135.7138198,17z/data=!4m7!3m6!1s0x6001077ff3ae5187:0xea1bdd27377bb743!8m2!3d35.0310937!4d135.7138198!9m1!1b1"
 },
 "sanjusangendo": {
  "name": "Sanjūsangendō Temple/1001 Statues",
  "rating": 4.7,
  "count": 17302,
  "url": "https://www.google.com/maps/place/Sanj%C5%ABsangend%C5%8D+Temple%2F1001+Statues/@34.9878845,135.7717126,17z/data=!4m7!3m6!1s0x600108ca8f9b80b3:0xaa2b01ebdb651688!8m2!3d34.9878845!4d135.7717126!9m1!1b1"
 },
 "kyoto-national-museum": {
  "name": "Kyoto National Museum",
  "rating": 4.3,
  "count": 8253,
  "url": "https://www.google.com/maps/place/Kyoto+National+Museum/@34.9899887,135.773116,17z/data=!4m7!3m6!1s0x600108ca450159b7:0x8c110201baac49d3!8m2!3d34.9899887!4d135.773116!9m1!1b1"
 },
 "kennin-ji": {
  "name": "Kenninji Temple",
  "rating": 4.5,
  "count": 9520,
  "url": "https://www.google.com/maps/place/Kenninji+Temple/@35.0000363,135.7735632,17z/data=!4m7!3m6!1s0x600108c1242b7b27:0x7e608f1986c5bb52!8m2!3d35.0000363!4d135.7735632!9m1!1b1"
 },
 "kyoto-imperial-palace": {
  "name": "Kyoto Imperial Palace",
  "rating": 4.6,
  "count": 1759,
  "url": "https://www.google.com/maps/place/Kyoto+Imperial+Palace/@35.0240977,135.7621436,17z/data=!4m7!3m6!1s0x600109005c95e905:0x7c20baf3fce34686!8m2!3d35.0240977!4d135.7621436!9m1!1b1"
 },
 "genji-museum": {
  "name": "Tale of Genji Museum",
  "rating": 4,
  "count": 2008,
  "url": "https://www.google.com/maps/place/Tale+of+Genji+Museum/@34.893793,135.810537,17z/data=!4m7!3m6!1s0x60011174dd33b2e3:0x11bce797548e7938!8m2!3d34.893793!4d135.810537!9m1!1b1"
 },
 "ujigami": {
  "name": "Ujikami Shrine",
  "rating": 4.3,
  "count": 3150,
  "url": "https://www.google.com/maps/place/Ujikami+Shrine/@34.8919274,135.8112954,17z/data=!4m7!3m6!1s0x60011173757af961:0x11600ef0d3975f5f!8m2!3d34.8919274!4d135.8112954!9m1!1b1"
 },
 "nara-national-museum": {
  "name": "Nara National Museum",
  "rating": 4.4,
  "count": 5400,
  "url": "https://www.google.com/maps/place/Nara+National+Museum/@34.6831318,135.8383055,17z/data=!4m7!3m6!1s0x60013991ec762bd1:0x86534c8f9901a7ed!8m2!3d34.6831318!4d135.8383055!9m1!1b1"
 },
 "kofuku-ji": {
  "name": "Kohfuku-ji",
  "rating": 4.4,
  "count": 12924,
  "url": "https://www.google.com/maps/place/Kohfuku-ji/@34.6832311,135.8311589,17z/data=!4m7!3m6!1s0x60013988b23decb3:0x11830f4737834593!8m2!3d34.6832311!4d135.8311589!9m1!1b1"
 },
 "osaka-castle": {
  "name": "Osaka Castle",
  "rating": 4.4,
  "count": 98403,
  "url": "https://www.google.com/maps/place/Osaka+Castle/@34.6872571,135.5258546,17z/data=!4m7!3m6!1s0x6000e0cd5c283afd:0xf01d07d5ca11e41!8m2!3d34.6872571!4d135.5258546!9m1!1b1"
 }
};
