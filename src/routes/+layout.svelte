<script>
  import Header from "$lib/components/layout/header.svelte";
  import { fade } from "svelte/transition";
  import "../app.css";
</script>

<body
  transition:fade
  class="mx-auto max-w-3xl bg-neutral-950 text-neutral-400 text-sm md:max-w-4xl"
>
  <div class="px-4 md:px-8">
    <Header />
    <main class="space-y-12 mx-auto">
      <slot />
    </main>
  </div>
</body>
