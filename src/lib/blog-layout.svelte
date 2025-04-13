<script>
  export let title;
  export let date;
</script>

<div class="mx-auto max-w-[100ch] pt-24 pb-4">
  <article class="font-serif">
    <h1 class="mb-4 text-5xl font-bold">
      {title}
    </h1>
    <p class="mb-8 text-xl italic">{date}</p>
    <div class="prose lg:prose-xl prose-neutral w-[100ch] px-4">
      <slot></slot>
    </div>
  </article>
</div>
