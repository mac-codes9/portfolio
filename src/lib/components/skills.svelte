<script>
  import Title from "$lib/components/title.svelte";

  const skills = [
    {
      heading: "Web Development",
      description:
        "I create beautiful, high speed websites with cutting-edge technologies including Next.js, TypeScript & TailwindCSS.",
    },
    {
      heading: "Systems Knowledge",
      description:
        "I have a solid understanding of unix systems, scripting languages and cloud systems which aids my work.",
    },
    {
      heading: "Soft Skills",
      description:
        "Communication, time management and attention to detail are some strengths I find myself using regularly.",
    },
  ];
</script>

<Title text="Skills" />
<div class='space-y-2 max-w-lg mx-auto'>
  {#each skills as { heading, description }}
    <h2>{heading}</h2>
    <p>{description}</p>
  {/each}
</div>

<style lang="postcss">
  div h2 {
    @apply  font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent;
    @apply first:from-red-500 first:to-yellow-500;
    @apply last:from-blue-500 last:to-emerald-500;
  }
</style>
