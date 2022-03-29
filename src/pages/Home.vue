<template>
  <ti-sheet>
    <ti-word-display :word="'hoge'"></ti-word-display>
    <ti-word-input-form></ti-word-input-form>
    <div class="container mx-auto">
      <div class="w-4/5 mx-auto">
        <h2 class="text-2xl mb-4">Words | {{ wordListName }}</h2>
        <ti-word-chip-list :wordList="wordList[0].words"></ti-word-chip-list>
      </div>
    </div>
  </ti-sheet>
</template>

<script setup>
import { ref } from 'vue'
import TiWordChipList from '../components/organisms/TiWordChipList.vue';
import TiSheet from '../components/atoms/TiSheet.vue'
import TiWordDisplay from '../components/atoms/TiWordDisplay.vue'
import TiWordInputForm from '../components/atoms/TiWordInputForm.vue'

const wordLists = [
  {
    name: "Rounded",
    words: ["rounded-none","rounded-sm", "rounded", "rounded-md", "rounded-lg", "rouded-xl", "rounded-2xl", "rounded-3xl"],
    records: [{ date: new Date(), time: 100 }]
  },
  {
    name: "Colors",
    words: ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    records: [{ date: new Date(), time: 100 }]
  },
]

const wordListName = ref("Rounded")
const wordList = wordLists.filter(wordList => wordList.name === wordListName.value)
</script>