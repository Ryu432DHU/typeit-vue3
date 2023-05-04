<template>
  <ti-nav-bar />
  <router-view />
</template>

<script setup lang="ts">
import { WordList, WordListRecord } from './types';
import { ref, provide, Ref } from 'vue';
import { useStore } from '@/store/store';
import TiNavBar from './components/atoms/TiNavBar.vue';

const store = useStore()
const wordLists: Ref<WordList[]> = ref(store.getters.wordLists)
const addTimeRecord = (wordListName: string, newRecord: WordListRecord) => {
  const index = store.getters.findWordListIndexByName(wordListName)
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
const updateWordList = (newWordList: WordList) => {
  store.dispatch('tryUpdatingWordList', newWordList)
}

provide("wordLists", wordLists)
provide("addTimeRecord", addTimeRecord)
provide("addWordList", addWordList)
provide("deleteWordLists", deleteWordLists)
provide("updateWordList", updateWordList)

</script>
