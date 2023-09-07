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
  "Vim",
];
</script>

<div class="space-y-2">
  <Title text=" Skills" />
  <span>
      {skills.map((skill, i) => skill + (i < skills.length - 1 ? ", " : ""))}.
  </span>
</div>
