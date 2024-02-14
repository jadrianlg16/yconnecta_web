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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#9ECCE6", 
        secondary: {
          light: "#4AA794", 
          dark: "#3e8e7e", 
        },
        morado: "#574F9C",
        rojo: "#D9526A",
        aqua: "#4AA794", 
        amarillo: "#EEA848",
        verde: "#B5CF62",
        azul: "#57ACE2"
      }
    },
  },
  plugins: [],
};

export default config;
