<script>
  export let title;
  export let date;
</script>

<div class="bg-accent-foreground text-accent-background p-32">
  <h1 class="font-display pt-16 pb-8 text-center text-8xl font-bold">
    {title}
  </h1>
  <p class="font-display text-center text-xl font-semibold">{date}</p>
</div>
<div class="mt-16 grid justify-center">
  <article class="prose lg:prose-xl prose-neutral w-[100ch] font-serif">
    <slot>
      <!-- the mdsvex content will be slotted in here -->
    </slot>
  </article>
</div>
