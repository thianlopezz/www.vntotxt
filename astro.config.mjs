import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://vntotxt.com",
  // Astro 7 defaults to JSX whitespace rules, which drop the spaces between text and inline tags.
  compressHTML: true,
  integrations: [partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap(), mdx()],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    prefixDefaultLocale: true,
    redirectToDefaultLocale: true
  },
  vite: {
    build: {
      // Vite 8 targets Safari 16.4+ and rewrites media queries to range syntax; keep Vite 5's targets.
      cssTarget: ["chrome87", "edge88", "firefox78", "safari14"]
    },
    define: {
      'process.env': process.env
    }
  }
});