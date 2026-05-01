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
        <h1 className="text-3xl font-bold tracking-tight text-retro-ink dark:text-retro-beige-warm">
          Categories
        </h1>
        <p className="mt-2 text-retro-stone dark:text-[#9aaa9a]">
          {categories.length}{" "}
          {categories.length === 1 ? "category" : "categories"}.
        </p>
      </header>

      <ul className="flex flex-col divide-y-2 divide-retro-line dark:divide-emerald-950/50">
        {categories.map(({ category, count }) => (
          <li key={category}>
            <Link
              href={`/categories/${toSlug(category)}`}
              className="flex items-center justify-between py-3 text-retro-stone transition hover:text-retro-ink dark:text-[#9aaa9a] dark:hover:text-retro-beige-warm"
            >
              <span className="text-sm font-medium">{category}</span>
              <span className="font-mono text-xs text-retro-stone dark:text-[#8a9a8a]">
                {count} {count === 1 ? "post" : "posts"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
