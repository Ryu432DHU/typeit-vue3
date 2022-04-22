<template>
  <ti-simple-table>
    <tr>
      <th>No.</th>
      <th>Length</th>
      <th>Time</th>
      <th>Date</th>
    </tr>
    <tr v-for="(record, index) in props.wordList.records">
      <td>{{ index + 1 }}</td>
      <td>{{ wordList.words.length }} words</td>
      <td>{{ record.time }} seconds</td>
      <td>{{ record.date.toLocaleString() }}</td>
    </tr>
  </ti-simple-table>
</template>

<script setup>
import TiSimpleTable from '../atoms/TiSimpleTable.vue'

const props = defineProps({
  wordList: Object
})
</script>