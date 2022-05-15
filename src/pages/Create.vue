<template>
  <ti-sheet>
    <div class="w-11/12 mx-auto py-4">
      <h1 class="text-2xl mb-4">Create a new word list</h1>
      <ti-text-field v-model="wordListName" placeholder="Type the word list name" />
      <p v-if="isWordListNameAvailabel">The word list  "{{ wordListName }}" already existis.</p>
      <ti-simple-table class="mb-4">
        <tr>
          <th>No.</th>
          <th>Word</th>
          <th>Actions</th>
        </tr>
        <tr v-for="(word, index) in words" :key="index">
          <td>{{ index + 1}}</td>
          <td>
            <ti-text-field v-model="words[index]" />
          </td>
          <td>
            <ti-button>Up</ti-button>
            <ti-button class="mx-4">Down</ti-button>
            <ti-button>Delete</ti-button>
          </td>
        </tr>
      </ti-simple-table>
      <ti-button>Create</ti-button>
    </div>
    <p>{{ words }}</p>
  </ti-sheet>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue';
import TiSheet from '@/components/atoms/TiSheet.vue'
import TiSimpleTable from '@/components/atoms/TiSimpleTable.vue';
import TiButton from '@/components/atoms/TiButton.vue';
import { WordList } from '@/types.js'
import TiTextField from '@/components/atoms/TiTextField.vue';

const wordLists:WordList[] = inject('wordLists')!
const wordListName = ref("")
const words = ref(["hoge", "foo", "bar"])
const isWordListNameAvailabel = computed(() => wordLists.map(wordList => wordList.name).includes(wordListName.value))

</script>
