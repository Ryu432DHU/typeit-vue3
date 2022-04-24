import { ref, computed } from 'vue'
import fetchWordLists from '../../store/wordLists.js';


export function useWordLists(){
  const wordListName = ref("example")
  const wordLists = fetchWordLists()
  const wordList = computed(() => {
    const wordList = wordLists.filter(wordList => wordList.name === wordListName.value)[0]
    if(wordList.length === 0 || wordList === undefined) return new Error("The word list you selected is empty or not existing")
    return wordList
  })

  return { wordLists, wordList, wordListName }
}