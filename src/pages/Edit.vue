<template>
  <ti-sheet>
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
</template>

<script setup lang="ts">
import { inject } from 'vue'
import TiSheet from '@/components/atoms/TiSheet.vue';
import { WordList } from '@/types';
import TiSimpleTable from '@/components/atoms/TiSimpleTable.vue';
import TiButton from '@/components/atoms/TiButton.vue';

const wordLists: WordList[] = inject("wordLists")!
</script>