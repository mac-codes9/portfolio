<script>
  import "../app.css";
  import { fade } from "svelte/transition";
  import Header from "$lib/components/layout/header.svelte";
</script>

<body class="space-y-8 pt-8 px-8 mx-auto max-w-4xl bg-neutral-950 text-neutral-400 text-sm">
  <Header />
  <main class="space-y-12 mx-auto">
    <slot />
  </main>
</body>
