import { ref, computed, inject, nextTick } from 'vue'
import { WordList } from '@/types.js'


export function useCreateWordList(){
  const wordLists: WordList[] = inject('wordLists')!
  const wordListName = ref("Example")
  const words = ref(["hoge", "foo", "bar"])
  const wordToAdd = ref("")
  const isWordListNameAvailable = computed(() => !wordLists.map(wordList => wordList.name).includes(wordListName.value))
  const isWordListNameEmpty = computed(() => wordListName.value.length === 0)
  const isWordListWordsEmpty = computed(() => words.value.length === 0)
  const isWordListAvailable = computed(() => isWordListNameAvailable.value && !isWordListNameEmpty.value && !isWordListWordsEmpty.value)

  const addNewWord = () => {
    words.value.push(wordToAdd.value)
    nextTick(() => wordToAdd.value = "")
  }
  const moveToUp = (index: number) => {
    if(words.value[index - 1]){
      [words.value[index - 1], words.value[index]] = [words.value[index], words.value[index - 1]]
    }
  }
  const moveToDown = (index: number) => {
    if(words.value[index + 1]){
      [words.value[index + 1], words.value[index]] = [words.value[index], words.value[index + 1]]
    }
  }
  const deleteWord = (index: number) => words.value.splice(index, 1)

  return {
    wordListName,
    words,
    wordToAdd,
    isWordListNameAvailable,
    isWordListAvailable,
    addNewWord,
    moveToUp,
    moveToDown,
    deleteWord
  }
}