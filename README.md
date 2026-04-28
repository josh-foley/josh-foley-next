# josh-foley-next

A personal blog built with Next.js 15 (App Router), MDX, Velite, Tailwind
CSS, and TypeScript. Designed to be deployed to Vercel as static output.

## Stack

- **Next.js 15** — App Router, React Server Components, static generation
- **Velite** — type-safe MDX content layer (frontmatter validated at build)
- **Tailwind CSS** — with `@tailwindcss/typography` for prose
- **next-themes** — light/dark toggle (defaults to dark)
- **rehype-pretty-code** — syntax highlighting via Shiki, `github-dark` theme
- **remark-gfm** — GitHub-flavoured Markdown (tables, strikethrough, etc.)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server runs
Velite in watch mode, so changes to anything under `content/` rebuild the
content index automatically.

```bash
npm run build   # production build (runs Velite + Next.js build)
npm run start   # serve the production build locally
npm run lint    # ESLint
```

## Adding a post

1. Create a new MDX file at `content/posts/<your-slug>.mdx`. The filename
   becomes the URL slug (`/blog/<your-slug>`).
2. Add frontmatter at the top of the file:

   ```mdx
   ---
   title: My great post
   date: 2026-04-28
   description: A one-line summary used on cards and in social previews.
   tags: [typescript, patterns]
   category: Engineering
   draft: false
   ---

   Write your post here. Standard Markdown plus any MDX features.
   ```

   | Field         | Type        | Required | Notes                                  |
   | ------------- | ----------- | -------- | -------------------------------------- |
   | `title`       | string      | yes      | Max 120 chars                          |
   | `date`        | ISO date    | yes      | `YYYY-MM-DD`                           |
   | `description` | string      | yes      | Max 280 chars                          |
   | `tags`        | string[]    | no       | Defaults to `[]`                       |
   | `category`    | string      | yes      | A single category per post             |
   | `draft`       | boolean     | no       | If `true`, hidden from all listings    |

3. Save. The dev server picks up the new file on the next request and
   the build will fail loudly if the frontmatter doesn't match the schema.

### Code blocks

Fenced code blocks use Shiki via `rehype-pretty-code` and render with the
`github-dark` theme:

````mdx
```ts
const greet = (name: string) => `hello, ${name}`;
```
````

Add a title with `{title="..."}` and highlight lines with `{1,3-5}`:

````mdx
```ts {1} title="example.ts"
const greet = (name: string) => `hello, ${name}`;
```
````

## Project layout

```
app/                 # Next.js App Router pages
  blog/              # /blog and /blog/[slug]
  categories/        # /categories and /categories/[category]
  tags/              # /tags and /tags/[tag]
components/          # Header, Footer, PostCard, pills, MDX renderer, theme toggle
content/posts/       # Your MDX posts
lib/                 # Post helpers (sorting, grouping, slug helpers)
.velite/             # Generated content index (gitignored)
velite.config.ts     # Content schema and MDX pipeline
```

## Deployment

The repo is Vercel-ready. Importing it on Vercel and accepting the defaults
will work — `next build` runs Velite as part of the webpack `beforeCompile`
hook, so no separate build step is needed.

For other hosts, build with `npm run build` and serve `.next/` with
`npm run start`, or run `next export` after configuring `output: "export"`
if you want a fully static dump.
