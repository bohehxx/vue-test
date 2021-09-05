<style lang="less" scoped>
.app-layer {
    position: absolute;
    min-width: 320px;
    min-height: 240px;
    background: #fff;
    box-shadow: 0px 4px 32px rgba(0,0,0,0.15);
    z-index: 6;
    .header {
        height: 40px;
        line-height:40px;
        padding-left:10px;
        border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    .body {
        position: absolute;
        top: 41px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        overflow: auto;
    }
}
</style>

<template>
  <div class="app-layer" :style="{width: ww + 'px', height: hh + 'px', left: xx + 'px', top: yy + 'px', zIndex: zz}">
      <div class="header">
        <div class="titie">{{title}}</div>
        <div class="close"></div>
      </div>
      <div class="body">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: 'app-layer',
    props: {
        x: {
            type: Number,
            default: 0
        },
        y: {
            type: Number,
            default: 0
        },
        z: {
            type: Number,
            default: 0
        },
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            default: 'Layer\'s Title'
        }
    },
    data(){
        return {
            xx: 0,
            yy: 0,
            zz: 0,
            ww: 0,
            hh: 0,
            maxZIndex: 0
        }
    },
    methods: {
        __initStyle(){
            // 使用props的宽高
            this.ww = this.width
            this.hh = this.height + 40
            // 如果x,y都为0，则视为用户没设置，默认获取父容器大小，让自己居中显示
            if(this.z === 0 && this.y === 0){
                const parent = this.$el.parentElement
                this.xx = (parent.clientWidth - this.$el.clientWidth) /2
                this.yy = (parent.clientHeight - this.$el.clientHeight) /2
            }
            window.xxx = this.$el
            // 获得当前兄弟中zIndex最大值
            const maxIndex = this.getMaxZIndex()
            // 自己默认先大于它
            this.zz += maxIndex
            // 暂存这个最大值
            this.maxZIndex = maxIndex
        },
        getMaxZIndex(){
            const brothers = this.$el.parentElement.children || []
            let result = 0
            brothers.forEach((item) => {
                const thisZIndex = window.getComputedStyle(item)['zIndex']
                if(thisZIndex !== 'auto' && thisZIndex > result){
                    result = thisZIndex
                }
            })
            return result * 1
        }
    },
    mounted(){
        
        this.__initStyle()
    }
}
</script>
