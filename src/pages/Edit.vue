<template>
  <ti-sheet class="mb-8">
    <div class="w-11/12 mx-auto py-4">
      <h1 class="text-2xl mb-6">{{  $t('edit.pageTitle') }}</h1>
      <ti-simple-table>
        <tr>
          <th>{{ $t('edit.table.name') }}</th>
          <th>{{ $t('edit.table.length') }}</th>
          <th>{{ $t('edit.table.timeRecords') }}</th>
          <th>{{ $t('edit.table.action') }}</th>
        </tr>
        <tr v-for="(wordList, index) in wordLists" :key="index">
          <td>{{ wordList.name }}</td>
          <td>{{ wordList.words.length }} {{  $t('edit.table.wordListLength') }}</td>
          <td>{{ wordList.records.length }} {{ $t('edit.table.recordLength') }}</td>
          <td>
            <router-link :to="'/edit/' + wordList.name">
              <ti-button>Edit</ti-button>
            </router-link>
          </td>
        </tr>
      </ti-simple-table>
    </div>
  </ti-sheet>
  <ti-sheet>
    <div class="w-11/12 mx-auto py-8">
      <h1 class="text-2xl mb-8">Developer menu</h1>
      <section class="mb-8">
        <h1 class="text-xl mb-2">Reset LocalStorage</h1>
        <p class="text-sm">This operetion permanently deletes user data like wordLists and cannot be undone.</p>
        <p class="text-base my-4">
          <ti-button @click="modalOpen = true">Reset</ti-button>
          <ti-dialog v-if="modalOpen">
            <p class="text-2xl mb-4">Reset LocalStorage</p>
            <p class="text-sm">This operetion permanently deletes user data like wordLists and cannot be undone</p>
            <p class="my-4">
              <ti-button @click="resetUserData" class="mr-4">Reset</ti-button>
              <ti-button @click="modalOpen = false">Cancel</ti-button>
            </p>
          </ti-dialog>
        </p>
      </section>
      <section>
        <h1 class="text-xl mb-2">Move to Sub.vue</h1>
        <p class="text-sm">Sub.vue is a playground</p>
        <p class="text-base my-4">
          <router-link to="sub">
            <ti-button>Move</ti-button>
          </router-link>
        </p>
      </section>
    </div>
  </ti-sheet>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { WordList } from '@/types';

const modalOpen = ref(false)
const wordLists: WordList[] = inject("wordLists")!
const deleteWordLists: () => void = inject("deleteWordLists")!
const resetUserData = () => {
  deleteWordLists()
  modalOpen.value = false
}
</script>
