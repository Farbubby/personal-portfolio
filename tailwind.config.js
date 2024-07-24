/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,astro}",
    "./components/**/*.{ts,tsx,astro}",
    "./app/**/*.{ts,tsx,astro}",
    "./src/**/*.{ts,tsx,astro}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(0, 150, 255, 0.25)",
          "0 0px 10px rgba(0, 150, 255, 0.2)",
        ],
      },
      fontFamily: {
        happyMonkey: ["Happy Monkey", "system-ui"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeDown: {
          "0%": { transform: "translateY(-2rem)", opacity: 0 },
          "100%": { transform: "translateY(0rem)", opacity: 1 },
        },
        fadeUp: {
          "0%": { transform: "translateY(2rem)", opacity: 0 },
          "100%": { transform: "translateY(0rem)", opacity: 1 },
        },
        fadeLeft: {
          "0%": { transform: "translateX(-2rem)", opacity: 0 },
          "100%": { transform: "translateX(0rem)", opacity: 1 },
        },
        fadeRight: {
          "0%": { transform: "translateX(2rem)", opacity: 0 },
          "100%": { transform: "translateX(0rem)", opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeDown: "fadeDown 1s ease-in-out",
        fadeUp: "fadeUp 1s ease-in-out",
        fadeLeft: "fadeLeft 1s ease-in-out",
        fadeRight: "fadeRight 1s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
