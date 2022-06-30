<template>
  <ti-sheet class="p-8">
    <h1>Sidebar</h1>
    <ti-button @click="sidebarOpen = !sidebarOpen">Open / {{ sidebarOpen }}</ti-button>
    <teleport to="#app">
      <div id="sidebar" :class="{'active': sidebarOpen}" class="fixed h-screen bg-white">
        <ul>
          <li class="px-4 py-4 hover:bg-slate-50">Item 1</li>
          <li class="px-4 py-4 hover:bg-slate-50">Item 2</li>
          <li class="px-4 py-4 hover:bg-slate-50">Item 3</li>
        </ul>
        <ti-button @click="sidebarOpen = false">Close</ti-button>
      </div>
    </teleport>
  </ti-sheet>
  <ti-sheet class="my-4 p-8">
    <h1>Teleport</h1>
    <div id="teleport">
      <ti-button @click="show = !show">Toggle / {{ show }}</ti-button>
      <transition name="fade">
        <p v-if="show">Toggle content</p>
      </transition>
        <teleport to="#app">
          <transition name="fade">
            <p v-if="show">hoge</p>
          </transition>
        </teleport>
      <teleport-test>
        <transition name="fade">
          <p v-if="show" class="bg-slate-400 p-8">Teleported content</p>
        </transition>
      </teleport-test>
      <transition name="fade">
        <div v-if="show">
          <hello-world />
        </div>
      </transition>
      <transition name="fade">
        <hello-world v-if="show" />
      </transition>
    </div>
  </ti-sheet>
</template>

<style lang="scss" scoped>
#sidebar {
  width: 100px;
  transition: transform 0.5s ease;
  position: absolute;
  top: 0px;
  overflow: hidden;
  transform: translateX(-100px);

  &.active {
    transform: translateX(0px);
  }
}
</style>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import TeleportTest from '@/components/atoms/teleportTest.vue';
import TiButton from '@/components/atoms/TiButton.vue';
import HelloWorld from '../components/atoms/HelloWorld.vue';

const show = ref(true)
const sidebarOpen = ref(true)
</script>

