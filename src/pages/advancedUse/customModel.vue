<template>
  <div>
    {{ text1 }}
    <p @click="test()">自定义绑定</p>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'text1', // 对应 props text1
    event: 'test'
  },
  props: {
    text1: {
      type: String,
      default: ''
    }
  },
  methods: {
    test() {
      this.$emit('test', '333')
    }
  }
}
</script>
