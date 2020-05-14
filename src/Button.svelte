<script>
  export let outline = false;
  export let clear = false;
  export let full = false;

  let className = "";
  export { className as class };

  $: classes = `button ${className}`;
</script>

<style>
  .full {
    display: block;
    width: 100%;
  }
</style>

<button
  on:click
  class={classes}
  class:button-clear={clear}
  class:button-outline={outline}
  class:full>
  <slot />
</button>
