<script>
  import Title from "$lib/components/title.svelte";

  const skills = [
    {
      heading: "Web Development",
      description:
        "Beautiful, high speed websites and efficient systems programs with Rust, Next.js, Typescript, StoryBook, Tailwind & More.",
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
        "Familiarity with a variety of development tools, Git, and integrated development environments to streamline the development process.",
    },
  ];
</script>

<div>
  <Title text="Skills" />
  <div
    class="flex flex-col items-center justify-center mx-auto mdl:flex-row mdl:flex-wrap"
  >
    {#each skills as { heading, description }}
      <div class="skill my-4 mdl:w-[326px] md:py-0 md:mx-9">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    {/each}
  </div>
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
