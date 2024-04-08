/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    // Add your daisy ui themes here
    themes: [
      "night",
      {
        default: {
          primary: "#1C5F5F",
          secondary: "#C6DCC5",
          accent: "#C2FA6B",
          neutral: "#F0F1F0",
          "base-100": "#ffffff",
          info: "#E0F1DF",
          success: "#00ff00",
          warning: "#ffff00",
          error: "#db2777",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
