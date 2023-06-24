<script lang="ts">
  function onclick(): void {
    console.log("clicked!");
  }
</script>

<button
  type="button"
  class="px-4 h-8 bg-slate-300 border-2 border-slate-400 rounded"
  on:click={onclick}
>
  push this button
</button>
