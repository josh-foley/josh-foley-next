import Link from "next/link";
import { CrtScreen } from "@/components/crt-screen";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const recent = getAllPosts().slice(0, 5);
  const totalPosts = getAllPosts().length;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-8">
      <CrtScreen>
        <div className="space-y-5 font-display text-xl leading-snug sm:text-2xl">
          <p className="opacity-90">APPLE ][ · 48K · INTEGER BASIC v.1977</p>
          <p className="opacity-70">
            ████████████████████████████████████
          </p>

          <p className="prompt">
            <span className="opacity-80">PRINT &quot;HELLO, WORLD&quot;</span>
          </p>

          <h1 className="font-display text-4xl leading-tight tracking-wide sm:text-6xl">
            HI, I&apos;M JOSH.
            <span className="cursor-block" />
          </h1>

          <p className="max-w-[60ch] text-[1.05em] opacity-95 sm:text-[1.1em]">
            I write software for a living and notes about it occasionally. This
            is a small green-phosphor corner of the internet for engineering,
            design, and whatever else is loaded into RAM this week.
          </p>

          <hr className="crt-hr" />

          <div className="flex items-baseline justify-between">
            <p>
              <span className="prompt" />
              <span className="opacity-90">CATALOG ,D1</span>
            </p>
            <Link href="/blog" className="font-display text-lg sm:text-xl">
              VIEW ALL →
            </Link>
          </div>

          <div className="space-y-2">
            {recent.length === 0 ? (
              <div className="border border-dashed border-phosphor-dim/70 px-4 py-6 text-center opacity-90">
                <p>NO FILES ON DISK.</p>
                <p className="mt-1 text-base opacity-75">
                  INSERT FLOPPY AND TRY AGAIN.
                </p>
              </div>
            ) : (
              recent.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))
            )}
          </div>

          <p className="opacity-70">
            {totalPosts} FILE{totalPosts === 1 ? "" : "S"} · END OF CATALOG
          </p>
        </div>
      </CrtScreen>
    </div>
  );
}
