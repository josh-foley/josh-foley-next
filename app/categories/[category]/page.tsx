import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <p className="font-mono text-xs uppercase tracking-wide text-retro-stone">
          Category
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-retro-ink">
          {category}
        </h1>
        <p className="mt-2 text-retro-stone">
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
