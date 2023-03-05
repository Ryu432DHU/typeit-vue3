<template>
  <ti-nav-bar />
  <router-view />
</template>

<script setup lang="ts">
import { WordList, WordListRecord } from './types';
import { ref, onMounted, provide, watch, Ref } from 'vue';
import { useStore } from 'vuex';
import TiNavBar from './components/atoms/TiNavBar.vue';

const store = useStore()
const wordLists: Ref<WordList[]> = ref(store.getters.wordLists)
const addTimeRecord = (wordListName: string, newRecord: WordListRecord) => {
  const index = wordLists.value.findIndex(wordList =>wordList.name === wordListName)
  if(index >= 0){
    wordLists.value[index].records.push(newRecord)
  } else {
    throw new Error('The word list is not found')
  }
}
const addWordList = (newWordList: WordList) => {
  wordLists.value.push(newWordList)
}
const deleteWordLists = () => {
  localStorage.clear()
}
const updateWordList = (wordListName: string, newWordList: WordList) => {
  const targetWordListIndex = wordLists.value.findIndex(wordList => wordList.name === wordListName)
  wordLists.value[targetWordListIndex].name = newWordList.name
  wordLists.value[targetWordListIndex].words = newWordList.words
  wordLists.value[targetWordListIndex].records = newWordList.records
}

provide("wordLists", wordLists)
provide("addTimeRecord", addTimeRecord)
provide("addWordList", addWordList)
provide("deleteWordLists", deleteWordLists)
provide("updateWordList", updateWordList)

</script>
