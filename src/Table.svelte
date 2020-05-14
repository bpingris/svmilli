<script>
  export let headers;
  export let data;

  let className = "";
  export { className as class };

  $: classes = `${className}`;
</script>

<table class={classes}>
  <thead>
    <tr>
      {#each headers as header}
        <th>{header.value}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as d}
      <tr>
        {#each d as value}
          <td>{value}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
