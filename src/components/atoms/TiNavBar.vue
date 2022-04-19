<template>
  <nav class="bg-neutral-900 py-4">
    <div class="container max-w-7xl w-10/12 mx-auto flex justify-between">
      <h1 class="text-2xl text-white font-light">
        <router-link to="/">TypeIt</router-link>
      </h1>
      <ul class="flex">
        <li v-for="(route, index) in routes" :key="route.path" class="text-sm px-4 py-2" :class="linkColors[index]">
          <router-link :to="route.path">{{ route.text }}</router-link>
        </li>
        <li class="text-neutral-400 text-sm px-4 py-2">
          <a href="https://github.com/Ryu432DHU/typeit-vue3">GitHub</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const routes = [
  {
    path: "/", text: "Home"
  },
  {
    path: "/rankings", text: "Rankings"
  },
  {
    path: "/edit", text: "Edit"
  },
]

const linkColors = computed(() => routes.map(route => route.path === router.currentRoute.value.path ? 'text-white' : 'text-neutral-400'))

watch(router.currentRoute, () => {
  console.log(router.currentRoute.value)
  console.log(routes.map(route => route.path === router.currentRoute.value.path))
})
</script>