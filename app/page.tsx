import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const recent = getAllPosts().slice(0, 5);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <section className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight text-retro-ink">
          Hi, I&apos;m{" "}
          <span className="font-mono text-retro-crt [text-shadow:0_0_12px_rgba(0,255,65,0.45)]">
            Josh
          </span>
          .
        </h1>
        <p className="mt-4 max-w-prose text-retro-stone">
          I build software for a living and write about it occasionally. This
          is a small corner of the internet for notes on engineering, design,
          and whatever else I&apos;m thinking about.
        </p>
      </section>

      <section>
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-lg font-semibold tracking-tight text-retro-ink">
            Recent posts
          </h2>
          <Link
            href="/blog"
            className="text-sm text-retro-stone transition hover:text-apple-blue"
          >
            View all →
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          {recent.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
