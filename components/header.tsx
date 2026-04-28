import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/tags", label: "Tags" },
  { href: "/categories", label: "Categories" },
];

export function Header() {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-neutral-900 hover:text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300"
        >
          josh foley
        </Link>
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1 text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
