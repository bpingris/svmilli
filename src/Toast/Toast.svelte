<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  export let open;
  export let duration = 5000;
  export let message;
  export let position = 'bottom-left'
  $: {
    if (open) {
      if (duration > 0) {
        setTimeout(() => {
          open = false;
        }, duration);
      }
    }
  }
  $: fly_y = { y: position.includes('bottom') ? 50 : -50 }
  $: classes = `toast ${position.replace(/-/g, '')}`
</script>

<style>
.toast {
  border: 1px solid #c5c5c5;
  display: inline-block;
  position: absolute;
  background: white;

  margin: 1.5rem;
  border-left: 0.5rem solid #9b4dca;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding: 1rem 3rem;
}

.toast.topleft {
  top: 0;
  left: 0;
} 

.toast.topright {
  top: 0;
  right: 0;
} 

.toast.bottomleft {
  bottom: 0;
  left: 0;
} 

.toast.bottomright {
  bottom: 0;
  right: 0;
} 
</style>

{#if open}
  <div class={classes}  transition:fly={fly_y}>{message}</div>
{/if}
