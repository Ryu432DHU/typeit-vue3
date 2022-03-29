<template>
  <ti-sheet>
    <div class="container mx-auto">
      <div class="w-4/5 mx-auto">
        <h2 class="text-2xl mb-4">Words | Word list name</h2>
        <ti-word-chip-list :wordList="wordList"></ti-word-chip-list>
      </div>
    </div>
  </ti-sheet>
</template>

<script setup>
import { ref } from 'vue'
import TiWordChipList from '../components/organisms/TiWordChipList.vue';
import TiSheet from '../components/atoms/TiSheet.vue'

const wordList = ref(["rounded-none","rounded-sm", "rounded", "rounded-md", "rounded-lg", "rouded-xl", "rounded-2xl", "rounded-3xl", "slate", "gray", "zinc", "neutral", "stone", "red", "orange", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900"])
</script>