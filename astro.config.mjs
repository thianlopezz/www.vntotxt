import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://vntotxt.com",
  integrations: [tailwind({ applyBaseStyles: false })],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    redirectToDefaultLocale: true,
  },
});
