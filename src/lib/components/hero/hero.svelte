<script>
  import Counter from "./counter.svelte";
  export let clicks, clicked;
</script>

<div class="space-y-2 w-full max-w-lg mx-auto md:max-w-4xl">
  <h1 class="text-3xl mb-6">Hi, I'm Mac 👋</h1>
  <p class="max-w-3xl">
    I am a software developer, incredibly passionate about building a healthy,
    happy and sustainable future for planet earth and beyond, through technology
    and general life.
  </p>
  <p class="max-w-3xl">
    In addition to programming, I also enjoy exploring the world of music
    composition and challenging myself with skateboard tricks.
  </p>
  <div class="pt-4 flex items-center space-x-2">
    <Counter {clicks} {clicked} />
    <a
      href="https://github.com/mac-codes9"
      class="button no-underline flex items-center gap-x-[2px] bg-neutral-100 hover:bg-neutral-400 text-neutral-900"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-github"
        ><path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        ></path></svg
      >
      GitHub
    </a>
  </div>
</div>
