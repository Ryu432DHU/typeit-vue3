<script setup>
import MyFirstComponent from './components/atoms/MyFirstComponent.vue';
</script>

<template>
  <div class="container mx-auto">
    <MyFirstComponent alcoholicDrinkName="コーラ">
      <template v-slot:header>
        <p>Here might be a page title</p>
      </template>
      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
      <template v-slot:default><h1>Default slot</h1></template>
    </MyFirstComponent>
  </div>
</template>
