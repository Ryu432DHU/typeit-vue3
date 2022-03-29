<template>
  <div class="bg-neutral-800 text-white text-center text-2xl p-8">{{ word }}</div>
</template>

<script setup>
defineProps({
  word: String
})
</script>