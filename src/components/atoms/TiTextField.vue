<template>
  <div class="root">
    <div class="text-field" :class="{ 'text-field--error' : hasError }">
      <input type="text" @input="updateModelValue($event)" ref="textField" :value="modelValue" :placeholder="placeholder">
      <div class="border-bottom"></div>
    </div>
    <span class="counter" :class="{ 'text-red-500' : doesExceedCount }">{{ counterText }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const emit = defineEmits(['update:modelValue'])
const props = defineProps<{
  modelValue: string,
  count?: number,
  disabled?: boolean,
  placeholder?: string,
  variant?: "standard" | "outlined" | "filled"
}>()

const updateModelValue = (event:Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const hasError = computed(() => doesExceedCount.value)
const doesExceedCount = computed(() => {
 if(!props.count) return
 return props.count < props.modelValue.length
})
const counterText = computed(() => props.count ? `${props.modelValue.length} / ${props.count}` : '')

const textField = ref()
const focusInput = () => textField.value.focus()
defineExpose({focusInput})
</script>

<style scoped lang="scss">
.root {
  position: relative;
  line-height: initial;
  height: initial;
  padding: 24px 0;

  .text-field {
    position:  relative;

    &.text-field--error {
      &::before,
      &:hover::before,
      .border-bottom {
        background: #ef4444;
      }
    }

    &::before {
      background: #a3a3a3;
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      position: absolute;
      bottom: 0px;
      transition: height 0.3s, background 0.3s;
      transition-timing-function: ease-out;
    }
  
    input {
      background: transparent;
      box-sizing: border-box;
      line-height: 2rem;
      padding: 0;
      position: relative;
      width: 100%;
      outline: none;
    }
    &:hover {
      &::before {
        height: 2px;
        background: #404040;
      }
    }
  
    .border-bottom {
      display: block;
      background: #3b82f6;
      height: 2px;
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      transition: transform 0.3s;
      bottom: 0;
      z-index: 1;
    }
  
    input:focus + .border-bottom {
      transform: scaleX(1);
    }
  }  

  .counter {
    position: absolute;
    bottom: 2px;
    right: 0;
  }
}
</style>