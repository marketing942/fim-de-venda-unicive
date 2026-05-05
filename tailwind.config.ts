import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        unicive: {
          50: "#ecfdf5",
          100: "#d1f5e6",
          200: "#a7e5cb",
          300: "#6ec9a7",
          400: "#3fa97f",
          500: "#1b8c5f",
          600: "#0d6b50",
          700: "#0a5740",
          800: "#084632",
          900: "#053527",
        },
        accent: {
          50: "#fff7e6",
          100: "#ffeac2",
          200: "#fcd58c",
          300: "#f8c062",
          400: "#f5b13f",
          500: "#f4a423",
          600: "#d88a1a",
          700: "#b16b13",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)",
        ring: "0 0 0 6px rgba(13, 107, 80, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
