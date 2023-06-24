<script lang="ts">
  import TailwindCss from "./TailwindCss.svelte";
  import Header from "./lib/Header.svelte";
  import MainArea from "./lib/MainArea.svelte";
  import Sidebar from "./lib/Sidebar.svelte";
</script>

<TailwindCss />

<div class="w-full h-screen flex flex-col">
  <Header />
  <div class="h-full flex flex-row">
    <Sidebar />
    <MainArea />
  </div>
</div>
