<template>
  <ti-sheet class="p-8">
    <div class="mb-8">
      <h1>This is Sub.vue</h1>
      <router-link to="/" class="underline">Go to the top page</router-link>
      <div class="mt-4">
        <ti-button @click="modalOpen = true">open modal</ti-button>
        <ti-dialog v-if="modalOpen">
          <p class="text-xl">Modal title</p>
          <p>modal content</p>
          <ti-button @click="modalOpen = false">Close modal</ti-button>
        </ti-dialog>
      </div>
    </div>
  </ti-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalOpen = ref(false)
</script>

