<script>
  import "../app.css";
  import { fade } from "svelte/transition";
  import Header from "$lib/components/layout/header.svelte";
</script>

<body transition:fade class="space-y-6 pt-8 px-4 mx-auto max-w-3xl bg-neutral-950 text-neutral-400 text-sm md:px-8 md:max-w-4xl">
  <Header />
  <main class="space-y-12 mx-auto">
    <slot />
  </main>
</body>
