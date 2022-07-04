/*
 * @Author: will.bamb
 * @Date: 2022-04-18 12:21:02
 * @LastEditors: will.bamb
 * @LastEditTime: 2022-06-07 14:57:38
 * @Description: bus应用
 * @FilePath: \src\mixins\bus\index.js
 */
import bus from './mitt'

export default {
  data() {
    return {
      eventTable: [],
    }
  },
  methods: {
    // 监听websocket事件
    attachWSEvents() {
      // console.log(`this.serializeEventTable()`, this.serializeEventTable())
      // this.serializeEventTable().forEach(([type, handle]) => bus.on(type, handle))
    },
    // 解除websocket事件监听
    detachWSEvents() {
      // this.serializeEventTable().forEach(([type, handle]) => bus.off(type, handle))
    },
    // 序列化事件监听列表
    serializeEventTable() {
      return this.eventTable.map(event => {
        // console.log('event', event)
        if (typeof event === 'string') {
          return [event, this[event]]
        }

        if (Array.isArray(event)) {
          const [type, handle] = event

          if (typeof handle === 'function') {
            return [type, handle]
          }

          return [type, this[`${handle}`]]
        }
      })
    },
    attachWSEvent(type, handle) {
      const eventHandle = handle || this[`receiveWS_${type}`]
      const eventType = `receiveWS_${type}`
      this.eventTable.push([eventType, eventHandle])
      bus.on(eventType, eventHandle)
    },
    attachEvent(type, handle) {
      const eventHandle = handle || this[`on_${type}`]
      this.eventTable.push([type, eventHandle])
      bus.on(type, eventHandle)
    },
  },
}
