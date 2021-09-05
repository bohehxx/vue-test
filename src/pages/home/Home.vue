<template>
  <section>
    <centers
      name="name"
      age="18"
      gender="666"
      sdf="asd"
      @isClick="isClick"
      @asd="asd"
    ></centers>
  </section>
</template>
<script>
  import centers from './Center'
  export default {
    components: {
      centers
    },
    methods: {
      asd() {
        console.log(999);
      },
      isClick() {
        console.log(666);
      }
    },
    mounted() {
      console.log(this.$el,'this.$el')
      console.log(this.$el.parentElement,'this.$el.parentElement')
    }
  }
</script>