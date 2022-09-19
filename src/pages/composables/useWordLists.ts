import fetchWordLists from '@/store/wordLists'
import { WordList, WordListRecord } from '@/types'
import { ref, reactive, Ref } from 'vue'

export function useWordLists(){
  const wordLists: Ref<WordList[]>  = ref(fetchWordLists())
  const getWordList = (wordListName: string): WordList => {
    const result = wordLists.value.filter(wordList => wordList.name === wordListName)
    if(result.length >= 1 && result !== undefined){
      return reactive(result[0])
    } else {
      throw new Error("The word list you selected is empty or not existing")
    }
  }

  const addWordList = (newWordList: WordList) =>  wordLists.value.push(newWordList)

  const updateWordList = (wordListName: string, newWordList: WordList) => {
    const targetWordListIndex = wordLists.value.findIndex(wordList => wordList.name === wordListName)
    wordLists.value[targetWordListIndex].name = newWordList.name
    wordLists.value[targetWordListIndex].words = newWordList.words
    wordLists.value[targetWordListIndex].records = newWordList.records
  }

  const clearWordListsSavedInLocalStorage = () =>  localStorage.clear()

  const addTimeRecord = (wordListName: string, newRecord: WordListRecord) => {
    const index = wordLists.value.findIndex(wordList =>wordList.name === wordListName)
    if(index >= 0){
      wordLists.value[index].records.push(newRecord)
    }
  }
  
  return {
    wordLists,
    getWordList,
    addWordList,
    updateWordList,
    clearWordListsSavedInLocalStorage,
    addTimeRecord
  }
}