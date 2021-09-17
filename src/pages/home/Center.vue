<template>
  <section>
    <div class="mt-10">
      <bottom v-bind="$attrs" v-on="$listeners" />
    </div>
  </section>
</template>

<script>
import bottom from './Bottom'
export default {
  components: {
    bottom
  },
  props: {
    name: {
      type: String,
      default: 'default'
    },
    age: {
      type: String,
      default: 'default'
    }
  }
}
</script>
