import { type PostMetadata } from "$lib/server/blog";
import type { RequestHandler } from "../../api/posts/$types";

export const GET: RequestHandler = async ({ fetch }) => {
  const res = await fetch("/api/posts");
  const data = await res.json();
  // const res = await fetch(
  //   import.meta.env.VITE_BASE_ENDPOINT + "/posts/posts.json",
  // );
  // const data = await res.json();
  const body = render(data);
  const headers = {
    "Cache-Control": `max-age=0, s-max-age=${600}`,
    "Content-Type": "application/xml",
  };

  return new Response(body, { headers });
};

const render = (
  posts: PostMetadata[],
) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<atom:link href="http://jonsch.eu/blog/rss" rel="self" type="application/rss+xml" />
<title>Jonas Schneider Blog</title>
<link>https://jonsch.eu/blog</link>
<description>Jonas Schneider technology blog</description>
${posts
  .map(
    (post) => `<item>
<guid>https://jonsch.eu/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>https://jonsch.eu/blog/${post.slug}</link>
<description>${post.description}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`,
  )
  .join("")}
</channel>
</rss>
`;
