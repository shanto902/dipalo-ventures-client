import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main_bg: "url('../public/assets/main-bg.jpeg')",
        main_thesis: "url('../public/assets/main-thesis.jpeg')",
        footer_1: "url('../public/assets/footer-1.png')",
        footer_2: "url('../public/assets/footer-2.jpeg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
