<template>
  <p :style="alcoholicDrinkMsgStyle">age: {{ age }} / {{  alcoholicDrinkMsg }}</p>
  <p>{{ canGetAlcoholicDrink }}</p>
  <div>
    <button class="border-2 border-gray-500 mr-4 px-4 py-2 rounded-md" @click="incrementAge">+1 age</button>
    <button class="border-2 border-gray-500 px-4 py-2 rounded-md" @click="decrementAge">-1 age</button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const age = ref(20)
const canGetAlcoholicDrink = computed(() => age.value >= 20)
const alcoholicDrinkMsg = computed(() => {
  return canGetAlcoholicDrink.value
    ? "You can get alchoholic drink"
    : "You can not get alchoholic drink yet"
})
const alcoholicDrinkMsgStyle = computed(() => {
  return { color: canGetAlcoholicDrink.value ? "green" : "red"}
})

const incrementAge = () => { age.value++ }
const decrementAge = () => { age.value-- }

</script>