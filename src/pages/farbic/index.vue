<template>
  <div>
    <!-- html -->
    <canvas id="canvas" width="500" height="500" style="border: 1px solid #ccc;"></canvas>
  </div>
</template>
<script>
import { fabric } from 'fabric'
export default {
  data() {
    return {}
  },
  mounted() {
    var canvas = new fabric.Canvas('canvas')
    canvas.isDrawingMode = true
    canvas.freeDrawingBrush.color = 'blue'
    canvas.freeDrawingBrush.width = 5
    var ret = new fabric.Rect({
      left: 200,
      top: 200,
      fill: 'red',
      width: 200,
      height: 200
    })
    canvas.add(ret)
    //创建圆形
    let circle = new fabric.Circle({
      left: 0,
      top: 0,
      fill: 'red',
      radius: 50
    })
    //创建三角形
    let triangle = new fabric.Triangle({
      left: 200,
      top: 0,
      fill: 'blue',
      width: 100,
      height: 100
    })
    canvas.add(circle, triangle)
    canvas.setBackgroundImage(
    'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27d1b4e5f8824198b6d51a2b1c2d0d75~tplv-k3u1fbpfcp-zoom-crop-mark:400:400:400:400.awebp',
    canvas.renderAll.bind(canvas),
     {
      angle: 15 // 旋转背景图
    }
  )


  }
}
</script>