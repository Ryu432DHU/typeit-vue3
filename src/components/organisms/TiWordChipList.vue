<template>
<div class="flex flex-wrap">
  <ti-chip v-for="(word, index) in wordList" :color="chipColor(index)">{{ word }}</ti-chip>
</div>
</template>

<script setup>
import TiChip from '../atoms/TiChip.vue';

const props = defineProps({
  wordList: Array,
  currentWordIndex: Number,
})

const chipColor = index => {
  if(index < props.currentWordIndex){
    return "bg-green-500"
  }
}
</script>