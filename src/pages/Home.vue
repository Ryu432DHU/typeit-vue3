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
  <p>
    <router-link to="/sub" class="underline">Go to the Sub.vue</router-link>
  </p>
  <p>
    <router-link to="/not-existing-page" class="underline">Go to a not not-existing-page</router-link>
  </p>
  </div>
</template>

<script setup>
import MyFirstComponent from '../components/atoms/MyFirstComponent.vue';
</script>