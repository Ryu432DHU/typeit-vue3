import { ref, computed, inject, nextTick, Ref } from 'vue'
import { WordList } from '@/types.js'


export function useCreateWordList(){
  const wordLists: Ref<WordList[]> = inject('wordLists')!
  const wordListName = ref("Example")
  const words = ref(["hoge", "foo", "bar"])
  const wordToAdd = ref("")
  const isWordListNameAvailable = computed(() => !wordLists.value.map(wordList => wordList.name).includes(wordListName.value))
  const isWordListNameEmpty = computed(() => wordListName.value.length === 0)
  const isWordListWordsEmpty = computed(() => words.value.length === 0)
  const isWordListAvailable = computed(() => isWordListNameAvailable.value && !isWordListNameEmpty.value && !isWordListWordsEmpty.value)

  return {
    wordListName,
    words,
    wordToAdd,
    isWordListNameAvailable,
    isWordListAvailable,
  }
}