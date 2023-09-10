<script>
import Title from '$lib/components/title.svelte';

const skills = [
  "Shell",
  "Git",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Lua",
  "Database Management",
  "Cloud Services",
  "DevOps",
  "CI/CD",
  "Testing",
];
</script>

<div class='space-y-2 max-w-lg'>
  <Title text='Skills' />
  <div class="md:ml-2">
  {#each skills as skill, i}
    <span>
     {skill}{#if skills.length - i === 1}.{/if}{#if skills.length - i === 2}{` & `}{/if}{#if skills.length - i !== 1 && skills.length - i !== 2}, {/if}
    </span>
  {/each}
  </div>
</div>
