// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site, deployed on Cloudflare Pages.
// Build command: npm run build   Output folder: dist
export default defineConfig({
  site: 'https://covenantlivingprints.com',
  integrations: [sitemap()],
});
