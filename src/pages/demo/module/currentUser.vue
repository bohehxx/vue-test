<template>
  <span>
    <slot :student="student" />
  </span>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      student: { name: 'xiaoming', age: 17 }
    }
  }
}
</script>
