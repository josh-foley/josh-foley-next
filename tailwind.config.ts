import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "ui-monospace", "monospace"],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      colors: {
        phosphor: {
          DEFAULT: "var(--phosphor)",
          soft: "var(--phosphor-soft)",
          dim: "var(--phosphor-dim)",
          bg: "var(--phosphor-bg)",
          deep: "var(--phosphor-bg-deep)",
        },
        case: {
          DEFAULT: "var(--case)",
          light: "var(--case-light)",
          dark: "var(--case-dark)",
          deeper: "var(--case-deeper)",
          shadow: "var(--case-shadow)",
        },
        apple: {
          green: "var(--apple-green)",
          yellow: "var(--apple-yellow)",
          orange: "var(--apple-orange)",
          red: "var(--apple-red)",
          purple: "var(--apple-purple)",
          blue: "var(--apple-blue)",
        },
      },
      maxWidth: {
        prose: "70ch",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--phosphor)",
            "--tw-prose-headings": "var(--phosphor)",
            "--tw-prose-lead": "var(--phosphor-soft)",
            "--tw-prose-links": "var(--phosphor)",
            "--tw-prose-bold": "var(--phosphor)",
            "--tw-prose-counters": "var(--phosphor-dim)",
            "--tw-prose-bullets": "var(--phosphor-dim)",
            "--tw-prose-hr": "var(--phosphor-dim)",
            "--tw-prose-quotes": "var(--phosphor-soft)",
            "--tw-prose-quote-borders": "var(--phosphor-dim)",
            "--tw-prose-captions": "var(--phosphor-dim)",
            "--tw-prose-code": "var(--phosphor)",
            "--tw-prose-pre-code": "var(--phosphor)",
            "--tw-prose-pre-bg": "rgba(0,0,0,0.4)",
            "--tw-prose-th-borders": "var(--phosphor-dim)",
            "--tw-prose-td-borders": "var(--phosphor-dim)",
            fontFamily: "var(--font-mono)",
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:last-of-type::after": { content: "none" },
            h1: { fontFamily: "var(--font-display)", letterSpacing: "0.02em" },
            h2: { fontFamily: "var(--font-display)", letterSpacing: "0.02em" },
            h3: { fontFamily: "var(--font-display)", letterSpacing: "0.02em" },
            h4: { fontFamily: "var(--font-display)", letterSpacing: "0.02em" },
            blockquote: {
              fontStyle: "normal",
              borderLeftStyle: "dashed",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
