import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CrtScreen } from "@/components/crt-screen";
import { PostCard } from "@/components/post-card";
import {
  findCategory,
  getAllCategories,
  getPostsByCategory,
  toSlug,
} from "@/lib/posts";

export function generateStaticParams() {
  return getAllCategories().map(({ category }) => ({
    category: toSlug(category),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = findCategory(slug);
  if (!category) return {};
  return {
    title: category,
    description: `Posts in ${category}.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = findCategory(slug);
  if (!category) notFound();

  const posts = getPostsByCategory(category);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-8">
      <CrtScreen modelLabel={`CATEGORY · ${category.toUpperCase()}`}>
        <div className="space-y-5 font-display text-xl sm:text-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] opacity-70">
            CATEGORY
          </p>
          <h1 className="font-display text-4xl tracking-wide sm:text-5xl">
            ▎ {category.toUpperCase()}
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
