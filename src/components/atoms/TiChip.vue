<template>
  <span class="text-xs bg-neutral-200 rounded-full mr-2 mb-1 px-3 py-2" :class="chipStyle(color)">
    <slot></slot>
  </span>
</template>

<script setup>
const props = defineProps({
  color: String
})

const chipStyle = chipColor => chipColor ? [props.color, "text-white"] : []

</script>