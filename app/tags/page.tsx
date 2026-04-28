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
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Tags
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {tags.length} {tags.length === 1 ? "tag" : "tags"} across the blog.
        </p>
      </header>

      <ul className="flex flex-wrap gap-2">
        {tags.map(({ tag, count }) => (
          <li key={tag}>
            <Link
              href={`/tags/${toSlug(tag)}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-neutral-50"
            >
              <span>#{tag}</span>
              <span className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
                {count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
