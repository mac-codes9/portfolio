<script>
  import Counter from './counter.svelte';
  export let clicks, clicked;
</script>

<h1 class="text-3xl mb-6">Hi, I'm Mac 👋</h1>
<div class="space-y-2">
 <p>
    I am an experienced developer with over 3 years of experience. Currently
    honing my skills in NextJS, Typescript, and other cutting-edge technologies.
    I am also learning developer tools and systems programming with Rust and Zig.
  </p>
  <p>
    In addition to my passion for programming, I also enjoy exploring the world of
    music composition and challenging myself with skateboard tricks whenever
    I'm not recovering from an injury.
  </p>
  <Counter {clicks} {clicked} />
</div>
