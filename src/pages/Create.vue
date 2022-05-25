<template>
  <ti-sheet>
    <div class="w-11/12 mx-auto py-4">
      <template v-if="!isWordListCreated">
      <h1 class="text-2xl mb-4">Creating a new word list</h1>
      <ti-text-field v-model="wordListName" placeholder="Type the word list name" />
      <p v-if="!isWordListNameAvailable">The word list  "{{ wordListName }}" already existis.</p>
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
            <ti-text-field v-model="wordToAdd" placeholder="Type a new word"/>
          </td>
          <td>
            <ti-button @click="addNewWord">Add</ti-button>
          </td>
        </tr>
      </ti-simple-table>
      <ti-button :disabled="!isWordListAvailable" @click="createWordList">Create</ti-button>
      </template>
      <template v-else>
        <h1 class="text-2xl mb-4">The word list "{{ wordListName }}" has been created successfully</h1>
        <ti-simple-table>
          <tr>
            <th>No.</th>
            <th>Word</th>
            <th>Length</th>
          </tr>
          <tr v-for="(word, index) in words">
            <td>{{ index + 1}}</td>
            <td>{{ word }}</td>
            <td>{{ word.length }} characters</td>
          </tr>
        </ti-simple-table>
      </template>
    </div>
    <p class="hidden">{{ words }}</p>
  </ti-sheet>
</template>

<script setup lang="ts">
import { ref, computed, inject, nextTick } from 'vue';
import TiSheet from '@/components/atoms/TiSheet.vue'
import TiSimpleTable from '@/components/atoms/TiSimpleTable.vue';
import TiButton from '@/components/atoms/TiButton.vue';
import { WordList } from '@/types.js'
import TiTextField from '@/components/atoms/TiTextField.vue';

const wordLists: WordList[] = inject('wordLists')!
const wordListName = ref("Example")
const words = ref(["hoge", "foo", "bar"])
const wordToAdd = ref("")
const isWordListNameAvailable = computed(() => !wordLists.map(wordList => wordList.name).includes(wordListName.value))
const isWordListNameEmpty = computed(() => wordListName.value.length === 0)
const isWordListWordsEmpty = computed(() => words.value.length === 0)
const isWordListAvailable = computed(() => isWordListNameAvailable.value && !isWordListNameEmpty.value && !isWordListWordsEmpty.value)

const addNewWord = () => {
  words.value.push(wordToAdd.value)
  nextTick(() => wordToAdd.value = "")
}
const moveToUp = (index: number) => {
  if(words.value[index - 1]){
    [words.value[index - 1], words.value[index]] = [words.value[index], words.value[index - 1]]
  }
}
const moveToDown = (index: number) => {
  if(words.value[index + 1]){
    [words.value[index + 1], words.value[index]] = [words.value[index], words.value[index + 1]]
  }
}
const deleteWord = (index: number) => words.value.splice(index, 1)

const isWordListCreated = ref(false)
const addWordList: Function = inject("addWordList")!
const createWordList = (): WordList => {
  isWordListCreated.value = true
  const newWordList = {
    name: wordListName.value,
    words: words.value,
    records: []
  }
  
  addWordList(newWordList)

  return newWordList
}
</script>
