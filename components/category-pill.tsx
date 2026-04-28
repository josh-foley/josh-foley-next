import Link from "next/link";
import { toSlug } from "@/lib/posts";

export function CategoryPill({ category }: { category: string }) {
  return (
    <Link
      href={`/categories/${toSlug(category)}`}
      className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700 transition hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
    >
      {category}
    </Link>
  );
}
