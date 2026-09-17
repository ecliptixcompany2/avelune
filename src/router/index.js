import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Collection from '../pages/Collection.vue'
import CustomOrder from '../pages/CustomOrder.vue'
import Contact from '../pages/Contact.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/collection',
      name: 'collection',
      component: Collection
    },

    {
      path: '/custom-order',
      name: 'custom-order',
      component: CustomOrder
    },

    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],

  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router