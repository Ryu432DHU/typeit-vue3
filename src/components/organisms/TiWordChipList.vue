<template>
<div class="flex flex-wrap">
  <ti-chip v-for="(word, index) in wordList" :color="chipColor(index)">{{ word }}</ti-chip>
</div>
</template>

<script setup lang="ts">
import { TiColor } from '@/types'
import TiChip from '../atoms/TiChip.vue';

const props = defineProps({
  wordList: Array,
  currentWordIndex: Number,
})

const chipColor = (index: number): TiColor => {
  if(index < props.currentWordIndex){
    return "green"
  }
}
</script>