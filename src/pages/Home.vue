<template>
  <ti-sheet>
    <ti-word-display :word="currentWord" :isGameFinished="isGameFinished"></ti-word-display>
    <ti-word-input-form v-model="wordInputFieldValue"></ti-word-input-form>
    <div class="container mx-auto my-4">
      <div class="w-11/12 mx-auto">
        <h2 class="text-2xl mb-4">Words | {{ wordListName }}</h2>
        <ti-word-chip-list :wordList="wordListWords"></ti-word-chip-list>
      </div>
      <div class="w-11/12 mx-auto">
        <ti-word-list-selector @changeWordList="changeWordList" :wordLists="wordLists" />
      </div>
    </div>
  </ti-sheet>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import TiWordChipList from '../components/organisms/TiWordChipList.vue';
import TiSheet from '../components/atoms/TiSheet.vue'
import TiWordDisplay from '../components/atoms/TiWordDisplay.vue'
import TiWordInputForm from '../components/atoms/TiWordInputForm.vue'
import TiWordListSelector from '../components/organisms/TiWordListSelector.vue';

const wordLists = [
  {
    name: "example",
    words: ["qw", "er", "ty"],
    records: [{ date: new Date(), time: 100 }]
  },
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

const wordListName = ref("example")
const changeWordList = newWordListName => wordListName.value = newWordListName

const wordListWords = computed(() => {
  const wordList = wordLists.filter(wordList => wordList.name === wordListName.value)[0]

  return wordList.words
})

const currentWordIndex = ref(0)
const currentWord = computed(() => wordListWords[currentWordIndex.value])

const wordInputFieldValue = ref("")
const isGameFinished = ref(false)
const isNextWordExisting = computed(() => currentWordIndex.value < wordListWords.length)
watch(wordInputFieldValue, () => {
  if(isNextWordExisting.value){
    if(wordInputFieldValue.value === currentWord.value){
      currentWordIndex.value++
      wordInputFieldValue.value = ""
    }
  } else {
    isGameFinished.value = true
  }
})
</script>