<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink } from 'vue-router'
import Divider from '../components/Divider.vue'
</script>

<template>
  <main class="min-h-screen w-full bg-gradient-to-b from-emerald-800 to-zinc-900 flex items-center justify-center">
    <div class="flex justify-center items-center text-white text-2xl flex-col
      gap-2">
      <RouterLink to="/login">Login</RouterLink>
        <Divider>
          or
        </Divider>
      <RouterLink to="/signup">Sign up</RouterLink>
    </div>
  </main>
</template>
