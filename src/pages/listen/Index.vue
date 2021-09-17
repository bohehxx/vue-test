<template>
  <list-item></list-item>
</template>
<script>
import ListItem from "./ListItem";
export default {
  name: "List",
  provide:{
  msg:'123'
  },
  data(){
    return {
        a:1
    }
  },
  components: { ListItem },
  mounted() {
    console.log("页面的$parent", this.$parent);
    console.log("页面的$children", this.$children[0].b);
  },
};
</script>

