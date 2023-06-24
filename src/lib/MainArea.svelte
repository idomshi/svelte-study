<script lang="ts">
  function onclick(): void {
    console.log("clicked!");
  }

  let sliderValue = 0;
  $: posX = ((260 - 40) * sliderValue) / (100 - 0) + 40;

  function posToVal (pos: number): number {
    return Math.max(0, Math.min(100, (pos - 40) * (100 - 0) / (260 - 40)))
  }

  let isDragging = false;
  function dragstart(e: PointerEvent) {
    isDragging = true;
  }

  function dragmove(e: PointerEvent) {
    if (!isDragging) return
    sliderValue = posToVal(e.offsetX)
  }

  function dragend(e: PointerEvent) {
    if (!isDragging) return
    sliderValue = posToVal(e.offsetX)
    isDragging = false
  }
</script>

<main class="h-full grow bg-slate-50">
  <p>main area</p>
  <button
    type="button"
    class="px-4 h-8 bg-slate-300 border-2 border-slate-400 rounded"
    on:click={onclick}
  >
    push this button
  </button>

  <svg
    width="300" height="80"
    on:pointerleave={dragend}
  >
    <line x1="40" y1="40" x2="260" y2="40" stroke="#ccc" stroke-width="4" />
    <circle
      on:pointerdown={dragstart}
      on:pointermove={dragmove}
      on:pointerup={dragend}
      cx={posX}
      cy="40"
      r="8"
      stroke="#888"
      stroke-width="4"
      fill="#eee"
    />
  </svg>

  <p>{sliderValue}</p>
</main>
