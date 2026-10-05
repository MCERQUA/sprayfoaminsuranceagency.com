import type { Config } from "tailwindcss";

/* ============================================================
   SPRAY FOAM INSURANCE AGENCY — "Industrial Energy" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to vibrant orange (primary) / deep navy
   (secondary) / amber gold (accent).
   clay = vibrant orange · sage = deep navy · gold = amber
   cream = clean white paper · sand = light steel grey
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF9F7",
        sand: "#EEF1F6",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#D4600A",
          dark: "#A84A06",
          light: "#E8821E",
          50: "#FEF3E8",
          100: "#FDE3C6",
          200: "#FAC28E",
          300: "#F5A05A",
          400: "#EE8030",
          500: "#E8821E",
          600: "#D4600A",
          700: "#A84A06",
          800: "#7A3404",
          900: "#4E2002",
        },
        sage: {
          DEFAULT: "#1C3A5F",
          dark: "#112545",
          light: "#2E5A8E",
          50: "#E8EEF6",
          100: "#C8D5E8",
          200: "#8AAACE",
          300: "#4D7DB0",
          400: "#2E5A8E",
          500: "#1C3A5F",
          600: "#112545",
          700: "#091830",
        },
        gold: {
          DEFAULT: "#E8A020",
          dark: "#C07A10",
          light: "#F5C050",
          50: "#FDF5E0",
          100: "#FAE8B8",
          200: "#F5CF78",
          300: "#EEB840",
          400: "#E8A020",
          500: "#C8820C",
          600: "#A06208",
        },
        espresso: "#0F1E33",
        cocoa: "#2A3F5F",
        mocha: "#5A6E8C",
        adobe: "#D8E0EE",
        adobeDark: "#C0CBDE",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FAF9F7 0%, #F2F4F8 40%, #EEF1F6 70%, #FAF9F7 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(212,96,10,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(232,160,32,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #D4600A 0%, #E8821E 100%)",
        "sage-gradient": "linear-gradient(135deg, #A84A06 0%, #D4600A 100%)",
        "gold-gradient": "linear-gradient(135deg, #E8A020 0%, #F5C050 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(168, 74, 6, 0.22), 0 4px 12px -6px rgba(15, 30, 51, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(168, 74, 6, 0.28), 0 10px 30px -10px rgba(15, 30, 51, 0.10)",
        card: "0 2px 8px -2px rgba(15, 30, 51, 0.06), 0 1px 3px -1px rgba(15, 30, 51, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(168, 74, 6, 0.24), 0 8px 20px -8px rgba(15, 30, 51, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(212, 96, 10, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
