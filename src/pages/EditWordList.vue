<template>
  <ti-sheet>
    <div class="w-11/12 mx-auto py-4">
      <template v-if="isWordListExisting">
        <h1 class="text-2xl mb-6">Edit "{{ wordListName }}"</h1>
        <ti-text-field v-model="requestedWordListName"></ti-text-field>
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
        <div class="my-4">
          <ti-button class="mr-4">Save</ti-button>
          <router-link to="/edit">
            <ti-button>Cancel</ti-button>
          </router-link>
        </div>
      </template>
      <template v-else>
        <h1 class="text-2xl mb-6">The word list "{{ requestedWordListName }}" is not found</h1>
        <div class="my-4">
          <router-link to="/edit">
            <ti-button>Back</ti-button>
          </router-link>
        </div>
      </template>
    </div>
  </ti-sheet>
</template>

<script setup lang="ts">
import { ref, computed, inject, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import TiSheet from '@/components/atoms/TiSheet.vue';
import TiSimpleTable from '@/components/atoms/TiSimpleTable.vue';
import TiTextField from '@/components/atoms/TiTextField.vue';
import TiButton from '@/components/atoms/TiButton.vue';
import { WordList } from '@/types';
import { useWordLists } from './composables/useWordLists';

const router = useRouter()
const requestedWordListName = ref(String(router.currentRoute.value.params.id))
const { getWordList } = useWordLists()
const wordListName = computed(() => {
  return String(router.currentRoute.value.params.id)
})

const wordLists: WordList[] = inject('wordLists')!
const wordList = computed(() => getWordList(wordListName.value))
const isWordListExisting = computed(() => {
  const wordList = wordLists.filter(wordList => wordList.name === requestedWordListName.value)
  return wordList.length !== 0
})

const words = ref(wordList.value.words)
const wordToAdd = ref("")

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

</script>