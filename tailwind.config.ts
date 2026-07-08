import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "isia-teal": "#3ee6c4",
        "isia-navy": "#0a1128",
        "isia-navy-light": "#101a3d",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(-18deg)" },
          "30%": { transform: "rotate(14deg)" },
          "45%": { transform: "rotate(-12deg)" },
          "60%": { transform: "rotate(8deg)" },
          "75%": { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 90%, 100%": { opacity: "1" },
          "95%": { opacity: "0.2" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        wave: "wave 2.2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        blink: "blink 4s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
