<script>
  import { id as uid } from "./utils";
  export let label = null;
  export let placeholder = null;
  export let value = "";
  export let type = "text";
  export let id = null;

  const _id = label ? id || `milli-input-${uid()}` : null;

  function handleInput(e) {
    value = e.target.value;
  }
</script>

{#if _id}
  <label for={_id}>{label}</label>
{/if}
{#if type === 'textarea'}
  <textarea on:input={handleInput} id={_id}>{value}</textarea>
{:else}
  <input {type} {value} on:input={handleInput} {placeholder} id={_id} />
{/if}