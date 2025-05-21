import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import pages from '@astrojs/gh-pages';

// https://astro.build/config
export default defineConfig({
  site: 'https://SenalKaranda.github.io',
  base: '/Resume2025/',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    pages(),
  ],
  outDir: './dist',
});
