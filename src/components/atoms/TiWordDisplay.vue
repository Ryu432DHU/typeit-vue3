<template>
  <template v-if="!isGameFinished">
    <div class="bg-neutral-800 text-white text-center text-2xl p-8">{{ word }}</div>
  </template>
  <template v-else>
    <div class="bg-green-600 text-white text-center text-2xl p-8">Clear Time: </div>
  </template>
</template>

<script setup>
defineProps({
  word: String,
  isGameFinished: Boolean
})
</script>