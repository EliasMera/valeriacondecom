// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://valeriaconde.com',
  integrations: [
    sitemap({
      // Guides are only written in English, so their /es copies stay out of the sitemap
      filter: (page) => !page.includes('/intercambio') && !/\/es\/travel\/./.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
