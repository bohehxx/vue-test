<template>
  <div>
    <div v-for="(item,index) in filterList" :key="index">
      {{ item }}
    </div>
    <base-checkbox v-model="lovingVue" />
    <base-input v-model="lovingInput" @focus="onFocus" />
  </div>
</template>
<script>
import BaseCheckbox from './module/baseCheckbox.vue'
import BaseInput from './module/baseInput.vue'
export default {
  components: {
    BaseCheckbox,
    BaseInput
  },
  data() {
    return {
      lovingVue: true,
      lovingInput: '11',
      list: [1, 2, 3]
    }
  },
  computed: {
    filterList() {
      return this.list.filter(item => item === 1)
    }
  },
  watch: {
    lovingVue(val) {
      console.log(val, 'valll')
    },
    lovingInput(val) {
      console.log(val, 'valll2')
    }
  },
  methods: {
    onFocus() {
      console.log('focus')
    }
  }
}
</script>

