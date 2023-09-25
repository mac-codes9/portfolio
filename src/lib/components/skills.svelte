<script>
  import Title from "$lib/components/title.svelte";

  const skills = [
    {
      heading: "Web Development",
      description:
        "With a good knowledge of Web technologies such as HTML, CSS & JavaScript I craft beautiful, high speed websites with cutting-edge technologies including Next.js, TypeScript & TailwindCSS.",
    },
    {
      heading: "Systems Knowledge",
      description:
        "I have a solid understanding of unix and continuos integration systems including the shell, git, containers, scripting languages like lua and python, and SQL and NoSQL Database Services. I also have experience workng with cloud providers including Google, AWS, Vercel & more.",
    },
    {
      heading: "Soft Skills",
      description:
        "Communication, time management and attention to detail are some great strengths of mine due to customer service experience I am great working within a team. I'm also quite good at thinking on my feet and problem solving.",
    },
  ];
</script>

<div class="space-y-2 max-w-lg">
  <Title text="Skills" />

  {#each skills as { heading, description }}
    <h2>{heading}</h2>
    <p>{description}</p>
  {/each}
</div>
