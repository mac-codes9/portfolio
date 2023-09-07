<script>
  export let clicks;

  const incrementCount = async () => {
    clicks++;
    const newClicks = await fetch('/');
    clicks = await newClicks.json();
  }
</script>

<div class="mt-5 space-x-2">
  <span>{clicks} Clicks</span>
  <button 
    class="text-neutral-900 bg-neutral-100 font-bold px-2 py-1 rounded-md transition-colors duration-300 hover:bg-neutral-400"
    on:click={incrementCount}
  >
   Say Hi!
  </button>
</div>
