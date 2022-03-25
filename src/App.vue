<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/atoms/HelloWorld.vue'
import MyFirstComponent from './components/atoms/MyFirstComponent.vue';
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <MyFirstComponent></MyFirstComponent>
  <p class="text-lg hoge foo">Large Red text(Tailwind CSS)</p>
</template>

<style lang="scss" scoped>
.hoge {
  color: red;
}
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
