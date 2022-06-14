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
const deleteWordLists = () => {
  localStorage.clear()
}
const updateWordList = (wordListName: string, newWordList: WordList) => {
  const targetWordListIndex = wordLists.findIndex(wordList => wordList.name === wordListName)
  wordLists[targetWordListIndex].name = newWordList.name
  wordLists[targetWordListIndex].words = newWordList.words
  wordLists[targetWordListIndex].records = newWordList.records
}

provide("wordLists", wordLists)
provide("addTimeRecord", addTimeRecord)
provide("addWordList", addWordList)
provide("deleteWordLists", deleteWordLists)
provide("updateWordList", updateWordList)


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
