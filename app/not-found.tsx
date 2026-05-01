import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-prose px-6 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-wide text-retro-stone dark:text-[#8a9a8a]">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-retro-ink dark:text-retro-beige-warm">
        Not found
      </h1>
      <p className="mt-3 text-retro-stone dark:text-[#9aaa9a]">
        That page doesn&apos;t exist (or moved).
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm text-retro-stone underline transition hover:text-apple-blue dark:text-[#8a9a8a] dark:hover:text-retro-crt"
      >
        Go home
      </Link>
    </div>
  );
}
