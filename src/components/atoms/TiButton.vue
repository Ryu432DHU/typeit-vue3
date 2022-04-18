<template>
  <button class="text-sm uppercase font-medium border-none rounded border-slate-300 px-4 py-2 shadow-md bg-zinc-100 hover:bg-zinc-200 transition-all">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  disabled: Boolean
})
</script>