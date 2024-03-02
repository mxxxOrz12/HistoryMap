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

import history from '../views/HistoryVue.vue'
import zhou from '../views/HistoryMap/ZhouMap.vue'
import qin from '../views/HistoryMap/QinMap.vue'
import han from '../views/HistoryMap/HanMap.vue'
import jin from '../views/HistoryMap/JinMap.vue'
import sui from '../views/HistoryMap/SuiMap.vue'
import wu from '../views/HistoryMap/WuMap.vue'
import song from '../views/HistoryMap/SongMap.vue'
import yuan from '../views/HistoryMap/YuanMap.vue'
import ming from '../views/HistoryMap/MingMap.vue'
import qing from '../views/HistoryMap/QingMap.vue'

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
    path: '/history',
    name: 'history',
    component: history

  },
  {
    path: '/history/zhou',
    name: ':zhou',
    component: zhou

  },
  {
    path: '/history/qin',
    name: ':qin',
    component: qin

  },
  {
    path: '/history/han',
    name: ':han',
    component: han

  },
  {
    path: '/history/jin',
    name: ':jin',
    component: jin

  },
  {
    path: '/history/sui',
    name: ':sui',
    component: sui

  },
  {
    path: '/history/wu',
    name: ':wu',
    component: wu

  },
  {
    path: '/history/song',
    name: ':song',
    component: song

  },
  {
    path: '/history/yuan',
    name: ':yuan',
    component: yuan

  },
  {
    path: '/history/ming',
    name: ':ming',
    component: ming

  },
  {
    path: '/history/qing',
    name: ':qing',
    component: qing

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
  }, {

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
  },
  {
    path: '/history',
    name: 'history',
    component: history

  },
  {
    path: '/history/zhou',
    name: ':zhou',
    component: zhou

  },
  {
    path: '/history/qin',
    name: ':qin',
    component: qin

  },
  {
    path: '/history/han',
    name: ':han',
    component: han

  },
  {
    path: '/history/jin',
    name: ':jin',
    component: jin

  },
  {
    path: '/history/sui',
    name: ':sui',
    component: sui

  },
  {
    path: '/history/wu',
    name: ':wu',
    component: wu

  },
  {
    path: '/history/song',
    name: ':song',
    component: song

  },
  {
    path: '/history/yuan',
    name: ':yuan',
    component: yuan

  },
  {
    path: '/history/ming',
    name: ':ming',
    component: ming

  },
  {
    path: '/history/qing',
    name: ':qing',
    component: qing

  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
