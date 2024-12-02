<script lang="ts">
  import { Problems, Routes } from '$lib/constants';
  import { ArrowRight, CaretRight } from 'phosphor-svelte';

  const routes = Object.entries(Routes);

  const problems = Object.entries(Problems);
</script>

<footer class="body-font bg-purple-50 text-gray-600">
  <div
    class="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start"
  >
    <div class="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
      <a
        href="/"
        class="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start"
      >
        <img width="220" src="/images/logo.svg" alt="Logo" />
      </a>
      <p class="mt-6 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div class="-mb-10 mt-10 flex flex-col md:flex-row text-center md:mt-0 md:pl-20 md:text-left">
      {@render links('Quick Links', routes)}
      {@render links('Problems During Periods', problems)}

      <div class="w-full px-4 md:w-1/2">
        <h2 class="title-font mb-3 text-xl font-semibold  text-purple-700">
          Contact Details
        </h2>
        <ul class="space-y-4" >
          <li class="flex items-start space-x-2" >
            <CaretRight weight="bold" class="shrink-0" />
            <span class="font-semibold" >Address</span>
            <span class="text-gray-600">LovLuk India Enterprises
              Park wali gali, near baba khetarnath mandir, sihma, Narnaul, Haryana 123028</span>
          </li>
          <li class="flex items-start space-x-2" >
            <CaretRight weight="bold" class="shrink-0" />
            <span class="font-semibold" >Email</span>
            <a href="mailto:lovluk@gmail" class="text-blue-600">lovluk@gmail.com</a>
          </li>
          <li class="flex items-start space-x-2" >
            <CaretRight weight="bold" class="shrink-0" />
            <span class="font-semibold" >Phone</span>
            <span class="text-gray-600">+91 9876543210</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <img class="mx-auto pb-4" src="https://ammycare.com/assets/img/made-in-india.png" alt="" />
  <div class="border-t border-gray-200">
    <div class="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
      <p class="text-center text-sm font-semibold text-gray-500 sm:text-left">
        © 2022 Lovluk | All rights reserved
      </p>
      <span class="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
        <a
          href="https://www.facebook.com/LovlukIndiaEnterprises"
          class="text-gray-500"
          aria-label="Facebook"
          target="_blank"
        >
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/lovluk_india_enterprises/"
          class="ml-4 text-gray-500"
          aria-label="Instagram"
          target="_blank"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="h-5 w-5"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

{#snippet links(title: string, iterator: [string, string][])}
  <div class="w-full px-4 md:w-1/2">
    <h2 class="title-font mb-3 text-xl font-semibold  text-purple-700">
      {title}
    </h2>
    <nav class="mb-10 list-none space-y-2">
      {#each iterator as [name, path] (path)}
        {#if typeof path === 'string'}
          <li class="flex items-center space-x-2" >
            <ArrowRight size=16 />
            <a href={path} class="text-gray-600 hover:text-gray-800">{name}</a>
          </li>
        {/if}
      {/each}
    </nav>
  </div>
{/snippet}
