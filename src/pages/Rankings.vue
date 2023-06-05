<template>
  <ti-sheet>
    <div class="w-11/12 mx-auto py-4">
      <h1 class="text-2xl mb-6">{{  $t('rankings.rankings') }}</h1>
      <div v-for="wordList in wordLists" class="mb-8">
        <h2 class="text-lg">{{ wordList.name }}</h2>
        <TiSimpleTable>
          <tr>
            <th>{{ $t('rankings.table.no') }}</th>
            <th>{{ $t('rankings.table.length') }}</th>
            <th>{{ $t('rankings.table.time') }}</th>
            <th>{{ $t('rankings.table.date') }}</th>
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

<script setup lang="ts">
import { WordList } from '@/types';
import { inject } from 'vue';
import TiSheet from '../components/atoms/TiSheet.vue'
import TiSimpleTable from '../components/atoms/TiSimpleTable.vue';

const wordLists: WordList[] = inject("wordLists")!


</script>