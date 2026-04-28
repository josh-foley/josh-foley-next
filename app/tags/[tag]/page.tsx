import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/post-card";
import { findTag, getAllTags, getPostsByTag, toSlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag: toSlug(tag) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag: slug } = await params;
  const tag = findTag(slug);
  if (!tag) return {};
  return {
    title: `#${tag}`,
    description: `Posts tagged with ${tag}.`,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag: slug } = await params;
  const tag = findTag(slug);
  if (!tag) notFound();

  const posts = getPostsByTag(tag);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="font-mono text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Tag
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          #{tag}
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {posts.length} {posts.length === 1 ? "post" : "posts"}.
        </p>
      </header>

      <div className="flex flex-col gap-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
