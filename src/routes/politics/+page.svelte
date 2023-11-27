<script lang="ts">
	import { formatDate, hrefFromSlug } from '$lib/blogs.js';
    import { Mouse } from 'lucide-svelte';

    export let data;
</script>

<svelte:head>
	<title>Politics - jonsch.eu</title>
</svelte:head>

<style>
    @keyframes slidein {
        0% {
            visibility: visible;
            transform: translateX(100%);
        }
        100% {
            visibility: visible;
            transform: translateX(0%);
        }
    }

    @keyframes backgroundChange {
        from {
            background: white;
        }
    }
    
    .header .background{
        animation: 2s 2 alternate slidein;
        visibility: hidden;
    }

    .header {
        animation: 3s 1 backgroundChange ease-in;
    }
</style>


<div class="bg-tertiary-500 h-full text-black">
    <div class="h-screen grid items-center bg-gruene relative overflow-x-hidden header w-full">
        <h1 class="font-medium text-[25vw] leading-none text-center align-middle relative text-white">Politics</h1>
        <div class="absolute h-screen w-screen backdrop-invert background"/>
        <span class="flex justify-center align-middle animate-bounce text-white line-clamp-1">Scroll <Mouse class="float"/> </span>
    </div>
    <div class="lg:mx-80 mx-8">
        <div class="my-64">
            <h2 class="skeleton h1 mb-20" id="blog">Blog</h2>
            <ul class="lg:ml-12 snap-y scroll-px-4 snap-mandatory scroll-smooth max-h-[150vh] flex flex-col gap-2">
                {#each data.posts as post}
                <li class="post snap-start shrink-0 grid grid-cols-[1fr,auto] grid-rows-1 my-4 hover:bg-gray-200 lg:p-6 p-4 rounded-lg">
                    <a href={hrefFromSlug(post.slug, "politics/blog")} class="title h3 underline">&#8594; {post.title}</a>
                    <p class="date ml-auto mr-0">{post.date}</p>
                    <p class="description col-span-2 mx-2 my-2">{post.description}</p>
                </li>
                {/each}
            </ul>
        </div>
    </div>
</div>