<script lang="ts">
  import TailwindCss from "./TailwindCss.svelte";
</script>

<TailwindCss />

<div class="w-full h-screen flex flex-col">
  <header class="w-full h-12 bg-slate-200">
    <p>header</p>
  </header>
  <div class="h-full flex flex-row">
    <div id="sidebar" class="w-56 h-full bg-slate-100">
      <p>sidebar</p>
    </div>
    <main class="h-full grow bg-slate-50">
      <p>main area</p>
    </main>
  </div>
</div>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
