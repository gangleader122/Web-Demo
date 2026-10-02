import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        ring: "var(--ring)",
        pine: {
          50:  "#f2f7f4",
          100: "#e1ede6",
          200: "#c4dcce",
          300: "#9ac2ac",
          400: "#6da386",
          500: "#498466",
          600: "#366b51",
          700: "#2b5541",
          800: "#244435",
          900: "#1f392d",
          950: "#0e1f18",
        },
        forest: {
          850: "#12261e",
          900: "#0b1b15",
          950: "#06100c",
        },
        wood: {
          100: "#f4ece0",
          200: "#e8d8c2",
          300: "#d9be9e",
          400: "#c89f78",
          500: "#b88358",
          600: "#aa6f4b",
          700: "#8e573e",
          800: "#744636",
          900: "#603b2f",
        },
        amber: {
          accent:      "#d97736",
          accentHover: "#b85d24",
          gold:        "#d4a373",
        },
        sand: {
          50:  "#faf8f5",
          100: "#f5f0e8",
          200: "#ebe1d2",
          300: "#decbb6",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans:  ["var(--font-outfit)",   "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle:   "0 2px 10px rgba(11, 27, 21, 0.04)",
        card:     "0 10px 30px -5px rgba(11, 27, 21, 0.08), 0 4px 12px rgba(11, 27, 21, 0.04)",
        elevated: "0 20px 40px -10px rgba(11, 27, 21, 0.16), 0 8px 16px rgba(11, 27, 21, 0.06)",
        glow:     "0 0 40px rgba(217, 119, 54, 0.2)",
      },
      animation: {
        "float-slow":    "float 6s ease-in-out infinite",
        "pulse-subtle":  "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
