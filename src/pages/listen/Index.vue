<template>
  <list-item />
</template>
<script>
import ListItem from './ListItem'
export default {
  name: 'List',
  provide: {
    msg: '123'
  },
  components: { ListItem },
  data() {
    return {
      a: 1
    }
  },
  mounted() {
    console.log('页面的$parent', this.$parent)
    console.log('页面的$children', this.$children[0].b)
  }
}
</script>

