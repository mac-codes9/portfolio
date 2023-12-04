<script>
  import "../app.css";
  import { fade } from "svelte/transition";
  import Header from "$lib/components/layout/header.svelte";
</script>

<body class="space-y-8 pt-16 px-4 mx-auto max-w-3xl bg-neutral-950 text-neutral-400 text-sm mdl:px-8 mdl:space-y-20 mdl:max-w-4xl">
  <Header />
  <main class="space-y-12 mx-auto">
    <slot />
  </main>
</body>
