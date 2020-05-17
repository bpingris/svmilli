# Modal

A simple modal, can add a card so it's pretty

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

```example
<script>
  import { Modal, Button, Card } from 'svmilli'

  export let show = false;
</script>

<Button on:click={() => show = !show}>
  open
</Button>
<Modal bind:show>
<Card>
  <div slot="title">
    Delete this resource ?
  </div>
  <div slot="subtitle">
    This can't be undo
  </div>
  <div slot="actions">
    <Button clear on:click={() => show = false}>
      Close
    </Button>
    <Button on:click={() => show = false}>
      Confirm
    </Button>
  </div>
</Card>
</Modal>
```

