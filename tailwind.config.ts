import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          beige: "#D2D2C0",
          "beige-warm": "#E7E0D2",
          ink: "#2B2B2B",
          stone: "#555555",
          crt: "#00FF41",
          line: "#a8a398",
          "code-bg": "#1a1f1a",
        },
        apple: {
          green: "#2ECC40",
          yellow: "#FFCC00",
          orange: "#FF9500",
          red: "#FF3B30",
          purple: "#AF52DE",
          blue: "#007AFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "700px",
      },
      boxShadow: {
        crt: "0 0 12px rgba(0, 255, 65, 0.45)",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: "#2B2B2B",
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:last-of-type::after": { content: "none" },
            a: {
              color: "#007AFF",
              "&:hover": { color: "#2ECC40" },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
