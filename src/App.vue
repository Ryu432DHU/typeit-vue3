<template>
  <ti-nav-bar />
  <router-view />
</template>

<script setup>
import { ref, reactive, onMounted, provide, watch } from 'vue';
import TiNavBar from './components/atoms/TiNavBar.vue';
import fetchWordLists from './store/wordLists.ts'

let wordLists = reactive(fetchWordLists())
const addTimeRecord = (wordListName, newRecord) => {
  const index = wordLists.findIndex(wordList =>wordList.name === wordListName)
  if(index >= 0){
    wordLists[index].records.push(newRecord)
  }
}

provide("providedWordLists", wordLists)
provide("addTimeRecord", addTimeRecord)


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
