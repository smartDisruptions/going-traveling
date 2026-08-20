/**
 * Bundle the app into one self-contained file for publishing.
 *
 * A published Artifact runs under a strict CSP that blocks every external
 * request, so nothing may reference a file: the data modules are concatenated
 * inline and every `images/x.jpg` string is rewritten to a data: URI. Images
 * come from dist-images/, re-encoded small, because the whole payload arrives
 * with the document - `loading="lazy"` saves nothing once a picture is part of
 * the HTML.
 *
 * The host wraps the output in its own doctype/head/body, so ours is stripped -
 * and with it the charset declaration. On a page that is half Japanese, a host
 * that guessed Latin-1 would turn every place name into mojibake. So the output
 * is written as pure ASCII and cannot be mis-decoded at all. Markup and script
 * are escaped separately because HTML entities do not decode inside <script>:
 * escaping the file uniformly would put the literal text "&#x2014;" into the
 * page.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const here = (p) => new URL(p, import.meta.url).pathname;
const IMGDIR = here('./dist-images/');

const dataURI = (f) =>
  'data:image/jpeg;base64,' + readFileSync(join(IMGDIR, f)).toString('base64');

const isAscii = (ch) => ch.codePointAt(0) < 0x80;
const u4 = (n) => '\\u' + n.toString(16).padStart(4, '0');

/**
 * Non-ASCII -> HTML numeric entity, by CODE POINT.
 *
 * The plan is full of emoji, which live above the basic plane: a game
 * controller is a single code point (U+1F3AE) and must be written as a single
 * entity. Splitting it into its two surrogates produces two invalid ones.
 * Spreading the string iterates code points, which is exactly what is wanted.
 */
const asEntities = (s) =>
  [...s]
    .map((ch) => (isAscii(ch) ? ch : `&#x${ch.codePointAt(0).toString(16).toUpperCase()};`))
    .join('');

/**
 * Non-ASCII -> JS escape, by CODE UNIT.
 *
 * The opposite rule: \uXXXX carries 16 bits, so that same emoji has to come out
 * as its surrogate pair. Iterating code points and emitting both units of any
 * two-unit character gives that, without depending on \u{...} support.
 */
const asJsEscapes = (s) =>
  [...s]
    .map((ch) =>
      isAscii(ch)
        ? ch
        : ch.length === 2
          ? u4(ch.charCodeAt(0)) + u4(ch.charCodeAt(1))
          : u4(ch.charCodeAt(0))
    )
    .join('');

const html = readFileSync(here('./index.html'), 'utf8');
const style = html.slice(html.indexOf('<style>'), html.indexOf('</style>') + 8);
let body = html.slice(html.indexOf('<body>') + 6, html.indexOf('</body>'));

/**
 * The data modules, taken from index.html itself.
 *
 * This list used to be written out here by hand, which meant the page and the
 * bundle each had their own idea of what the app was made of. Adding
 * data-zones.js and data-plans.js to the page and forgetting them here shipped
 * an artifact where `window.PLANS` did not exist: renderDays() threw on the
 * first day, the script died at that line, and every view that renders after
 * it — destinations, food, lodging, logistics, budget, prep, the credits —
 * stayed empty. The page was fine locally the whole time, because locally the
 * script tags are what load.
 *
 * One source of truth now: whatever index.html loads is what gets bundled, in
 * the order it loads it.
 */
const modules = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]);
if (!modules.length) throw new Error('no <script src> tags found in index.html');
for (const m of modules) {
  if (!existsSync(here('./' + m))) throw new Error(`index.html loads ${m}, which does not exist`);
}
let bundled = modules.map((m) => readFileSync(here('./' + m), 'utf8')).join('\n');

let inlined = 0;
const missing = [];
bundled = bundled.replace(/'images\/([A-Za-z0-9._-]+\.jpg)'/g, (whole, file) => {
  if (!existsSync(join(IMGDIR, file))) { missing.push(file); return whole; }
  inlined++;
  return "'" + dataURI(file) + "'";
});
if (missing.length) throw new Error('no optimised copy for: ' + missing.join(', '));

body = body.replace(/\n?\s*<script src="[^"]+"><\/script>/g, '');

// Split markup from script so each gets the escaping its parser understands.
const sOpen = body.indexOf('<script>');
const sClose = body.indexOf('</script>', sOpen);
if (sOpen < 0 || sClose < 0) throw new Error('could not find the inline script');

const out = [
  '<title>Going Traveling &#x2014; Japan in 12 Days</title>',
  // The host's document shell replaces ours, taking the viewport meta with it.
  // Without one a phone lays the page out at 980px and zooms out, so every
  // mobile breakpoint in this stylesheet stops applying and the whole thing
  // renders as a shrunken desktop page. Browsers honour this tag from the body,
  // so declaring it here costs nothing and removes the dependency.
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
  // Comments are the only non-ASCII left in the CSS, and entities do not decode
  // inside <style> either, so flatten them rather than escaping them.
  [...style].map((ch) => (isAscii(ch) ? ch : '-')).join(''),
  asEntities(body.slice(0, sOpen)).trim(),
  '<script>',
  asJsEscapes(bundled),
  asJsEscapes(body.slice(sOpen + 8, sClose)),
  '</script>',
  asEntities(body.slice(sClose + 9)).trim(),
].join('\n');

const stray = [...out].filter((ch) => !isAscii(ch));
if (stray.length) throw new Error('output is not pure ASCII: ' + [...new Set(stray)].join(''));

/**
 * Every global the modules define must survive into the bundle.
 *
 * The list above is now derived, so this cannot fail the way it did — but a
 * missing global is silent and catastrophic (the app throws on the first read
 * and stops rendering mid-page), so it is worth proving rather than assuming.
 */
const expected = new Set();
for (const m of modules)
  for (const g of readFileSync(here('./' + m), 'utf8').matchAll(/^window\.([A-Z_][A-Z0-9_]*)\s*=/gm))
    expected.add(g[1]);
const absent = [...expected].filter((g) => !out.includes(`window.${g}=`) && !out.includes(`window.${g} =`));
if (absent.length) throw new Error('globals defined by a module but absent from the bundle: ' + absent.join(', '));

/* And every global the page READS must be one something defines. */
const pageJs = body.slice(sOpen, sClose);
const read = new Set([...pageJs.matchAll(/window\.([A-Z_][A-Z0-9_]*)/g)].map((m) => m[1]));
const undefinedGlobals = [...read].filter((g) => !expected.has(g));
if (undefinedGlobals.length)
  throw new Error('the page reads globals nothing defines: ' + undefinedGlobals.join(', '));

writeFileSync(here('./artifact.html'), out);
console.log(
  `artifact.html - ${(Buffer.byteLength(out) / 1024 / 1024).toFixed(2)} MB, ` +
  `${inlined} images inlined, pure ASCII`
);
