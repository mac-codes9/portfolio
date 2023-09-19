<script>
  import { onMount } from "svelte";
  export let clicks, clicked;
  let error, oldClicks, newClicks;

  onMount(() => {
    const interval = setInterval(async () => {
      oldClicks = clicks;
      newClicks = await fetch("/").then((res) => res.json());
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  $: setInterval(() => {
    if (oldClicks < newClicks) {
      oldClicks++;
      clicks = oldClicks;
    }
  }, 100);

  const incrementCount = async () => {
    clicks++;
    clicked = true;
    try {
      const newClicks = await fetch("/", { method: "PUT" });
      clicks = await newClicks.json();
    } catch (e) {
      clicks--;
      clicked = false;
      error = e;
    }
  };
</script>

<div class="mt-5 space-x-2">
  <span>{!error ? `${Number(clicks)} Clicks` : error}</span>
  <button 
    on:click={incrementCount}
    disabled={clicked}
  >
    {!clicked ? "Say Hi!" : "Thank you!"}
  </button>
</div>