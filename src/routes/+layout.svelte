<script lang="ts">
  import Menu from "$lib/components/menu.svelte";
  import "../app.css";
  import "@fontsource-variable/frank-ruhl-libre";
  import "@fontsource-variable/hanken-grotesk";
  let { children } = $props();
</script>

<nav class="absolute top-0 flex w-screen justify-center">
  <Menu />
</nav>
<main>
  <div class="h-full min-h-screen bg-neutral-200">
    {@render children()}
  </div>
</main>
