  
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import One from '@/pages/demo/one'
import Two from '@/pages/demo/two'
import ClassDemo from '@/pages/demo/classDemo'
import ComputedDemo from '@/pages/demo/computedDemo'
import EventDemo from '@/pages/demo/eventDemo'
import FormDemo from '@/pages/demo/formDemo'
import WatchDemo from '@/pages/demo/watchDemo'
import CustomModel from '@/pages/advancedUse/index'
import KeepAlive from '@/pages/advancedUse/KeepAlive'
import MinxinDemo from '@/pages/advancedUse/MixinDemo'
import NextTick from '@/pages/advancedUse/NextTick'
import Wat from '@/pages/wat/Index'
import Listen from '@/pages/listen/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/one',
      name: 'One',
      component: One
    },
    {
      path: '/two',
      name: 'Two',
      component: Two
    },
    {
      path: '/two',
      name: 'Two',
      component: Two
    },
    {
      path: '/class',
      name: 'classDemo',
      component: ClassDemo
    },
    {
      path: '/computed',
      name: 'ComputedDemo',
      component: ComputedDemo
    },
    {
      path: '/event',
      name: 'EventDemo',
      component: EventDemo
    },
    {
      path: '/form',
      name: 'FormDemo',
      component: FormDemo
    },
    {
      path: '/watch',
      name: 'WatchDemo',
      component: WatchDemo
    },
    {
      path: '/customModel',
      name: 'CustomModel',
      component: CustomModel
    },
    {
      path: '/keepAlive',
      name: 'KeepAlive',
      component: KeepAlive
    },
    {
      path: '/mixin',
      name: 'MinxinDemo',
      component: MinxinDemo
    },
    {
      path: '/nextTick',
      name: 'NextTick',
      component: NextTick
    },
    {
      path: '/wat',
      name: 'wat',
      component: Wat
    },
    {
      path: '/listen',
      name: 'Listen',
      component: Listen
    }
    
  ]
})