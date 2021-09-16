<template>
  <div>
    {{ obj.a }}
    {{ obj.b.c }}
    {{ d }}
    <div v-for="(item,index) in arr" :key="index">{{ item }}</div>
  </div>
</template>
<script>
export default {
  props: {
    obj: {
      type: Object,
      default: () => {
        return {}
      }
    },
    arr: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      d: undefined
    }
  },
  watch: {
    obj: {
      handler(newVal) {
        this.getd(newVal)
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    // this.getd(this.obj)
  },
  methods: {
    getd(val) {
      this.d = val.b.c + 99
    }
  }
}
</script>
