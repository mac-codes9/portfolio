<script>
  import Glow from "$lib/components/glow.svelte";
  import Links from "./links.svelte";
  import { locale, locales } from "$lib/utilities/translation/locale";
</script>

<header class="mb-16">
  <Glow />
  <div class="w-full flex justify-between items-start">
    <Links links={[{href: "/art", label: "Art"}, {href: "/music", label: "Music"}, {href: "/skating", label: "Skating"}]}/>
    <label for="locale" class="sr-only">Locale</label>
    <select id="locale" class="bg-transparent" bind:value={$locale}>
      {#each locales as locale}
        <option class="bg-transparetn" value={locale}>{locale}</option>
      {/each}
    </select>
  </div>
</header>
