import { getPosts } from "$lib/server/blog";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const posts = getPosts();
  return { posts };
};
