<script>
  import Title from "$lib/components/title.svelte";
  const projects = [
    {
      url: "https://github.com/mac-codes9/initialise",
      name: "Initialise",
      description:
        "A Rust program to configure my dotfiles and run system tools installation.",
    },
    {
      url: "https://3sidedcube.com",
      name: "3 Sided Cube",
      description:
        "Frontend role working with WordPress, React, Next and other tools.",
    },
    {
      url: "https://whatsername.vercel.app/",
      name: "Whatsername",
      description:
        "Landing Page, Blog and Storefront built with Next.js, Stripe & Sanity.",
    },
  ];
</script>

<Title text="Projects" />
<div
  class="flex flex-col items-center space-y-4 mx-auto w-full pt-1 pb-10 mdl:flex-row mdl:flex-wrap mdl:space-y-0 md:pt-0"
>
  {#each projects as { url, name, description }}
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      class="w-full no-underline border-neutral-400 rounded-md border-[.5px] py-4 px-2 group transition-all relative duration-700 hover:border-neutral-100 hover:scale-105 hover:-translate-y-1 hover:text-neutral-400 hover:border-[1px] mdl:w-[364px] mdl:mx-2 mdl:my-4"
    >
      <h3 class="text-neutral-100 mb-4">{name}</h3>
      <p class="max-w-md">{description}</p>
    </a>
  {/each}
</div>
