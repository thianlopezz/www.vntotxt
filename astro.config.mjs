import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://vntotxt.com",
  integrations: [tailwind({
    applyBaseStyles: false
  }), partytown({
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
    define: {
      'process.env': process.env
    }
  }
});