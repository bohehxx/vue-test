import Toast from './Toast.vue'
export default {
  install: function(Vue) {
  // 创建构造器
    const ToastContrystor = Vue.extend(Toast)
    // new的方式 根据组件构造器，可以创建组件对象
    const toast = new ToastContrystor()
    // 手动挂载某一个元素上
    toast.$mount(document.createElement('div'))
    // toast.$el对应的就是div
    document.body.appendChild(toast.$el)
    // 组件挂载到Vue原型上
    Vue.prototype.$toast = toast
  }
}
