<template>
  <div class="policy-research">
    <div class="policy">
      <div class="pic-container">
        <swiper ref="mySwiper" :options="swiperOption">
          <swiper-slide
            v-for="(banner, index) in list"
            :key="index"
            class="swiper-slide swiper-container-3d"
          >
            <div class="pic-content">
              <img src="./img/home_policy_img.png">
              <div class="text">
                商务部在第三届进博会上发布《中国服务进口报告202
              </div>
            </div>
          </swiper-slide>
          <!-- 分页器 -->

          <div slot="pagination" class="swiper-pagination" />
          <div slot="button-prev" class="swiper-button-prev" />
          <div slot="button-next" class="swiper-button-next" />
        </swiper>
      </div>
      <div class="policy-list">
        <div v-for="(item, index) in list" :key="index" class="item">
          <div class="title-date">
            <div class="title">多项政策为服贸增长添助力</div>
            <div class="date">2021-08-22</div>
          </div>
          <div class="info">
            今年上半年，多项服贸政策出台，在助推我国服贸逆势增长方面发挥了重要作用。进入下半年，这些政策的积极影响将进一步释放。
          </div>
        </div>
      </div>
    </div>
    <div class="research">
      <div class="pic-list">
        <div class="item">
          <img src="./img/home_research_img1.png">
          <div class="text">习近平服贸会视频致辞：设北京证交所 助中小</div>
        </div>
        <div class="item">
          <img src="./img/home_research_img1.png">
          <div class="text">习近平服贸会视频致辞：设北京证交所 助中小</div>
        </div>
      </div>
      <div class="news-list">
        <div class="item">
          合肥市2021年度人工智能训练师技能大赛
        </div>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [1, 2, 3],
      swiperOption: {
        slidesPerView: 1,
        loop: true, // 是否循环轮播
        speed: 1000, // 切换速度
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        // 自动轮播
        autoplay: false,
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
  }
}
</script>
<style lang="less" scoped>
.policy-research {
  width: 1200px;
  display: flex;
  margin: 80px auto 0;
  .policy {
    width: 700px;
    margin-right: 80px;
    .pic-container {
      width: 700px;
      height: 340px;
      .pic-content {
        width: 100%;
        height: 100%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .text {
          position: absolute;
          width: 100%;
          height: 56px;
          bottom: 0;
          background: rgba(7, 18, 43, 0.7);
          font-size: 18px;
          color: #fff;
          text-indent: 20px;
          display: flex;
          align-items: center;
        }
      }
      .swiper-button-prev {
        left: 628px;
      }

      .swiper-button-prev,
      .swiper-button-next {
        color: #fff;
        border: 1px solid #fff;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 95%;
        opacity: 0.5;
      }
      .swiper-button-prev:after,
      .swiper-button-next:after {
        font-size: 10px;
      }
    }
    .policy-list {
      width: 100%;
      margin-top: 32px;
      .item {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #e9e9f0;
        .title-date {
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          .title {
            flex: 1;
            color: #07122b;
            font-size: 20px;
            overflow: hidden; //超出的文本隐藏
            text-overflow: ellipsis; //溢出用省略号显示
            white-space: nowrap;
            margin-right: 20px;
          }
          .date {
            color: #828b9f;
            font-size: 14px;
          }
        }
        .info {
          color: #444f67;
          font-size: 14px;
          line-height: 24px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box; //将对象作为弹性伸缩盒子模型显示。
          -webkit-box-orient: vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
          -webkit-line-clamp: 2;
        }
      }
    }
  }
  .research {
    flex: 1;
    .pic-list {
      display: flex;
      justify-content: space-between;
      margin-bottom:28px;
      .item {
        width: 200px;
        img {
          width: 200px;
          height: 120px;
          object-fit: cover;
        }
        .text {
          color: #07122b;
          font-size: 18px;
          line-height: 26px;
        }
      }
    }
    .news-list{
       color:#07122B;
       font-size:20px;

       .item{
           position:relative;
            text-indent:16px;
       }
       .item:before{
               content:"";
            width:8px;
        height:8px;
        background:#002C99;
        position:absolute;
        left:0;
        top:10px;
           }

    }

  }
}
</style>

