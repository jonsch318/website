<script lang="ts">
  export let date: Date | undefined;
  export let title: string = "";
  export let href: string = "";
</script>

<a class="grid grid-cols-3" {href}>
  <div class="flex w-full flex-col space-x-0 md:flex-row md:space-x-2">
    <span class="w-48 font-sans font-light text-black/75"
      >{date?.toLocaleDateString()}</span
    >
    <span class="col-span-2">{title}</span>
  </div>
</a>
