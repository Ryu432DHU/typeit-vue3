<template>
  <ti-sheet>
    <div class="w-11/12 mx-auto py-4">
      <h1 class="text-2xl mb-6">Edit "{{ wordListName }}"</h1>
      <ti-text-field v-model="localWordListName"></ti-text-field>
      <ti-word-list-editor :words="words" />
      <div class="my-4">
        <ti-button @click="saveChanges" class="mr-4">Save</ti-button>
        <router-link to="/edit">
          <ti-button>Cancel</ti-button>
        </router-link>
      </div>
    </div>
  </ti-sheet>
</template>

<script setup lang="ts">
import { ref, computed, inject, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import TiTextField from '@/components/atoms/TiTextField.vue';
import { WordList } from '@/types';
import { useWordLists } from './composables/useWordLists';
import TiWordListEditor from '@/components/organisms/TiWordListEditor.vue';

const router = useRouter()
const localWordListName = ref(String(router.currentRoute.value.params.id))
const { getWordList } = useWordLists()
const wordListName = computed(() => {
  return String(router.currentRoute.value.params.id)
})

const wordList = computed(() => getWordList(wordListName.value))

const words = ref([...wordList.value.words])
const wordToAdd = ref("")

const updateWordList: Function = inject('updateWordList')!
const saveChanges = () => {

  const newWordList: WordList = {
    name: localWordListName.value,
    words: words.value,
    records: []
  }
  updateWordList(wordListName.value ,newWordList)
}

</script>