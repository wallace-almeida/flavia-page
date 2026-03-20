/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006e1c",
        secondary: "#046b5e",
        "primary-container": "#4caf50",
        "secondary-container": "#9defde",
        "surface": "#fafaf5",
        "background": "#fafaf5",
        "on-surface": "#1a1c19",
        "on-surface-variant": "#3f4a3c",
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};