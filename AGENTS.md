# AGENTS.md

## Cursor Cloud specific instructions

This is a Next.js 15 personal blog with MDX content powered by Velite. No external services, databases, or API keys are required.

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 3000) |
| Lint | `npm run lint` |
| Build | `npm run build` |
| Serve prod build | `npm run start` |

### Key notes

- **Node.js ≥ 18** is required (project uses Next.js 15 + React 19). The VM uses nvm with Node 20 installed at `$HOME/.nvm`.
- Source nvm before running any node/npm command: `export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"`
- Velite (MDX content layer) runs inside the Next.js webpack pipeline — no separate content build process is needed. Both `npm run dev` and `npm run build` trigger Velite automatically.
- The `.velite/` directory is gitignored and regenerated on every dev/build run.
- Webpack cache warnings about `velite/dist/chunk-CA5YBCFK.js` are harmless and expected.
- Content lives in `content/posts/*.mdx`. Adding or editing MDX files is picked up automatically by the dev server.
- There are no environment variables, secrets, or `.env` files needed.
- The lint command (`npm run lint`) emits a deprecation notice about `next lint` being removed in Next.js 16; this is informational only and does not affect results.
