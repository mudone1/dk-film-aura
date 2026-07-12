import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          black: "#0B0908",
          charcoal: "#171310",
          card: "#1D1712",
          gold: "#C9A24C",
          goldLight: "#E8D5A3",
          cream: "#F3EDE1",
          muted: "#A79C8C",
        },
      },
      fontFamily: {
        display: ["var(--font-bodoni)", "serif"],
        script: ["var(--font-script)", "cursive"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backgroundImage: {
        "gold-fade":
          "linear-gradient(180deg, rgba(201,162,76,0) 0%, rgba(201,162,76,0.08) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
