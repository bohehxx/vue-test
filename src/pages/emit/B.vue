<template>
    <div>
        111
    </div>
</template>
<script>
import Emitter from '@/mixins/emitter.js';
export default {
  name: 'componentB',
  mixins: [ Emitter ],
  created () {
    this.dispatch('componentA', 'on-message2', 'Hello Vue.js2');
    this.$on('on-message', this.showMessage);
  },
  methods: {
    showMessage (text) {
      window.alert(text);
    }
  }
}
</script>