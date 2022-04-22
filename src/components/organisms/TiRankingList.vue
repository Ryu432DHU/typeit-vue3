<template>
  <ti-simple-table>
    <tr>
      <th>No.</th>
      <th>Length</th>
      <th>Time</th>
      <th>Date</th>
    </tr>
    <tr v-for="(record, index) in sortedRecords">
      <td>{{ index + 1 }}</td>
      <td>{{ wordList.words.length }} words</td>
      <td>{{ record.time }} seconds</td>
      <td>{{ record.date.toLocaleString() }}</td>
    </tr>
  </ti-simple-table>
</template>

<script setup>
import { computed } from 'vue'
import TiSimpleTable from '../atoms/TiSimpleTable.vue'

const props = defineProps({ wordList: Object })

const sortedRecords = computed(() => {
  return props.wordList.records.sort((a, b) => a.time < b.time ? -1 : 1)
})
</script>