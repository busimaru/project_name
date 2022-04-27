import Vue from 'vue'
import VueRouter from "vue-router"
import Sample from "./components/Sample.vue"
import List from "./components/List.vue"

Vue.use(VueRouter)

const routes =[
  { path: '/Sample', component:Sample},
  { path: '/list', component:List}
]

const router = new VueRouter({
  routes: routes
})

export default router