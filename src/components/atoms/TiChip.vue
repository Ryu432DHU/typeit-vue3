<template>
  <span class="text-xs bg-neutral-200 rounded-full mr-2 mb-1 px-3 py-2" :class="chipStyle(color)">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { TiColor } from '@/types'
const props = defineProps<{
  color?: TiColor
}>()

const colorTheme = {
  "green": "bg-green-500",
  "red"  : "bg-red-500"
}

const chipStyle =  (chipColor:TiColor | undefined) => {
  if(!chipColor)return
  if(colorTheme[chipColor]){
    return [colorTheme[chipColor], "text-white"]
  }
  return 
}

</script>