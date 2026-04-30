import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { Post } from "@/lib/posts";
import { CategoryPill } from "./category-pill";
import { TagPill } from "./tag-pill";

function pad(n: number, width = 3) {
  return n.toString().padStart(width, "0");
}

export function PostCard({ post, index = 0 }: { post: Post; index?: number }) {
  return (
    <article className="group relative border border-transparent px-3 py-2 transition hover:border-phosphor-dim hover:bg-phosphor/[0.06]">
      <Link href={post.permalink} className="block no-underline">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="flex items-baseline gap-3 font-display text-2xl leading-tight tracking-wide group-hover:text-phosphor">
            <span className="opacity-60">{pad(index + 1)}</span>
            <span className="opacity-95 group-hover:underline">
              {post.title.toUpperCase()}
            </span>
          </h3>
          <time
            dateTime={post.date}
            className="font-mono text-xs uppercase tracking-wide opacity-70"
          >
            {formatDate(post.date)}
          </time>
        </div>
        {post.description && (
          <p className="mt-1 text-base leading-snug opacity-85">
            {post.description}
          </p>
        )}
      </Link>
      {(post.tags.length > 0 || post.category) && (
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {post.category && <CategoryPill category={post.category} />}
          {post.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      )}
    </article>
  );
}
