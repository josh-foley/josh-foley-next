import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 mt-20 px-4 pb-8 sm:px-8">
      <div className="mx-auto max-w-5xl rounded-2xl border border-case-deeper bg-gradient-to-b from-case-light via-case to-case-dark px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-2px_0_rgba(0,0,0,0.18)]">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-[#3a3320]">
          <div className="flex items-center gap-3">
            <span className="power-led" aria-hidden />
            <span className="font-display text-lg tracking-wider">
              POWER · APPLE COMPUTER, INC.
            </span>
          </div>
          <span>
            © {new Date().getFullYear()} JOSH FOLEY · 48K · MADE IN CUPERTINO
          </span>
          <nav className="flex items-center gap-3">
            <Link
              href="/blog"
              className="underline decoration-dotted underline-offset-4 hover:text-apple-red"
            >
              Blog
            </Link>
            <a
              href="https://github.com/josh-foley"
              className="underline decoration-dotted underline-offset-4 hover:text-apple-red"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
