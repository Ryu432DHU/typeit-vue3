<template>
  <nav class="bg-neutral-900 py-4">
    <div class="container max-w-5xl w-10/12 mx-auto flex justify-between">
      <h1 class="text-2xl text-white font-light">
        <router-link to="/">TypeIt</router-link>
      </h1>
      <ul class="flex">
        <li class="text-white text-sm px-4 py-2">
          <router-link to="/">Home</router-link>
        </li>
        <li class="text-neutral-400 text-sm px-4 py-2">
          <router-link to="/rankings">Rankings</router-link>
        </li>
        <li class="text-neutral-400 text-sm px-4 py-2">
          <router-link to="/edit">Edit</router-link>
        </li>
        <li class="text-neutral-400 text-sm px-4 py-2">
          <a href="https://github.com/Ryu432DHU/typeit-vue3">GitHub</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>

</script>