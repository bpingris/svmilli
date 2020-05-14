<script>
  import { fade } from "svelte/transition";
  export let show = false;
  export let canClose = true;

  function handleBackgroundClick() {
    if (!canClose) return;
    show = false;
  }
</script>

<style>
  .modal {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #00000033;
    z-index: 100;
  }

  .content {
    position: relative;
    z-index: 101;
  }
</style>

{#if show}
  <div transition:fade={{ duration: 150 }} class="modal">
    <div class="background" on:click={handleBackgroundClick} />
    <div class="content">
      <slot />
    </div>
  </div>
{/if}
