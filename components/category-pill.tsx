import Link from "next/link";
import { toSlug } from "@/lib/posts";

export function CategoryPill({ category }: { category: string }) {
  return (
    <Link
      href={`/categories/${toSlug(category)}`}
      className="inline-flex items-center border border-phosphor px-2 py-0.5 font-mono text-xs uppercase tracking-wider text-phosphor no-underline transition hover:bg-phosphor hover:text-phosphor-deep"
    >
      ▎ {category}
    </Link>
  );
}
