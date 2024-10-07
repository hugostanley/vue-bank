<script setup>
  /*
  * This is a reusable vue component that extends the <input /> element.
  * See views/Login.vue for a sample implementation. 
  * */
  const model = defineModel()

</script>
<template>
  <input v-model="model" class="w-full border border-zinc rounded-lg text-lg py-3 px-4" />
</template>
