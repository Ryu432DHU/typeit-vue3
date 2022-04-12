<template>
  <p>{{ someInput }}</p>
</template>

<scirpt setup>
import { ref } from 'vue'

defineProps({
  someInput: String
})

const someLocalInput = ref("")

</scirpt>