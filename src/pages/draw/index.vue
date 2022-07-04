<template>
  <div ref="WhiteBoardWrap">
    <div>
      <div>
        <p
          @click="debounceHandleSave"
        >保存</p>
        <p
          icon="chexiao"
          @click="handle('undo')"
        >撤销</p>
        <div>&nbsp;</div>
      </div>
      <template v-for="[mode, label, icon] in PainterModes">
        <div @click="handle(mode, label)" :key="mode">
          {{ icon }}
        </div>
      </template>
      <button type="primary" color="#288EFF" @click="debounceHandleProjection">
        投屏
      </button>
      <p @click="debounceHandleClose">关闭</p>
    </div>
    <white-board
      ref="canvas"
      id="canvasWhiteBoard"
      @changeTool="changeTool"
      @updateNote="updateNote"
    />
  </div>
</template>

<script>
import bizBus from '@/bus'
import WhiteBoard from '@/components/whiteBoard/index.vue'
// import { single, uploadFile, updateScreenshot } from '@/biz/api/meeting/index'
import _ from'lodash'
const PainterModes = [
  ['pencil', '画笔', 'huabi'],
  ['pencil2', '画笔', 'yingguangbi'],
  // [PainterMode_HighLight, '荧光笔', 'yingguangbi'],
  ['textbox', '文本', 'wenben'],
  ['line', '直线', 'zhixian'],
  ['circle', '圆形', 'yuan'],
  ['rect', '矩形', 'juxingkuang'],
  ['arrow', '箭头', 'jiantou'],
  ['eraser', '橡皮擦', 'xiangpi'],
  // ['dottedLine', '虚线', 'ppt'],
  // ['ellipse', '椭圆', 'chakanyifabu'],
  // ['triangle', '三角形', 'word'],
  // ['equalTriangle', '等边三角形', 'fuxuan'],
  // ['text', '文字', 'fuxuankuang_xuanzhong3'],
  // ['undo', '撤销', 'chexiao'],
  ['select', '选择', 'xuanze']
  // ['export', '导出', 'iconfont icon-baocun'],
]

export default {
  name: 'WhiteBoardWrap',
  mixins: [bizBus],
  components: { WhiteBoard },
  data() {
    return {
      open: false,
      PainterModes,
      active: 'pencil',
      updateCount: 0
    }
  },
  computed: {
    whiteBoardClassStyle() {
    //   const retVal = [this.$style['white-board-wrap']]
    //   if (!this.open) {
    //     retVal.push(this.$style['collapse'])
    //   }
      return retVal.join(' ')
    },
    canvas() {
      return this.$refs.canvas
    },
    meetingId() {
      return this.$store.state.meetingId
    },
    topicId() {
      return this.$store.state.topicId
    },
    debounceHandleSave() {
      return _.debounce(this.onSave, 300, { leading: true })
    },
    debounceHandleClose() {
      return _.debounce(this.onClose, 300, { leading: true })
    },
    debounceHandleProjection() {
      return _.debounce(this.onProjection, 300, { leading: true })
    }
  },
  created() {
    this.attachEvent('openWhiteBoard')
  },
  beforeUnmount() {
    this.detachWSEvents()
  },
  methods: {
    handle(key) {
      this.active = key
      this.canvas.handleToggleTool(key)
    },
    onSave() {
      // if (this.canvas.checkEmpty())
        // return biz.vanToast({
        //   message: '白板没有内容！',
        //   teleport: this.$refs.WhiteBoardWrap
        // })
      // if (this.updateCount === 0)
        // return biz.vanToast({
        //   message: '已保存！',
        //   teleport: this.$refs.WhiteBoardWrap
        // })
      this.handleSave()
    },
    handleSave() {
      alert(1)
      console.log(this.saveCanvas,'this.saveCanvas')
      this.canvas.exportCanvas(this.saveCanvas)
    },
    onClose() {
      this.handleClose()
      // if (this.canvas.checkEmpty() || this.updateCount === 0)
      //   return this.handleClose()
      // biz.vanConfirm(
      //   this.handleSave,
      //   // {
      //   //   title: '保存',
      //   //   message: '是否保存当前白板内容？',
      //   //   teleport: this.$refs.WhiteBoardWrap
      //   // },
      //   this.handleClose
      // )
    },
    handleClose() {
      this.open = false
    },
    b64toBlob(b64Data, contentType = 'image/png', sliceSize = 512) {
      const byteCharacters = atob(b64Data)
      const byteArrays = []

      for (
        let offset = 0;
        offset < byteCharacters.length;
        offset += sliceSize
      ) {
        const slice = byteCharacters.slice(offset, offset + sliceSize)

        const byteNumbers = new Array(slice.length)
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i)
        }

        const byteArray = new Uint8Array(byteNumbers)

        byteArrays.push(byteArray)
      }

      const blob = new Blob(byteArrays, { type: contentType })
      return blob
    },
    saveCanvas({ canvas }) {
      // biz.vanToastLoading({ teleport: this.$refs.WhiteBoardWrap })
      const dataURL = this.canvas.getImg(canvas)
      const blob = this.b64toBlob(dataURL.replace('data:image/png;base64,', ''))
      const { meetingId = 75, topicId = 1 } = this
      const formData = new FormData()
      formData.append(
        'file',
        new File([blob], `${Math.ceil(Math.random() * 100000)}.png`)
      )
    //   uploadFile(formData).then(({ data }) => {
    //     const token = data[0]
    //     updateScreenshot({ meetingId, token, topicId }).then(() => {
    //     //   single({ id: meetingId }).then(({ data }) => {
    //     //     this.$store.commit('setMeeting', data)
    //     //     biz.vanToastSuccess({ teleport: this.$refs.WhiteBoardWrap })
    //     //   })
    //       this.handleClose()
    //     })
    //   })
    },
    onProjection() {
      const meetingId = this.$store.state.meetingId
      const topicId = this.$store.state.topicId
      console.log('onProjection')
    },
    updateNote() {
      this.updateCount += 1
    },
    changeTool(tool) {
      this.active = tool
    },
    on_openWhiteBoard() {
      this.canvas.clear()
      this.open = true
    }
  }
}
</script>

<style>
.controllers {
}

.divide {
  width: 1rem;
  margin: 0 40rem;
  border-right: solid 1px #ececec;
}

.tool {
  width: 140rem;
  font-size: 60rem;
}

.projection {
  position: absolute;
  right: 171rem;
  height: 90rem;
  padding: 0 36rem;
  font-weight: 500;
  font-size: 56rem;
  border-radius: 10rem;
}

.close {
  right: 50rem;
  font-size: 60rem;
}

.tool-bar {
}

.white-board {
}

.white-board-wrap {
  z-index: 2030;
  font-size: 50rem;
}
.collapse {
  top: 100vh;
}
</style>
