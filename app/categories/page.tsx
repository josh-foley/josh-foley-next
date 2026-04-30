import type { Metadata } from "next";
import Link from "next/link";
import { CrtScreen } from "@/components/crt-screen";
import { getAllCategories, toSlug } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse posts by category.",
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-8">
      <CrtScreen modelLabel="CATEGORIES · INDEX">
        <div className="space-y-5 font-display text-xl sm:text-2xl">
          <p className="prompt opacity-90">LIST CATEGORIES</p>
          <h1 className="font-display text-4xl tracking-wide sm:text-5xl">
            CATEGORY INDEX
            <span className="cursor-block" />
          </h1>
          <p className="opacity-85">
            {categories.length}{" "}
            {categories.length === 1 ? "CATEGORY" : "CATEGORIES"}.
          </p>

          <hr className="crt-hr" />

          {categories.length === 0 ? (
            <p className="opacity-75">NO CATEGORIES DEFINED.</p>
          ) : (
            <ul className="divide-y divide-phosphor-dim/60 border-y border-phosphor-dim/60">
              {categories.map(({ category, count }) => (
                <li key={category}>
                  <Link
                    href={`/categories/${toSlug(category)}`}
                    className="flex items-center justify-between px-2 py-3 font-mono uppercase no-underline transition hover:bg-phosphor/[0.08] hover:text-phosphor"
                  >
                    <span className="font-display text-2xl tracking-wide">
                      ▎ {category}
                    </span>
                    <span className="text-sm opacity-70">
                      {count} {count === 1 ? "FILE" : "FILES"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CrtScreen>
    </div>
  );
}
