<script lang="ts">
	import { getDrawerStore } from "@skeletonlabs/skeleton";

    const drawerStore = getDrawerStore();

    function drawerClose(): void {drawerStore.close()}
</script>

<nav class="list-nav max-w-[75vw] h-full">
	<ul>
        <li class="lg:hidden"> <button on:click={ drawerClose }>X</button></li>
		<li><a href="/">Home</a></li>
		<li><a href="/politics">Politics</a></li>
		<li><a href="/programming">Programming</a></li>
		<li><a href="/blog">Blog</a></li>
		<li><a href="/music">Music</a></li>
	</ul>
</nav>
