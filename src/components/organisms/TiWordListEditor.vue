<template>
  <ti-simple-table class="mb-4">
    <tr>
      <th>No.</th>
      <th>Word</th>
      <th>Actions</th>
    </tr>
    <tr v-for="(word, index) in localWords" :key="index">
      <td>{{ index + 1}}</td>
      <td>
        <ti-text-field v-model="localWords[index]" />
      </td>
      <td>
        <ti-button @click="moveToUp(index)">Up</ti-button>
        <ti-button @click="moveToDown(index)" class="mx-4">Down</ti-button>
        <ti-button @click="deleteWord(index)">Delete</ti-button>
      </td>
    </tr>
    <tr>
      <td>{{ localWords.length + 1}}</td>
      <td>
        <ti-text-field v-model="wordToAdd" ref="wordInputField" placeholder="Type a new word"/>
      </td>
      <td>
        <ti-button @click="addNewWord">Add</ti-button>
      </td>
    </tr>
  </ti-simple-table>
</template>

<script setup lang="ts">
import { ref, nextTick, watch } from 'vue';
const props = defineProps<{
  modelValue: string[]
}>()
const emits = defineEmits(['update:modelValue'])

const localWords = ref([...props.modelValue])
const wordToAdd = ref("")
const wordInputField = ref()

watch(localWords.value, () => {
  emits('update:modelValue', localWords.value)
})

const addNewWord = () => {
  localWords.value.push(wordToAdd.value)
  wordInputField.value.focusInput()
  nextTick(() => wordToAdd.value = "")
}
const moveToUp = (index: number) => {
  if(localWords.value[index - 1]){
    [localWords.value[index - 1], localWords.value[index]] = [localWords.value[index], localWords.value[index - 1]]
  }
}
const moveToDown = (index: number) => {
  if(localWords.value[index + 1]){
    [localWords.value[index + 1], localWords.value[index]] = [localWords.value[index], localWords.value[index + 1]]
  }
}
const deleteWord = (index: number) => localWords.value.splice(index, 1)

</script>