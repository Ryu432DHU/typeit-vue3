<template>
  <ti-simple-table class="mb-4">
    <tr>
      <th>No.</th>
      <th>Word</th>
      <th>Actions</th>
    </tr>
    <tr v-for="(word, index) in words" :key="index">
      <td>{{ index + 1}}</td>
      <td>
        <ti-text-field v-model="words[index]" />
      </td>
      <td>
        <ti-button @click="moveToUp(index)">Up</ti-button>
        <ti-button @click="moveToDown(index)" class="mx-4">Down</ti-button>
        <ti-button @click="deleteWord(index)">Delete</ti-button>
      </td>
    </tr>
    <tr>
      <td>{{ words.length + 1}}</td>
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
import { ref, nextTick, onMounted } from 'vue';
const props = defineProps<{
  words: string[]
}>()

const localWords = ref(props.words)
const wordToAdd = ref("")
const wordInputField = ref()

const addNewWord = () => {
  localWords.value.push(wordToAdd.value)
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