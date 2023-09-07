<script>
  import Glow from '$lib/glow.svelte';
  import Title from '$lib/title.svelte';
  import Links from '$lib/links.svelte';
  import "../app.postcss";
</script>
<body class="px-8 py-10 mx-auto space-y-9 min-h-screen max-w-xl flex-col gap-9 bg-neutral-950 text-neutral-400 text-sm md:py-16 md:space-y-20 md:max-w-4xl">
  <header class="space-y-2">
   <Glow />
   <a href="mailto:maclong9@icloud.com">maclong9@icloud.com</a>
   <Links />
  </header>
  <slot />
  <footer class="space-y-4">
    <Title text="Contact" />
    <span>
      Email me at
      <a href=" mailto:maclong9@icloud.com">maclong9@icloud.com</a>
      or follow me on the various social links below.
    </span>
    <Links />
  </footer>
</body>
