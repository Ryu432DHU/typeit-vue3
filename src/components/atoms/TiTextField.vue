<template>
  <div>
    <input type="text" @input="updateModelValue($event)" ref="textField" :value="modelValue" :placeholder="placeholder">
    <div class="border-bottom"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['update:modelValue'])
const props = defineProps<{
  modelValue: string,
  placeholder?: string,
  disabled?: boolean,
  variant?: "standard" | "outlined" | "filled"
}>()

const updateModelValue = (event:Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const textField = ref()
const focusInput = () => textField.value.focus()
defineExpose({focusInput})
</script>

<style scoped lang="scss">
div {
  position: relative;
  line-height: initial;
  height: initial;

  &::before {
    background: #aaa;
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
    line-height: 1.5rem;
    padding: 0.5rem 1rem;
    position: relative;
    width: 100%;
    outline: none;

    & > ::after {
      background: #0ea5e9;
      content: '';
      display: block;
      height: 2px;
      width: 100%;
      position: absolute;
      bottom: 0px;
    }
  }
  &:hover {
    &::before {
      height: 2px;
      background: #000;
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
    bottom: 0px;
    z-index: 1;
  }

  input:focus + .border-bottom {
    transform: scaleX(1);
  }
}
</style>