import type { Metadata } from "next";
import { CrtScreen } from "@/components/crt-screen";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Every post, sorted newest first.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-8">
      <CrtScreen modelLabel="DISK ][ · CATALOG · D1">
        <div className="space-y-5 font-display text-xl sm:text-2xl">
          <p className="prompt opacity-90">CATALOG</p>
          <h1 className="font-display text-4xl tracking-wide sm:text-5xl">
            DISK CATALOG
            <span className="cursor-block" />
          </h1>
          <p className="opacity-85">
            {posts.length} FILE{posts.length === 1 ? "" : "S"} · NEWEST FIRST
          </p>

          <hr className="crt-hr" />

          <div className="space-y-2">
            {posts.length === 0 ? (
              <div className="border border-dashed border-phosphor-dim/70 px-4 py-10 text-center">
                <p className="font-display text-2xl">DISK IS EMPTY.</p>
                <p className="mt-2 text-base opacity-75">
                  ?FILE NOT FOUND ERROR
                </p>
                <p className="mt-1 text-base opacity-60">
                  INSERT FLOPPY AND PRESS RETURN.
                </p>
              </div>
            ) : (
              posts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))
            )}
          </div>
        </div>
      </CrtScreen>
    </div>
  );
}
