<template>
  <teleport to="body">    
    <div id="overlary" class="flex items-center content-center fixed h-full w-full top-0 left-0 transition-all duration-200" style="background-color: rgba(0, 0, 0, .4)">
      <div class="modal p-8 w-6/12 m-auto bg-white">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">

</script>