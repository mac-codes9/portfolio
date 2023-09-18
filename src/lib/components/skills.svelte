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
    "Containerisation",
    "DevOps",
    "CI/CD",
    "Testing",
    "Problem Solving",
    "Communication",
    "Time Management",
  ];
</script>

<div class="space-y-2 max-w-lg">
  <Title text="Skills" />

  {#each skills as skill, i}
    {skill}<span>{punctuate(skills.length, i)}</span>
  {/each}
</div>
