import { WordList } from '../../types'
import { ref, computed, inject } from 'vue'

export function useWordLists(){
  const wordListName = ref<String>("example")
  const wordLists: WordList[]  = inject("wordLists")!
  const wordList = computed(() => {
    const result = wordLists.filter(wordList => wordList.name === wordListName.value)
    if(result.length >= 1 && result !== undefined){
      return result[0]
    } else {
      throw new Error("The word list you selected is empty or not existing")
    }
  })

  return { wordLists, wordList, wordListName }
}