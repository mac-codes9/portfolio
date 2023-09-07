<script>
  export let url, name, description;
</script>

<a
  href={url}
  class="w-full border-neutral-400 rounded-md border-[.5px] py-4 px-2 group transition-all relative duration-700 hover:border-neutral-100 hover:scale-105 hover:-translate-y-1 hover:text-neutral-400 hover:border-[1px] mdl:w-[400px] mdl:mx-2 mdl:my-4"
>
  <h3 class="text-neutral-100 mb-4">{name}</h3>
  <p class="max-w-md">{description}</p>
</a>
