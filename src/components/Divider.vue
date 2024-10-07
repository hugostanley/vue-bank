<script setup>

</script>
<template>
  <div class="w-full flex items-center text-sm gap-2 text-zinc-400 font-medium">
    <div class="grow-1 h-[1px] border-t border-zinc-300 grow"></div>
    <span class="w-fit">
      <slot />
    </span>
    <div class="grow-1 h-[1px] border-t border-zinc-300 grow"></div>
  </div>
</template>
