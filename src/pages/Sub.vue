<template>
  <ti-sheet class="p-8">
    <div class="mb-8">
      <h1>This is Sub.vue</h1>
      <router-link to="/" class="underline">Go to the top page</router-link>
    </div>
    <div>
      <pre>
        {{ all }}
      </pre>
      <pre>
        {{ currentWordIndex }}
        {{ currentWord }}
        {{ wordInputFieldValue }}
        {{ gameState }}
        {{ timeRecorder }}
        {{ getRoundedClerTime }}
      </pre>
    </div>
    <div>
      <button @click="currentWordIndex++">currentWordIndex++</button>
    </div>
  </ti-sheet>
</template>

<script setup>
// import { ref, computed } from 'vue';
// import TiSheet from '../components/atoms/TiSheet.vue'

// const simpleRef = ref(0)
// const stringRef = ref("Hi")
// const booleanRef = ref(false)

// const computedNumber = computed(() => simpleRef.value + 19)
// const computedString = computed(() => stringRef.value + ", new user!")

// console.log("simpleRef", simpleRef)
// console.log("stringRef", stringRef)
// console.log("bookeanRef", booleanRef)
// console.log("computedNumber", computedNumber)
// console.log("computedString", computedString)
// console.log()

import { ref, reactive, computed, watch, nextTick, inject } from 'vue'
import TiWordChipList from '../components/organisms/TiWordChipList.vue';
import TiSheet from '../components/atoms/TiSheet.vue'
import TiWordDisplay from '../components/atoms/TiWordDisplay.vue'
import TiWordInputForm from '../components/atoms/TiWordInputForm.vue'
import TiWordListSelector from '../components/organisms/TiWordListSelector.vue';
import TiTimeRecorder from '../utils/TiTimeRecorder';
import TiRankingList from '../components/organisms/TiRankingList.vue';
import { useWordLists } from '../pages/composables/useWordLists.js';
import { useTypingGame } from './composables/useTypingGame';


const { wordLists, wordList, wordListName } = useWordLists()
const selectWordListName = newWordListName => {
  wordListName.value = newWordListName
  currentWordIndex.value = 0
  wordInputFieldValue.value = ""
  timeRecorder.init()
  nextTick(() => gameState.value = "STAND_BY")
}

const all = computed(() => useTypingGame(wordList)).value
const {
  currentWordIndex,
  currentWord,
  wordInputFieldValue,
  gameState,
  timeRecorder,
  getRoundedClerTime,
} = all

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

