  <script>
    import Title from '$lib/components/title.svelte';
    import Project from './item.svelte';
    const projects = [
     {
      url: 'https://3sidedcube.com',
      name: '3 Sided Cube',
      description: 'Frontend Developer role working with WordPress, React, Next and other tools.'
     },
     {
      url: 'https://whatsername.vercel.app/',
      name: 'Whatsername',
      description: 'Landing Page, Blog and Storefront built with Next.js, Stripe & Sanity.'
     }
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
