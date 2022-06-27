<template>
  <teleport to="#app">
    <div class="fixed h-full w-full top-0 left-0 transition-all duration-200" style="background-color: rgba(0, 0, 0, .4)">
      <slot />
    </div>
  </teleport>
</template>