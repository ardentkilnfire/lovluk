<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import { RoutesWithProblems } from '$lib/constants';
  import { CaretLeft, List, X } from 'phosphor-svelte';
  import { onMount } from 'svelte';
  import { blur, fly } from 'svelte/transition';

  let menuOpen = false;
  const routes = Object.entries(RoutesWithProblems);

  const handleKeydown = (event: KeyboardEvent) => {
    if (menuOpen && event.key === 'Escape') {
      menuOpen = false;
    }
  };

  function isSubMenu(path: string | object): path is object {
    return typeof path === 'object' && path !== null;
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  onNavigate(() => {
    menuOpen = false;
  })
</script>

<header class="z-50 bg-slate-500 text-white shadow-lg">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <!-- Logo -->
      <a href="/" class="text-2xl">
        <img width="120" src="/images/logo.svg" alt="Logo" />
      </a>

      <!-- Desktop Navigation Menu -->
      <nav class="hidden items-center space-x-8 md:flex">
        <ul class="flex">
          {#each routes as [name, pathOrSubMenu] (pathOrSubMenu)}
            {#if isSubMenu(pathOrSubMenu)}
              <li class="group relative">
                <a href="#." class="block p-2">{name}</a>
                <ul class="absolute hidden group-hover:block bg-slate-100 top-10 left-0 text-slate-700 rounded-md shadow-md py-2 space-y-2 px-8 w-72">
                  <div class="bg-slate-100 h-4 w-4 absolute top-0 left-8 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                  {#each Object.entries(pathOrSubMenu) as [subName, subPath]}
                    <li class=" last:border-none border-b border-slate-200 hover:indent-4 hover:text-purple-500 hover:font-semibold transition-all duration-300" >
                      <a href={subPath} class="block w-full p-2">{subName}</a>
                    </li>
                  {/each}
                </ul>
              </li>
            {:else}
              <li>
                <a href={pathOrSubMenu} class="block w-full p-2">{name}</a>
              </li>
            {/if}
          {/each}
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="flex items-center rounded-md bg-slate-200/10 p-1 md:hidden"
        onclick={() => (menuOpen = true)}
        aria-expanded={menuOpen}
        class:hidden={menuOpen}
        aria-controls="drawer"
        aria-label="Open menu"
      >
        <List size="24" weight="bold" />
      </button>
    </div>
  </div>

  <!-- Overlay -->
  {#if menuOpen}
    <div
      transition:blur
      class="z-99 fixed inset-0 bg-black bg-opacity-75 sm:hidden"
      onclick={() => (menuOpen = false)}
      aria-hidden="true"
    ></div>

    <!-- Side Drawer -->
    <aside aria-hidden={menuOpen} class="sm:hidden">
      <div
        transition:fly={{ duration: 400, x: -300 }}
        class="z-100 fixed inset-y-0 left-0 flex w-full max-w-xs translate-x-0 transform flex-col border-r-4 border-slate-500 bg-slate-500 transition-transform duration-500"
        id="drawer"
      >
        <!-- Close Button -->
        <button
          class=" absolute right-0 top-1/2 flex h-16 -translate-y-1/2 translate-x-1/2 items-center rounded-full border-r-4 border-slate-500 bg-white p-1.5 text-slate-500"
          onclick={() => (menuOpen = false)}
          aria-label="Close menu"
        >
          <CaretLeft size="24" weight="bold" />
        </button>

        <!-- Logo -->
        <div class="flex flex-col items-center justify-center py-16">
          <img width="75%" src="/images/logo.svg" alt="Logo" />
        </div>

        <div class="h-full bg-white px-4 py-6 text-slate-600">
          <nav>
            <ul class="space-y-2">
              {#each routes as [name, pathOrSubMenu] (pathOrSubMenu)}
                {#if isSubMenu(pathOrSubMenu)}
                  <li data-expanded="no" class="relative overflow-hidden">
                    <button
                      onclick={(e) => {
                        const li = e.currentTarget.parentElement;
                        console.log(li);

                        if (li) {
                          li.dataset.expanded = li.dataset.expanded === 'no' ? 'yes' : 'no';
                        }
                      }}
                      aria-label="Expander"
                      class="after:absoluteafter:text-center absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-2xl font-light after:content-['+'] focus:outline-none"
                    ></button>
                    <a href="#." class="block w-full border-b border-slate-200 p-2">{name}</a>
                    <ul class="max-h-0 transition-all duration-500">
                      {#each Object.entries(pathOrSubMenu) as [subName, subPath]}
                        <li class=" border-b border-slate-200">
                          <a href={subPath} class="block w-full p-2">{subName}</a>
                        </li>
                      {/each}
                    </ul>
                  </li>
                {:else}
                  <li class="border-b border-slate-200">
                    <a href={pathOrSubMenu} class="block w-full p-2">{name}</a>
                  </li>
                {/if}
              {/each}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  {/if}
</header>
