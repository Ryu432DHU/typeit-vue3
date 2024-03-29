<template>
  <div class="ti-text-field">
    <div class="text-field" :class="{ 'text-field--error' : hasError }">
      <span class="text-field-label" :class="textFieldLabelClass">{{ textFieldLabel }}</span>
      <input type="text"
        @input="updateModelValue($event)"
        @focus="isTextFieldFocused = true"
        @focusout="isTextFieldFocused = false"
        ref="textField" :value="modelValue" :placeholder="placeholderText">
      <div class="border-bottom"></div>
    </div>
    <div class="text-field-details">
      <span class="text-field-details-hint" :class="{'text-field-details-hint--is-active' : isTextFieldFocused}">{{ hintText }}</span>
      <span class="counter" :class="{ 'counter--error' : doesExceedCount }">{{ counterText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const emit = defineEmits(['update:modelValue'])
const props = defineProps<{
  modelValue: string,
  label?: string,
  placeholder?: string,
  count?: number,
  hint?: string,
  disabled?: boolean,
  variant?: "standard" | "outlined" | "filled"
}>()

const updateModelValue = (event:Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const isTextFieldFocused = ref(false)
const shouldMoveLabel = computed(() => isTextFieldFocused.value || 0 < props.modelValue.length)
const placeholderText = computed(() => {
  if(!props.placeholder) return
  return isTextFieldFocused.value ? props.placeholder : ''
})
const hasError = computed(() => doesExceedCount.value)
const doesExceedCount = computed(() => {
 if(!props.count) return
 return props.count < props.modelValue.length
})
const counterText = computed(() => props.count ? `${props.modelValue.length} / ${props.count}` : '')
const textFieldLabel = computed(() => props.label ? props.label : '')
const textField = ref()
const textFieldLabelClass = computed(() => ({
  'text-field-label--is-active': shouldMoveLabel.value,
  'text-field-label--text-primary': isTextFieldFocused.value
}))
const hintText = computed(() => props.hint ? props.hint : '')

const focusInput = () => textField.value.focus()
defineExpose({focusInput})
</script>

<style scoped lang="scss">
.ti-text-field {
  position: relative;
  line-height: initial;
  height: initial;
  padding: 1.5rem 0;

  .text-field {
    position:  relative;

    .text-field-label {
      color: #737373;
      font-size: 1rem;
      transition: top 0.25s, font-size 0.25s;
      position: absolute;
      top: 8px;
      left: 0;

      &--is-active {
        font-size: 0.875rem;
        top: -12px;
      }
      &--text-primary {
        color: #3b82f6;
      }
    }

    &.text-field--error {
      &::before,
      &:hover::before,
      .border-bottom {
        background: #ef4444;
      }

      .text-field-label {
        color: #ef4444;
      }
    }

    &::before {
      background: #737373;
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
      font-size: 1rem;
      padding: 8px 0;
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

  .text-field-details {
    display: flex;

    &-hint {
      color: #737373;
      font-size: 0.875rem;
      opacity: 0;
      transition: opacity 0.25s, bottom 0.25s;
      position: absolute;
      bottom: 6px;

      &--is-active {
        opacity: 1;
        bottom: 2px;
      }
    }

    .counter {
      color: #a3a3a3;
      font-size: 0.875rem;
      position: absolute;
      bottom: 2px;
      right: 0;

      &--error {
        color: #ef4444;
      }
    }
  }
}
</style>
