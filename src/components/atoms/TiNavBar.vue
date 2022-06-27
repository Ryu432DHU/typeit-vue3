<template>
  <nav class="bg-neutral-900 overflow-x-hidden">
    <div class="container max-w-7xl w-11/12 mx-auto flex justify-between items-center">
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
      <span @click="drawerOpen = true" class="block sm:hidden px-8 py-6 text-white hover:bg-neutral-800">=</span>
      <ti-navigation-drawer v-if="drawerOpen">
      <div class="bg-white w-5/12 h-full pt-8">
        <h1 class="flex justify-between items-center text-2xl pl-4 mb-8">
          <span>Links</span>
          <span @click="drawerOpen = false" class="block text-sm bg-neutral-200 rounded-lg mr-4 p-4">Close</span>
        </h1>
        <ul>
          <li v-for="route in routes" :key="route.path" @click="drawerOpen = false">
            <router-link :to="route.path" class="block text-sm px-8 py-6 transition duration-150 hover:bg-neutral-100">{{ route.text }}</router-link>
          </li>
          <li @click="drawerOpen = false">
            <a href="https://github.com/Ryu432DHU/typeit-vue3" class="text-sm block px-8 py-6 hover:bg-neutral-100">GitHub</a>
          </li>
        </ul>
      </div>
      </ti-navigation-drawer>
    </div>
  </nav>
</template>

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

const linkColors = computed(() => routes.map(route => route.path === router.currentRoute.value.path ? 'text-white' : 'text-neutral-400'))
</script>