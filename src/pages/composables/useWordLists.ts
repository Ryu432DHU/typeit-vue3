import { WordList } from '../../types'
import { ref, reactive, computed, inject, Ref } from 'vue'

export function useWordLists(){
  const wordLists: Ref<WordList[]>  = inject("wordLists")!
  const getWordList = (wordListName: string): WordList => {
    const result = wordLists.value.filter(wordList => wordList.name === wordListName)
    if(result.length >= 1 && result !== undefined){
      return reactive(result[0])
    } else {
      throw new Error("The word list you selected is empty or not existing")
    }
  }

  return { wordLists, getWordList }
}