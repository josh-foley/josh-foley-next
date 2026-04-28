import type { Metadata } from "next";
import Link from "next/link";
import { getAllCategories, toSlug } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse posts by category.",
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Categories
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {categories.length}{" "}
          {categories.length === 1 ? "category" : "categories"}.
        </p>
      </header>

      <ul className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-800">
        {categories.map(({ category, count }) => (
          <li key={category}>
            <Link
              href={`/categories/${toSlug(category)}`}
              className="flex items-center justify-between py-3 text-neutral-700 transition hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50"
            >
              <span className="text-sm font-medium">{category}</span>
              <span className="font-mono text-xs text-neutral-500 dark:text-neutral-500">
                {count} {count === 1 ? "post" : "posts"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
