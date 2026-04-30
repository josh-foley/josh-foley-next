import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CrtScreen } from "@/components/crt-screen";
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
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-8">
      <CrtScreen modelLabel={`TAG · #${tag.toUpperCase()}`}>
        <div className="space-y-5 font-display text-xl sm:text-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] opacity-70">
            TAG
          </p>
          <h1 className="font-display text-4xl tracking-wide sm:text-5xl">
            #{tag.toUpperCase()}
            <span className="cursor-block" />
          </h1>
          <p className="opacity-85">
            {posts.length} FILE{posts.length === 1 ? "" : "S"}
          </p>

          <hr className="crt-hr" />

          <div className="space-y-2">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </CrtScreen>
    </div>
  );
}
