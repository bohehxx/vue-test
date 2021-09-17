<template>
  <section>
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
