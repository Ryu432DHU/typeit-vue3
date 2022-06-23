<template>
  <ti-sheet>
    <ti-word-display :word="currentWord" :gameState="gameState" :inputAccuracyCollections="inputAccuracyCollections" :clearTime="getRoundedClerTime"></ti-word-display>
    <template v-if="gameState !== 'FINISHED'">
      <ti-word-input-form v-model="wordInputFieldValue"></ti-word-input-form>
    </template>
    <template v-else>
      <div class="bg-neutral-800 text-white text-center text-2xl p-8">
        <button @click="initializeGame" class="text-white text-2xl px-6 py-2 rounded-md hover:bg-neutral-900 transition-all duration-300">Play again</button>
      </div>
      </template>
    <div class="container mx-auto my-4 pb-8">
      <div class="w-11/12 mx-auto mb-4">
        <h2 class="text-2xl mb-4">Words | {{ wordListName }}</h2>
        <ti-word-chip-list :wordList="wordList.words" :currentWordIndex="currentWordIndex"></ti-word-chip-list>
      </div>
      <div class="lg:flex w-11/12 mx-auto lg:justify-between">
        <div class="sm:w-full lg:w-6/12 mb-4">
          <div class="w-11/12">
            <h2 class="text-2xl mb-4">Rankings</h2>
            <ti-ranking-list :wordList="wordList"></ti-ranking-list>
          </div>
        </div>
        <div class="sm:w-full lg:w-6/12">
          <div class="w-11/12">
            <h2 class="text-2xl mb-4">Word lists</h2>
            <ti-word-list-selector @selectWordList="selectWordListName" :wordLists="wordLists" :selectedWordList="wordList" />
          </div>
        </div>
      </div>
    </div>
  </ti-sheet>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import TiWordChipList from '@/components/organisms/TiWordChipList.vue'
import TiWordDisplay from '@/components/organisms/TiWordDisplay.vue'
import TiWordInputForm from '@/components/organisms/TiWordInputForm.vue'
import TiWordListSelector from '@/components/organisms/TiWordListSelector.vue'
import TiRankingList from '@/components/organisms/TiRankingList.vue'
import { useWordLists } from '@/pages/composables/useWordLists'
import { useTypingGame } from './composables/useTypingGame'

const { wordLists, getWordList } = useWordLists()
const wordListName = ref(wordLists[0].name)
const wordList = computed(() => getWordList(wordListName.value))
const selectWordListName = (newWordListName: string ) => {
  wordListName.value = newWordListName
  initializeGame()
}

const {
  currentWordIndex,
  currentWord,
  wordInputFieldValue,
  gameState,
  isNextWordExisting,
  getRoundedClerTime,
  initializeGame
} = computed(() => useTypingGame(wordList)).value

const inputAccuracyCollections = computed(() => {
  if(isNextWordExisting.value){
    if(wordInputFieldValue.value.length <= currentWord.value.length){
      return wordInputFieldValue.value.split("").map((letter, index) => letter === currentWord.value[index])
    } else {
      return currentWord.value.split("").map((letter, index) => letter === wordInputFieldValue.value[index])
    }
  } else {
    return []
  }
})
</script>

