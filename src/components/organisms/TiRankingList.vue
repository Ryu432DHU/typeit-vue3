<template>
  <ti-simple-table>
    <tr>
      <th>No.</th>
      <th>Length</th>
      <th>Time</th>
      <th>Date</th>
    </tr>
    <tr v-for="(record, index) in filteredTop5records">
      <td>{{ index + 1 }}</td>
      <td>{{ wordList.words.length }} words</td>
      <td>{{ record.time }} seconds</td>
      <td>{{ getRecordDateText(record.date) }}</td>
    </tr>
  </ti-simple-table>
</template>

<script setup lang="ts">
import { WordList } from '@/types';
import { computed } from 'vue'
import TiSimpleTable from '../atoms/TiSimpleTable.vue'

const props = defineProps<{ wordList: WordList}>()
const sortedRecords = computed(() =>  props.wordList.records.sort((a, b) => a.time < b.time ? -1 : 1))
const filteredTop5records = computed(() => sortedRecords.value.slice(0, 5))
const getRecordDateText = (date: Date | string): string => new Date(date).toLocaleString()
</script>