<template>
<div class="flex flex-wrap">
  <ti-chip v-for="word in wordList">{{ word }}</ti-chip>
</div>
</template>

<script setup>
import TiChip from '../atoms/TiChip.vue';

defineProps({
  wordList: Array
})
</script>