<template>
  <ti-simple-table>
    <tr>
      <th>Word list</th>
      <th>Action</th>
    </tr>
    <tr v-for="wordList in wordLists">
    <td>
      <span>{{ wordList.name }}</span>
    </td>
    <td>
      <button @click="$emit('changeWordList', wordList.name)" class="border border-slate-300 px-4 py-1">Play</button>
    </td>
    </tr>
  </ti-simple-table>
</template>

<script setup>
import TiSimpleTable from '../atoms/TiSimpleTable.vue'

defineProps({
  wordLists: Array
})
defineEmits(['changeWordList'])

</script>