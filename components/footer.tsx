import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-2 px-6 py-6 text-xs text-neutral-500 dark:text-neutral-400">
        <span>© {new Date().getFullYear()} Josh Foley</span>
        <nav className="flex items-center gap-4">
          <Link href="/blog" className="hover:text-neutral-900 dark:hover:text-neutral-50">
            Blog
          </Link>
          <a
            href="https://github.com/josh-foley"
            className="hover:text-neutral-900 dark:hover:text-neutral-50"
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
