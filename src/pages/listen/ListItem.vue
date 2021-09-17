<template>
  <div>111{{ this.msg }}
    <item />
  </div>
</template>
<script>
import Item from './Item.vue'
export default {
  name: 'List',
  components: {
    Item
  },
  data() {
    return {
      b: 1
    }
  },
  inject: ['msg'],
  mounted() {
    console.log('页面的$parent', this.$parent.a)
    console.log('页面的$children', this.$children)
  }
}
</script>

