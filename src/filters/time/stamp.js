// 时间戳转日期格式

export default (stamp) => {
  // 如果是UNIX时间，需要转为毫秒
  if ((stamp + '').length <= 10) {
    stamp = stamp * 1000
  }
  const addZero = (num) => {
    return ('0' + num).slice(-2)
  }
  var obj = new Date(stamp)
  var date = obj.getFullYear() + '/' + addZero((obj.getMonth() + 1)) + '/' + addZero(obj.getDate()) + ' ' + addZero(obj.getHours()) + ':' + addZero(obj.getMinutes()) + ':' + addZero(obj.getSeconds())
  return date
}
