import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { Post } from "@/lib/posts";
import { CategoryPill } from "./category-pill";
import { TagPill } from "./tag-pill";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group relative rounded-none border-2 border-transparent p-4 -mx-4 transition hover:border-retro-line hover:bg-retro-beige dark:hover:border-emerald-900/40 dark:hover:bg-[#121a12]">
      <Link href={post.permalink} className="block">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-lg font-semibold tracking-tight text-retro-ink group-hover:underline dark:text-retro-beige-warm">
            {post.title}
          </h2>
          <time
            dateTime={post.date}
            className="font-mono text-xs text-retro-stone dark:text-[#8a9a8a]"
          >
            {formatDate(post.date)}
          </time>
        </div>
        <p className="mt-1 text-sm text-retro-stone dark:text-[#9aaa9a]">
          {post.description}
        </p>
      </Link>
      {(post.tags.length > 0 || post.category) && (
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {post.category && <CategoryPill category={post.category} />}
          {post.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      )}
    </article>
  );
}
