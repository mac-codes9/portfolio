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
        "Understanding of system architectures, databases, and server-side technologies to build scalable and efficient applications.",
    },
    {
      heading: "Soft Skills",
      description:
        "Strong communication skills for effective collaboration, problem-solving abilities, and the capacity to work well in a team.",
    },
    {
      heading: "Developer Tools",
      description:
        "Familiarity with a variety of development tools, version control systems (e.g., Git), and integrated development environments to streamline the development process.",
    }
]
</script>

<Title text="Skills" />
<div
  class="-mt-4 flex flex-col items-center space-y-4 mdl:flex-row mdl:flex-wrap mdl:items-start mdl:space-y-0 mx-auto mdl:px-4"
>
  {#each skills as { heading, description }}
    <div class="skill mdl:w-[326px] mdl:mb-8 md:mx-4 py-4 md:py-0">
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  {/each}
</div>

<style lang="postcss">
  .skill h2 {
    @apply text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mb-2;
  }
  .skill:first-child h2 {
    @apply from-red-500 to-orange-500;
  }
  .skill:nth-child(2) h2 {
    @apply from-yellow-500 to-green-500;
  }
  .skill:last-child h2 {
    @apply from-cyan-500 to-blue-500;
  }
</style>
