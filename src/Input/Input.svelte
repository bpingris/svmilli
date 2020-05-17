<script>
  import SvelteMilliInput from "./_Input.svelte";
  export let label = null;
  export let placeholder = null;
  export let value = "";
  export let type = "text";

  function handleInput(e) {
    value = e.target.value;
  }
</script>

{#if label}
  <label>
    {label}
    <SvelteMilliInput bind:value {type} {placeholder} />
  </label>
{:else}
  <SvelteMilliInput bind:value {type} {placeholder} />
{/if}
