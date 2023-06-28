/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,astro}"],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255, 87, 51, 0.75)",
          "0 0px 10px rgba(255, 87, 51, 0.7)",
        ],
      },
      animation: {
        fade: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": {opacity: 0 },
          "100%": {opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
