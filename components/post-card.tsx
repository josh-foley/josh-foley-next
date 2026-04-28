import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { Post } from "@/lib/posts";
import { CategoryPill } from "./category-pill";
import { TagPill } from "./tag-pill";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group relative rounded-lg border border-transparent p-4 -mx-4 transition hover:border-neutral-200 hover:bg-neutral-50 dark:hover:border-neutral-800 dark:hover:bg-neutral-900/50">
      <Link href={post.permalink} className="block">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-lg font-semibold tracking-tight text-neutral-900 group-hover:underline dark:text-neutral-50">
            {post.title}
          </h2>
          <time
            dateTime={post.date}
            className="font-mono text-xs text-neutral-500 dark:text-neutral-400"
          >
            {formatDate(post.date)}
          </time>
        </div>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
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
