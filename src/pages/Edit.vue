<template>
  <ti-sheet class="mb-8">
    <div class="w-11/12 mx-auto py-4">
      <h1 class="text-2xl mb-6">Edit word lists</h1>
      <ti-simple-table>
        <tr>
          <th>Name</th>
          <th>Length</th>
          <th>Time Records</th>
          <th>Action</th>
        </tr>
        <tr v-for="(wordList, index) in wordLists" :key="index">
          <td>{{ wordList.name }}</td>
          <td>{{ wordList.words.length }} words</td>
          <td>{{ wordList.records.length }} records</td>
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
    <div class="w-11/12 mx-auto py-4">
      <h1 class="text-2xl mb-6">Reset Data</h1>
      <h2 class="text-xl my-2">Reset LocalStorage</h2>
      <p class="text-sm">This operetion permanently deletes LocalStorage Data(wordLists) and cannot undo.</p>
      <p class="text-sm">Confirmation Dialog is not shown!!!</p>
      <p class="text-base my-4">
        <ti-button @click="deleteWordLists">Reset</ti-button>
      </p>
    </div>
  </ti-sheet>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import TiSheet from '@/components/atoms/TiSheet.vue';
import { WordList } from '@/types';
import TiSimpleTable from '@/components/atoms/TiSimpleTable.vue';
import TiButton from '@/components/atoms/TiButton.vue';

const wordLists: WordList[] = inject("wordLists")!
const deleteWordLists: Function = inject("deleteWordLists")!
</script>