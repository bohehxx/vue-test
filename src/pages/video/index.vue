<template>
  <div>
    <video id="myVideo" class="video-js vjs-big-play-centered vjs-fluid">
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">
          supports HTML5 video
        </a>
      </p>
    </video>
  </div>
</template>
<script>
// https://www.cnblogs.com/zhang1f/p/14311820.html
export default {
  data() {
    return {
      player: null,
      currentPlayTime:0,
      videoOptions: {
        controls: true, // 是否显示控制条
        poster: '//vjs.zencdn.net/v/oceans.png', // 视频封面图地址
        muted: false, // 是否静音
        sources:
          // 视频源
          {
            src: '//vjs.zencdn.net/v/oceans.mp4',
            type: 'video/mp4',
            poster: '//vjs.zencdn.net/v/oceans.png'
          }
      
      }
    }
  },
  methods:{
    attachEvent(player){
        player.on('play',()=>{
            console.log('play')
            const time = player.currentTime()
            this.currentPlayTime = time
        })
        player.on('pause',()=>{
            console.log('pause')
            const time = player.currentTime()
            this.currentPlayTime = time
        })
        player.on('ended',()=>{
            console.log('ended')
            this.currentTime = 0
        })
        player.on('seeking',()=>{
            console.log('视频跳转中')
            const value = player.currentTime()
            this.currentPlayTime = value
        })
        player.on('timeupdate',()=>[
            console.log('时间更新中')
        ])
    }
  },
  mounted() {
    const player = (this.player = videojs(
      document.getElementById('myVideo'),
       this.videoOptions,
      () =>{
        console.log('视频可以播放了', this)
      }
    )
    )
    this.attachEvent(player)
  }
}
</script>
<style scoped>
.video-container {
  width: 500px;
  height: 400px;
  border: 1px solid red;
}
</style>
