# AGENTS.md

## Cursor Cloud specific instructions

This is a Next.js 15 personal blog with MDX content processed by Velite. No databases, no backend APIs, no external services are required.

### Key commands

See `package.json` scripts and `README.md` for full details. Quick reference:

- `npm run dev` — starts dev server on `localhost:3000` (Velite runs in watch mode)
- `npm run build` — production build (Velite + Next.js)
- `npm run lint` — ESLint via `next lint`

### Non-obvious caveats

- Velite generates a `.velite/` directory (gitignored) during the first build or dev start. If `.velite/` is missing after a fresh `npm install`, running `npm run dev` or `npm run build` will create it automatically via the Webpack `beforeCompile` hook in `next.config.mjs`.
- The path alias `#site/content` in `tsconfig.json` resolves to `.velite/` — TypeScript may report errors if `.velite/` hasn't been generated yet. Run `npm run dev` once to fix.
- Content lives in `content/posts/*.mdx`. Changes to MDX files are picked up automatically in dev mode without restarting the server.
- The Velite webpack cache warning (`Parsing of ... for build dependencies failed`) is benign and can be ignored.
