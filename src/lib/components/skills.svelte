<script>
const skills = [
  "TypeScript",
  "TailwindCSS",
  "Next.js",
  "SvelteKit",
  "HTML",
  "CSS",
  "JavaScript",
  "Lua",
  "Vim"
];
</script>

<div class='space-y-2'>
  <title text='Skills' />
  {#each skills as skill, i}
    <span>
      {skill}{i - skills.length !== 1 ? "," : " "} 
    </span>
  {/each}
</div>
