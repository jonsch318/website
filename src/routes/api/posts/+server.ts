import { getPosts } from "$lib/server/blog";
import { json } from "@sveltejs/kit";

export function GET() {
  const posts = getPosts();
  return json(posts);
}
