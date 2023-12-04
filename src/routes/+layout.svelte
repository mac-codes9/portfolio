<script>
  import "../app.css";
  import { fade } from "svelte/transition";
  import Header from "$lib/components/layout/header.svelte";
</script>

<body class="">
  <Header />
  <main class="space-y-12 mx-auto">
    <slot />
  </main>
</body>
