import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: "https://vntotxt.com",
  integrations: [tailwind({ applyBaseStyles: false }),
  partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }),],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    prefixDefaultLocale: true,
    redirectToDefaultLocale: true,
  },
});
