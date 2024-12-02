<script lang="ts">
  import '../app.css';
  import type { Snippet } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import { beforeNavigate } from '$app/navigation';
  import { IconContext } from 'phosphor-svelte';
  import Footer from '$lib/components/Footer.svelte';

  const { children } = $props<{ children: Snippet }>();

  beforeNavigate(({ from, to, cancel }) => {
    if (from?.route.id === to?.route.id) cancel();
  });
</script>

<IconContext values={{ size: 20, weight: 'regular' }}>
  <div id="app">
    <Header />
    <div class="content-area md:[&::-webkit-scrollbar-thumb]:bg-gray-300 md:[&::-webkit-scrollbar-track]:bg-slate-200 md:[&::-webkit-scrollbar]:w-1">
      {@render children()}
      <Footer/>
    </div>
  </div>
</IconContext>

<style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    height: 100dvh;
    min-width: 100dvw;
    width: 100dvw;

    .content-area {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
</style>
