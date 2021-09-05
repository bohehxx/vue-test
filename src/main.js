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
Vue.use(customFilters)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')