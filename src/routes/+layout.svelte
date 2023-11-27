<script lang="ts">
	import '../app.postcss';
	import "@fontsource/poppins"

	import "prismjs/plugins/line-numbers/prism-line-numbers.css";
	import "prismjs/plugins/command-line/prism-command-line.css";
	import "prismjs/plugins/line-highlight/prism-line-highlight.css";

	import "prismjs/themes/prism.css";
	import "prismjs/themes/prism-okaidia.css";

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppBar, AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import type { ComponentEvents } from 'svelte';
	import Navigation from '../navigation.svelte';

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		console.log(event.currentTarget.scrollTop);
	}


	//Sidenav
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	initializeStores();
	const drawerStore = getDrawerStore();
	function drawerOpen(): void { drawerStore.open({}); }

</script>

<Drawer bgBackdrop="bg-tertiary-500"><Navigation/></Drawer>

<AppShell on:scroll={scrollHandler} slotSidebarLeft="bg-tertiary-500 w-0 lg:w-64" scrollbarGutter="auto">
	<svelte:fragment slot="sidebarLeft">
		<Navigation/>
	</svelte:fragment>

	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl uppercase">Skeleton</strong>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	
	<slot />

	<svelte:fragment slot="pageFooter">
		Footer 1
	</svelte:fragment>
</AppShell>

