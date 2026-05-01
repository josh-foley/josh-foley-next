import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-prose px-6 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-wide text-retro-stone">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-retro-ink">
        Not found
      </h1>
      <p className="mt-3 text-retro-stone">
        That page doesn&apos;t exist (or moved).
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm text-retro-stone underline transition hover:text-apple-blue"
      >
        Go home
      </Link>
    </div>
  );
}
