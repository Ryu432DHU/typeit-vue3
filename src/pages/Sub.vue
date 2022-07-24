<template>
  <ti-sheet class="my-4 p-8">
    <h1 class="text-2xl">ti-text-field</h1>
    <div class="my-4 w-8/12">
      <p>Write down your favorite character's name below</p>
      <ti-text-field 
        v-model="text"
        label="Who's your favorite character?"
        placeholder="Miku"
        :count="12" /> 
    </div>
  </ti-sheet>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import TiTextField from '@/components/atoms/TiTextField.vue';

const text = ref("Miku Hatsune")
</script>
