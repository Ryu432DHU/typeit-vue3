import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../pages/Home.vue'
import SubVue from '../pages/Sub.vue'
import Rankings from '../pages/Rankings.vue'
import NotFoundVue from '../pages/NotFound.vue'
import CreateVue from '../pages/Create.vue'
import EditVue from '../pages/Edit.vue'
import EditWordListVue from '../pages/EditWordList.vue'

const routes = [
  { path: "/", component: HomeVue },
  { path: "/sub", component: SubVue },
  { path: "/rankings", component: Rankings },
  { path: "/create", component: CreateVue },
  { path: "/edit", component: EditVue },
  { path: "/edit/:id", component: EditWordListVue },
  { path: "/:pathMatch(.*)*", component: NotFoundVue }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})