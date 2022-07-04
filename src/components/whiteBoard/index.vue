<template>
  <div ref="container" style="width:600px;height:400px;border:1px solid red;">
    <slot></slot>
    <canvas :id="id" :width="canvasWidth" :height="canvasHeight"></canvas>
  </div>
</template>

<script>
import upperFirst from 'lodash/upperFirst'
import fromPairs from 'lodash/fromPairs'
import {fabric} from 'fabric'
import 'fabric/src/mixins/eraser_brush.mixin'
import control from './utils/control-helper'
import painter from './utils/draw-helper'
import {PainterMode_HighLight} from './utils/draw-helper'

export default {
  name: 'WhiteBoard',
  props: {
    id: {
      type: String,
      required: false,
      default: 'fabricCanvas',
    },
    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
  },
  emits: ['changeTool', 'updateNote'],
  data() {
    return {
      painter: null,
      paintHistory: [],
      paintReply: 0,
      windowInnerWidth: window.innerWidth,
      windowInnerHeight: window.innerHeight,
      canvasWidth: 300,
      canvasHeight: 150,
    }
  },
  computed: {
    mouseHandlers() {
      const handlers = ['down', 'up', 'move']
        .map(i => [`mouse:${i}`, this[`handleMouse${upperFirst(i)}`]])
        .filter(i => !!i[1])
      return fromPairs(handlers)
    },
    pathHandlers() {
      const handlers = ['created'].map(i => [`path:${i}`, this[`handlePath${upperFirst(i)}`]]).filter(i => !!i[1])
      return fromPairs(handlers)
    },
    drawPencilStart() {
      return this.closePainter
    },
    drawArrowStart() {
      return this.openPainter
    },
    drawLineStart() {
      return this.openPainter
    },
    drawRectStart() {
      return this.openPainter
    },
    drawCircleStart() {
      return this.openPainter
    },
    drawEraserStart() {
      return this.closePainter
    },
    drawSelectStart() {
      return this.closePainter
    },
    toggleToolHighLight() {
      return this.toggleTool
    },
    toggleToolArrow() {
      return this.toggleTool
    },
    toggleToolLine() {
      return this.toggleTool
    },
    // toggleToolDottedLine() {
    //   return this.toggleTool;
    // },
    toggleToolRect() {
      return this.toggleTool
    },
    toggleToolCircle() {
      return this.toggleTool
    },
    toggleToolTextbox() {
      return this.toggleTool
    },
    toggleSelect() {
      return this.toggleTool
    },
  },
  created() {
    // util.on(window, 'orientationchange', this.onOrientationchange)
    this.mouseMoveCount = 1
    this.initFabric()
  },
  mounted() {
    this.canvasHeight = this.$refs.container.clientHeight
    this.canvasWidth = this.$refs.container.clientWidth
    this.$nextTick(() => this.initCanvas())
  },
  methods: {
    initFabric() {
      fabric.Object.prototype.transparentCorners = false
      fabric.Object.prototype.cornerColor = '#000'
      fabric.Object.prototype.cornerSize = 6
      fabric.Object.prototype.fill = '#fff'
      fabric.Object.prototype.stroke = '#000'
      control.bindDelete()
      // control.bindClone()
      this.painter = new painter()
    },
    initCanvas() {
      const options = {
        isDrawingMode: true,
        selectable: false,
        selection: false,
        devicePixelRatio: true, //Retina 高清屏 屏幕支持
        backgroundColor: '#fff',
      }
      const canvas = (this.canvas = new fabric.Canvas(this.id, options))
      canvas.set('backgroundColor', 'rgba(255,255,255,0)')
      canvas.freeDrawingBrush.color = 'blue'
      canvas.freeDrawingBrush.width = 2
      canvas.on({...this.mouseHandlers, ...this.pathHandlers})
      this.clearHistory()
    },
    handleToggleTool(tool) {
      // console.log(`handleToggleTool`, tool)
      const toggle = this[`toggleTool${upperFirst(tool)}`] || this.toggleTool
      this.removeHighLightMarker()
      toggle && toggle(tool)
    },
    openDrawingMode() {
      this.canvas.isDrawingMode = true
    },
    closeDrawingMode() {
      this.canvas.isDrawingMode = false
    },
    toggleToolSelect(tool) {
      this.painter.mode = tool || 'select'
      this.closeDrawingMode()
      this.setSelectable()
      // console.log('toggleToolSelect', this.painter)
    },
    // 切换到普通画笔
    toggleToolPencil(tool) {
      this.painter.mode = tool || 'pencil'

      this.canvas.freeDrawingBrush = new fabric.PencilBrush(this.canvas)
      const brush = this.canvas.freeDrawingBrush
      brush.width = 2
      brush.color = 'blue'

      this.openDrawingMode()
      this.setSelectable(false)
    },
    // 切换到荧光画笔
    toggleToolPencil2(tool) {
      this.painter.mode = tool || 'pencil2'

      this.canvas.freeDrawingBrush = new fabric.PencilBrush(this.canvas)
      const brush = this.canvas.freeDrawingBrush
      brush.width = 10
      brush.color = 'rgb(240,255,72, 0.8)'

      this.openDrawingMode()
      this.setSelectable(false)
    },
    // 切换到橡皮檫
    toggleToolEraser(tool) {
      // console.log(`toggleToolPencil`, tool);
      this.painter.mode = tool || 'eraser'

      this.canvas.freeDrawingBrush = new fabric.EraserBrush(this.canvas)
      const brush = this.canvas.freeDrawingBrush
      brush.width = 40
      brush.color = '#fff'

      this.openDrawingMode()
      this.setSelectable(false)
      // console.log('toggleToolPencil', this.painter);
    },
    // 切换到橡皮檫
    toggleToolUndo(tool) {
      // console.log(`toggleToolPencil`, tool);
      // const {canvas, painter, paintHistory, paintReply} = this
      const {canvas, painter, paintHistory} = this

      painter.mode = tool || 'undo'
      this.closeDrawingMode()
      this.setSelectable(false)

      paintHistory.pop()
      const len = paintHistory.length
      canvas.clear().renderAll()
      len > 0 && canvas.loadFromJSON(paintHistory[len - 1])
      canvas.renderAll()
    },
    // 通用工具切换
    toggleTool(tool) {
      this.painter.mode = tool
      this.closeDrawingMode()
      this.setSelectable(false)
      // console.log('toggleTool', this.painter);
    },
    handleMouseDown(options) {
      // console.log('handleMouseDown', this.painter)
      const drawStart = this[`draw${upperFirst(this.painter.mode)}Start`]
      drawStart && drawStart(options)
    },
    handleMouseMove(options) {
      // console.log("handleMouseMove", this.painter.state);
      this.mouseMoveCount += 1

      const {painter, canvas} = this
      const draw = this[`draw${upperFirst(painter.mode)}`]
      if (draw) {
        if (this.mouseMoveCount % 2) return false
        if (painter.state === 0) return false

        painter.setEnd(options)
        painter.shape && canvas.remove(painter.shape)

        draw(options)

        this.$nextTick(() => {
          canvas.add(painter.shape)
          canvas.renderAll()
        })
      }
    },
    handleMouseUp() {
      // console.log('handleMouseUp', this.painter)
      const {painter} = this
      this.mouseMoveCount = 1
      if (painter.state !== 0 || painter.mode !== PainterMode_HighLight) {
        const paintMode = painter.shape ? painter.shape.get('paintMode') : ''
        if (paintMode !== 'highLight') {
          this.addPaintHistory()
        }
      }
      this.closePainter()
    },
    // 普通画笔
    handlePathCreated({path}) {
      path.selectable = false
      if (path.get('strokeWidth') === 20) {
        // 橡皮擦
        path.set('hoverCursor', 'default')
        path.set('paintMode', 'eraser')
      }
      this.addPaintHistory()
    },
    drawTextboxStart(options) {
      const {canvas, painter} = this
      painter.setStart(options)
      const textbox = painter.createTextBox()
      textbox.width = 180
      textbox.height = 30
      // textbox.enterEditing();
      canvas.add(textbox)
      canvas.setActiveObject(textbox)
      this.$nextTick(() => {
        this.$emit('changeTool', 'select')
        this.toggleToolSelect()
        textbox.enterEditing()
        this.addPaintHistory()
      })
    },
    removeHighLightMarker() {
      this.canvas.forEachObject(i => {
        if (i.get('paintMode') === PainterMode_HighLight) {
          this.canvas.remove(i)
        }
      })
    },
    drawHighLightStart() {
      this.removeHighLightMarker()
      return this.openPainter()
    },
    openPainter(options) {
      const {painter} = this
      painter.open(options)
    },
    closePainter() {
      const {painter} = this
      painter.close()
    },
    // 画箭头
    drawArrow() {
      const {painter} = this
      return painter.createArrow()
    },
    // 画直线
    drawLine() {
      const {painter} = this
      return painter.createLine()
    },
    // 画矩形
    drawRect() {
      const {painter} = this
      return painter.createRect()
    },
    // 画圆形
    drawCircle() {
      const {painter} = this
      return painter.createCircle()
    },
    drawHighLight() {
      const {painter} = this
      return painter.createHighLight()
    },
    setSelectable(selectable = true) {
      this.canvas.forEachObject(i => {
        if (i.get('strokeWidth') === 40) {
          return false
        }
        return (i.selectable = selectable)
      })
    },
    addPaintHistory() {
      // console.log(this.canvas.toJSON())
      // console.log(JSON.stringify(this.canvas))
      const jsonCanvas = JSON.stringify(this.canvas)
      this.paintHistory.push(jsonCanvas)
      this.$emit('updateNote', jsonCanvas)
    },
    updateNote(jsonCanvas) {
      const {canvas, paintHistory} = this
      paintHistory.push(jsonCanvas)
      const len = paintHistory.length
      canvas.clear().renderAll()
      len > 0 && canvas.loadFromJSON(paintHistory[len - 1])
      canvas.renderAll()
    },
    getImg(canvas) {
      const imgCanvas = this.canvas || canvas
      const {width, height} = imgCanvas
      return imgCanvas.toDataURL({
        width,
        height,
        left: 0,
        top: 0,
        format: 'png',
      })
    },
    exportCanvas(callback) {
      const {canvas} = this

      if (callback) {
        return callback({canvas})
      }

      const dataURL = this.getImg()
      const link = document.createElement('a')
      link.download = 'canvas.png'
      link.href = dataURL
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    handleOrientationchange() {
      const {canvas} = this
      canvas.setWidth(window.innerWidth - 40)
      canvas.setHeight(window.innerHeight)
    },
    onOrientationchange() {
      setTimeout(this.handleOrientationchange, 100)
    },
    clearHistory() {
      this.paintHistory = []
    },
    loadFromJSON(json) {
      const {canvas} = this
      canvas.loadFromJSON(json)
      canvas.renderAll()
    },
    clear() {
      const {canvas} = this
      this.clearHistory()
      canvas.clear().renderAll()
      canvas.remove(canvas.getActiveObject())
      canvas.setViewportTransform([1, 0, 0, 1, 0, 0])
    },
    checkEmpty() {
      return this.canvas.isEmpty()
    },
  },
  unmounted() {
    // util.off(window, 'orientationchange', this.onOrientationchange)
  },
}
</script>

<style>
.container {
  font-size: 50rem;
}
</style>
