import { ref, reactive, computed, watch, inject } from 'vue'
import TiTimeRecorder from '../../utils/TiTimeRecorder.js';


export function useTypingGame(wordList){
  const currentWordIndex = ref(0)
  const currentWord = computed(() => wordList.value.words[currentWordIndex.value])
  const wordInputFieldValue = ref("")

  const gameState = ref("STAND_BY")
  const isNextWordExisting = computed(() => currentWordIndex.value < wordList.value.words.length)

  const timeRecorder = reactive(new TiTimeRecorder())
  const getRoundedClerTime = computed(() => timeRecorder.getRoundedTime())
  const addTimeRecord = inject("addTimeRecord")

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
      if(gameState.value === "PLAYING"){
        gameState.value = "FINISHED"
        timeRecorder.stop()
        addTimeRecord(wordList.value.name , { date: new Date(), time: timeRecorder.getRoundedTime()})
      }
    }
  })

  return {
    currentWordIndex,
    currentWord,
    wordInputFieldValue,
    gameState,
    isNextWordExisting,
    timeRecorder,
    getRoundedClerTime,
  }
}