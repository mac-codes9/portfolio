<script>
  import '../app.css'
  import Header from '$lib/components/layout/header.svelte';
  import Footer from '$lib/components/layout/footer.svelte';
</script>

<body class='space-y-8 py-10 px-4 mx-auto max-w-3xl bg-neutral-950 text-neutral-400 text-sm mdl:py-16 mdl:px-8 mdl:space-y-20 mdl:max-w-4xl'>
  <Header />
  <main class='space-y-8'>
    <slot />
  </main>
  <Footer />
</body>