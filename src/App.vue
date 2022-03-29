<template>
  <ti-nav-bar />
  <router-view />
</template>

<script setup>
import TiNavBar from './components/atoms/TiNavBar.vue';

console.log(process.env.NODE_ENV)
</script>
