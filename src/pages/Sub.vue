<template>
  <ti-sheet class="p-8">
    <div class="mb-8">
      <h1>This is Sub.vue</h1>
      <router-link to="/" class="underline">Go to the top page</router-link>
      <ti-button>Hoge</ti-button>
    </div>
  </ti-sheet>
</template>

<script setup>
import { ref, computed } from 'vue';
import TiSheet from '../components/atoms/TiSheet.vue'

const simpleRef = ref(0)
const stringRef = ref("Hi")
const booleanRef = ref(false)

const computedNumber = computed(() => simpleRef.value + 19)
const computedString = computed(() => stringRef.value + ", new user!")

console.log("simpleRef", simpleRef)
console.log("stringRef", stringRef)
console.log("bookeanRef", booleanRef)
console.log("computedNumber", computedNumber)
console.log("computedString", computedString)
</script>

