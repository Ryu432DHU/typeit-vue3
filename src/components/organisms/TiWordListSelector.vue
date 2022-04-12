<template>
  <div v-for="wordList in wordLists">
    <span>{{ wordList.name }}</span>
    <button @click="$emit('changeWordList', wordList.name)" class="border border-slate-300 px-4 py-1">Play</button>
  </div>
</template>

<script setup>
defineProps({
  wordLists: Array
})
defineEmits(['changeWordList'])


</script>