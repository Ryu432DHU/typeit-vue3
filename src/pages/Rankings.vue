<template>
  <ti-sheet>
    <div class="w-11/12 mx-auto py-4">
      <h1 class="text-2xl mb-6">Rankings</h1>
      <div v-for="wordList in wordLists" class="mb-8">
        <h2 class="text-lg">{{ wordList.name }}</h2>
        <TiSimpleTable>
          <tr>
            <th>No.</th>
            <th>Length</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
          <tr v-for="(record, index) in wordList.records">
            <td>{{ index + 1 }}</td>
            <td>{{ wordList.words.length }} words</td>
            <td>{{ record.time }} seconds</td>
            <td>{{ new Date(record.date).toLocaleString() }}</td>
          </tr>
        </TiSimpleTable>
      </div>
    </div>
  </ti-sheet>
</template>

<script setup>
import TiSheet from '../components/atoms/TiSheet.vue'
import TiSimpleTable from '../components/atoms/TiSimpleTable.vue';
import fetchWordLists from '../store/wordLists.js'

const wordLists = fetchWordLists()


</script>