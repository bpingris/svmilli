<script>
  export let size = 0;
  export let offset = 0;

  let className = "";
  export { className as class };

  const step = "10 20 25 33 40 50 60 67 75 80 90 100".split(" ");

  function b() {
    if (size === 0) return "";
    return `column-${step[size-1]}`;
  }

  function o() {
    if (offset === 0) return "";
    return `column-offset-${step[offset - 1]}`;
  }

  console.log(className);
  

  $: classes = `column ${b()} ${o()} ${className}`.trim();
</script>

<div class={classes}>
  <slot />
</div>
