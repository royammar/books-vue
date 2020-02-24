import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookPage from '../views/BookPage'
import BookDetails from '../views/BookDetails'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/book', component: BookPage },
  { path: '/book/:id', component: BookDetails },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
