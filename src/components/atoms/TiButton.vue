<template>
  <button class="text-sm border-none rounded border-slate-300 px-4 py-1 shadow-md bg-zinc-100 hover:bg-zinc-200 transition-all">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  disabled: Boolean
})
</script>