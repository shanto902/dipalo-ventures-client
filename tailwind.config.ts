import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main_thesis: "url('../public/assets/main-thesis.jpeg')",
        footer_1: "url('../public/assets/footer-1.png')",
        footer_2: "url('../public/assets/footer-2.jpeg')",
        methodologyBG: "url('../public/assets/methodologyBG.jpeg')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      dipalo: "#FFB012",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
