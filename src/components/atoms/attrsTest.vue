<template>
  <div>
    <h1>attrsTest.vue</h1>
    <p>Attributes</p>
    <pre>
      {{ $attrs }}
    </pre>
    <p>Slots</p>
    <pre>
      {{ $slots }}
    </pre>
    <p>Slot contents</p>
    <pre>
      <slot />
    </pre>
  </div>
</template>

<script lang="ts" setup>
import { useSlots, useAttrs, onMounted } from 'vue'

const slots = useSlots()
const attrs = useAttrs()

onMounted(() => {
  console.log(slots)
  console.log(attrs)
})
</script>