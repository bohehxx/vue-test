// 点击其他区域指令

// const clickOutCtx = '@clickoutside'

export default {
  bind(el, binding) {
    function onDocumentClick(e) {
      if (el.contains(e.target)) {
        return false
      }
      if (binding.expression) {
        binding.value(e)
      }
    }
    el.__vueClickOutside__ = onDocumentClick
    document.addEventListener('click', onDocumentClick)
  },
  unbind(el) {
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
}
