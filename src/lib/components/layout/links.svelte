<script>
  export let links;
</script>

<div class="space-y-3">
  <a class="no-underline p-2 pl-0" href="mailto:maclong9@icloud.com">
    maclong9@icloud.com
  </a>
  <!--
  {#if links}
  <nav>
    {#each links as { href, label }, i}
      <a {href}>{label}</a>
      {#if i < links.length - 1}
        /{" "}
      {/if}
    {/each}
  </nav
  {/if}
  -->
</div>

<style lang="postcss">
  a {
    @apply no-underline;
  }
</style>
