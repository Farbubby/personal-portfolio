/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,astro}"],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255, 148, 112, 0.45)",
          "0 0px 65px rgba(255, 148, 112, 0.4)",
        ],
      },
    },
  },
  plugins: [],
};
