import Link from "next/link";
import { toSlug } from "@/lib/posts";

export function TagPill({ tag }: { tag: string }) {
  return (
    <Link
      href={`/tags/${toSlug(tag)}`}
      className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-medium text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-neutral-50"
    >
      #{tag}
    </Link>
  );
}
