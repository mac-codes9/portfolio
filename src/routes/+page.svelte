<script>
import Hero from '$lib/components/hero/hero.svelte';
import Skills from '$lib/components/skills.svelte';
import Projects from '$lib/components/projects/list.svelte';

export let data;
const {clicks, clicked} = data;
</script>

<Hero {clicks} {clicked} />
<Skills />
<Projects />
