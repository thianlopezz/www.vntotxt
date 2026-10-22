// Tailwind 3 runs through Vite's PostCSS support; @astrojs/tailwind doesn't support Astro 6+.
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
