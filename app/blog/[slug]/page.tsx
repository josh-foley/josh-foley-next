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
        className="mb-8 inline-block font-mono text-xs text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
      >
        ← Back to blog
      </Link>

      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          {post.title}
        </h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          {post.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <CategoryPill category={post.category} />
          {post.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      </header>

      <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:tracking-tight prose-pre:bg-[#0d1117] prose-pre:p-0 prose-code:before:hidden prose-code:after:hidden">
        <MDXContent code={post.body} />
      </div>
    </article>
  );
}
