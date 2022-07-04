/*
 * @Author: will.bamb
 * @Date: 2022-01-14 10:32:21
 * @LastEditors: will.bamb
 * @LastEditTime: 2022-06-07 09:36:30
 * @Description: file content
 * @FilePath: \src\components\WhiteBoard\utils\draw-helper.js
 */

import {fabric} from 'fabric'
import pick from 'lodash/pick'
import fromPairs from 'lodash/fromPairs'

const gStroke = 'blue'
const gEraserStroke = 'blue'
const gStrokeWidth = 2
const gEraserStrokeWidth = 20
const gStrokeDashArray = [10, 3]
const gFill = 'rgba(255, 255, 255, 0)'
const gTheta = 15.5
const gHeadLen = 15.5
const gDefaultSelectable = false

export const PainterMode_HighLight = 'highLight'

export const PainterModes = [
  ['pencil', '曲线', 'iconfont icon-jurassic_curve'],
  [PainterMode_HighLight, '荧光笔', 'iconfont icon-yingguangbi'],
  ['arrow', '箭头', 'iconfont icon-jiantou_zuoshang'],
  ['line', '直线', 'iconfont icon-straight'],
  // ['dottedLine', '虚线', 'ppt'],
  ['rect', '矩形', 'iconfont icon-fuxuan'],
  ['circle', '圆形', 'iconfont icon-yuanquan'],
  // ['ellipse', '椭圆', 'chakanyifabu'],
  // ['triangle', '三角形', 'word'],
  // ['equalTriangle', '等边三角形', 'fuxuan'],
  // ['text', '文字', 'fuxuankuang_xuanzhong3'],
  ['textbox', '文本', 'iconfont icon-wenben'],
  ['eraser', '橡皮擦', 'iconfont icon-cachushuju'],
  ['select', '选择', 'iconfont icon-xuanze'],
  ['undo', '撤销', 'iconfont icon-chexiao'],
  ['export', '导出', 'iconfont icon-baocun'],
]

export const PainterModeDict = fromPairs(PainterModes.map(([key, label, icon]) => [key, {key, label, icon}]))

class WhiteBoardPainter {
  constructor() {
    this.mStartParams = {}
    this.mEndParams = {}
    this.mState = 0
    this.mShape = null
    this.mMode = 'pencil'
  }
  get state() {
    return this.mState
  }
  get shape() {
    return this.mShape
  }
  get mode() {
    return this.mMode
  }
  set mode(value) {
    this.mMode = value
  }
  setStart(options) {
    this.mStartParams = pick(options.pointer, ['x', 'y'])
  }
  setEnd(options) {
    this.mEndParams = pick(options.pointer, ['x', 'y'])
  }
  open(options) {
    this.mState = 1
    options && this.setStart(options)
  }
  close() {
    this.mState = 0
    this.mShape = null
  }
  drawDottedLine(options) {
    const {x: toX, y: toY} = this.endParams
    const defaultOptions = {
      ...this.startParams,
      x1: toX,
      y1: toY,
      strokeDashArray: gStrokeDashArray,
      stroke: gStroke,
      strokeWidth: gStrokeWidth,
    }
    const mergeOptions = Object.assign(defaultOptions, options)
    const {x, y, x1, y1} = pick(mergeOptions, ['x', 'y', 'x1', 'y1'])
    return (this.mShape = new fabric.Line(
      [x, y, x1, y1],
      pick(mergeOptions, ['strokeDashArray', 'stroke', 'strokeWidth'])
    ))
  }
  createCircle(options) {
    const {x, y} = this.mStartParams
    const defaultOptions = {
      left: x,
      top: y,
      stroke: gStroke,
      fill: gFill,
      strokeWidth: gStrokeWidth,
      selectable: gDefaultSelectable,
    }
    const mergeOptions = Object.assign(defaultOptions, options)
    if (!mergeOptions.radius) {
      const {x: x1, y: y1} = this.mEndParams
      mergeOptions.radius = Math.sqrt((x1 - x) ** 2 + (y1 - y) ** 2) / 2
    }
    return (this.mShape = new fabric.Circle(mergeOptions))
  }
  createHighLight(options) {
    const {x, y} = this.mEndParams
    const defaultOptions = {
      paintMode: PainterMode_HighLight,
      radius: 10,
      fill: this.getHighLightFill(),
      left: x - 10,
      top: y - 10,
      stroke: 'red',
      strokeWidth: 0,
      selectable: gDefaultSelectable,
    }
    const mergeOptions = Object.assign(defaultOptions, options)
    return (this.mShape = new fabric.Circle(mergeOptions))
  }
  createArrow(options = {}) {
    const {x, y} = this.mStartParams
    const {x: x1, y: y1} = this.mEndParams
    const {theta = gTheta, headLen = gHeadLen} = options

    const mergeOptions = Object.assign(
      {
        stroke: gStroke,
        fill: gFill,
        strokeWidth: gStrokeWidth,
        selectable: gDefaultSelectable,
      },
      pick(options, ['stroke', 'fill', 'strokeWidth', 'selectable'])
    )

    return (this.mShape = new fabric.Path(this.getArrowLine(x, y, x1, y1, theta, headLen), mergeOptions))
  }
  createLine(options = {}) {
    const {x, y} = this.mStartParams
    const {x: x1, y: y1} = this.mEndParams
    const mergeOptions = Object.assign(
      {
        stroke: gStroke,
        strokeWidth: gStrokeWidth,
        selectable: gDefaultSelectable,
      },
      pick(options, ['stroke', 'fill', 'strokeWidth', 'selectable'])
    )
    return (this.mShape = new fabric.Line([x, y, x1, y1], mergeOptions))
  }
  createEraser(options = {}) {
    const {x, y} = this.mStartParams
    const {x: x1, y: y1} = this.mEndParams
    const mergeOptions = Object.assign(
      {
        stroke: gEraserStroke,
        strokeWidth: gEraserStrokeWidth,
        selectable: gDefaultSelectable,
      },
      pick(options, ['stroke', 'fill', 'strokeWidth', 'selectable'])
    )
    return (this.mShape = new fabric.Line([x, y, x1, y1], mergeOptions))
  }
  createRect(options = {}) {
    const {x, y} = this.mStartParams
    const {x: x1, y: y1} = this.mEndParams
    const defaultOptions = {
      left: x,
      top: y,
      width: x1 - x,
      height: y1 - y,
      stroke: gStroke,
      fill: gFill,
      // opacity: 0.5,
      strokeWidth: gStrokeWidth,
      selectable: gDefaultSelectable,
    }
    const mergeOptions = Object.assign(defaultOptions, options)
    return (this.mShape = new fabric.Rect(mergeOptions))
  }
  createTextBox() {
    const {x, y} = this.mStartParams
    return (this.mShape = new fabric.IText('', {
      left: x,
      top: y,
      fill: gStroke,
      // fill: '#fff',
      // fill: '#880E4F',
      strokeWidth: 1,
      stroke: gStroke,
      fontSize: 30,
      // width: 160,
      // height: 60,
      fontFamily: 'Calibri',
      fontWeight: 'normal',
      // MIN_TEXT_WIDTH: 160,
      selectable: gDefaultSelectable,
    }))
  }
  getHighLightFill() {
    return new fabric.Gradient({
      type: 'radial',
      coords: {
        r1: 10, // 该属性仅径向渐变可用，外圆半径
        r2: 0, // 该属性仅径向渐变可用，外圆半径
        x1: 10, // 焦点的x坐标
        y1: 10, // 焦点的y坐标
        x2: 10, // 中心点的x坐标
        y2: 10, // 中心点的y坐标
      },
      colorStops: [
        {offset: 0, color: '#fff'},
        {offset: 1, color: 'red'},
      ],
    })
  }
  getArrowLine(fromX, fromY, toX, toY, theta, headlen) {
    theta = typeof theta != 'undefined' ? theta : 30
    headlen = typeof theta != 'undefined' ? headlen : 10
    // 计算各角度和对应的P2,P3坐标
    const angle = (Math.atan2(fromY - toY, fromX - toX) * 180) / Math.PI,
      angle1 = ((angle + theta) * Math.PI) / 180,
      angle2 = ((angle - theta) * Math.PI) / 180,
      topX = headlen * Math.cos(angle1),
      topY = headlen * Math.sin(angle1),
      botX = headlen * Math.cos(angle2),
      botY = headlen * Math.sin(angle2)
    let arrowX = fromX - topX,
      arrowY = fromY - topY
    let path = ' M ' + fromX + ' ' + fromY
    path += ' L ' + toX + ' ' + toY
    arrowX = toX + topX
    arrowY = toY + topY
    path += ' M ' + arrowX + ' ' + arrowY
    path += ' L ' + toX + ' ' + toY
    arrowX = toX + botX
    arrowY = toY + botY
    path += ' L ' + arrowX + ' ' + arrowY
    return path
  }
}
// const painter = new WhiteBoardPainter()
export default WhiteBoardPainter
