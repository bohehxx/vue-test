<template>
  <div>
    <div class="container" v-clickOut="setSearch()">
      2222
      <button v-copy="copyText">复制</button>
      <button v-debounce="debounceClick">防抖</button>
      <button v-permission="'1'">权限按钮1</button>
      <!-- 不显示 -->
      <button v-permission="'10'">权限按钮2</button>
      <p>{{nowTime | timeStamp}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      copyText: "a copy directives",
      nowTime: new Date().valueOf()
    };
  },
  methods: {
    setSearch() {
      console.log(222);
    },
    debounceClick() {
      console.log("只触发一次");
    },
  },
};
</script>
<style>
.container {
  width: 400px;
  height: 300px;
}
</style>