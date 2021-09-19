<template>
  <div class="content">
    <div class="tab-list">
      <div v-for="(item,index) in tabList" :key="index" class="item" @click="tabChange(index)">
        <div class="text">{{ item }}</div>
        <div v-show="index===tabIndex" class="active" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabList: ['2020年合肥市服务外包十大创新人物', '2020年合肥市服务外包创新10强', '2020年合肥市服务外包企业T0P 20强',
        '2020年度合肥市服务外包行业人才培训优秀示范基地'],
      tabIndex: 0
    }
  },
  methods: {
    tabChange(index) {
      this.tabIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
*{
  margin:0;
  padding:0;
}
.content{
  width:1200px;
  margin:0 auto;
  .tab-list{
    display:flex;
    justify-content: space-between;
    .item{
      color:#000;
      font-size:14px;
      display:flex;
      flex-direction: column;
      align-items:center;
      .text{
        height:60px;
        line-height:60px;
        cursor:pointer;
      }
      .active{
        width:80px;
        height:4px;
        background:#002C99;
      }
    }
  }
}
</style>
