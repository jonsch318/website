export type PostMetadata = {
  title: string;
  date: Date;
  tags: string[];
  slug: string;
  description: string;
  published: boolean;
  href: string;
};

const BLOG_URL = "/blog";

export function getPosts(): PostMetadata[] {
  const postFiles = import.meta.glob("/src/routes/blog/**/+page.svx", {
    eager: true,
  });

  const allPosts: PostMetadata[] = [];

  for (const path in postFiles) {
    const file = postFiles[path];
    const match = path.match(/\/src\/routes\/blog\/(.*?)\/\+page\.(svx|md)$/);
    if (!match) {
      continue;
    }
    const slug = match[1];
    if (!file || typeof file !== "object" || !("metadata" in file) || !slug) {
      continue;
    }
    const metadata = file.metadata as Omit<PostMetadata, "slug">;
    allPosts.push(mapMetadata(slug, metadata));
  }
  allPosts.sort((a, b) => a.date.getTime() - b.date.getTime());

  return allPosts;
}

function mapMetadata(
  slug: string,
  data: Record<string, unknown>,
): PostMetadata {
  let date;
  if (data.date instanceof Date) {
    date = data.date;
  } else if (typeof data.date === "string" || typeof data.date === "number") {
    date = new Date(data.date);
  } else {
    date = new Date();
  }
  const tags = Array.isArray(data.tags)
    ? data.tags
    : typeof data.tags === "string"
      ? data.tags.split(",")
      : [];
  return {
    slug,
    title: typeof data.title === "string" ? data.title : "",
    date,
    description: typeof data.description === "string" ? data.description : "",
    published: typeof data.published === "boolean" ? data.published : false,
    tags,
    href: `${BLOG_URL}/${slug}`,
  };
}
