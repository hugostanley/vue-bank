<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
});

const classVariants = {
  'text-white bg-zinc-950 hover:bg-zinc-800': props.variant === "primary",
  'text-zinc-950 border border-zinc-200 bg-white hover:bg-zinc-100': props.variant === "secondary"
}

</script>

<template>
  <button class="w-full rounded-lg shadow-sm text-center py-3
    font-medium transition-all" :class="classVariants">
    <slot />
  </button>
</template>
