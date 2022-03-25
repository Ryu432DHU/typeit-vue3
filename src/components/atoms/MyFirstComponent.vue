<template>
  <p>Drink name:{{ alcoholicDrinkName }}</p>
  <p :style="alcoholicDrinkMsgStyle">age: {{ age }} / {{  alcoholicDrinkMsg }}</p>
  <p>{{ canGetAlcoholicDrink }}</p>
  <div>
    <button class="border-2 border-gray-500 mr-4 px-4 py-2 rounded-md" @click="incrementAge">+1 age</button>
    <button class="border-2 border-gray-500 px-4 py-2 rounded-md" @click="decrementAge">-1 age</button>
  </div>
  <slot name="header" />
  <slot name="default" />
  <slot>Fallback content</slot>
  <slot name="footer" />
</template>

<script setup>
import { computed, ref } from 'vue'

defineProps({
  alcoholicDrinkName: String
})

const age = ref(20)
const canGetAlcoholicDrink = computed(() => age.value >= 20)
const alcoholicDrinkMsg = computed(() => {
  const possibility = canGetAlcoholicDrink.value ? "can" : "can not"
  return `You ${possibility} get alcoholic drink`
})
const alcoholicDrinkMsgStyle = computed(() => {
  return { color: canGetAlcoholicDrink.value ? "green" : "red"}
})

const incrementAge = () => { age.value++ }
const decrementAge = () => { age.value-- }

</script>