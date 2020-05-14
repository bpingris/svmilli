# Modal

modal

```example
<script>
  import { Modal, Button } from 'svmilli'

  export let show = false;
</script>

<Button on:click={() => show = !show}>
  open
</Button>
<Modal bind:show>
hello
</Modal>
```