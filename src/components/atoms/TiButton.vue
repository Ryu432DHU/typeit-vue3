<template>
  <button class="text-sm border rounded border-slate-300 drop-shadow-md  px-4 py-1">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  disabled: Boolean
})
</script>