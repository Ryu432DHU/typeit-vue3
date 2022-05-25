<template>
  <ti-nav-bar />
  <router-view />
</template>

<script setup lang="ts">
import { WordList, WordListRecord } from './types';
import { ref, reactive, onMounted, provide, watch } from 'vue';
import TiNavBar from './components/atoms/TiNavBar.vue';
import fetchWordLists from './store/wordLists'

let wordLists: WordList[] = reactive(fetchWordLists())
const addTimeRecord = (wordListName: string, newRecord: WordListRecord) => {
  const index = wordLists.findIndex(wordList =>wordList.name === wordListName)
  if(index >= 0){
    wordLists[index].records.push(newRecord)
  }
}
const addWordList = (newWordList: WordList) => {
  wordLists.push(newWordList)
}

provide("wordLists", wordLists)
provide("addTimeRecord", addTimeRecord)
provide("addWordList", addWordList)


onMounted(() => {
  const savedWordLists = localStorage.getItem("wordLists")
  if(savedWordLists){
    Object.assign(wordLists, JSON.parse(savedWordLists))
  }
  
  watch(wordLists, () => {
      localStorage.setItem("wordLists", JSON.stringify(wordLists))
    })
})
</script>
