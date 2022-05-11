<template>
  <ti-simple-table>
    <tr>
      <th>Name</th>
      <th>Length</th>
      <th>Action</th>
    </tr>
    <tr v-for="wordList in wordLists">
    <td>
      <span>{{ wordList.name }}</span>
    </td>
    <td>{{ wordList.words.length }} words</td>
    <td>
      <template v-if="selectedWordList.name === wordList.name">
        <ti-button disabled>Selected</ti-button>
      </template>
      <template v-else>
        <ti-button @click="$emit('selectWordList', wordList.name)">Play</ti-button>
      </template>
    </td>
    </tr>
  </ti-simple-table>
</template>

<script setup lang="ts">
import { WordList } from '@/types';
import TiSimpleTable from '../atoms/TiSimpleTable.vue'
import TiButton from '../atoms/TiButton.vue'

defineProps<{
  wordLists: WordList[],
  selectedWordList: WordList
}>()
defineEmits(['selectWordList'])

</script>