<template>
  <ti-sheet>
    <ti-word-display :word="currentWord" :gameState="gameState" :inputAccuracyCollections="inputAccuracyCollections" :clearTime="getRoundedClerTime"></ti-word-display>
    <ti-word-input-form v-model="wordInputFieldValue"></ti-word-input-form>
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
import { ref, reactive, computed, watch, nextTick, inject } from 'vue'
import TiWordChipList from '@/components/organisms/TiWordChipList.vue';
import TiSheet from '@/components/atoms/TiSheet.vue'
import TiWordDisplay from '@/components/organisms/TiWordDisplay.vue'
import TiWordInputForm from '@/components/organisms/TiWordInputForm.vue'
import TiWordListSelector from '@/components/organisms/TiWordListSelector.vue';
import TiRankingList from '@/components/organisms/TiRankingList.vue';
import { useWordLists } from '@/pages/composables/useWordLists';
import { useTypingGame } from './composables/useTypingGame';

const { wordLists, wordList, wordListName } = useWordLists()
const selectWordListName = (newWordListName: String )=> {
  wordListName.value = newWordListName
  currentWordIndex.value = 0
  wordInputFieldValue.value = ""
  timeRecorder.init()
  nextTick(() => gameState.value = "STAND_BY")
}

const {
  currentWordIndex,
  currentWord,
  wordInputFieldValue,
  gameState,
  isNextWordExisting,
  timeRecorder,
  getRoundedClerTime,
} = computed(() => useTypingGame(wordList)).value

const inputAccuracyCollections = computed(() => {
  if(isNextWordExisting.value){
    if(wordInputFieldValue.value.length <= currentWord.value.length){
      return wordInputFieldValue.value.split("").map((letter, index) => letter === currentWord.value[index])
    } else {
      return currentWord.value.split("").map((letter, index) => letter === wordInputFieldValue.value[index])
    }
  }
})
</script>

