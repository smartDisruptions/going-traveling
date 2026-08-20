/* ══════════════════════════════════════════════════════════════════════
   PREP
   ─────────────────────────────────────────────────────────────────────
   COUNTDOWN is ordered by deadline pressure rather than by category,
   because the thing that ruins a trip is never the forgotten task — it is
   the task done in the wrong month. A passport renewal at six weeks is
   fine; at six days it is a different trip.

   PACKING is Japan-specific on purpose. There is no point listing socks.
   Everything here is either something the country expects of you, or
   something that is genuinely hard to buy once you land.
   ══════════════════════════════════════════════════════════════════ */

window.COUNTDOWN = [
  {
    "when": "Six months out",
    "jp": "半年前",
    "tone": "shu",
    "critical": true,
    "lead": "Only the things with a queue in front of them.",
    "items": [
      "Check your passport has six months of validity past your return date, and renew it now if it does not.",
      "Book flights. Price the open-jaw — in through Tokyo, out through Osaka — against the round trip before you decide.",
      "Enter any attraction lottery or advance ballot. These run monthly, have no door tickets, and every other date bends around the result.",
      "Reserve the one ryokan night. The rooms with private open-air baths go first and they go early.",
      "If you are travelling in blossom or autumn season, book all lodging now — not most of it."
    ]
  },
  {
    "when": "Three months out",
    "jp": "三ヶ月前",
    "tone": "kin",
    "lead": "The bookings that are competitive but not yet desperate.",
    "items": [
      "Book the remaining hotels. Most allow free cancellation, so book the good room and keep looking.",
      "Buy travel insurance, and read what it says about existing conditions before you pay.",
      "Reserve any restaurant that takes bookings months ahead, and send dietary questions in writing at the same time.",
      "Check whether any medication you take is restricted in Japan, and start the import certificate if it is — the paperwork takes weeks.",
      "Book the rental car or the day tour if the itinerary has one."
    ]
  },
  {
    "when": "One month out",
    "jp": "一ヶ月前",
    "tone": "ai",
    "lead": "Money, data, and the things you have to physically own.",
    "items": [
      "Tell your bank and card issuers the dates, and check the foreign transaction fee on each card so you know which one to lead with.",
      "Order or activate an eSIM, or reserve pocket wi-fi for collection at the airport.",
      "Add a Suica or PASMO card to your phone's wallet and load it. It works on almost every train, bus and convenience store in the country.",
      "Buy anything hard to find in Japan in your size — shoes above roughly US men's 11, larger clothing, specific over-the-counter medicines.",
      "Fill and refill every prescription so you land with more than the trip needs."
    ]
  },
  {
    "when": "Two weeks out",
    "jp": "二週間前",
    "tone": "matcha",
    "lead": "Paperwork, copies, and the plan surviving contact with a dead phone.",
    "items": [
      "Reserve Shinkansen seats if you want a specific train, a window, or the luggage space at the back of the carriage.",
      "Complete the online arrival and customs registration and save the QR codes offline.",
      "Print the itinerary, the first night's address in Japanese, and any medical card. Photograph all of it as well.",
      "Download offline maps for Tokyo, Hakone and Kyoto, and a translation app with the Japanese pack installed.",
      "Share the itinerary and hotel addresses with someone at home."
    ]
  },
  {
    "when": "The last few days",
    "jp": "直前",
    "tone": "sumi",
    "lead": "Small, and each one is somebody's ruined first morning.",
    "items": [
      "Check the weather for all three stops — Hakone runs several degrees colder than Tokyo and is often wet when Tokyo is not.",
      "Get yen before you fly, or plan the first withdrawal at a 7-Eleven or Japan Post ATM in the arrivals hall.",
      "Confirm the airport transfer, and note the last train — it is earlier than you expect, usually around midnight.",
      "Charge everything, and pack the adapter in the bag that stays with you.",
      "Weigh the bags. Leave a third of the case empty; you will not be coming home with the same volume."
    ]
  }
];

window.PACKING = [
  {
    "group": "What Japan expects",
    "jp": "気配り",
    "tone": "shu",
    "items": [
      {
        "t": "Shoes you can slip off",
        "d": "Temples, ryokan, some restaurants and many fitting rooms are shoes-off. Laces four times a day get old fast."
      },
      {
        "t": "Socks without holes",
        "d": "Said lightly, meant seriously. You will be barefoot in front of people more than you think."
      },
      {
        "t": "A small hand towel",
        "d": "Public bathrooms very often have no dryer and no paper. Everyone carries one; that is why nobody complains."
      },
      {
        "t": "A coin purse",
        "d": "Japan still runs on ¥100 and ¥500 coins and they accumulate absurdly fast."
      },
      {
        "t": "A folding tote",
        "d": "Bags cost money at checkouts now, and there are almost no public bins — so what you carry in, you carry until evening."
      },
      {
        "t": "Cash, more than feels sensible",
        "d": "Cards are widely taken and small restaurants, shrines, markets and rural buses still are not."
      }
    ]
  },
  {
    "group": "Hard to buy there",
    "jp": "現地調達不可",
    "tone": "ai",
    "items": [
      {
        "t": "Shoes over roughly US men's 11",
        "d": "Stocked rarely and expensively. The same is true of wider clothing sizes."
      },
      {
        "t": "Strong antiperspirant",
        "d": "Japanese deodorant is much milder than the American equivalent. In summer this matters."
      },
      {
        "t": "Your own medication, plus a margin",
        "d": "Bring the labelled packaging and a copy of the prescription. Some common ingredients at home are restricted or banned here."
      },
      {
        "t": "Sunscreen you already like",
        "d": "Japanese sunscreen is excellent and formulated differently. Not the week to experiment."
      },
      {
        "t": "Any specific allergy or medical documentation",
        "d": "Including a card in Japanese, checked by a native speaker, and a photograph of it."
      }
    ]
  },
  {
    "group": "Electrics and connection",
    "jp": "電源",
    "tone": "kin",
    "items": [
      {
        "t": "Type A plugs, 100 volts",
        "d": "US plugs fit. The lower voltage means US devices work and hair tools may run weakly. Two flat pins only — no third grounding pin."
      },
      {
        "t": "A battery pack",
        "d": "Maps, translation and train apps all day. This is the accessory that actually earns its weight."
      },
      {
        "t": "A multi-port charger",
        "d": "Hotel rooms are small and outlets are few, usually one useful one by the desk."
      },
      {
        "t": "Headphones",
        "d": "Trains are extremely quiet. Speakerphone in a carriage is one of the few things that will genuinely offend."
      }
    ]
  },
  {
    "group": "For the walking",
    "jp": "歩く",
    "tone": "matcha",
    "items": [
      {
        "t": "Broken-in shoes",
        "d": "Fifteen to twenty thousand steps a day is a normal figure on this itinerary, most of it on pavement."
      },
      {
        "t": "A compact umbrella",
        "d": "Rain arrives without much warning. ¥500 plastic ones are on every corner, and Hakone is wetter than Tokyo."
      },
      {
        "t": "Layers rather than a coat",
        "d": "Trains, shops and restaurants are heated and cooled hard. You will take something off indoors every time."
      },
      {
        "t": "A daypack that closes",
        "d": "Crowded trains, and nothing about an open bag is comfortable in a rush-hour carriage."
      },
      {
        "t": "Blister plasters",
        "d": "Buy them before you need them. The Japanese ones are very good, and the shop is always where you have just come from."
      }
    ]
  }
];
