<script>
import Glow from "$lib/glow.svelte";
import Links from "$lib/links.svelte";
import Title from "$lib/title.svelte";
import Project from "$lib/project.svelte";
import Counter from "$lib/counter.svelte";

export let data;

const projects = [
  {
    url: "https://app.com",
    name: "App Name",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt dolore dolores id.",
  },
  {
    url: "https://app.com",
    name: "App Name",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt dolore dolores id.",
  },
  {
    url: "https://app.com",
    name: "App Name",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt dolore dolores id.",
  },
  {
    url: "https://app.com",
    name: "App Name",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt dolore dolores id.",
  },
];

const skills = ["TypeScript", "TailwindCSS", "Next.js", "SvelteKit"];
</script>

<html lang="en" class="">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <title>Mac Codes | Portfolio</title>
    <meta
      name="description"
      content="Mac is a JavaScript/TypeScript developer from the United Kingdom, working with TailwindCSS, Next.js, SvelteKit and more at 3 Sided Cube as a Frontend Developer."
    />
  </head>
  <body
    class="px-8 py-10 mx-auto space-y-9 min-h-screen max-w-xl flex-col gap-9 bg-neutral-950 text-neutral-400 text-sm md:py-16 md:space-y-20 md:max-w-4xl"
  >
    <header class="space-y-2">
      <Glow />
      <a href="mailto:maclong9@icloud.com">maclong9@icloud.com</a>
      <Links />
    </header>
    <main class="space-y-8">
      <h1 class="text-3xl mb-6">Hi, I'm Mac 👋</h1>
      <div class="space-y-2">
        <p>
          I am a seasoned web developer with over 3 years of experience.
          Currently honing my skills in NextJS, Typescript, and other
          cutting-edge technologies with the lovely folk at
          <a href="https://3sidedcube.com">3 Sided Cube</a>.
        </p>
        <p>
          In addition to my passion for coding, I also enjoy exploring the world
          of music composition and challenging myself with skateboard tricks
          whenever I'm not recovering from an injury.
        </p>
        <Counter clicks={Number(data.clicks)} />
      </div>
      <div class="space-y-2">
        <Title text="Skills" />
        <span class="ml-2">
          <!-- TODO: Add & when second to last. -->
          {
            skills.map(
              (skill, i) => skill + (i < skills.length - 1 ? ", " : "")
            )
          }.
        </span>
      </div>
      <div class="space-y-2">
        <Title text=" Projects" />
        <div
          class="flex flex-col items-center space-y-4 mdl:flex-row mdl:flex-wrap mdl:space-y-0 mx-auto w-full"
        >
          {#each projects as project}
            <Project {...project} />
          {/each}
        </div>
      </div>
    </main>
    <footer class="space-y-4">
      <Title text="Contact" />
      <span>
        Email me at
        <a href=" mailto:maclong9@icloud.com">maclong9@icloud.com</a>
        or follow me on the various social links below.
      </span>
      <Links />
    </footer>
  </body>
</html>

<style global lang="postcss">
  h1, h2, h3 {
    @apply text-white;
  }

  a {
    @apply transition-colors duration-300 hover:text-neutral-100;
  }

  span a,
  p a {
    @apply underline;
  }
</style>
