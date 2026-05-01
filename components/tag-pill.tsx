import Link from "next/link";
import { toSlug } from "@/lib/posts";

export function TagPill({ tag }: { tag: string }) {
  return (
    <Link
      href={`/tags/${toSlug(tag)}`}
      className="inline-flex items-center rounded-none border-2 border-retro-line px-2.5 py-0.5 text-xs font-medium text-retro-stone transition hover:border-retro-stone hover:text-retro-ink"
    >
      #{tag}
    </Link>
  );
}
