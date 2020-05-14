<script>
  export let thumbnail = null;
  export let thumbnailHeight = 200;

  let titleSlot = $$props.$$slots && $$props.$$slots.title !== undefined;
  let subtitleSlot = $$props.$$slots && $$props.$$slots.subtitle !== undefined;
  let contentSlot = $$props.$$slots && $$props.$$slots.content !== undefined;
  let actionsSlot = $$props.$$slots && $$props.$$slots.actions !== undefined;

  console.log($$props.$$slots);
  $: thumbnailStyle = `
    background-image: url(${thumbnail});
    background-position: center center;
    background-size: cover;
    height: ${thumbnailHeight}px;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  `;
</script>

<style>
  .card {
    border-radius: 0.4rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.171),
      0 10px 10px -5px rgba(0, 0, 0, 0.068);
  }

  .title {
    padding: 2rem 2rem 0;
  }
  .subtitle {
    padding: 0 2rem;
  }
  .content {
    padding: 0 2rem;
  }
  .actions {
    padding: 0 2rem 2rem;
  }
</style>

<div class="card">
  {#if thumbnail}
    <div style={thumbnailStyle} />
  {/if}
  {#if titleSlot}
    <h3 class="title">
      <slot name="title" />
    </h3>
  {/if}

  {#if subtitleSlot}
    <h4 class="subtitle">
      <slot name="subtitle" />
    </h4>
  {/if}

  {#if contentSlot}
    <p class="content">
      <slot name="content" />
    </p>
  {/if}

  {#if actionsSlot}
    <div class="actions">
      <slot name="actions" />
    </div>
  {/if}
</div>
