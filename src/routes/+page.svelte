<script>
  import Hero from "$lib/components/hero/hero.svelte";
  import Projects from "$lib/components/projects.svelte";
  import Skills from "$lib/components/skills.svelte";

  export let data;
  const { clicks, clicked } = data;
</script>

<Hero {clicks} {clicked} />
<Skills />
<Projects />
