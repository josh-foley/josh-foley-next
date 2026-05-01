import type { Metadata } from "next";
import Link from "next/link";
import { getAllTags, toSlug } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Tags",
  description: "Browse posts by tag.",
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-retro-ink">
          Tags
        </h1>
        <p className="mt-2 text-retro-stone">
          {tags.length} {tags.length === 1 ? "tag" : "tags"} across the blog.
        </p>
      </header>

      <ul className="flex flex-wrap gap-2">
        {tags.map(({ tag, count }) => (
          <li key={tag}>
            <Link
              href={`/tags/${toSlug(tag)}`}
              className="inline-flex items-center gap-1.5 rounded-none border-2 border-retro-line px-3 py-1 text-sm text-retro-stone transition hover:border-retro-stone hover:text-retro-ink"
            >
              <span>#{tag}</span>
              <span className="font-mono text-xs text-retro-stone">
                {count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
