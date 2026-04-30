import Link from "next/link";
import { AppleLogo } from "./apple-logo";

const navLinks = [
  { href: "/", label: "Home", key: "H" },
  { href: "/blog", label: "Blog", key: "B" },
  { href: "/tags", label: "Tags", key: "T" },
  { href: "/categories", label: "Cats", key: "C" },
];

export function Header() {
  return (
    <header className="relative z-10 px-4 pt-6 sm:px-8 sm:pt-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 rounded-2xl border border-case-deeper bg-gradient-to-b from-case-light via-case to-case-dark px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-2px_0_rgba(0,0,0,0.18),0_8px_18px_-10px_rgba(0,0,0,0.45)]">
        <Link
          href="/"
          className="group flex items-center gap-3 no-underline"
        >
          <AppleLogo size={26} />
          <span className="font-display text-2xl leading-none tracking-wider text-[#2a2418]">
            <span className="text-[#2a2418]/80">josh</span>
            <span className="text-apple-red"> ][ </span>
            <span className="text-[#2a2418]/80">foley</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="keycap">
              <span className="hidden text-[10px] text-apple-red sm:mr-1.5 sm:inline-block">
                {link.key}
              </span>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
