<template>
  <div class="content">
    <div class="tab-list">
      <div
        v-for="(item, index) in tabList"
        :key="index"
        class="item"
        @click="tabChange(index)"
      >
        <div class="text">{{ item }}</div>
        <div v-show="index === tabIndex" class="active" />
      </div>
    </div>
    <div class="swiper-wrapper">
      <div class="swiper-container">
        <swiper
          ref="mySwiper"
          :options="swiperOption"
          style="min-width: 1200px"
        >
          <swiper-slide
            v-for="(banner, index) in list"
            :key="index"
            class="swiper-slide swiper-container-3d"
          >
            <div class="pic-content">
              <img src="./img/person.png">
              <div class="name">高级会计师贾玉梅</div>
              <div class="company">安徽和信科技发展有限公司</div>
            </div>
          </swiper-slide>

          <!-- 分页器 -->

          <!-- <div slot="pagination" class="swiper-pagination" /> -->

          <!-- 左右箭头 -->

          <!-- @click="prev" -->

          <!-- <div slot="button-prev" class="swiper-button-prev" /> -->

          <!-- @click="next" -->

          <!-- <div slot="button-next" class="swiper-button-next" /> -->
        </swiper>
      </div>
    </div>
    <div class="meet">
      <div class="info-number">
        <div class="item">
          <div class="name">企业会员（个）</div>
          <div class="number">800</div>
        </div>
        <div class="item">
          <div class="name">企业会员（个）</div>
          <div class="number">800</div>
        </div>
        <div class="item">
          <div class="name">个人会员（个）</div>
          <div class="number">1800</div>
        </div>
        <div class="item">
          <div class="name">专家顾问（位）</div>
          <div class="number">50</div>
        </div>
      </div>
      <div class="info-list">
        <div class="meet-intro">
          <div v-for="(item, index) in meetIntroList" :key="index" class="item">
            <img :src="item.src">
            {{ item.text }}
          </div>
        </div>
        <div class="title">电子期刊</div>
        <div class="electronic-list">
          <img src="./img/home_periodical.png">
          <img src="./img/home_periodical.png">
          <img src="./img/home_periodical.png">
        </div>
      </div>
    </div>
    <policy-research />
    <div class="graphic-list">
      <div v-for="(item,index) in [1,2,3,4]" :key="index" class="item">
        <img src="./img/graphic_img1.png">
        <div class="text">2021年上半年我国服务贸易发展</div>
      </div>
    </div>
    <div class="major-fields">
      <div class="line">
        <div v-for="(item,index) in [1,2,3,4]" :key="index" class="item">
          <img src="./img/graphic_img1.png">
        </div>
      </div>
      <div class="line">
        <div v-for="(item,index) in [1,2,3,4]" :key="index" class="item">
          <img src="./img/graphic_img1.png">
        </div>
      </div>
    </div>
    <div class="friend-links">
      <div class="line">
        <div v-for="(item,index) in linkList" :key="index" class="item">
          <img :src="item.icon"><span class="text">{{ item.title }}</span></div>
      </div>
      <div class="line">
        <div v-for="(item,index) in linkList2" :key="index" class="item">
          <img :src="item.icon"><span class="text">{{ item.title }}</span></div>
      </div>
      <div class="concat">
        <div class="qr-code">二维码</div>
        <div class="conc-list">
          <img src="./img/home_icon_tel.png">
          <img src="./img/home_icon_eemail.png">
          <img src="./img/home_icon_code.png">
          <img src="./img/home_icon_top.png">
        </div>
      </div>
    </div>

  </div>
</template>
<script>
// Import Swiper styles
// import './swiper-bundle.css'
import PolicyResearch from './policyResearch.vue'
export default {
  components: {
    PolicyResearch
  },
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7],
      tabList: [
        '2020年合肥市服务外包十大创新人物',
        '2020年合肥市服务外包创新10强',
        '2020年合肥市服务外包企业T0P 20强',
        '2020年度合肥市服务外包行业人才培训优秀示范基地'
      ],
      tabIndex: 0,
      meetIntroList: [
        {
          src: require('./img/home_introduce.png'),
          text: '协会简介'
        },
        {
          src: require('./img/home_join.png'),
          text: '入会指引'
        },
        {
          src: require('./img/home_constitution.png'),
          text: '协会章程'
        }
      ],
      linkList: [
        { icon: require('./img/link_img_nationalemblem.png'), title: '服务贸易和商务服务业统计系统' },
        { icon: require('./img/link_img_zgfwwbw.png'), title: '中国服务外包网' },
        { icon: require('./img/link_img_nationalemblem.png'), title: '中华人民共和国商务部' },
        { icon: require('./img/link_img_hfsw.png'), title: '合肥市商务部' }
      ],
      linkList2: [
        { icon: require('./img/link_img_nationalemblem.png'), title: '商务部业务系统统一平台' },
        { icon: require('./img/link_img_zgwbw.png'), title: '中国外包网' },
        { icon: require('./img/link_img_nationalemblem.png'), title: '安徽省商务部' },
        { icon: require('./img/link_img_hffwwbw.png'), title: '合肥服务外包网' }
      ],
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true, // 是否循环轮播

        speed: 1000, // 切换速度

        observer: true, // 修改swiper自己或子元素时，自动初始化swiper

        observeParents: true, // 修改swiper的父元素时，自动初始化swiper

        // 自动轮播

        autoplay: false,

        // 设置slider容器能够同时显示的slides数量

        // 左右切换

        navigation: {
          nextEl: '.swiper-button-next',

          prevEl: '.swiper-button-prev'
        },
        // 分页器
        pagination: {
          el: '.swiper-pagination',

          clickable: true // 允许点击小圆点跳转
        }
      }
    }
  },
  mounted() {},
  methods: {
    tabChange(index) {
      this.tabIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.content {
  width: 1200px;
  margin: 0 auto;
  .tab-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 19px;
    .item {
      color: #000;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .text {
        height: 60px;
        line-height: 60px;
        cursor: pointer;
      }
      .active {
        width: 80px;
        height: 4px;
        background: #002c99;
      }
    }
  }
  .wrapper {
    width: 100%;
    overflow: hidden;

    .pic {
      width: 80%;
      height: 100px;
      border: 1px solid red;
    }
  }
  .swiper-wrapper {
    width: 1200px;
    overflow-x: hidden;
    height: 280px;
  }
  .swiper-container {
    width: 1320px;
    height: 280px;
    text-align: center;
    img {
      width: 100%;
      height: 200px;
    }
    .name {
      color: #07122b;
      font-size: 18px;
      margin: 14px 0 10px;
    }
    .company {
      color: #828b9f;
      font-size: 14px;
    }
    // border:1px solid green;
  }
  .meet {
    display: flex;
    margin-top: 92px;
    .info-number {
      width: 420px;
      height: 571px;
      margin-right: 80px;
      background: #444f67;
      display: flex;
      flex-direction: column;
      .item {
        flex: 1;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 80px;
        .name {
          font-size: 14px;
        }
        .number {
          font-size: 48px;
        }
      }
    }
    .info-list {
      flex: 1;
      .meet-intro {
        display: flex;
        justify-content: space-between;
        .item {
          width: 220px;
          height: 150px;
          border: 1px solid #e9e9f0;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #444f67;
          font-size: 16px;
          img {
            margin-bottom: 10px;
          }
        }
      }
      .title {
        color: #07122b;
        font-size: 24px;
        margin: 56px 0 32px;
      }
      .electronic-list {
        display: flex;
        justify-content: space-between;
        img {
          width: 220px;
          height: 300px;
        }
      }
    }
  }
  .graphic-list {
    display: flex;
    justify-content: space-between;
    margin-bottom:80px;
    .item {
      width: 282px;
      img {
        width: 282px;
        height: 210px;
        object-fit: cover;
        margin-bottom:16px;
      }
      .text {
        color: #07122b;
        font-size: 18px;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap;
      }
    }
  }
  .major-fields{
    .line{
      display:flex;
      justify-content: space-between;
      margin-bottom:24px;
    }
    .item{
      width:280px;
      height:120px;
      img{
        width:100%;
        height:100%;
        object-fit: cover;
      }
    }
  }
  .friend-links{
    width:790px;
    position:relative;
    margin-top:80px;
    .line{
      display: flex;
      justify-content: space-between;
      margin-bottom:24px;
      .item{
        display:flex;
        align-items: center;
        width:230px;
        &:first-child{
          width:300px;
        }
        img{
          margin-right:8px;
        }
        .text{
          color:#000;
          font-size:14px;
        }
      }
    }
    .concat{
      position:absolute;
      display:flex;
      align-items: center;
      left:790px;
      top:-30px;
      .conc-list{
        height:200px;
        display:flex;
        margin-left:37px;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
}
</style>
