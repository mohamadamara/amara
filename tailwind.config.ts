import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem"
      },
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        bg: "#030303",
        surface: "#0a0a0a",
        surface2: "#111111",
        surface3: "#161616",
        accent: "#f59e0b",
        "accent-bright": "#fbbf24",
        "accent-soft": "#fcd34d",
        accent2: "#b45309",
        muted: "#9ca3af"
      },
      borderRadius: {
        card: "16px",
        section: "16px"
      },
      fontFamily: {
        sans: ["Inter", "Geist", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600"
      },
      boxShadow: {
        "accent-soft": "0 16px 48px -20px rgba(245,158,11,0.45)",
        "accent-glow": "0 0 0 1px rgba(245,158,11,0.25), 0 12px 36px -16px rgba(245,158,11,0.35)",
        "card-luxe": "0 24px 60px -24px rgba(0,0,0,0.8), 0 0 40px -20px rgba(245,158,11,0.2)"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.4, 0, 0.2, 1)"
      },
      transitionDuration: {
        300: "300ms",
        500: "500ms"
      }
    }
  },
  plugins: []
};

export default config;
