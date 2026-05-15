import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryPill } from "@/components/category-pill";
import { MDXContent } from "@/components/mdx-content";
import { TagPill } from "@/components/tag-pill";
import { formatDate } from "@/lib/format";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

// Statically generate every post page at build time.
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-prose px-6 py-16">
      <Link
        href="/blog"
        className="mb-8 inline-block font-mono text-xs text-retro-stone transition hover:text-apple-blue dark:text-[#8a9a8a] dark:hover:text-retro-crt"
      >
        ← Back to blog
      </Link>

      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 font-mono text-xs text-retro-stone dark:text-[#8a9a8a]">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-retro-ink dark:text-retro-beige-warm">
          {post.title}
        </h1>
        <p className="mt-3 text-retro-stone dark:text-[#9aaa9a]">
          {post.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <CategoryPill category={post.category} />
          {post.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      </header>

      <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:tracking-tight prose-headings:text-retro-ink prose-p:text-retro-stone prose-li:text-retro-stone prose-strong:text-retro-ink prose-pre:bg-retro-code-bg prose-pre:p-0 prose-code:before:hidden prose-code:after:hidden dark:prose-headings:text-retro-beige-warm dark:prose-p:text-[#b8c4b8] dark:prose-li:text-[#b8c4b8] dark:prose-strong:text-retro-beige-warm">
        <MDXContent code={post.body} />
      </div>
    </article>
  );
}
