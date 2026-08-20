# Map- and review-link validation

Every destination's Google Maps link was opened in a real browser and the page
it landed on was read back. Two independent sources had to agree:

1. **The coordinate** comes from OpenStreetMap (Nominatim), or — for six
   restaurants OSM does not carry — from Google's own resolved place. Every one
   is checked against a bounding box for its city by `audit.mjs`, which is what
   catches a geocoder returning the right name in the wrong place.
2. **The page** was loaded at `/maps/search/<name>/@<lat>,<lng>,17z` and its
   resolved title, place name and Google's own coordinates were read from the
   URL Google redirected to.

`card` means Google collapsed straight to the place card. `list` means it
showed results with the map centred on the verified point — the correct place
was first in every case. Distances are between the OSM coordinate and Google's
own coordinate for the same place.

## Corrections this found

| Destination | Problem | Fix |
| --- | --- | --- |
| Yanaka | Google returns **"can't find 谷中銀座商店街"** — a dead link | search `谷中銀座` → *Yanaka Ginza* |
| Pontochō | Google returns **"can't find 先斗町"**, and 先斗町通 too | search `Pontocho Alley Kyoto` → *Pontocho Alley* |
| The Dining Room, Hyatt Regency Hakone | naming the outlet landed on the **Living Room lounge** | search the hotel → *Hyatt Regency Hakone Resort and Spa* |
| Teppanyaki Daian Club | Google has no listing under 大安くらぶ; the query hit a keyword-stuffed neighbour | search `丸ノ内ホテル` → *Marunouchi Hotel* (restaurant is on 7F) |

Two of those four were broken links, not merely imprecise ones.

## Confirmed by place card

Sensō-ji (183 m) · Nakamise (11 m) · Meiji Jingu (175 m) · Takeshita St (25 m) ·
Omote-Sando Ave (62 m) · Shibuya Parco (14 m) · Shibuya Scramble Square (10 m) ·
Tokyo Tower (17 m) · Ginza 4 Chome Crossing (21 m) · Nihonbashi (96 m) ·
Tokyo Skytree (2 m) · Shinjuku Gyoen (47 m) · Nakano Broadway (3 m) ·
Odaiba Marine Park (189 m) · Ghibli Museum (19 m) · Warner Bros. Studio Tour
Tokyo (58 m) · Hakone Open-Air Museum (157 m) · Hakone Shrine (97 m) ·
Hakone Gora Park (6 m) · Pola Museum of Art (6 m) · Sengokuhara Susuki Grass
Fields (218 m) · Hanamikoji-dori (281 m) · Kiyomizu-dera (45 m) · Nanzen-ji
(161 m) · Tetsugaku No Michi (503 m) · Ginkaku-ji (20 m) · Arashiyama Bamboo
Forest (79 m) · Tenryu-ji (86 m) · Togetsukyō Bridge (1 m) · Kinkaku-ji (32 m) ·
Ryōan-ji (116 m) · Nijō Castle (11 m) · Nishiki Market (77 m) · Kyoto
International Manga Museum (29 m) · Sanzen-in Temple (48 m) · Byōdo-in Temple
(31 m) · Ujibashi (51 m) · Nipponbashi Denden Town (143 m) · Universal Studios
Japan (13 m) · Tōdai-ji (83 m) · Nezu Museum (15 m) · Hamarikyu Gardens (69 m) ·
teamLab Planets TOKYO DMM (29 m) · Kappabashi Kitchen Supply Town (419 m) ·
Okada Museum of Art (25 m) · Hakone Venetian Glass Museum (6 m) · Hakone Yuryo
(10 m) · Daitoku-ji Temple (131 m) · Kasugataisha Shrine (248 m) · Yanaka Ginza ·
Marunouchi Hotel · Hyatt Regency Hakone Resort and Spa

Restaurants: Yakitori Seo (57 m) · Sushi Dokoro Asanogawa (109 m) ·
Teppan-Yaki Sumida (9 m) · Camellia (98 m) · GORA BREWERY&GRILL (10 m) ·
Yakiniku ROCK (0 m) · Komefuku Shijo Karasuma (0 m) · Hyōto Shijō Karasuma
(0 m) · Teppan HANAROKU (0 m) · FORNI (16 m) · Park Hyatt Kyoto (15 m) ·
Yakiniku HIRO Shijo-kiyamachi

**Philosopher's Path at 503 m is expected** — it is a two-kilometre canal walk,
and both points sit on it. Kappabashi at 419 m is the same: a shopping street,
measured end to middle.

## Confirmed by top result, map centred correctly

Tokyo Station · Akihabara Station · Azabudai Hills · Hakone-Yumoto Station ·
Owakudani · Shirakawa Canal · Sannenzaka · Kōdaiji Temple · Fushimi Inari
Taisha · Yasaka Shrine · Saga Torokko Station · Nintendo Museum · Kifune
Shrine · Kanda Myoujin Shrine · Okochi Sanso Garden · Hōnenin Temple ·
Pontocho Alley

These are queries Google answers with a short list rather than a single card —
for Yasaka Shrine the list has exactly one entry. The link is correct; it just
does not auto-open the panel.

# Review links — 2026-08-07

Every destination also links to its Google **reviews** page, where one exists.
These were not constructed and hoped for. For each destination the harness:

1. opened the map link and read the place Google resolved it to;
2. took that place's feature id (`!1s0x…:0x…`) out of the resolved URL;
3. built the reviews URL from it — the same `/maps/place/` URL with `!9m1!1b1`
   appended, which is the flag that opens the Reviews tab;
4. **loaded that URL** and required the tab Google marked `aria-selected="true"`
   to be `Reviews for <place>`;
5. read the rating and review count off that page.

The rating and count shipped in `data-reviews.js` are therefore evidence the
link resolves, not decoration. **101 of 106 passed.** Together they carry about
1.79 million reviews.

The 25 destinations added in the art/museum/history pass (2026-08-07) all went
through the same procedure and all 25 resolved — the strongest set on the list,
because national museums and UNESCO temples are exactly what Google indexes
well. Highlights of that batch: Sanjūsangen-dō 4.7 (17,302), Tokyo National
Museum 4.5 (30,937), Ueno Park 4.4 (34,529), Osaka Castle 4.4 (98,403).

## The five without a review page

Takeshita Street, Omotesandō, Ginza, Gion and the Philosopher's Path. Google
files each as a road or an area, and roads have no reviews tab — the panel
simply is not there. The app says so on the card rather than hiding the row.

Two of them have a *nearby* landmark that does have reviews — Ginza Wako
(4.3, 1,709) and Omotesandō Hills (4.0, 8,489), both found and both rejected.
Reviews of a department store are not reviews of the district the card
describes. Three cases went the other way and were kept, because there the
listing genuinely is the destination: Nakamise-dōri resolves to **Nakamise
Shopping Street** (4.3, 15,594), the Uji riverside to **Uji Bridge** (4.4, 699),
and Nihonbashi to the **bridge itself** (4.4, 57). Where the listing's name
differs from the card's, the panel prints "listed as …" so the substitution is
visible rather than assumed.

## A note on what the numbers mean

Yakitori Seo has 87 reviews and Sensō-ji has 97,649. That is a fact about
tourist traffic, not quality — an eighteen-seat counter cannot accumulate
temple numbers. The count is shown because it tells you how much weight the
rating carries, and the two smallest counts on the list (Yakiniku ROCK at 59,
産寧坂 at 45) are the ones to read with the most caution.

## Re-running it

`node geocode.mjs` refills any missing coordinate from Nominatim and rewrites
`data-geo.js`. `node audit.mjs` checks every destination has a coordinate, that
it sits inside its city, and that no coordinate is shared across cities. The
browser-side check was ad hoc: load each URL in an iframe on google.com,
same-origin, and read `contentWindow.location.href` after the client-side
redirect.
