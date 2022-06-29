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
  <ti-sheet class="mt-8">
    <h1>attrsTest.vue</h1>
    <attrs-test class="hoge" hoge="foo">
      <div>
        <h1>Slot contents</h1>
        <p>This is a slot contents</p>
      </div>
    </attrs-test>
  </ti-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AttrsTest from '@/components/atoms/attrsTest.vue';

const modalOpen = ref(false)
</script>

