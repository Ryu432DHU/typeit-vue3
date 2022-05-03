<template>
  <span class="text-xs bg-neutral-200 rounded-full mr-2 mb-1 px-3 py-2" :class="chipStyle(color)">
    <slot></slot>
  </span>
</template>

<script setup>
const props = defineProps({
  color: String
})

const colorTheme = {
  "green": "bg-green-500",
  "red"  : "bg-red-500"
}

const chipStyle = chipColor => {
  if(colorTheme[chipColor]){
    return [colorTheme[chipColor], "text-white"]
  }
}

</script>