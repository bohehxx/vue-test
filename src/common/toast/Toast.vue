<template>
  <div class='toast'
       v-show='isShow'>
    {{message}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show (message, duration) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    }
  }
}
</script>
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>