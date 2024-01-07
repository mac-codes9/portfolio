<script>
  import Title from "$lib/components/title.svelte";
  const projects = [];
</script>

<section>
  <Title text="Projects" />
  <div
    class="flex flex-col items-center justify-center mx-auto pt-4 pb-2 md:flex-row md:flex-wrap md:items-start"
  >
    {#each projects as { url, name, description }}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        class="w-full no-underline border-neutral-400 rounded-md border-[.5px] py-4 px-2 group transition-all relative duration-700 hover:border-neutral-100 hover:scale-105 hover:-translate-y-1 hover:text-neutral-400 hover:border-[1px] my-2 md:m-2 lg:w-[364px]"
      >
        <h3 class="text-neutral-100 mb-4">{name}</h3>
        <p class="max-w-md">{description}</p>
      </a>
    {/each}
  </div>
</section>
