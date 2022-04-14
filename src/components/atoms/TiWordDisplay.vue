<template>
  <div class="relative">
    <div class="inline-block text-sm absolute px-4 py-1" :class="stateChipClassList">state: {{ gameState }}</div>
    <template v-if="gameState !== 'FINISHED'">
      <div class="bg-neutral-800 text-white text-center text-2xl p-10">{{ word }}</div>
    </template>
    <template v-else>
      <div class="bg-green-600 text-white text-center text-2xl p-10">Clear Time: </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  word: String,
  gameState: String
})

let gameStateColor;

if(props.gameState === "STAND_BY"){
  gameStateColor = "orange"
} else if(props.gameState === "PLAYING"){
  gameStateColor = "cyan"
} else if("FINISHED"){
  gameStateColor = "green"
}

const stateChipClassList = [`bg-${gameStateColor}-500`, "text-white"]
</script>