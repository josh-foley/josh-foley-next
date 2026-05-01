import Link from "next/link";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/tags", label: "Tags" },
  { href: "/categories", label: "Categories" },
];

export function Header() {
  return (
    <header className="border-b-2 border-retro-line bg-retro-beige">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm font-semibold uppercase tracking-wider text-retro-ink transition hover:text-retro-stone"
        >
          josh foley
        </Link>
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-none px-2 py-1 text-sm text-retro-stone transition hover:bg-retro-beige-warm hover:text-retro-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
