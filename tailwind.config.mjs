import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: [...defaultTheme.fontFamily.sans],
        ubuntu: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      scale: {
          '-100': '-1',
      },
      animation: {
        popup: 'popup 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'fade-in-up': 'fadeInUp 0.8s ease-out both'
      }
    },
  },
  daisyui: {
    // Add your daisy ui themes here
    themes: [
      "night",
      {
        default: {
          primary: "#1C5F5F",
          secondary: "#E0F1DF",
          accent: "#C2FA6B",
          neutral: "#F0F1F0",
          "base-100": "#ffffff",
          info: "#458DE4",
          success: "#7EDE4A",
          warning: "#EDB955",
          error: "#E4332E",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
