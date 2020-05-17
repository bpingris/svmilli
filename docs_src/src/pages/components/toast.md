# Toast

You can create `Toast` easily with `svmilli`.

Just import `Toast`, then call the `create` method attached to it.

```example
<script>
  import { Toast, Button } from 'svmilli'

  function createToast() {
    const o = ['bottom-left', 'top-right', 'top-left', 'bottom-right']
    Toast.create({message:'hello', position: o[Math.floor(Math.random()*o.length)]})
  }
</script>

<style>
.b {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

<div class="b">
  <Button on:click={createToast}>
    open
  </Button>
</div>
```

## Properties
```properties
message | Message to be displayed inside the toast | string(required)
duration | Delay until the toast disappear, 0 means infinite. | number(0)
```