import Link from "next/link";
import { toSlug } from "@/lib/posts";

export function CategoryPill({ category }: { category: string }) {
  return (
    <Link
      href={`/categories/${toSlug(category)}`}
      className="inline-flex items-center rounded-none border border-retro-line bg-retro-beige px-2.5 py-0.5 text-xs font-medium text-retro-ink transition hover:border-retro-stone hover:bg-retro-beige-warm"
    >
      {category}
    </Link>
  );
}
