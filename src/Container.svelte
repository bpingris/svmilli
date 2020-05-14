<script>
  let className = "";
  export { className as class };

  $: classes = `container ${className}`;
</script>

<div class={classes}>
  <slot />
</div>
