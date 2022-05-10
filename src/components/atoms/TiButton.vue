<template>
  <button class="text-sm uppercase font-medium border-none rounded border-slate-300 px-4 py-2 shadow-md bg-zinc-100 hover:bg-zinc-200 disabled:bg-zinc-200 disabled:text-zinc-500 disabled:shadow-none transition-all"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type TiButton = {
  disabled?: "true" | "false"
}

const props = defineProps<TiButton>()
</script>