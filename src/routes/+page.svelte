<script>
import Hero from '$lib/components/hero/hero.svelte';
import Skills from '$lib/components/skills.svelte';
import Projects from '$lib/components/projects/list.svelte';

export let data;
</script>

<Hero clicks={data.clicks} clicked={data.clicked} />
<Skills />
<Projects />
