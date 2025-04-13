<script lang="ts">
  import { NavigationMenu } from "bits-ui";
  import CaretDown from "phosphor-svelte/lib/CaretDown";
  import cn from "clsx";

  const programming_projects: {
    title: string;
    href: string;
    description: string;
  }[] = [
    {
      title: "RoyalAfg",
      href: "/programming/royalafg",
      description:
        "A casino build for my Abitur as a microservice application with many common patterns",
    },
    {
      title: "HTWR-Aachen",
      href: "/programming/htwr-aachen",
      description:
        "A parody of the computer science RWTH-Aachen website with useful study information",
    },
    {
      title: "Dotfiles",
      href: "/programming/dotfiles",
      description: "Dotfiles for my linux pc's managed using dotter",
    },
    {
      title: "Infra",
      href: "/programming/infra",
      description: 'GitOps k8s "homelab" using talos & argocd',
    },
    {
      title: "e-ink-rs",
      href: "/programming/e-ink-rs",
      description: "Display driver for some e-ink displays from scratch",
    },
  ];

  type ListItemProps = {
    className?: string;
    title: string;
    href: string;
    content: string;
  };
</script>

{#snippet ListItem({ className, title, content, href }: ListItemProps)}
  <li>
    <NavigationMenu.Link
      class={cn(
        "hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
        className,
      )}
      {href}
    >
      <div class="text-sm leading-none font-medium">{title}</div>
      <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
        {content}
      </p>
    </NavigationMenu.Link>
  </li>
{/snippet}

<NavigationMenu.Root class="relative z-10 flex w-full justify-center">
  <NavigationMenu.List
    class="group bg-background flex list-none items-center justify-center gap-x-2 rounded-xl p-1"
  >
    <NavigationMenu.Item value="getting-started">
      <NavigationMenu.Trigger
        class="hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground data-[state=open]:shadow-mini dark:hover:bg-muted dark:data-[state=open]:bg-muted group data-[state=open]:text-accent-foreground inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white"
      >
        About Me
        <CaretDown
          class="relative top-[1px] ml-1 size-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content
        class="data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left absolute top-0 left-0 w-full sm:w-auto"
      >
        <ul
          class="m-0 grid list-none gap-x-2.5 p-3 sm:w-[600px] sm:grid-flow-col sm:grid-rows-3 sm:p-[22px]"
        >
          <li class="row-span-3 mb-2 sm:mb-0">
            <NavigationMenu.Link
              href="/about-me"
              class="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-12 no-underline outline-hidden select-none focus:shadow-md"
            >
              <!-- <Icons.logo class="h-6 w-6" /> -->
              <div class="mt-4 mb-2 text-lg font-medium">Persona</div>
              <p class="text-muted-foreground text-sm leading-tight">
                Who am I?
              </p>
            </NavigationMenu.Link>
          </li>
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger
        class="hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground data-[state=open]:shadow-mini dark:hover:bg-muted dark:data-[state=open]:bg-muted group data-[state=open]:text-accent-foreground inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white"
      >
        Programming Projects
        <CaretDown
          class="relative top-[1px] ml-1 size-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content
        class="data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left absolute top-0 left-0 w-full sm:w-auto"
      >
        <ul
          class="grid gap-3 p-3 sm:w-[400px] sm:p-6 md:w-[500px] md:grid-cols-3 lg:w-[600px]"
        >
          <li class="col-start-1 col-end-2 row-span-3 mb-2 sm:mb-0">
            <NavigationMenu.Link
              href="/programming"
              class="flex h-full w-full flex-col justify-end rounded-md bg-linear-to-tr from-yellow-600/75 to-red-700/75 p-12 no-underline outline-hidden select-none focus:shadow-md"
            >
              <!-- <Icons.logo class="h-6 w-6" /> -->
              <div class="mt-4 mb-2 text-lg font-medium">Project Overview</div>
              <p class="text-accent-foreground text-sm leading-tight">
                Things I am doing
              </p>
            </NavigationMenu.Link>
          </li>
          {#each programming_projects as proj (proj.title)}
            {@render ListItem({
              href: proj.href,
              title: proj.title,
              content: proj.description,
            })}
          {/each}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link
        class="hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground data-[state=open]:shadow-mini dark:hover:bg-muted dark:data-[state=open]:bg-muted group data-[state=open]:text-accent-foreground inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white"
        href="/blog"
      >
        Blog
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link
        class="hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground data-[state=open]:shadow-mini dark:hover:bg-muted dark:data-[state=open]:bg-muted group data-[state=open]:text-accent-foreground inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white"
        href="/design"
      >
        Design
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link
        class="hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground data-[state=open]:shadow-mini dark:hover:bg-muted dark:data-[state=open]:bg-muted group data-[state=open]:text-accent-foreground inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white"
        href="/music"
      >
        Music
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Indicator
      class="data-[state=hidden]:animate-fade-out data-[state=visible]:animate-fade-in top-full z-10 flex h-2.5 items-end justify-center overflow-hidden opacity-100 transition-[all,transform_250ms_ease] duration-200 data-[state=hidden]:opacity-0"
    >
      <div
        class="bg-border relative top-[70%] size-2.5 rotate-[45deg] rounded-tl-[2px]"
      ></div>
    </NavigationMenu.Indicator>
  </NavigationMenu.List>
  <div
    class="absolute top-full left-0 flex w-full justify-center perspective-[2000px]"
  >
    <NavigationMenu.Viewport
      class="text-popover-foreground bg-background data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in relative mt-2.5 h-[var(--bits-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md border shadow-lg transition-[width,_height] duration-200 sm:w-[var(--bits-navigation-menu-viewport-width)] "
    />
  </div>
</NavigationMenu.Root>
