  <script>
    import Title from '$lib/components/title.svelte';
    import Project from './item.svelte';
    const projects = [
     {
       url: 'https://app.com',
       name: 'App Name',
       description:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt dolore dolores id.',
     },
     {
       url: 'https://app.com',
       name: 'App Name',
       description:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt dolore dolores id.',
     },
     {
       url: 'https://app.com',
       name: 'App Name',
       description:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt dolore dolores id.',
     },
     {
       url: 'https://app.com',
       name: 'App Name',
       description:

    ];
</script>

<div class='space-y-2'>
 <Title text='Projects' />
 <div class='flex flex-col items-center space-y-4 mdl:flex-row mdl:flex-wrap mdl:space-y-0 mx-auto w-full pb-10'>
    {#each projects as project}
      <Project {...project} />
    {/each}
  </div>
</div>
