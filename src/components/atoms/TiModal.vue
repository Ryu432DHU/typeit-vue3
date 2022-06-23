<template>
  <teleport to="body">    
    <div id="overlary" class="flex items-center content-center absolute h-full w-full top-0 left-0 transition-all duration-200" style="background-color: rgba(0, 0, 0, .4)">
      <slot />
    </div>
  </teleport>
</template>

<script setup lang="ts">

</script>