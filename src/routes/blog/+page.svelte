<script>
  import PostEntry from "./post-entry.svelte";

  let { data } = $props();
</script>

<div class="mx-auto max-w-[100ch] pt-32">
  <h1 class="py-8 font-serif text-5xl font-bold">Blog Posts</h1>
  <p class="mt-4 mb-12">
    I do not post regularly or something but always when I have learned
    something interesting or have configured something without any guide that I
    have found. I suggest adding the <a
      class="text-blue-500 underline"
      href="/blog/rss">rss</a
    > to some rss reader.
  </p>
  <ul>
    {#each data.posts as post (post.slug)}
      <li>
        <PostEntry title={post.title} date={post.date} href={post.href}
        ></PostEntry>
      </li>
    {/each}
  </ul>
</div>
