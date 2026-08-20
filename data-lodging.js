/* ══════════════════════════════════════════════════════════════════════
   LODGING
   ─────────────────────────────────────────────────────────────────────
   Three layers, because "where should I stay" is really three questions.

   STAY_TYPES answers the one a first-timer does not know to ask: Japan
   has kinds of accommodation that have no equivalent at home, and picking
   the wrong kind matters more than picking the wrong property. A ryokan
   priced per person with two meals is not expensive compared to a hotel
   room — it is a different unit.

   LODGING answers it per city, at three honest price tiers, with real
   properties named. Named properties are given as SEARCH links rather
   than booking links on purpose: rates, availability and even ownership
   change, and a stale booking URL is worse than none. Verify the room
   before you pay for it.

   STAY_NOTES is the small print that catches people out — the taxes,
   the check-in windows, the cancellation norms.
   ══════════════════════════════════════════════════════════════════ */

/* The kinds of place you can sleep, and what each one is actually for. */
window.STAY_TYPES = [
  {
    "name": "Business hotel",
    "jp": "ビジネスホテル",
    "yen": "¥10,000–20,000 / room",
    "what": "A small, spotless, extremely well-engineered room with a unit bathroom, a desk, and a bed that takes up most of the floor. Chains like Toyoko Inn, APA, Dormy Inn and Sotetsu Fresa Inn are everywhere, always near a station, and never disappoint in either direction.",
    "who": "Anyone who intends to be out all day. The default for good reason.",
    "watch": "Rooms are genuinely small — 12 to 18 square metres for two people. Dormy Inn throws in a communal bath and free late-night ramen, which makes it the pick of the chains.",
    "tone": "ai"
  },
  {
    "name": "Apartment hotel",
    "jp": "アパートメントホテル",
    "yen": "¥18,000–32,000 / room",
    "what": "A hotel room with a real kitchen, a washing machine and space to sit down that is not the bed. MIMARU and Oakwood are the well-known names; both are aimed squarely at families and longer stays.",
    "who": "Stays over three nights, anyone travelling with children, and anyone who needs control over what they eat.",
    "watch": "Confirm it is a full kitchen and not a kettle and a sink. The listing word to look for is IH cooktop.",
    "tone": "ai"
  },
  {
    "name": "Ryokan",
    "jp": "旅館",
    "yen": "¥25,000–60,000 / person",
    "what": "A traditional inn: tatami floors, futon laid out while you are at dinner, yukata to wear around the building, and a kaiseki dinner and Japanese breakfast that are the substance of the price rather than an extra. Often with an onsen bath, sometimes with one attached to your own room.",
    "who": "One or two nights of the trip, somewhere like Hakone that exists for exactly this.",
    "watch": "Priced per person with two meals, so the headline number looks alarming and is not comparable to a hotel rate. Dinner is served at a fixed hour and the kitchen plans it days ahead — dietary needs must be raised when you book, not on arrival.",
    "tone": "kin"
  },
  {
    "name": "Minshuku and guesthouse",
    "jp": "民宿",
    "yen": "¥6,000–14,000 / person",
    "what": "The family-run version of a ryokan. Simpler rooms, shared bathrooms, home cooking rather than kaiseki, and an owner who will tell you exactly which bus to take.",
    "who": "Rural stops and anyone who wants the tatami-and-futon experience without the ryokan price.",
    "watch": "Often cash only, often with a curfew, and rarely staffed in English. Worth the small friction.",
    "tone": "matcha"
  },
  {
    "name": "Machiya townhouse",
    "jp": "町家",
    "yen": "¥25,000–60,000 / house",
    "what": "A restored Kyoto merchant's house rented whole — wooden lattice front, a courtyard garden, a deep cedar bath, and usually a kitchen. You get the building to yourself.",
    "who": "Groups and families in Kyoto, and anyone who would rather come home to a house than a corridor.",
    "watch": "Old buildings: steep stairs, cold in winter, thin walls onto a quiet street. Check how far it actually is from a station, because many are charmingly far.",
    "tone": "kin"
  },
  {
    "name": "Hostel",
    "jp": "ゲストハウス",
    "yen": "¥3,500–6,000 / person dorm · ¥8,000–14,000 / room private",
    "what": "Japan's hostels are a different species — architect-designed, immaculate, with good coffee downstairs and private rooms that shame budget hotels elsewhere.",
    "who": "Solo travellers, and couples happy with a private room and a shared bathroom.",
    "watch": "Book the private room early; they are the first thing to go and the reason to choose the place.",
    "tone": "matcha"
  },
  {
    "name": "Capsule hotel",
    "jp": "カプセルホテル",
    "yen": "¥4,000–7,000 / person",
    "what": "A sealed sleeping pod in a rack, with a locker, a large communal bath and a lounge. The modern ones — Nine Hours, First Cabin — are quiet, clean and oddly restful.",
    "who": "A night either side of a flight, or a night you did not plan for.",
    "watch": "Usually single-sex floors, so a couple will be split up. Luggage lives in a locker, not with you.",
    "tone": "sumi"
  },
  {
    "name": "Temple lodging",
    "jp": "宿坊",
    "yen": "¥12,000–25,000 / person",
    "what": "A room in a working temple, with vegetarian shōjin ryōri dinner and an optional dawn service you are welcome to attend. Kōya-san is the famous concentration of them.",
    "who": "One night, as a deliberate experience rather than as accommodation.",
    "watch": "Early lights-out, early start, shared bathing, and a dinner built on soy and sesame — worth knowing if either is a problem for you.",
    "tone": "sumi"
  }
];

/* Per city, at three price tiers. `find` is a map search, not a booking link. */
window.LODGING = [
  {
    "city": "Tokyo",
    "jp": "東京",
    "nights": 4,
    "where": "Tokyo Station, Nihonbashi, Ginza, Shinjuku or Shibuya",
    "why": "Sleep on top of a major interchange and the city shrinks. Tokyo Station and Nihonbashi put Asakusa, Ginza, Akihabara, the Hakone train and the Kyoto Shinkansen all inside half an hour, and they are markedly calmer at night than Shinjuku or Shibuya — which is worth more than it sounds on day one of jet lag.",
    "avoid": "Anywhere more than about eight minutes' walk from a station. In a city this large that walk happens four times a day and it is the thing that quietly ruins an itinerary.",
    "tiers": [
      {
        "tier": "Lean",
        "yen": "¥9,000–16,000 / night",
        "fit": "practical",
        "picks": [
          {
            "name": "Toyoko Inn Tokyo Nihombashi",
            "note": "The archetypal business hotel — tiny, immaculate, free breakfast, and one of dozens of Tokyo branches. Book direct for the member rate.",
            "find": "https://www.google.com/maps/search/Toyoko%20Inn%20Tokyo%20Nihombashi%20Tokyo%20Japan"
          },
          {
            "name": "UNPLAN Kagurazaka",
            "note": "A design hostel in one of Tokyo's best low-key neighbourhoods. Private rooms are worth booking well ahead.",
            "find": "https://www.google.com/maps/search/UNPLAN%20Kagurazaka%20Tokyo%20Japan"
          },
          {
            "name": "Nine Hours Ningyocho",
            "note": "Capsules done properly. Separate floors by sex, so not a couples option, but a superb solo one.",
            "find": "https://www.google.com/maps/search/Nine%20Hours%20Ningyocho%20Tokyo%20Japan"
          }
        ]
      },
      {
        "tier": "Middle",
        "yen": "¥18,000–30,000 / night",
        "fit": "best",
        "picks": [
          {
            "name": "MIMARU Tokyo Station East",
            "note": "Apartment hotel in Hatchōbori, two minutes from the station and about fourteen on foot from Tokyo Station. Every room has an IH stove, fridge, microwave, pans and a real dining table, with a convenience store in the building. Functional rather than beautiful, and the best value here if you want a kitchen.",
            "find": "https://www.google.com/maps/search/MIMARU%20Tokyo%20Station%20East%20Tokyo%20Japan"
          },
          {
            "name": "Hotel Ryumeikan Tokyo",
            "note": "Small, quietly excellent, directly outside Tokyo Station's Yaesu North exit. The single best location on this list for a trip that continues to Hakone and Kyoto by train.",
            "find": "https://www.google.com/maps/search/Hotel%20Ryumeikan%20Tokyo%20Tokyo%20Japan"
          },
          {
            "name": "Mitsui Garden Hotel Ginza Premier",
            "note": "High floors, wide windows, a top-floor lounge over Ginza. A step up in feel for not much more money.",
            "find": "https://www.google.com/maps/search/Mitsui%20Garden%20Hotel%20Ginza%20Premier%20Tokyo%20Japan"
          }
        ]
      },
      {
        "tier": "Splurge",
        "yen": "¥55,000–150,000 / night",
        "fit": "splurge",
        "picks": [
          {
            "name": "Palace Hotel Tokyo",
            "note": "Balconies over the Imperial Palace moat. Reliably rated among the city's best, and the location is unrepeatable.",
            "find": "https://www.google.com/maps/search/Palace%20Hotel%20Tokyo%20Tokyo%20Japan"
          },
          {
            "name": "HOSHINOYA Tokyo",
            "note": "A ryokan built as a tower in the financial district, with a real hot spring at the bottom of it. Shoes off at the door, tatami all the way up.",
            "find": "https://www.google.com/maps/search/HOSHINOYA%20Tokyo%20Tokyo%20Japan"
          },
          {
            "name": "Oakwood Premier Tokyo",
            "note": "Serviced apartments two minutes from Tokyo Station, floors 6–19, full kitchen with oven, dishwasher and washer-dryer. The splurge that still lets you cook.",
            "find": "https://www.google.com/maps/search/Oakwood%20Premier%20Tokyo%20Tokyo%20Japan"
          }
        ]
      }
    ]
  },
  {
    "city": "Hakone",
    "jp": "箱根",
    "nights": 2,
    "where": "Gōra, Sengokuhara, Miyanoshita or Hakone-Yumoto",
    "why": "Hakone is the stop where the trip stops moving. Gōra sits high on the mountain railway with the best concentration of onsen inns and the open-air museum on its doorstep; Hakone-Yumoto at the bottom is cheaper, busier and better connected; Miyanoshita is the historic middle.",
    "avoid": "Booking two expensive nights. One proper ryokan night is a memory; two is a bill. Most people are happiest with one inn and one simpler room.",
    "tiers": [
      {
        "tier": "Lean",
        "yen": "¥8,000–16,000 / person",
        "fit": "practical",
        "picks": [
          {
            "name": "Hakone Tent",
            "note": "A former ryokan in Gōra run as a hostel, with its own small onsen baths you book by the half hour. Private rooms, a bar downstairs, and the cheapest way to sleep on the good part of the mountain.",
            "find": "https://www.google.com/maps/search/Hakone%20Tent%20Hakone%20Japan"
          },
          {
            "name": "K's House Hakone",
            "note": "Traditional building, tatami rooms, indoor and outdoor hot-spring baths, room-only rates. Eat in Hakone-Yumoto and spend the difference on the Free Pass.",
            "find": "https://www.google.com/maps/search/K%27s%20House%20Hakone%20Hakone%20Japan"
          }
        ]
      },
      {
        "tier": "Middle",
        "yen": "¥25,000–45,000 / person with two meals",
        "fit": "best",
        "picks": [
          {
            "name": "Fujiya Hotel",
            "note": "Open since 1878 in Miyanoshita, a hybrid of grand Western hotel and Japanese mountain inn, with hot-spring baths and a dining room that has fed everyone from Charlie Chaplin onward. The most interesting building you can sleep in here.",
            "find": "https://www.google.com/maps/search/Fujiya%20Hotel%20Hakone%20Japan"
          },
          {
            "name": "Hakone Kowakien Ten-yu",
            "note": "Modern onsen hotel above Kowakidani with valley views from the baths. Rooms with private open-air tubs sit at the top of this range.",
            "find": "https://www.google.com/maps/search/Hakone%20Kowakien%20Ten-yu%20Hakone%20Japan"
          },
          {
            "name": "Hotel Okada",
            "note": "Large, unpretentious, well-run, with a big bath complex and half-board rates that undercut the boutique inns considerably.",
            "find": "https://www.google.com/maps/search/Hotel%20Okada%20Hakone%20Japan"
          }
        ]
      },
      {
        "tier": "Splurge",
        "yen": "¥60,000–150,000 / person with two meals",
        "fit": "splurge",
        "picks": [
          {
            "name": "Gōra Kadan",
            "note": "Built on the site of an imperial family retreat, and generally regarded as one of the finest ryokan in Japan. Kaiseki in your room, private open-air baths.",
            "find": "https://www.google.com/maps/search/G%C5%8Dra%20Kadan%20Hakone%20Japan"
          },
          {
            "name": "Hakone Ginyu",
            "note": "Every room has a private open-air bath looking down the Sukumo valley. The view is the entire point and it earns it.",
            "find": "https://www.google.com/maps/search/Hakone%20Ginyu%20Hakone%20Japan"
          }
        ]
      }
    ]
  },
  {
    "city": "Kyoto",
    "jp": "京都",
    "nights": 5,
    "where": "Karasuma, Kawaramachi, Gion, or immediately around Kyoto Station",
    "why": "Kyoto is small and low, and the subway is only two lines — so the question is which walk you want. Karasuma and Kawaramachi put you in the middle of the food and the shopping with both subway lines in reach; Gion is beautiful and quiet after nine; Kyoto Station is the least charming and the most convenient, which matters on a five-night stay with a Shinkansen at each end.",
    "avoid": "Anywhere out toward Arashiyama or the northern hills unless you have a specific reason. They are lovely and they are forty minutes from dinner.",
    "tiers": [
      {
        "tier": "Lean",
        "yen": "¥9,000–17,000 / night",
        "fit": "practical",
        "picks": [
          {
            "name": "Piece Hostel Sanjo",
            "note": "Central, calm, properly designed, with private rooms that would pass for a boutique hotel and a courtyard to sit in.",
            "find": "https://www.google.com/maps/search/Piece%20Hostel%20Sanjo%20Kyoto%20Japan"
          },
          {
            "name": "Len Kyoto Kawaramachi",
            "note": "Hostel, café and bar in one building on the Kamo river side of town. Private rooms upstairs, one of the better ground floors in the city.",
            "find": "https://www.google.com/maps/search/Len%20Kyoto%20Kawaramachi%20Kyoto%20Japan"
          },
          {
            "name": "Sotetsu Fresa Inn Kyoto Kiyomizu Gojo",
            "note": "Straightforward business hotel, walking distance to Kiyomizu-dera before the crowds arrive.",
            "find": "https://www.google.com/maps/search/Sotetsu%20Fresa%20Inn%20Kyoto%20Kiyomizu%20Gojo%20Kyoto%20Japan"
          }
        ]
      },
      {
        "tier": "Middle",
        "yen": "¥18,000–35,000 / night",
        "fit": "best",
        "picks": [
          {
            "name": "MIMARU Kyoto Station",
            "note": "The same apartment-hotel formula as Tokyo — kitchen, dining table, room for four — a few minutes from the Shinkansen platforms. The practical pick for five nights.",
            "find": "https://www.google.com/maps/search/MIMARU%20Kyoto%20Station%20Kyoto%20Japan"
          },
          {
            "name": "Hotel Kanra Kyoto",
            "note": "Machiya design language done as a hotel: wood, washi, deep cedar bathtubs, on Karasuma with the subway underneath.",
            "find": "https://www.google.com/maps/search/Hotel%20Kanra%20Kyoto%20Kyoto%20Japan"
          },
          {
            "name": "NOHGA HOTEL KIYOMIZU KYOTO",
            "note": "Contemporary, art-led, walkable to the eastern temples, with a good restaurant on the ground floor.",
            "find": "https://www.google.com/maps/search/NOHGA%20HOTEL%20KIYOMIZU%20KYOTO%20Kyoto%20Japan"
          }
        ]
      },
      {
        "tier": "Splurge",
        "yen": "¥80,000–250,000 / night",
        "fit": "splurge",
        "picks": [
          {
            "name": "Tawaraya Ryokan",
            "note": "Three hundred years old, eighteen rooms, no website worth the name, and a waiting list. The reference against which other ryokan are measured.",
            "find": "https://www.google.com/maps/search/Tawaraya%20Ryokan%20Kyoto%20Japan"
          },
          {
            "name": "HOSHINOYA Kyoto",
            "note": "Reached by private boat up the Ōi river at Arashiyama. Genuinely remote from the city, which is either the appeal or the objection.",
            "find": "https://www.google.com/maps/search/HOSHINOYA%20Kyoto%20Kyoto%20Japan"
          },
          {
            "name": "The Ritz-Carlton Kyoto",
            "note": "On the Kamo river with the Higashiyama hills opposite. The most conventional luxury in the city, executed to the hilt.",
            "find": "https://www.google.com/maps/search/The%20Ritz-Carlton%20Kyoto%20Kyoto%20Japan"
          }
        ]
      }
    ]
  }
];

/* The small print that catches people out. */
window.STAY_NOTES = [
  {
    "k": "Book the constrained thing first",
    "v": "Ryokan with private open-air baths, machiya, and anything in Kyoto during blossom or autumn colour go six to nine months out. Ordinary business hotels can be booked three weeks ahead without drama."
  },
  {
    "k": "Accommodation tax is charged locally",
    "v": "Tokyo and Kyoto both levy a per-person, per-night lodging tax on a sliding scale by room rate, collected at the property rather than through the booking site. Kyoto's upper tiers rise steeply in 2026 — check what your specific rate attracts."
  },
  {
    "k": "Check-in is late and enforced",
    "v": "Three or four in the afternoon is standard and earlier is genuinely unusual. Every property will hold your bags from the morning, which is what the luggage room is for."
  },
  {
    "k": "Ryokan run to a timetable",
    "v": "Dinner is served at a set hour, breakfast likewise, and the futon is laid out in between. Arriving at eight in the evening means missing the meal you have already paid for."
  },
  {
    "k": "Tell them about food restrictions when you book",
    "v": "Kaiseki is planned and shopped for days ahead. A restriction raised at booking is usually accommodated gracefully; the same restriction raised at the table cannot be."
  },
  {
    "k": "Rooms are quoted by occupancy",
    "v": "A Japanese hotel rate often assumes one person. Check the number of guests before comparing prices, or the bargain disappears at the payment screen."
  },
  {
    "k": "Free cancellation is normal, up to a point",
    "v": "Most hotels cancel free until a few days out. Ryokan and small inns commonly charge from a week ahead and in full within two days, because they have bought your dinner."
  },
  {
    "k": "Tattoos may be refused at communal baths",
    "v": "Still common at onsen, though softening. A room with a private bath, or a property that states it is tattoo-friendly, avoids the conversation entirely."
  }
];
