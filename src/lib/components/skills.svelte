<script>
  import Title from "$lib/components/title.svelte";

  const skills = [
<<<<<<< HEAD
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
=======
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
>>>>>>> 5331502c293e5fb3cc6ad23061aaf37ed1bb7c64
  ];
</script>

<div class="space-y-2 max-w-lg">
  <Title text="Skills" />
<<<<<<< HEAD

  {#each skills as { heading, description }}
    <h2>{heading}</h2>
    <p>{description}</p>
=======
  {#each skills as skill, i}
    {skill}{punctuate(skills.length, i)}
>>>>>>> 5331502c293e5fb3cc6ad23061aaf37ed1bb7c64
  {/each}
</div>
