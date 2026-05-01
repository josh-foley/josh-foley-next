import type { Metadata } from "next";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Posts on software, family, fitness, music, and other things I'm thinking about.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-retro-ink dark:text-retro-beige-warm">
          Blog
        </h1>
        <p className="mt-2 text-retro-stone dark:text-[#9aaa9a]">
          {posts.length === 0
            ? "No posts yet."
            : `${posts.length} ${posts.length === 1 ? "post" : "posts"}, newest first.`}
        </p>
      </header>

      {posts.length > 0 && (
        <div className="flex flex-col gap-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
