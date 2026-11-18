import type { Text } from '@/i18n';

/**
 * Content for the Lists, Photography and Travel pages.
 * A list's `id` is its address on the page (/lists#best-books); homepage cards in
 * src/data/homeLists.ts use it to link to the list. A list with no items yet shows
 * "Under construction". Titles and items can be { en: '…', es: '…' } for the Spanish site.
 */
export type List = { id?: string; title: Text; items: Text[] };

/** Subtitle at the top of the /lists page, and where it links to */
export const listsText = {
  lead: { en: 'Wanna fight me about it?', es: '¿Difieres? Peleemos.' } as Text,
  leadHref: '/contact',
  /** Shown in place of a list that has no items yet */
  empty: { en: 'Under construction', es: 'En construcción' } as Text,
};

export const lists: List[] = [
  {
    id: 'best-books',
    title: 'My favorite books all time',
    items: [
      'Milkman — Anna Burns',
      'Drive Your Plow Over the Bones of the Dead — Olga Tokarczuk',
      'Dogs of Summer — Andrea Abreu',
      'My Brilliant Friend — Elena Ferrante',
      'I Who Have Never Known Men — Jacqueline Harpman',
      'My Husband — Maud Ventura',
    ],
  },
  {
    id: 'best-documentaries',
    title: 'Craziest documentaries ever',
    items: [
      'Beyond Utopia (2023)',
      'Kings of Tupelo (2024)',
      'Untold: Chess Mates (2026)',
      'Maternal Instinct (2026)',
      'You Can See Everything (2026)',
      'A Toxic Love Story (2026)',
      "Death of the Pastor's Wife (2026)",
      'The Florence Cassez Affair (2022)',
      'Unknown Number: The High School Catfish (2022)',
      'Turning Point: 9/11 and the War on Terror (2021)',
      'Gladbeck: The Hostage Crisis (2022)',
      'Take Care of Maya (2023)',
      'Vatican Girl (2022)',
    ],
  },
  {
    id: 'seattle-eats',
    title: 'Best places to eat in Seattle',
    items: ['Ramen DANBO', 'Sonora Carne Asada House', 'Umi Sake House', 'JOEY', 'Earls Kitchen + Bar', "Von's 1000 Spirits", 'Tacos Cuadra'],
  },
  {
    id: 'robbed-of-the-oscar',
    title: 'Films that were robbed of the Oscar',
    items: [
      'Sinners (2025)',
      'The Phoenician Scheme (2025)',
      'Manchester by the Sea (2016)',
      'Mad Max: Fury Road (2015)',
      'Hidden Figures (2016)',
      'Lady Bird (2017)',
      'Dune (2021)',
    ],
  },
  {
    title: { en: 'Best days of the week', es: 'Los mejores días de la semana' },
    items: [
      { en: 'Saturday', es: 'Sábado' },
      { en: 'Friday', es: 'Viernes' },
      { en: 'Wednesday', es: 'Miércoles' },
      { en: 'Thursday', es: 'Jueves' },
      { en: 'Tuesday', es: 'Martes' },
      { en: 'Monday', es: 'Lunes' },
      { en: 'Sunday', es: 'Domingo' },
    ],
  },
  { title: 'My bucket list', items: [] },
];

/**
 * Placeholder swatches stand in for photos. To use a real photo, put it in
 * src/assets/photos/ and set `image` to its filename (e.g. 'lisbon-morning.jpg').
 */
export type Photo = { label: string; location: string; tint: string; size?: 'wide' | 'tall'; image?: string };

export const photos: Photo[] = [
  { label: 'Morning light', location: 'Lisbon', tint: '#e9dccb', size: 'wide' },
  { label: 'Street scene', location: 'Tokyo', tint: '#f3d6dc' },
  { label: 'Market', location: 'Mexico City', tint: '#f4e2b8' },
  { label: 'Waterfront', location: 'Buenos Aires', tint: '#d3e3ee', size: 'tall' },
  { label: 'Park', location: 'Tokyo', tint: '#d5e8d6' },
  { label: 'Architecture', location: 'Lisbon', tint: '#e2d9f1' },
  { label: 'Dusk', location: 'Mexico City', tint: '#f6d3e4', size: 'wide' },
  { label: 'Alley', location: 'Tokyo', tint: '#cfe7e3' },
  { label: 'Tiles', location: 'Lisbon', tint: '#f5ecc0' },
  { label: 'Faces', location: 'Buenos Aires', tint: '#d9dcf3' },
  { label: 'Food', location: 'Tokyo', tint: '#f6dcc4' },
  { label: 'Garden', location: 'Lisbon', tint: '#e1eccb', size: 'wide' },
];

export type Trip = {
  destination: string;
  dates: string;
  description: string;
  photos: { label: string; tint: string; image?: string }[];
};

/** Trips shown on /travel under the map, newest first. The section stays hidden while this is empty. */
export const trips: Trip[] = [];
