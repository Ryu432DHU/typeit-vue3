<template>
  <ti-sheet class="mb-8">
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
  <ti-sheet>
    <div class="w-11/12 mx-auto py-4">
      <section class="mb-8">
        <h1 class="text-2xl mb-4">Reset Data</h1>
        <h2 class="text-xl mb-2">Reset LocalStorage</h2>
        <p class="text-sm">This operetion permanently deletes user data like wordLists and cannot be undone.</p>
        <p class="text-base my-4">
          <ti-button @click="modalOpen = true">Reset</ti-button>
          <ti-modal v-if="modalOpen">
            <p class="text-2xl mb-4">Reset LocalStorage</p>
            <p class="text-sm">This operetion permanently deletes user data like wordLists and cannot be undone</p>
            <p class="my-4">
              <ti-button @click="resetUserData" class="mr-4">Reset</ti-button>
              <ti-button @click="modalOpen = false">Cancel</ti-button>
            </p>
          </ti-modal>
        </p>
      </section>
      <section>
        <h1 class="text-2xl mb-4">Move to Sub.vue</h1>
        <h2 class="text-xl mb-2">Sub.vue is a playground</h2>
        <p class="text-sm">Move to Sub.vue</p>
        <p class="text-base my-4">
          <router-link to="sub">
            <ti-button>Move</ti-button>
          </router-link>
        </p>
      </section>
    </div>
  </ti-sheet>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { WordList } from '@/types';
import TiButton from '@/components/atoms/TiButton.vue';

const modalOpen = ref(false)
const wordLists: WordList[] = inject("wordLists")!
const resetUserData = () => {
  const deleteWordLists: Function = inject("deleteWordLists")!

  deleteWordLists()
  modalOpen.value = false
}
</script>
