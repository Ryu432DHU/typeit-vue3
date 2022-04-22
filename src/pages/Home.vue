<template>
  <ti-sheet>
    <ti-word-display :word="currentWord" :gameState="gameState" :clearTime="clearTime"></ti-word-display>
    <ti-word-input-form v-model="wordInputFieldValue"></ti-word-input-form>
    <div class="container mx-auto my-4 pb-8">
      <div class="w-11/12 mx-auto mb-4">
        <h2 class="text-2xl mb-4">Words | {{ wordListName }}</h2>
        <ti-word-chip-list :wordList="wordList.words"></ti-word-chip-list>
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
            <h2 class="text-2xl mb-4">Play</h2>
            <ti-word-list-selector @selectWordList="selectWordListName" :wordLists="wordLists" />
          </div>
        </div>
      </div>
    </div>
  </ti-sheet>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import fetchWordLists from '../store/wordLists';
import TiWordChipList from '../components/organisms/TiWordChipList.vue';
import TiSheet from '../components/atoms/TiSheet.vue'
import TiWordDisplay from '../components/atoms/TiWordDisplay.vue'
import TiWordInputForm from '../components/atoms/TiWordInputForm.vue'
import TiWordListSelector from '../components/organisms/TiWordListSelector.vue';
import TiTimeRecorder from '../utils/TiTimeRecorder';
import TiRankingList from '../components/organisms/TiRankingList.vue';
import TiRankingList1 from '../components/organisms/TiRankingList.vue';

const wordListName = ref("example")
const selectWordListName = newWordListName => {
  wordListName.value = newWordListName
  gameState.value = "STAND_BY"
  currentWordIndex.value = 0
}

const wordLists = fetchWordLists()
const wordList = computed(() => {
  const wordList = wordLists.filter(wordList => wordList.name === wordListName.value)[0]
  if(wordList.length === 0 || wordList === undefined) return new Error("The ord list you selected is empty or not existing")
  return wordList
})

const currentWordIndex = ref(0)
const currentWord = computed(() => wordList.value.words[currentWordIndex.value])
const wordInputFieldValue = ref("")

const gameState = ref("STAND_BY")
const isNextWordExisting = computed(() => currentWordIndex.value < wordList.value.words.length)

const timeRecorder = reactive(new TiTimeRecorder())
const clearTime = computed(() => timeRecorder.calc())

watch(wordInputFieldValue, () => {
  if(isNextWordExisting.value){
    if(gameState.value === "STAND_BY"){
      gameState.value = "PLAYING"
      timeRecorder.start()
    }

    if(wordInputFieldValue.value === currentWord.value){
      currentWordIndex.value++
      wordInputFieldValue.value = ""
    }
  } else {
    gameState.value = "FINISHED"
    timeRecorder.stop()
  }
})
</script>