import { getCollection, type CollectionEntry } from 'astro:content';

export type Guide = CollectionEntry<'guides'>;

/** All guides, most recently updated first. Drafts only show while running `npm run dev`. */
export async function getGuides(): Promise<Guide[]> {
  const guides = await getCollection('guides', ({ data }) => import.meta.env.DEV || !data.draft);
  const changed = (g: Guide) => (g.data.updated ?? g.data.published).getTime();
  return guides.sort((a, b) => changed(b) - changed(a));
}

/** One page per guide, at /travel/<folder name>. */
export async function guidePaths() {
  const guides = await getGuides();
  return guides.map((guide) => ({ params: { guide: guide.id }, props: { guide } }));
}

export function formatGuideDate(date: Date) {
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}
