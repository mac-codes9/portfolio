<script>
  export let clicks, clicked;
  let error;

  const incrementCount = async () => {
    clicks++;
    try {
      const newClicks = await fetch('/');
      clicks = await newClicks.json();
      clicked = true;
    } catch (e) {
      clicks--;
      error = e;
    }

  }
</script>

<div class="mt-5 space-x-2">
  <span>{!error ? `${clicks} Clicks` : error}</span>
  <button 
    class="text-neutral-900 bg-neutral-100 font-bold px-2 py-1 rounded-md transition-colors duration-300 hover:bg-neutral-400 disabled:bg-neutral-400"
    on:click={incrementCount}
    disabled={clicked}
  >
  {!clicked ? 'Say Hi!' : 'Thank you!'}
  </button>
</div>
