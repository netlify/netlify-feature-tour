import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    preact(),
    sitemap({
      canonicalURL: 'https://feature-tour.netlify.app'
    })
  ],
});
