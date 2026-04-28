import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-prose px-6 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
        Not found
      </h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400">
        That page doesn&apos;t exist (or moved).
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm text-neutral-600 underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
      >
        Go home
      </Link>
    </div>
  );
}
