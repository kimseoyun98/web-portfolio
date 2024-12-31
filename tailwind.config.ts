import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
import safeArea from "tailwindcss-safe-area";
import tailwindAnimate from "tailwindcss-animate";
import tailwindScrollbarHide from "tailwind-scrollbar-hide";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: "#ffffff",
          200: "#f7f7f7",
          300: "#eff2f6",
          400: "#d9dfe9",
          500: "#a0abbd",
          600: "#5c6779",
          700: "#4f5a6e",
          800: "#030b1a",
        },
      },
      fontSize: {
        sm: "0.875rem",
        md: "1rem", // base
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.375rem",
        "3xl": "1.5rem",
        "4xl": "1.75rem",
        "5xl": "1.875rem",
        "6xl": "2.125rem",
        "7xl": "2.25rem",
        "8xl": "3.125rem",
      },
      boxShadow: {
        "short-default": "0px 5px 12px 0px rgba(8,15,52,0.05)",
        "short-hover": "0px 18px 24px 0px rgba(8,15,52,0.08)",
        long: "0px 14px 42px 0px rgba(8,15,52,0.06)",
      },
    },
  },
  plugins: [safeArea, tailwindAnimate, tailwindScrollbarHide, nextui()],
};
export default config;
