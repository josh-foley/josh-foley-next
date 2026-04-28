import { defineConfig, defineCollection, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

// Posts live in /content/posts/*.mdx. Each frontmatter must declare the
// fields below; velite enforces this schema at build time and generates
// a fully typed JSON index in `.velite/`.
const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120),
      date: s.isodate(),
      description: s.string().max(280),
      tags: s.array(s.string()).default([]),
      category: s.string(),
      draft: s.boolean().default(false),
      // s.path() resolves to "posts/<filename>"; we strip the prefix below.
      slug: s.path(),
      // s.mdx() compiles the body to a function string we evaluate at runtime.
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.replace(/^posts\//, ""),
      permalink: `/blog/${data.slug.replace(/^posts\//, "")}`,
    })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: true,
        },
      ],
    ],
  },
});
