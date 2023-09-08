<script>
  import Header from '$lib/components/layout/header.svelte';
  import Footer from '$lib/components/layout/footer.svelte';
</script>

<body class='px-8 py-10 mx-auto max-w-xl bg-neutral-950 text-neutral-400 text-sm mdl:py-16 mdl:space-y-20 mdl:max-w-4xl'>
  <Header />
  <main class='space-y-8'>
    <slot />
  </main>
  <Footer />
</body>

<style global lang='postcss'>
  h1,
  h2,
  h3 {
    @apply text-white;
  }

  a {
    @apply underline hover:text-neutral-100;
  }
</style>

