# Going Traveling

A twelve-day Japan trip planner — Tokyo, Hakone, Kyoto — built around an
allergy system you point at **your** allergens rather than someone else's.

Open `index.html`. No build step, no dependencies, no network calls: it runs
from the filesystem or any static server.

```bash
python3 -m http.server 4173
```

## The allergy system

Pick your allergens on the Food safety tab and the page rewrites itself — the
formats worth ordering, the places the allergen hides, the questions that
resolve it, and a bilingual card to hand over. Eleven allergens ship with it:
peanut, tree nuts, shellfish, egg, milk, wheat, soy, fish, sesame, buckwheat
and mango.

Each entry leads with the fact almost no guide states — **where your allergen
sits in Japanese labelling law**:

- **Eight are mandatory** on packaged food: egg, milk, wheat, buckwheat,
  peanut, shrimp, crab, walnut. A silent label is meaningful.
- **Twenty are recommended**, including soy and sesame. A package can contain
  them and say nothing.
- **Everything else is unlisted** — mango, most seeds, celery. Reading a label
  proves nothing at all.
- **Restaurants are exempt entirely**, everywhere in Japan.

Which is why the whole strategy is built on asking rather than reading, and why
the app gives you the questions in both languages.

`audit.mjs` enforces that no page assumes a diet: any personal data or
hard-coded restriction outside the allergen library fails the build.

## Two plans a day, and what a swap costs

Each non-travel day offers a pool of complete, geographically coherent day
plans drawn from its base — six for Tokyo, eight for Kyoto — and you assign
whichever suits the weather and the Monday closures. Travel days are
single-shape and stay out of every pool.

Inside a plan every block can be swapped, and the app prices the swap against
the nearest stop in the plan you picked:

- `≈12 min on foot from Ueno Park — inside this plan's area.`
- `⚠️ 45 min each way from Hakone Open-Air Museum, the closest thing on this
  plan. Taking it means the rest of the day moves with you.`

Times come from a hand-entered table of real journeys between walkable zones,
not from straight-line distance — Gōra to Hakone-Yumoto is five kilometres and
forty minutes, because the railway switches back up a mountain.

## What's in the library

106 destinations: temples, viewpoints, gardens, gaming districts, 25 art and
history sites including the national museums in Tokyo, Kyoto and Nara, and 14
screened restaurants. Every one carries a verified Google Maps link, and 101
carry a verified Google reviews link with its rating — see
[geo-validation.md](geo-validation.md) for how each was checked.

## Files

| File | What it holds |
| --- | --- |
| `index.html` | The whole app — markup, styles, behaviour |
| `data-allergens.js` | The allergen library and the meal formats |
| `data-destinations*.js` | The destination library, in five parts |
| `data-plan.js` | Itinerary, food principles, labelling law, lodging, budget |
| `data-plans.js` | The day-shape pool, and which days are travel days |
| `data-zones.js` | Walkable zones and real journey times between them |
| `data-geo.js` / `data-reviews.js` | Verified coordinates, maps and review links |
| `data-eating.js` | The two-question model, formats and screened venues |
| `data-alternatives.js` | Per-block alternatives |
| `data-logistics.js` | Transport, money, connectivity, medication rules |
| `audit.mjs` | Referential integrity, plan coherence, scroll safety, no baked-in diet |
| `build-artifact.mjs` | Bundles everything into one self-contained `artifact.html` |
| `geocode.mjs` / `fetch-images.mjs` | Coordinates from OpenStreetMap, photos from Wikimedia Commons |

```bash
node audit.mjs            # must be 0 failures before publishing
node build-artifact.mjs   # writes artifact.html
```

## Photography

All images come from Wikimedia Commons under CC0, public domain, CC BY or
CC BY-SA, credited per file in `credits.json` and rendered in the page footer.
`fetch-images.mjs` refuses anything without a licence it can credit. Restaurant
cards show either the building or the cuisine, and say which — Commons has no
photographs of individual Japanese restaurants and their own marketing images
are not ours to take.

## Accuracy

Hours, prices and closures were verified in August 2026 and drift constantly.
Confirm before booking. The two that bite hardest:

- **Nintendo Museum** is a monthly lottery with no door tickets.
- **Kōfuku-ji's five-storey pagoda** is enclosed for restoration until ~2034.

## Licence

MIT. The trip is a template — fork it and make it yours.
