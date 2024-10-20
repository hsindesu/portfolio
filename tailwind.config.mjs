/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  /** @type {import('tailwindcss').Config} */
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      fontFamily: {
        display: "Oswald, ui-serif",
      },
    },
    content: [
      "./pages/**/*.{astro,html,js}",
      "./components/**/*.{astro,html,js}",
    ],
  },
  plugins: [require("@tailwindcss/typography")],
};
