import type { Text } from '@/i18n';

/**
 * The map at the top of /travel: every country I've been to, shown in this order under the map.
 *
 * Write each country's name in English ("Japan", "United Kingdom"). If a name isn't
 * recognized, the build stops and suggests the closest match.
 * Tiny countries (Singapore, Malta, Hong Kong…) get a dot so they're visible on the map.
 */
export const countriesText = {
  eyebrow: 'Travel' as Text,
  title: 'Been' as Text,
  accent: 'there' as Text,
  /** {n} is replaced by the number of countries */
  lead: '{n} countries and counting.' as Text,
  /** Heading above the travel guides (src/content/guides/) */
  guides: 'Guides' as Text,
};

export const countries: string[] = [
  'Mexico',
  'United States',
  'Canada',
  'Costa Rica',
  'Honduras',
  'Chile',
  'Iceland',
  'England',
  'Belgium',
  'Netherlands',
  'France',
  'Spain',
  'Germany',
  'Switzerland',
  'Italy',
  'Malta',
  'Czech Republic',
  'Japan',
  'South Korea',
  'Hong Kong',
  'Taiwan',
  'Vietnam',
  'Singapore',
];
