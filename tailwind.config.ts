import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F0DEBD",     // Pantone 12-0812 TCX — Alabaster Gleam (base)
        ink: "#1E1618",
        soft: "#756D47",   // Pantone 18-0622 TCX — Olive Drab (body text)
        faint: "#E1CFA0",
        panel: "#E9D7AE",
        amber: "#674550",  // Pantone 18-1411 TCX — Plum Wine (accent)
        blue: "#4A2F38",   // deeper Plum Wine, for hover/interactive states
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        hand: ["var(--font-hand)", "cursive"],
        child: ["var(--font-child)", "cursive"],
      },
      maxWidth: { content: "1240px" },
    },
  },
  plugins: [],
};
export default config;
