function checkArray(key) {
  const arr = ['1', '2', '3', '4']
  const index = arr.indexOf(key)
  if (index > -1) {
    return true // 有权限
  } else {
    return false // 无权限
  }
}
export default {
  inserted: function(el, binding) {
    const permission = binding.value
    if (permission) {
      const hasPermission = checkArray(permission)
      if (!hasPermission) {
        // 没有权限 移除Dom元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
}
