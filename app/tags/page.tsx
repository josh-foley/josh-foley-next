import type { Metadata } from "next";
import Link from "next/link";
import { CrtScreen } from "@/components/crt-screen";
import { getAllTags, toSlug } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Tags",
  description: "Browse posts by tag.",
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-8">
      <CrtScreen modelLabel="TAGS · INDEX">
        <div className="space-y-5 font-display text-xl sm:text-2xl">
          <p className="prompt opacity-90">LIST TAGS</p>
          <h1 className="font-display text-4xl tracking-wide sm:text-5xl">
            TAG INDEX
            <span className="cursor-block" />
          </h1>
          <p className="opacity-85">
            {tags.length} TAG{tags.length === 1 ? "" : "S"} ACROSS THE BLOG.
          </p>

          <hr className="crt-hr" />

          {tags.length === 0 ? (
            <p className="opacity-75">NO TAGS DEFINED.</p>
          ) : (
            <ul className="flex flex-wrap gap-2">
              {tags.map(({ tag, count }) => (
                <li key={tag}>
                  <Link
                    href={`/tags/${toSlug(tag)}`}
                    className="inline-flex items-baseline gap-2 border border-phosphor-dim px-3 py-1 font-mono text-sm uppercase tracking-wider no-underline transition hover:border-phosphor hover:bg-phosphor/[0.08] hover:text-phosphor"
                  >
                    <span>#{tag}</span>
                    <span className="text-xs opacity-70">×{count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CrtScreen>
    </div>
  );
}
