<script lang="ts">
  const divide = 8;
  $: ticks = [...Array(divide + 1)].map((_, i) =>
    valToPos(((100 - 0) / divide) * i)
  );

  let sliderValue = 0;
  $: posX = valToPos(sliderValue);

  function valToPos(val: number): number {
    return ((260 - 40) * val) / (100 - 0) + 40;
  }

  function posToVal(pos: number): number {
    const step = (100 - 0) / divide;
    const val = Math.round(((pos - 40) * (100 - 0)) / (260 - 40) / step) * step;
    return Math.max(0, Math.min(100, val));
  }

  let isDragging = false;
  function dragstart(e: PointerEvent) {
    isDragging = true;
  }

  function dragmove(e: PointerEvent) {
    if (!isDragging) return;
    sliderValue = posToVal(e.offsetX);
  }

  function dragend(e: PointerEvent) {
    if (!isDragging) return;
    sliderValue = posToVal(e.offsetX);
    isDragging = false;
  }
</script>

<svg
  width="300"
  height="80"
  on:pointermove={dragmove}
  on:pointerup={dragend}
  on:pointerleave={dragend}
>
  <line x1="40" y1="40" x2="260" y2="40" stroke="#ccc" stroke-width="4" />
  {#each ticks as tick}
    <line x1={tick} y1="30" x2={tick} y2="50" stroke="#ccc" stroke-width="4" />
  {/each}
  <circle
    on:pointerdown={dragstart}
    cx={posX}
    cy="40"
    r="8"
    stroke="#888"
    stroke-width="4"
    fill="#eee"
  />
</svg>

<p>{sliderValue}</p>
