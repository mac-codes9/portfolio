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
    {
    heading: "Developer Tools",
    description: "I am proficient in SQL and NoSQL databases. Additionally, I implement continuous integration and vcs to streamline development."
  },
  ];
</script>

<Title text="Skills" />
<div class='flex flex-col items-center space-y-4 mdl:flex-row mdl:flex-wrap mdl:items-start mdl:space-y-0 mx-auto pb-10 mdl:px-4'>
  {#each skills as { heading, description }}
    <div class="mdl:w-[346px] mdl:mb-8 mdl:mx-4">
    <h2>{heading}</h2>
    <p>{description}</p>
</div>
  {/each}
</div>

<style lang="postcss">
   div h2 {
    @apply text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mb-2;
    @apply first:from-red-500 first:to-yellow-500;
  }
</style>
