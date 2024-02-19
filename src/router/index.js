import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeVue.vue'
import login from '../views/LoginVue.vue'
import Register from '../views/RegisterVue.vue'
import Knowledge from '../views/KnowledgeVue.vue'
import mapshow from '../views/Mapshow/MapShow.vue'
import test from '../views/test.vue'
import special from '../views/Mapshow/SpecialMap.vue'
import doucument from '../views/Mapshow/Document.vue'
import My from '../views/My.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/test',
    name: 'test',
    component: test

  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
  ,
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/knowledge',
    name: 'knowledge',
    component: Knowledge
  },
  {
    path: '/map',
    name: 'map',
    component: mapshow,
  },
  {

    path: '/map/special',
    name: 'special',
    component: special
  },
  {
    path: '/map/document',
    name: 'doucument',
    component: doucument
  },
  {
    path: '/profile',
    name: 'my',
    component: My

  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
