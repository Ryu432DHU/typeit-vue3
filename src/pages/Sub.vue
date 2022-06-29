<template>
  <ti-sheet class="p-8">
    <div class="mb-8">
      <h1>This is Sub.vue</h1>
      <router-link to="/" class="underline">Go to the top page</router-link>
      <div class="mt-4">
        <ti-button @click="modalOpen = true">open modal</ti-button>
        <ti-dialog v-if="modalOpen">
          <p class="text-xl">Modal title</p>
          <p>modal content</p>
          <ti-button @click="modalOpen = false">Close modal</ti-button>
        </ti-dialog>
      </div>
    </div>
  </ti-sheet>
  <ti-sheet class="my-4">
    <h1>Teleport</h1>
    <div>
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

<style lang="scss">
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

const modalOpen = ref(false)
const show = ref(true)
</script>

