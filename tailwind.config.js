/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,astro}"],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(0, 150, 255, 0.25)",
          "0 0px 10px rgba(0, 150, 255, 0.2)",
        ],
      },
      animation: {
        fadeDown: "fadeDown 1s ease-in-out",
        fadeUp: "fadeUp 1s ease-in-out",
      },
      keyframes: {
        fadeDown: {
          "0%": { transform: "translateY(-1rem)", opacity: 0 },
          "100%": { transform: "translateY(0rem)", opacity: 1 },
        },
        fadeUp: {
          "0%": { transform: "translateY(1rem)", opacity: 0 },
          "100%": { transform: "translateY(0rem)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
