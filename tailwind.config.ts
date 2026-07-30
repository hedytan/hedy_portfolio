import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        ink: "#F2F1ED",
        soft: "#8A8A85",
        faint: "#242424",
        panel: "#131313",
        amber: "#C9A25E",
        blue: "#2C3AE0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: { content: "1240px" },
    },
  },
  plugins: [],
};
export default config;
