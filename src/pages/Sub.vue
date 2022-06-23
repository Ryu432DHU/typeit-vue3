<template>
  <ti-sheet class="p-8">
    <div class="mb-8">
      <h1>This is Sub.vue</h1>
      <router-link to="/" class="underline">Go to the top page</router-link>
      <div class="mt-4">
        <ti-button @click="modalOpen = true">open modal</ti-button>
        <ti-modal v-if="modalOpen">
          <div class="modal p-8 w-6/12 m-auto bg-white">
            <p class="text-xl">Modal title</p>
            <p>modal content</p>
            <ti-button @click="modalOpen = false">Close modal</ti-button>
          </div>
        </ti-modal>
      </div>
    </div>
  </ti-sheet>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue';

const modalOpen = ref(false)

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


const obj = reactive({
  numbers: [1,2,3,4,5],
  letters: ["a", "b", "c", "d"]
})
const computedObject = computed(() => obj)

obj.numbers.push(5)

const itemsRef = ref(["a", "b", "c", "d"] as const)
const itemsRef2 = ref([1,2,3,4,5] as const)
const ref1 = ref([...itemsRef.value])
const ref2 = ref([...itemsRef2.value])
const ref3 = ref([...computedObject.value.numbers])
const ref4 = ref([...computedObject.value.letters])
</script>

