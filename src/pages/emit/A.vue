<template>
<div>
	<button @click="handleClick">触发事件</button>
    <b-comp></b-comp>
</div>
</template>
<script>
  import Emitter from '@/mixins/emitter.js';
  import BComp from './B.vue'
  export default {
    name: 'componentA',
    mixins: [ Emitter ],
    components:{
        BComp
    },
    methods: {
      handleClick () {
        this.broadcast('componentB', 'on-message', 'Hello Vue.js');
      }
    },
    created(){
        this.$on('on-message2', text=>{ window.alert(text)});
    }
  }
</script>