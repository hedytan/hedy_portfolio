import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F4F2ED",
        ink: "#171512",
        soft: "#8C7A63",
        faint: "#E2DED3",
        panel: "#EEEAE0",
        amber: "#A87A3D",
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
