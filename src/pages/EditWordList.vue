<template>
  <ti-sheet>
    <div class="w-11/12 mx-auto py-4">
      <h1 class="text-2xl mb-6">Edit "{{ wordListName }}"</h1>
      <ti-text-field v-model="wordListNameDummy"></ti-text-field>
      <ti-simple-table>
        <tr>
          <th>No.</th>
          <th>Word</th>
          <th>Actions</th>
        </tr>
        <tr v-for="(word, index) in wordList.words">
          <td>{{ index + 1 }}</td>
          <td>
            <ti-text-field v-model="wordList.words[index]"></ti-text-field>
          </td>
          <td>
            <ti-button>Up</ti-button>
            <ti-button class="mx-4">Down</ti-button>
            <ti-button>Delete</ti-button>
          </td>
        </tr>
      </ti-simple-table>
      <div class="my-4">
        <ti-button>Save</ti-button>
      </div>
    </div>
  </ti-sheet>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue';
import { useRouter } from 'vue-router';
import TiSheet from '@/components/atoms/TiSheet.vue';
import TiSimpleTable from '@/components/atoms/TiSimpleTable.vue';
import TiTextField from '@/components/atoms/TiTextField.vue';
import TiButton from '@/components/atoms/TiButton.vue';
import { WordList } from '@/types';

const router = useRouter()
const wordListNameDummy = ref(String(router.currentRoute.value.params.id))
const wordListName = computed(() => {
  const params = router.currentRoute.value.params.id
  
  return params
})

const wordLists: WordList[] = inject('wordLists')!
const wordList = computed(() => wordLists.filter(wordList => wordList.name === wordListName.value)[0])


console.log(router)
console.log(router.currentRoute.value.params)
</script>