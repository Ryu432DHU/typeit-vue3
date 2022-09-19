<template>
  <ti-nav-bar />
  <router-view />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import TiNavBar from './components/atoms/TiNavBar.vue';
import { useWordLists } from './pages/composables/useWordLists';

const {
  wordLists,
  addWordList,
  clearWordListsSavedInLocalStorage,
  updateWordList,
  addTimeRecord
} = useWordLists()


provide("wordLists", wordLists)
provide("addTimeRecord", addTimeRecord)
provide("addWordList", addWordList)
provide("deleteWordLists", clearWordListsSavedInLocalStorage)
provide("updateWordList", updateWordList)

</script>
