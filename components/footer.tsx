import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-retro-line bg-retro-beige dark:border-emerald-950/50 dark:bg-[#0f160f]">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-xs text-retro-stone dark:text-[#8a9a8a]">
        <span>© {new Date().getFullYear()} Josh Foley</span>
        <nav className="flex items-center gap-4">
          <Link
            href="/blog"
            className="transition hover:text-retro-ink dark:hover:text-retro-beige-warm"
          >
            Blog
          </Link>
          <a
            href="https://github.com/josh-foley"
            className="transition hover:text-retro-ink dark:hover:text-retro-beige-warm"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
