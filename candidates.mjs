/** Print licence-clean Commons candidates for a query, so a human picks the photo. */
import { execFileSync } from 'node:child_process';

const UA = 'GoingTraveling/1.0 (+https://github.com/smartDisruptions/going-traveling)';
const OK = /^(cc0|cc[- ]by([- ]sa)?([- ][0-9.]+)?|public domain|pd)/i;

const q = process.argv.slice(2).join(' ');
const url =
  'https://commons.wikimedia.org/w/api.php?' +
  new URLSearchParams({
    format: 'json',
    action: 'query',
    generator: 'search',
    gsrsearch: `filetype:bitmap ${q}`,
    gsrnamespace: '6',
    gsrlimit: '25',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata|size',
  });

const r = JSON.parse(
  execFileSync('curl', ['-s', '--max-time', '30', '-H', `User-Agent: ${UA}`, url], {
    maxBuffer: 32 * 1024 * 1024,
  }).toString()
);

for (const p of Object.values(r?.query?.pages ?? {})) {
  const i = p.imageinfo?.[0];
  if (!i) continue;
  const lic = i.extmetadata?.LicenseShortName?.value ?? '';
  if (!OK.test(lic)) continue;
  const ratio = i.width && i.height ? (i.width / i.height).toFixed(2) : '?';
  if (ratio !== '?' && Number(ratio) < 1.15) continue;
  console.log(`${ratio}  ${lic.padEnd(16)}  ${p.title.replace(/^File:/, '')}`);
}
