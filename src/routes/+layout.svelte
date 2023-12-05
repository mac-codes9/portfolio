<script>
  import "../app.css";
  import { fade } from "svelte/transition";
  import Header from "$lib/components/layout/header.svelte";
</script>

<body transition:fade class="space-y-8 pt-8 px-4 mx-auto max-w-3xl bg-neutral-950 text-neutral-400 text-sm">
  <Header />
  <main class="space-y-12 mx-auto">
    <slot />
  </main>
</body>
