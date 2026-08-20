/**
 * The logistics the itinerary assumes but never states.
 *
 * Ordered by when it bites: what stops you at the border, then what moves you
 * around, then what you pay with, then what you do when something goes wrong.
 */
window.LOGISTICS = [
  {
    id: 'meds',
    title: 'Medication across the border',
    jp: '医薬品の持ち込み',
    lead: 'The one section on this page where getting it wrong ends the trip at the airport.',
    critical: true,
    items: [
      { k: 'EpiPens are a "self-injection device"', v: 'Up to a one-month supply may be brought in with no advance paperwork. Carry the prescription and keep them in the original labelled packaging. Two devices for a twelve-day trip is comfortably inside that.' },
      { k: 'More than a month of anything needs a Yakkan Shoumei', v: 'That is an import certificate, applied for through the Regional Bureau of Health and Welfare covering your arrival airport, and it must be filed at least 14 days before you land. One certificate can cover several medicines and devices at once.' },
      { k: '⚠️ Pseudoephedrine is banned', v: 'Sudafed and many combination cold tablets contain it, and Japan classifies it as a stimulant raw material. It is prohibited at the border regardless of prescription. Check every box in the medicine bag before packing, including anything bought over the counter at home.' },
      { k: '⚠️ Stimulants are prohibited outright', v: 'Adderall, Dexedrine and similar ADHD medications cannot be brought into Japan under any circumstances, prescription or not. This is a criminal matter, not a customs formality.' },
      { k: 'Also worth checking', v: 'Some inhalers and codeine-containing painkillers are restricted by quantity. Anything unusual, confirm with the Narcotics Control Department before you fly rather than at the desk.' },
      { k: 'Pack them as hand luggage', v: 'Medication, EpiPens and prescriptions travel in the cabin, together, in one place. Hold bags get delayed; these cannot.' },
    ],
    note: 'Do this check the week you book, not the week you fly — a Yakkan Shoumei has a two-week lead time and there is no way to hurry it.',
  },
  {
    id: 'entry',
    title: 'Entry and documents',
    jp: '入国',
    lead: 'Free, quick, and saves 20–30 minutes on the far side of a 10-hour flight.',
    items: [
      { k: 'Visit Japan Web', v: 'Register immigration and customs details in advance and the site issues a single QR code. Haneda, Narita and Kansai now run joint kiosks, so one scan clears both desks instead of queueing twice. Complete it at least 6 hours before landing.' },
      { k: 'It is not mandatory', v: 'Paper forms still exist and nobody is penalised for using them. It is purely a time saving — but it is a large one, on the day you will least want to queue.' },
      { k: 'Passport validity', v: 'Must be valid for the stay. US citizens get 90 days visa-free for tourism.' },
      { k: 'Onward ticket', v: 'Have the departure booking reachable offline. Open-jaw itineraries occasionally get a question at the desk.' },
      { k: 'Addresses in Japanese', v: 'Save each accommodation address in Japanese script on both phones. Taxi drivers, police boxes and the immigration form all want it, and English transliteration is not always enough.' },
    ],
  },
  {
    id: 'transport',
    title: 'Getting around',
    jp: '交通',
    lead: 'Three intercity moves and a lot of local trains. None of it needs a rail pass.',
    items: [
      { k: 'IC card first', v: 'Add a Suica or PASMO to Apple Wallet before you leave and top it up with a card. It works on almost every train, subway and bus in all three cities, plus convenience stores and lockers. No ticket machines, no queues.' },
      { k: '⚠️ A Japan Rail Pass is not worth it here', v: 'The 7-day pass costs roughly ¥50,000. This itinerary uses one Shinkansen leg (Odawara→Kyoto, about ¥11,000) plus the Haruka to Kansai (about ¥3,000). Point-to-point tickets are far cheaper. Passes pay off on itineraries that double back; this one deliberately does not.' },
      { k: 'Tokyo → Hakone', v: 'Odakyu Romancecar from Shinjuku to Hakone-Yumoto, about 85 minutes, all seats reserved. Book ahead and take the front row if it is free — the observation seats sit ahead of the driver.' },
      { k: 'Hakone → Kyoto', v: 'Hakone-Yumoto to Odawara on the Tozan line, then Shinkansen to Kyoto. About 2h15 total. Sit on the right-hand side leaving Odawara (seats marked E) for Mount Fuji.' },
      { k: 'Kyoto → Kansai airport', v: 'The Haruka limited express runs direct in about 80 minutes. Allow three hours at KIX for an international departure.' },
      { k: 'Luggage forwarding (takkyūbin)', v: 'Roughly ¥2,000–3,000 per bag, Tokyo to Kyoto, arriving the following afternoon. Hand the bags to your accommodation the morning you leave Tokyo. This is what makes the Hakone leg pleasant instead of an ordeal — nobody wants a large suitcase on a mountain switchback railway.' },
      { k: 'Kyoto runs on buses', v: 'Kyoto is the one city where the subway does not go where you want. Buses do, they are slow in traffic, and they get full. Build in more time than the map suggests, especially for Kinkaku-ji and Arashiyama.' },
    ],
  },
  {
    id: 'money',
    title: 'Money',
    jp: 'お金',
    lead: 'More card-friendly every year, still stubbornly cash-shaped in the places you want to go.',
    items: [
      { k: 'Carry cash', v: 'Small restaurants, temple admissions, shrine offerings, older shops and most Kyoto buses want cash. Budget ¥20,000–30,000 in hand and top up as you go.' },
      { k: '7-Eleven ATMs', v: 'The reliable way to withdraw against a foreign card. They are everywhere, run 24 hours, and have an English interface. Japan Post ATMs also work.' },
      { k: 'Tell your bank', v: 'Set travel notice on every card you are bringing, and bring a second card kept somewhere separate.' },
      { k: 'Tax-free shopping', v: 'Over ¥5,000 in one store on the same day, with your passport, gets the consumption tax removed at the till. Relevant in Akihabara and for knives at Nishiki.' },
      { k: 'No tipping', v: 'Not expected anywhere, and leaving money on a table causes confusion rather than pleasure.' },
    ],
  },
  {
    id: 'connectivity',
    title: 'Phone and data',
    jp: '通信',
    lead: 'You will use maps, translation and ingredient photos constantly. Do not rely on café wifi.',
    items: [
      { k: 'eSIM', v: 'The simplest option on a modern iPhone — buy before you fly, activate on landing, keep your home number for calls. 10–20 GB across twelve days is generous.' },
      { k: 'Offline maps', v: 'Download Tokyo, Hakone, Kyoto and Osaka in Google Maps before you go. Useful in the Hakone mountains and underground.' },
      { k: 'Google Translate offline pack', v: 'Download Japanese. The camera mode reading an ingredient label is one of the most useful things on this trip — but treat it as a hint, never as clearance for the mango or soy question.' },
      { k: 'Battery', v: 'A power bank each. Long days, cold weather and constant maps use will flatten a phone by late afternoon, and the allergy card lives on a phone.' },
    ],
  },
  {
    id: 'emergency',
    title: 'If something goes wrong',
    jp: '緊急時',
    lead: 'Worth reading once before you need it.',
    critical: true,
    items: [
      { k: '119 for ambulance and fire', v: '110 is police. Ambulances are free at the point of use. The phrase is "kyūkyūsha o onegaishimasu" — please send an ambulance.' },
      { k: 'Japan Visitor Hotline', v: 'Run by the tourism agency, 24 hours, in English — medical guidance, interpretation and general emergencies.' },
      { k: 'Know the nearest hospital for each base', v: 'Write down one English-capable hospital for Tokyo, Hakone and Kyoto before you go, with the address in Japanese. Hakone is rural and this matters most there.' },
      { k: 'Travel insurance that covers anaphylaxis', v: 'Check the policy explicitly covers allergic reaction and emergency treatment, and carry the policy number offline.' },
      { k: 'Pharmacies', v: 'A pharmacy is 薬局 (yakkyoku). Larger cities have late-opening ones; Hakone does not. Take what you need with you.' },
      { k: 'The card is the plan', v: 'Printed copies in both bags, photographed on both phones. In an emergency, handing over paper beats explaining.' },
    ],
  },
  {
    id: 'etiquette',
    title: 'Things worth knowing',
    jp: '作法',
    lead: 'Small rules, easy to follow, and noticeable when broken.',
    items: [
      { k: 'Onsen: wash first, no swimwear', v: 'You shower and rinse completely before entering the water. The bath is for soaking, not cleaning. The small towel never goes in the water — it sits on your head or the side.' },
      { k: 'Tattoos', v: 'Many public baths still refuse visible tattoos. This is a specific reason the plan books a villa with a private bath: yours, no policy to negotiate.' },
      { k: 'Shoes off', v: 'In homes, ryokan, many temples and some restaurants. Wear shoes you can slip off, and socks without holes.' },
      { k: 'Quiet on trains', v: 'Phone calls are not made on trains. Keep conversation low. This is the one rule visitors break most.' },
      { k: 'Do not eat while walking', v: 'Eat where you bought it, or wait. Nishiki Market has designated eating spots for exactly this reason.' },
      { k: 'Photograph places, not people', v: 'Especially in Gion, where photography on the private lanes is banned and enforced with fines. Geiko are commuting to work.' },
    ],
  },
];

/**
 * The route, as a schematic rather than a geography.
 *
 * A tile map is impossible under the artifact's CSP and would be the wrong
 * answer anyway: what matters when planning is what connects to what and how
 * long it takes, which is a transit diagram, not a coastline.
 * `x`/`y` are percentages of the drawing area.
 */
window.ROUTEMAP = {
  stops: [
    { id: 'hnd', label: 'Tokyo', jp: '東京', sub: 'Arrive Haneda or Narita', meta: '4 nights · Days 1–4', kind: 'base', day: 1 },
    { leg: 'Odakyu Romancecar from Shinjuku', time: '85 min' },
    { id: 'hak', label: 'Hakone', jp: '箱根', sub: 'Private-onsen villa', meta: '2 nights · Days 5–6', kind: 'base', day: 5 },
    { leg: 'Tozan line to Odawara, then Shinkansen', time: '2h 15', kind: 'main' },
    {
      id: 'kyo', label: 'Kyoto', jp: '京都', sub: 'Central apartment', meta: '5 nights · Days 7–11', kind: 'base', day: 7,
      branches: [
        { id: 'uji', label: 'Uji', jp: '宇治', sub: 'Nintendo Museum + Byōdō-in', meta: 'Day 9', time: '35 min', day: 9 },
        { id: 'osa', label: 'Osaka', jp: '大阪', sub: 'Den Den Town', meta: 'Day 11, optional', time: '60 min', day: 11 },
        { id: 'nar', label: 'Nara', jp: '奈良', sub: 'Tōdai-ji and the deer', meta: 'Optional add', time: '45 min', day: 10 },
      ],
    },
    { leg: 'Haruka limited express', time: '80 min' },
    { id: 'kix', label: 'Kansai', jp: '関西', sub: 'KIX — fly home', meta: 'Day 12', kind: 'exit', day: 12 },
  ],
  note: 'Open-jaw: in through Tokyo, out through Kansai. No leg is travelled twice — which is exactly why a rail pass does not pay here.',
};
