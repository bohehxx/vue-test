import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
// 自定义组件全局注册
import customComponents from './components/'
Vue.use(customComponents)
// 自定义指令全局注册
import customDirectives from './directives/'
Vue.use(customDirectives)
// 自定义过滤器全局注册
import customFilters from './filters/'
import vueSwiper from 'vue-awesome-swiper'
import '@/icons'
import 'swiper/swiper-bundle.css'
Vue.use(vueSwiper)
Vue.use(customFilters)
import toast from './common/toast/index'
import Workbench from '@/components/ky/WorkBench'
import WorkbenchHeader from '@/components/ky/workbenchHeader'
import Alert from '../src/components/alert/alert.js'

Vue.config.productionTip = false

Vue.prototype.$Alert = Alert
Vue.use(toast)
Vue.component("workbench", Workbench)
Vue.component("workbench-header", WorkbenchHeader)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
