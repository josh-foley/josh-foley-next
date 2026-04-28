import type { Metadata } from "next";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Every post, sorted newest first.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Blog
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {posts.length} {posts.length === 1 ? "post" : "posts"}, newest first.
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
