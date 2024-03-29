
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import One from '@/pages/demo/one'
import Two from '@/pages/demo/two'
import Three from '@/pages/demo/three'
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
import Trade from '@/pages/dstso/trade'
import Book from '@/pages/dstso/book'
import Promisify from '@/pages/promisify/index'
import Farbic from '@/pages/farbic/index'
import Draw from '@/pages/draw/index'
import Video from '@/pages/video/index'
import File from '@/pages/file/index'
import Work from '@/pages/work/index'
import Emitter from '@/pages/emit/A'
import Functional from'@/pages/functional/index'
import TableRender from '@/pages/comp/tableRender/index'
import TableSlot from '@/pages/comp/tableSlot/index'
import Display from '@/pages/comp/display/index'
import Alert from '@/pages/comp/alert/index'
import FormValidate from '@/pages/comp/form/index'
import CheckBox from '@/pages/comp/checkbox/index'
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
      path: '/three',
      name: 'Three',
      component: Three
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
      path: '/formDemo',
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
      path: '/trade',
      name: 'trade',
      component: Trade
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/promisify',
      name: 'promisify',
      component: Promisify
    },
    {
      path: '/farbic',
      name: 'farbic',
      component: Farbic
    },
    {
      path: '/draw',
      name: 'draw',
      component: Draw
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path:'/file',
      name:'file',
      component:File
    },
    {
      path:'/work',
      name:'work',
      component:Work
    },
    {
      path:'/emitter',
      name:'emitter',
      component:Emitter
    },
    {
      path:'/functional',
      name:'functional',
      component:Functional
    },
    {
      path:'/tableRender',
      name:'tableRender',
      component:TableRender
    },
    {
      path:'/tableSlot',
      name:'tableSlot',
      component:TableSlot
    },
    {
      path:'/display',
      name:'display',
      component:Display
    },
    {
      path:'/alert',
      name:'alert',
      component:Alert
    },
    {
      path:'/alert',
      name:'alert',
      component:Alert
    },
    {
      path:'/formValidate',
      name:'formValidate',
      component:FormValidate
    },
    {
      path:'/checkbox',
      name:'checkbox',
      component:CheckBox
    }
    
    
  ]
})
