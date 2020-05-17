<script>
  export let type = 'text';
  export let value;
  export let placeholder = null;

  function handleInput(e) {
    value = e.target.value;
  }
</script>

{#if type === 'textarea'}
  <textarea on:input={handleInput}>{value}</textarea>
{:else}
  <input {type} {value} on:input={handleInput} {placeholder}/>
{/if}
