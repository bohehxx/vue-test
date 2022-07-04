<template>
  <section>
  <svg-icon icon-class="saoyisao" style="color:blue;font-size:18px;"></svg-icon>
    <centers
      name="name"
      age="18"
      gender="666"
      sdf="asd"
      @isClick="isClick"
      @asd="asd"
    />
  </section>
</template>
<script>
import centers from './Center'
export default {
  data(){
    return {
      iconName:'#icon-saoyisao'
    }
  },
  components: {
    centers
  },
  mounted() {
    console.log(this.$el, 'this.$el')
    console.log(this.$el.parentElement, 'this.$el.parentElement')
  },
  methods: {
    asd() {
      console.log(999)
    },
    isClick() {
      console.log(666)
    }
  }
}
</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
