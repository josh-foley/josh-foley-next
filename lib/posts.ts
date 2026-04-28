import { posts } from "#site/content";

export type Post = (typeof posts)[number];

// Published posts only, newest first. Use this everywhere instead of
// importing `posts` directly so drafts never leak into the UI.
export function getAllPosts(): Post[] {
  return posts
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getAllTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((p) => p.tags.includes(tag));
}

export function getAllCategories(): { category: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of getAllPosts()) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((p) => p.category === category);
}

// URL-safe slug used in /tags/[tag] and /categories/[category] routes.
// We keep it permissive (lowercase, hyphenate spaces) and match in both
// directions when looking up.
export function toSlug(value: string): string {
  return value.toLowerCase().replace(/\s+/g, "-");
}

export function findTag(slug: string): string | undefined {
  return getAllTags().find((t) => toSlug(t.tag) === slug)?.tag;
}

export function findCategory(slug: string): string | undefined {
  return getAllCategories().find((c) => toSlug(c.category) === slug)?.category;
}
