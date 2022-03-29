import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeVue from './pages/Home.vue'
import SubVue from './pages/Sub.vue'
import NotFoundVue from './pages/NotFound.vue'
import "./index.scss"

const routes = [
  {
    path: "/", component: HomeVue
  },
  {
    path: "/sub", component: SubVue
  },
  {
    path: "/:pathMatch(.*)*", component: NotFoundVue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount("#app")
