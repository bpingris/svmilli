<script>
  let className = "";
  export { className as class };

  export let justify = null;
  export let align = null;
  $: classes = `row ${className}`;
</script>

<style>
  .justify-center {
    justify-content: center;
  }

  .items-center {
    align-items: center;
  }
</style>

<div
  class={classes}
  class:justify-center={justify === 'center'}
  class:items-center={align === 'center'}>
  <slot />
</div>
