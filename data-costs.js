/* ══════════════════════════════════════════════════════════════════════
   COSTS AND BUDGET
   ─────────────────────────────────────────────────────────────────────
   Two different jobs, deliberately kept apart.

   BUDGET is a planning envelope: what a twelve-day trip costs end to end
   at three honest travel styles, for however many people are going. Rows
   that are bought at home are priced in dollars; rows that are bought in
   Japan are priced in YEN and converted at whatever rate the reader sets,
   because a budget quietly denominated at last year's rate is worse than
   no budget at all.

   COSTS is the reference the budget is built out of — what a bowl of
   ramen, a subway ride or a museum ticket actually costs. It is the part
   people remember, and it is the part that makes the envelope feel real
   instead of made up.

   Every figure here is a PLANNING figure: typical, current when written,
   and drifting from the day it was typed. Confirm anything you are about
   to hand over money for.
   ══════════════════════════════════════════════════════════════════ */

window.BUDGET = {
  "rate": 150,
  "rateNote": "Everything bought in Japan is held in yen and converted here. Set this to the rate your card actually gives you — it moves the total by hundreds of dollars.",
  "party": 2,
  "nights": {
    "tokyo": 4,
    "hakone": 2,
    "kyoto": 5
  },
  "styles": [
    {
      "id": "lo",
      "name": "Lean",
      "jp": "倹約",
      "blurb": "Business hotels and hostels, konbini breakfasts, trains you stand on, one splurge meal in twelve days. Nothing about this is grim — it is how most of Japan travels in its own country."
    },
    {
      "id": "mid",
      "name": "Middle",
      "jp": "標準",
      "blurb": "A clean room of your own in a good area, a proper lunch set most days, dinner out, reserved seats, and the one ryokan night that is the point of Hakone."
    },
    {
      "id": "hi",
      "name": "Comfortable",
      "jp": "余裕",
      "blurb": "Rooms with a view, a kaiseki dinner served in your room, sushi at a counter, green-car seats, and taxis when the day has gone long."
    }
  ],
  "rows": [
    {
      "k": "Round-trip flights",
      "per": "person",
      "cat": "Flights",
      "cur": "usd",
      "lo": 850,
      "mid": 1250,
      "hi": 1800,
      "note": "The single most variable line. Flying into Tokyo and out of Osaka usually costs the same or slightly more than a round trip, and saves you a day."
    },
    {
      "k": "Tokyo — 4 nights",
      "per": "room",
      "cat": "Lodging",
      "cur": "jpy",
      "lo": 40000,
      "mid": 88000,
      "hi": 200000,
      "note": "Per room, not per person. Lean is a business hotel; middle is an apartment hotel with a kitchen; high is a view over the Imperial Palace."
    },
    {
      "k": "Hakone — 2 nights",
      "per": "person",
      "cat": "Lodging",
      "cur": "jpy",
      "lo": 24000,
      "mid": 70000,
      "hi": 140000,
      "note": "Priced per person, because ryokan are. The middle figure includes kaiseki dinner and breakfast; the lean one is a room-only guesthouse where you eat in town."
    },
    {
      "k": "Kyoto — 5 nights",
      "per": "room",
      "cat": "Lodging",
      "cur": "jpy",
      "lo": 55000,
      "mid": 110000,
      "hi": 260000,
      "note": "Kyoto runs a little cheaper than Tokyo for the same class of room, and a lot more expensive during cherry blossom and autumn colour."
    },
    {
      "k": "Food and drink",
      "per": "person",
      "cat": "Food",
      "cur": "jpy",
      "lo": 36000,
      "mid": 78000,
      "hi": 168000,
      "note": "Twelve days at roughly ¥3,000 / ¥6,500 / ¥14,000 a day. Drop the Hakone days if your ryokan feeds you."
    },
    {
      "k": "Airport transfers",
      "per": "person",
      "cat": "Transport",
      "cur": "jpy",
      "lo": 1600,
      "mid": 6200,
      "hi": 30000,
      "note": "Lean is the Haneda monorail and an airport bus. Middle is the Narita Express in and the Haruka out. High is a taxi from Narita, which is a genuinely startling number."
    },
    {
      "k": "Intercity trains",
      "per": "person",
      "cat": "Transport",
      "cur": "jpy",
      "lo": 16000,
      "mid": 21000,
      "hi": 32000,
      "note": "Tokyo to Hakone, the Hakone Free Pass, and Hakone to Kyoto. A 7-day Japan Rail Pass does not pay for itself on this route — see the levers below."
    },
    {
      "k": "Local transport",
      "per": "person",
      "cat": "Transport",
      "cur": "jpy",
      "lo": 6000,
      "mid": 11000,
      "hi": 24000,
      "note": "Subways, buses and the occasional taxi, on an IC card. Kyoto buses are a flat fare and slow; the subway is faster and barely more."
    },
    {
      "k": "Luggage forwarding",
      "per": "trip",
      "cat": "Transport",
      "cur": "jpy",
      "lo": 0,
      "mid": 5000,
      "hi": 15000,
      "note": "Sending the big bags ahead so you are not dragging them onto the Romancecar. Roughly ¥2,000–2,500 per bag per leg, and worth every yen on the Hakone day."
    },
    {
      "k": "Attractions and experiences",
      "per": "person",
      "cat": "Doing",
      "cur": "jpy",
      "lo": 8000,
      "mid": 18000,
      "hi": 40000,
      "note": "Museums, temple admissions, one onsen day pass, and the two or three ticketed things you came for."
    },
    {
      "k": "Data",
      "per": "person",
      "cat": "Other",
      "cur": "jpy",
      "lo": 2000,
      "mid": 3500,
      "hi": 9000,
      "note": "An eSIM is the cheap end and takes five minutes. Pocket wi-fi rental is the expensive end and is only worth it if several of you share one."
    },
    {
      "k": "Travel insurance",
      "per": "person",
      "cat": "Other",
      "cur": "usd",
      "lo": 60,
      "mid": 120,
      "hi": 260,
      "note": "Japan has excellent hospitals and no reciprocal arrangement with the US. This is the line nobody wants and everybody should buy."
    },
    {
      "k": "Souvenirs and slack",
      "per": "person",
      "cat": "Other",
      "cur": "usd",
      "lo": 100,
      "mid": 300,
      "hi": 800,
      "note": "Knives, ceramics, stationery, and the thing you did not plan for. A budget with no slack in it is a budget you will break on day three."
    }
  ],
  "note": "These are planning figures for a twelve-day trip, not quotes. Flights and lodging move with the season more than with anything you decide.",
  "seasonNote": "Cherry blossom (late March to early April) and autumn colour (mid-November) can add 30–50% to lodging in Kyoto and sell the good rooms out six months ahead. Mid-January, June and early September are the quiet, cheap, perfectly pleasant alternatives."
};

/* What things actually cost, in yen, grouped the way you spend them. */
window.COSTS = [
  {
    "group": "Eating, on an ordinary day",
    "jp": "食事",
    "tone": "matcha",
    "items": [
      {
        "what": "Onigiri from a convenience store",
        "yen": "150–250",
        "note": "Breakfast for most of Japan, and better than it has any right to be."
      },
      {
        "what": "Convenience-store coffee",
        "yen": "120–200",
        "note": "Ground and brewed to order at the counter."
      },
      {
        "what": "Bowl of ramen",
        "yen": "900–1,300",
        "note": "Ordered from a ticket machine at the door. Extra noodles are usually ¥150."
      },
      {
        "what": "Gyūdon at a chain",
        "yen": "500–750",
        "note": "Yoshinoya, Sukiya, Matsuya. Under five minutes, open all night."
      },
      {
        "what": "Teishoku lunch set",
        "yen": "1,000–1,600",
        "note": "A main, rice, miso soup and pickles. The best-value meal in the country."
      },
      {
        "what": "Depachika bento",
        "yen": "800–1,800",
        "note": "Department-store food hall. Half price in the last hour before closing."
      },
      {
        "what": "Standing sushi",
        "yen": "1,500–3,000",
        "note": "Excellent fish, no ceremony, twenty minutes."
      },
      {
        "what": "Sushi dinner, mid-range",
        "yen": "6,000–12,000",
        "note": "Seated, ordered by the piece or as a set."
      },
      {
        "what": "Counter omakase",
        "yen": "20,000–40,000",
        "note": "Booked weeks ahead. The chef decides; you eat what the market gave him."
      },
      {
        "what": "Izakaya evening, per person",
        "yen": "3,000–5,000",
        "note": "Small plates and drinks. Many charge a ¥300–500 seating fee that comes with a snack."
      },
      {
        "what": "Draft beer / highball",
        "yen": "500–700 / 400–600",
        "note": "The same beer is ¥250 from a vending machine."
      },
      {
        "what": "Specialty coffee",
        "yen": "600–800",
        "note": "Japan takes coffee extremely seriously. This is not a tourist price."
      }
    ]
  },
  {
    "group": "Getting around",
    "jp": "移動",
    "tone": "ai",
    "items": [
      {
        "what": "Subway ride, Tokyo",
        "yen": "180–330",
        "note": "By distance. Tap in and out with an IC card."
      },
      {
        "what": "Kyoto city bus",
        "yen": "230 flat",
        "note": "Slow in daylight. The subway and a walk usually beat it."
      },
      {
        "what": "Taxi flag drop, Tokyo",
        "yen": "500",
        "note": "Then roughly ¥100 every 250 metres. The doors open themselves — do not touch them."
      },
      {
        "what": "Shinkansen, Tokyo to Kyoto",
        "yen": "13,850–14,170",
        "note": "Reserved, one way, about 2h15. Green car adds roughly ¥5,000."
      },
      {
        "what": "Shinkansen, Tokyo to Odawara",
        "yen": "3,280",
        "note": "35 minutes on a Kodama. The gateway to Hakone."
      },
      {
        "what": "Romancecar, Shinjuku to Hakone-Yumoto",
        "yen": "2,470",
        "note": "Fare plus limited-express surcharge. Front seats face the track and sell out first."
      },
      {
        "what": "Hakone Free Pass, 3 days",
        "yen": "6,100",
        "note": "From Shinjuku. Covers the mountain railway, cable car, ropeway, pirate ship and buses — the whole loop is the attraction."
      },
      {
        "what": "Narita Express to Tokyo",
        "yen": "3,070",
        "note": "About an hour. The Keisei Skyliner to Ueno is ¥2,570 and faster."
      },
      {
        "what": "Haneda monorail",
        "yen": "500",
        "note": "Fifteen minutes to Hamamatsuchō. Haneda is the better airport by a distance."
      },
      {
        "what": "Luggage forwarding, per bag",
        "yen": "2,000–2,500",
        "note": "Hotel to hotel, next day. Hand it over at the front desk before 10am."
      },
      {
        "what": "Coin locker, per day",
        "yen": "400–700",
        "note": "By size, at every station. IC-card operated, so keep the card you paid with."
      }
    ]
  },
  {
    "group": "Sleeping",
    "jp": "宿",
    "tone": "kin",
    "items": [
      {
        "what": "Capsule, per person",
        "yen": "4,000–7,000",
        "note": "Clean, quiet, and far nicer than the word suggests."
      },
      {
        "what": "Hostel private room",
        "yen": "8,000–14,000",
        "note": "Per room. Often the best-designed cheap beds in the country."
      },
      {
        "what": "Business hotel",
        "yen": "10,000–20,000",
        "note": "Per room. Small, spotless, unfailingly functional."
      },
      {
        "what": "Apartment hotel with kitchen",
        "yen": "18,000–32,000",
        "note": "Per room. The difference between eating out every meal and choosing to."
      },
      {
        "what": "Ryokan with two meals, per person",
        "yen": "25,000–60,000",
        "note": "Dinner and breakfast included and central to the price. Judge it per person, never per room."
      },
      {
        "what": "Accommodation tax",
        "yen": "100–1,000 / night",
        "note": "Charged per person by Tokyo and Kyoto, on a sliding scale by room rate. Kyoto's top tier rises sharply in 2026 — check what your booking actually attracts."
      }
    ]
  },
  {
    "group": "Doing things",
    "jp": "拝観",
    "tone": "shu",
    "items": [
      {
        "what": "Temple or shrine admission",
        "yen": "300–600",
        "note": "Many of the best are free. Fushimi Inari costs nothing and never closes."
      },
      {
        "what": "Major museum",
        "yen": "1,000–2,000",
        "note": "Tokyo National Museum ¥1,000; special exhibitions cost more and are usually worth it."
      },
      {
        "what": "Ticketed attraction",
        "yen": "2,500–4,000",
        "note": "The ones that need booking weeks or months ahead sit at this end."
      },
      {
        "what": "Onsen day pass",
        "yen": "800–2,000",
        "note": "No booking, no overnight stay, bring a small towel or rent one."
      },
      {
        "what": "Neighbourhood sentō",
        "yen": "550",
        "note": "The price is set by the prefecture. The cheapest good hour in Tokyo."
      },
      {
        "what": "Coin laundry, wash and dry",
        "yen": "400–600",
        "note": "Twelve days needs one laundry stop. Most hotels have machines."
      }
    ]
  },
  {
    "group": "Money itself",
    "jp": "両替",
    "tone": "sumi",
    "items": [
      {
        "what": "7-Eleven ATM withdrawal",
        "yen": "110–220 fee",
        "note": "Plus whatever your own bank charges. 7-Eleven and Japan Post take foreign cards reliably; many bank ATMs do not."
      },
      {
        "what": "Cash to carry",
        "yen": "20,000–30,000",
        "note": "Per person, topped up as you go. Cards are widely accepted now, but small restaurants, shrines and markets are still cash."
      },
      {
        "what": "IC card deposit",
        "yen": "500",
        "note": "Suica or PASMO, refundable. Add one to your phone's wallet instead and skip the plastic entirely."
      },
      {
        "what": "Tipping",
        "yen": "0",
        "note": "Not customary anywhere, and refusing it is not rudeness. Do not leave money on the table."
      }
    ]
  }
];

/* The decisions that move the total more than any amount of thrift. */
window.LEVERS = [
  {
    "t": "Skip the Japan Rail Pass",
    "d": "A 7-day pass is ¥50,000. This itinerary uses roughly ¥21,000 of intercity rail. Buying each leg individually saves about ¥29,000 per person — the pass only wins if you are crossing the country repeatedly.",
    "tone": "matcha"
  },
  {
    "t": "Move the dates, not the standard",
    "d": "The same room in Kyoto costs 30–50% more in early April and mid-November. Late January or early September buys you a better hotel for less than a worse one in blossom season.",
    "tone": "matcha"
  },
  {
    "t": "Let the ryokan be the expensive night",
    "d": "One night of kaiseki and a private bath is a highlight. Two is a habit you cannot afford. Book one properly and stay somewhere plain the other night.",
    "tone": "kin"
  },
  {
    "t": "Eat lunch like a local",
    "d": "The same kitchen serves a ¥1,200 lunch set and a ¥4,000 dinner. Eating your best meal at midday is the single largest food saving available, and the food is identical.",
    "tone": "kin"
  },
  {
    "t": "Get a room with a kitchen for the long stay",
    "d": "Five nights in Kyoto with a fridge and a stove turns breakfast into ¥400 instead of ¥1,800, and gives you somewhere to retreat to when a day goes wrong.",
    "tone": "ai"
  },
  {
    "t": "Forward the luggage, always",
    "d": "¥2,000 a bag is the cheapest thing you will buy. Station stairs, rush-hour trains and the Hakone mountain railway are all far worse with a suitcase in hand.",
    "tone": "ai"
  },
  {
    "t": "Fly open-jaw",
    "d": "In through Tokyo, out through Osaka. It rarely costs more than a round trip and it saves a full day and a ¥14,000 train ticket at the end.",
    "tone": "shu"
  },
  {
    "t": "Book the one lottery thing first",
    "d": "A handful of attractions run monthly ballots or release tickets months ahead. Losing one is survivable; building the trip around a date you did not win is not.",
    "tone": "shu"
  }
];
