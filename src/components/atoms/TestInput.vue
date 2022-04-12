<template>
  <div>
    <span>{{ modelValue }}</span>
    <input type="text"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           class="border border-slate-500"
           placeholder="Input aaa here"
    >
  </div>
</template>

<script setup>
defineProps({
  modelValue: String
})
defineEmits(['update:modelValue'])
</script>