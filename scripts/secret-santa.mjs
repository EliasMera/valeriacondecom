/**
 * Draws the Secret Santa and writes src/data/secretSanta.json for the page at /intercambio.
 *
 *   node scripts/secret-santa.mjs Alex Bea Carlos "Tía Lupe"
 *   node scripts/secret-santa.mjs --digits 6 Alex Bea Carlos
 *
 * Everyone lands on one big circle (A → B → C → … → A), so there are no little loops.
 * Each person gets a numeric PIN, printed here once (text them privately). The file only
 * holds each result locked with its PIN, so the names and pairs aren't readable in the
 * site's code, and this script never prints who got whom. Running it again redraws everything
 * with new PINs.
 */
import { webcrypto as crypto, randomInt } from 'node:crypto';
import { writeFileSync } from 'node:fs';

const ITERATIONS = 300_000;

const args = process.argv.slice(2);
let digits = 4;
const di = args.indexOf('--digits');
if (di !== -1) {
  digits = Number(args[di + 1]);
  args.splice(di, 2);
}
const names = args.map((n) => n.trim()).filter(Boolean);

if (names.length < 3) throw new Error('Give at least 3 names.');
if (new Set(names.map((n) => n.toLowerCase())).size !== names.length) throw new Error('Two names are the same; make them different (e.g. "Ana G." and "Ana R.").');
if (!(digits >= 4 && digits <= 8)) throw new Error('--digits must be between 4 and 8.');

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// One circle: everyone gifts the next person in the shuffled order
const circle = shuffle(names);
const pairs = circle.map((name, i) => ({ name, to: circle[(i + 1) % circle.length] }));

// One different PIN per person
const pins = new Set();
while (pins.size < names.length) pins.add(String(randomInt(10 ** digits)).padStart(digits, '0'));
const pinList = [...pins];

const enc = new TextEncoder();
const b64 = (bytes) => Buffer.from(bytes).toString('base64');
const salt = crypto.getRandomValues(new Uint8Array(16));

async function keyFor(pin) {
  const base = await crypto.subtle.importKey('raw', enc.encode(pin), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: ITERATIONS }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
}

const entries = [];
for (const [i, pair] of pairs.entries()) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, await keyFor(pinList[i]), enc.encode(JSON.stringify(pair)));
  entries.push({ iv: b64(iv), data: b64(new Uint8Array(data)) });
}

const out = new URL('../src/data/secretSanta.json', import.meta.url);
// Shuffled again so the order in the file says nothing about the circle
writeFileSync(out, JSON.stringify({ digits, iterations: ITERATIONS, salt: b64(salt), entries: shuffle(entries) }, null, 2) + '\n');

console.log(`\nSecret Santa drawn for ${names.length} people. Text each person their PIN:\n`);
const width = Math.max(...names.map((n) => n.length));
for (const name of names) console.log(`  ${name.padEnd(width)}   ${pinList[pairs.findIndex((p) => p.name === name)]}`);
console.log('\nSaved to src/data/secretSanta.json. These PINs are not saved anywhere, so keep this list.\n');
