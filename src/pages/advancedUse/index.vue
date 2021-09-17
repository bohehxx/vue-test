<template>
  <div>
    <p>vue高级特性</p>
    <hr>
    <p>{{ name }}</p>
    <custom-model v-model="name" />
    <p>{{ title }}</p>
    <custom-model2 v-model="title" />
    <slot-demo :url="website.url">{{ website.title }}</slot-demo>
  </div>
</template>
<script>
import CustomModel from './customModel.vue'
import CustomModel2 from './customModel2.vue'
import SlotDemo from './SlotDemo'
export default {
  components: {
    CustomModel,
    CustomModel2,
    SlotDemo
  },
  data() {
    return {
      name: '111',
      title: '222',
      website: {
        url: 'http://imooc.com/',
        title: 'imooc',
        subTitle: '程序员的梦工厂'
      }
    }
  }
}
</script>
