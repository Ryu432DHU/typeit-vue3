<template>
  <div>
    <input type="text" @input="updateModelValue($event)" :value="modelValue" :placeholder="placeholder">
    <div class="border-bottom"></div>
  </div>
</template>

<script setup lang="ts">
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
</script>

<style scoped lang="scss">
div {
  position: relative;

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
    padding: 1rem 1rem;
    position: relative;
    width: 100%;
    outline: none;

    & > ::after {
      background: #0ea5e9;
      content: '';
      display: block;
      height: 3px;
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
    height: 3px;
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  input:focus + .border-bottom {
    transform: scaleX(1);
  }
}
</style>