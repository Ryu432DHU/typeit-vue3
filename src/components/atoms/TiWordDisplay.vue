<template>
  <div class="relative">
    <div class="inline-block text-sm text-white absolute px-4 py-1" :class="stateChipColor">state: {{ gameState }}</div>
    <template v-if="gameState === 'FINISHED'">
      <div class="bg-green-600 text-white text-center text-2xl p-10">Clear Time: {{ fixedClearTime }} seconds</div>
    </template>
    <template v-else>
      <div class="bg-neutral-800 text-white text-center text-2xl p-10">
        <span v-for="(letter, index) in word.split('')" :class="computeHighlightColor(inputAccuracyCollections[index])">{{ letter }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  word: String,
  inputAccuracyCollections: Array,
  gameState: String,
  clearTime: [Number, String]
})

const computeHighlightColor = value => {
  if(value === true){
    return "text-green-500"
  } else if(value === false){
    return "text-red-500"
  } else if(value === undefined){
    return ""
  }
}

const fixedClearTime = computed(() => {
  if(typeof props.clearTime === "number"){
    return Math.round((props.clearTime / 1000) * 10) / 10
  } else if(typeof props.clearTime === "string"){
    return ""
  }
})

const stateChipColor = computed(() => {
  const state = props.gameState
  if(state === "STAND_BY"){
    return "bg-orange-500"
  } else if(state === "PLAYING"){
    return "bg-cyan-500"
  } else if(state === "FINISHED"){
    return "bg-green-500"
  }
})
</script>