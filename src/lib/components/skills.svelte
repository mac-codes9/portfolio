<script>
  import Title from "$lib/components/title.svelte";
  import punctuate from "$lib/utilities/punctuate";

  const skills = [
    "Shell",
    "Git",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Lua",
    "Database Management",
    "Cloud Services",
    "CI/CD",
    "Containerisation",
    "Problem Solving",
    "Testing",
    "Communication",
    "Time Management",
  ];
</script>

<div class="space-y-2 max-w-lg">
  <Title text="Skills" />
  {#each skills as skill, i}
    {skill}{punctuate(skills.length, i)}
  {/each}
</div>
