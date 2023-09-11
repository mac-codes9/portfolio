<script>
  import { onMount } from 'svelte';
  import { invalidate } from '$app/navigation';
  export let clicks, clicked;
  let error, oldClicks, newClicks;

	onMount(() => {
		const interval = setInterval(async () => {
      clicks = await fetch('/').then(res => res.json());
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	});

  setInterval(() => {
    if (oldClicks < newClicks) {
      oldClicks++;
      clicks = oldClicks;
    }
  }, 5);

  const incrementCount = async () => {
    clicks++;
    clicked = true;
    try {
      const newClicks = await fetch('/', {method: 'PUT'});
      clicks = await newClicks.json();
    } catch (e) {
      clicks--;
      clicked = false;
      error = e;
    }
  }
</script>

<div class="mt-5 space-x-2">
  <span>{!error ? `${Number(clicks)} Clicks` : error}</span>
  <button 
    class="text-neutral-900 bg-neutral-100 font-bold px-2 py-1 rounded-md transition-colors duration-300 hover:bg-neutral-400 disabled:bg-neutral-400"
    on:click={incrementCount}
    disabled={clicked}
  >
  {!clicked ? 'Say Hi!' : 'Thank you!'}
  </button>
</div>
