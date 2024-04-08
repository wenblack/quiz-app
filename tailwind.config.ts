import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'gray': {
        100: "#D9D9D9",
        200: "#565E6D",
        300: "#252C3A",
        400: "#1D2330",
        500: "#181D28",
        600: "#161A24"
      },
      'green': {
        "light": '#ABF770',
        "dark": '#5CAD1D'
      },
      'red': {
        "light": '#F77070',
        "dark": '#AB3030'
      }
    },
    fontSize: {
      h1: '24px',
      h2: '16px',
      score: '20px',
      questions: '12px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
  },
  plugins: [],
};
export default config;
