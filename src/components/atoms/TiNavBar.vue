<template>
  <nav class="bg-neutral-900 overflow-x-hidden">
    <div class="container max-w-7xl w-11/12 mx-auto sm:w-10/12 flex justify-between items-center">
      <h1 class="text-2xl text-white font-light">
        <router-link to="/">TypeIt</router-link>
      </h1>
      <ul class="hidden sm:flex">
        <li v-for="(route, index) in routes" :key="route.path">
          <router-link :to="route.path" class="inline-block text-sm px-4 py-6" :class="linkColors[index]">{{ route.text }}</router-link>
        </li>
        <li>
          <a href="https://github.com/Ryu432DHU/typeit-vue3" class="text-neutral-400 text-sm inline-block px-4 py-6">GitHub</a>
        </li>
      </ul>
      <span @click="drawerOpen = !drawerOpen" class="block text-lg sm:hidden px-8 py-4 text-white hover:bg-neutral-800">=</span>
      <div id="nav" :class="{hoge: drawerOpen}" class="fixed top-0 left-0 z-10 bg-white w-7/12 h-screen pt-4">
        <h1 class="flex justify-between items-center text-2xl pl-4 mb-8">
          <span>Links</span>
          <div @click="drawerOpen = false" class="flex items-center justify-center bg-neutral-100 rounded-lg mr-4 h-10 w-10">
            <span class="block rotate-45 text-2xl">+</span>
          </div>
        </h1>
        <ul>
          <li v-for="route in routes" :key="route.path" @click="drawerOpen = false">
            <router-link :to="route.path" class="block px-8 py-6 transition duration-150 hover:bg-neutral-100">{{ route.text }}</router-link>
          </li>
          <li @click="drawerOpen = false">
            <a href="https://github.com/Ryu432DHU/typeit-vue3" class="block px-8 py-6 hover:bg-neutral-100">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
#nav {
  transition: transform 0.5s ease;
  transform: translateX(-100%);

  &.hoge {
    transform: translateX(0%);
  }
}
</style>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'

const drawerOpen = ref(false)

const router = useRouter()
const routes = [
  { path: "/", text: "Home" },
  { path: "/rankings", text: "Rankings" },
  { path: "/create", text: "Create" },
  { path: "/edit", text: "Edit" },
]

// route.path , router.currentRoute.value.path

const linkColors = computed(() => routes.map(route => {
  if(router.currentRoute.value.path.includes("/edit")){
    return route.path.includes("/edit") ? "text-white" : "text-neutral-400"
  } else {
    return route.path === router.currentRoute.value.path ? "text-white" : "text-neutral-400"
  }
}))
</script>