<template>
  <ti-simple-table>
    <tr>
      <th>Word list</th>
      <th>Length</th>
      <th>Action</th>
    </tr>
    <tr v-for="wordList in wordLists">
    <td>
      <span>{{ wordList.name }}</span>
    </td>
    <td>{{ wordList.words.length }} words</td>
    <td>
      <ti-button @click="$emit('selectWordList', wordList.name)">Play</ti-button>
    </td>
    </tr>
  </ti-simple-table>
</template>

<script setup>
import TiSimpleTable from '../atoms/TiSimpleTable.vue'
import TiButton from '../atoms/TiButton.vue'

defineProps({
  wordLists: Array
})
defineEmits(['selectWordList'])

</script>