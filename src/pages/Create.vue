<template>
  <ti-sheet>
    <div class="w-11/12 mx-auto py-4">
      <template v-if="!isWordListCreated">
      <h1 class="text-2xl mb-4">{{  $t('create.createNewWordList') }}</h1>
      <ti-text-field v-model="wordListName" :placeholder="$t('create.newWordListTitle')" />
      <p v-if="!isWordListNameAvailable">The word list  "{{ wordListName }}" already existis.</p>
      <ti-word-list-editor v-model="words" />
        <p>{{ words }}</p>
      <ti-button :disabled="!isWordListAvailable" @click="createWordList">Create</ti-button>
      </template>
      <template v-else>
        <h1 class="text-2xl mb-4">The word list "{{ wordListName }}" has been created successfully</h1>
        <ti-simple-table>
          <tr>
            <th>{{ $t('create.table.no') }}</th>
            <th>{{ $t('create.table.word') }}</th>
            <th>{{ $t('create.table.actions') }}</th>
          </tr>
          <tr v-for="(word, index) in words">
            <td>{{ index + 1}}</td>
            <td>{{ word }}</td>
            <td>{{ word.length }} characters</td>
          </tr>
        </ti-simple-table>
      </template>
    </div>
  </ti-sheet>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { WordList } from '@/types'
import { useCreateWordList } from './composables/useCreateWordList';
import TiWordListEditor from '@/components/organisms/TiWordListEditor.vue';

const {
  wordListName,
  words,
  isWordListNameAvailable,
  isWordListAvailable,
} = useCreateWordList()

const isWordListCreated = ref(false)
const addWordList: Function = inject("addWordList")!
const createWordList = (): WordList => {
  isWordListCreated.value = true
  const newWordList = {
    name: wordListName.value,
    words: words.value,
    records: [],
    isDeletable: true
  }
  
  addWordList(newWordList)

  return newWordList
}
</script>
