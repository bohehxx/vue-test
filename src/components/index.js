// 公共自定义组件统一注册入口

import app from './app'
export default {
  install: function(Vue) {
    // 批量注册app目录组件
    for (const item in app) {
      const compPath = app[item]
      Vue.component(item, () => import(`./app/${compPath}`))
    }
  }
}

