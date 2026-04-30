import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryPill } from "@/components/category-pill";
import { CrtScreen } from "@/components/crt-screen";
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
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-8">
      <CrtScreen modelLabel={`LOAD "${post.slug.toUpperCase()}",D1`}>
        <article className="font-mono">
          <Link
            href="/blog"
            className="font-display text-base uppercase tracking-wider text-phosphor-soft hover:text-phosphor"
          >
            ← BACK TO CATALOG
          </Link>

          <header className="mt-6 mb-8 border-b border-dashed border-phosphor-dim pb-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] opacity-70">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="mx-2">·</span>
              <span>FILE: {post.slug}.MDX</span>
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight tracking-wide sm:text-5xl">
              {post.title.toUpperCase()}
            </h1>
            {post.description && (
              <p className="mt-3 text-base opacity-90">{post.description}</p>
            )}
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              <CategoryPill category={post.category} />
              {post.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          </header>

          <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:tracking-wide prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:font-mono prose-p:leading-relaxed prose-li:font-mono prose-strong:text-phosphor prose-pre:bg-black/40 prose-pre:p-0 prose-code:before:hidden prose-code:after:hidden">
            <MDXContent code={post.body} />
          </div>

          <p className="mt-12 font-display text-lg opacity-70">
            END OF FILE.
            <span className="cursor-block" />
          </p>
        </article>
      </CrtScreen>
    </div>
  );
}
