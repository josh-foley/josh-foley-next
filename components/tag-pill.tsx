import Link from "next/link";
import { toSlug } from "@/lib/posts";

export function TagPill({ tag }: { tag: string }) {
  return (
    <Link
      href={`/tags/${toSlug(tag)}`}
      className="inline-flex items-center border border-dashed border-phosphor-dim px-2 py-0.5 font-mono text-xs uppercase tracking-wider text-phosphor-soft no-underline transition hover:border-phosphor hover:text-phosphor"
    >
      #{tag}
    </Link>
  );
}
