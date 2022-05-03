<template>
  <input type="text"
         placeholder="Type the word above here"
         class="block w-full outline-none bg-neutral-800 text-white text-center text-2xl p-10 rounded-none focus:bg-neutral-900 transition-all duration-300"
         @input="$emit('update:modelValue', $event.target.value)"
         :value="modelValue"
  >
</template>

<script setup>
defineProps({
  modelValue: String,
})
defineEmits(["update:modelValue"])
</script>