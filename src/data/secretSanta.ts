/**
 * Intercambio (Secret Santa): the page at /intercambio. Spanish only, not in the menu,
 * hidden from search engines.
 *
 * Who gifts whom lives in secretSanta.json, which `node scripts/secret-santa.mjs <names…>` writes.
 * The texts below are what the page says around it.
 */
export const secretSantaText = {
  title: 'Intercambio Condes',
  intro: 'Ingresa tu clave (te la mandó Valeria!)',
  /** Shown as "Hola Ana!" */
  greeting: 'Hola',
  youGift: 'Te toca regalarle a:',
  label: 'Tu clave',
  checking: 'Revisando la lista…',
  wrong: 'Mmm, esa clave no está en la lista. Revisa tu mensaje e intenta otra vez.',
  shh: 'Shh. Es secreto.',
  hide: 'Volver a envolver',
  noscript: 'Esta página necesita JavaScript para abrir tu regalo.',
  /** The card at the bottom, shown to everyone once their present is open. `pink` is the part of `question` in pink. */
  wishList: { label: 'Psst!', question: 'Te tocó Valeria?', pink: 'Valeria', link: 'Checa su wish list', href: '/es/presents' },
};
