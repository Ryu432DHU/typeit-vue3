<template>
  <ti-sheet>
    <div class="w-11/12 mx-auto py-4">
      <h1 class="text-2xl mb-6">Edit "{{ wordListName }}"</h1>
      <ti-text-field v-model="wordListName" />
      <ti-word-list-editor v-model="words" />
      <p>{{ words }}</p>
      <div class="my-4">
        <ti-button @click="saveChanges" class="mr-4">Save</ti-button>
        <router-link to="/edit">
          <ti-button>Cancel</ti-button>
        </router-link>
      </div>
    </div>
  </ti-sheet>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';
import TiTextField from '@/components/atoms/TiTextField.vue';
import { WordList } from '@/types';
import TiWordListEditor from '@/components/organisms/TiWordListEditor.vue';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
const originalWordListName = ref(String(router.currentRoute.value.params.id))
const wordListName = ref(String(router.currentRoute.value.params.id))
const words = ref([...store.getters.findWordList(originalWordListName.value).words])

const updateWordList: Function = inject('updateWordList')!
const saveChanges = () => {
  const newWordList: WordList = {
    name: wordListName.value,
    words: words.value,
    records: [],
    isDeletable: true
  }
  updateWordList(originalWordListName.value, newWordList)
}

</script>