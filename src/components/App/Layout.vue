<script setup>
import SideBar from './SideBar.vue'
</script>

<template>
  <div class="flex min-h-screen w-full">
    <SideBar />
    <main class="grow p-16">
      <slot />
    </main>
  </div>
</template>
