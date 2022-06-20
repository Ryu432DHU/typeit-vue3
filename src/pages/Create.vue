<template>
  <ti-sheet>
    <div class="w-11/12 mx-auto py-4">
      <template v-if="!isWordListCreated">
      <h1 class="text-2xl mb-4">Creating a new word list</h1>
      <ti-text-field v-model="wordListName" placeholder="Type the word list name" />
      <p v-if="!isWordListNameAvailable">The word list  "{{ wordListName }}" already existis.</p>
      <ti-word-list-editor :words="words" />
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
import { ref, computed, inject } from 'vue';
import { WordList } from '@/types.js'
import { useCreateWordList } from './composables/useCreateWordList';
import TiWordListEditor from '@/components/organisms/TiWordListEditor.vue';

const {
  wordListName,
  words,
  isWordListNameAvailable,
  isWordListAvailable,
} = useCreateWordList()

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
