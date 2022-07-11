<template>
  <input type="text"
         placeholder="Type the word above here"
         class="block w-full outline-none bg-neutral-800 text-white text-center text-lg sm:text-2xl px-10 py-6 sm:p-10 rounded-none focus:bg-neutral-900 transition-all duration-300"
         @input="updateModelValue($event)"
         :value="modelValue"
  >
</template>

<script setup lang="ts">
defineProps<{ modelValue: String }>()
const emit = defineEmits(["update:modelValue"])
const updateModelValue = ($event: Event) => {
  emit('update:modelValue', ($event.target as HTMLInputElement).value)
}
</script>