<template>
  <div>
    <div v-for="(item,index) in filterList" :key="index">
      {{ item }}
    </div>
    <base-checkbox v-model="lovingVue" />
    <base-input v-model="lovingInput" @focus="onFocus" />
    <navigation-link url="/profile">
      Your Profile
    </navigation-link>
    <base-layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>
    <current-user>
      <template v-slot="slotProps">
        {{ slotProps.student.name }}
        {{ user.firstName }}
      </template>
    </current-user>
    <button @click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>
<script>
import BaseCheckbox from './module/baseCheckbox.vue'
import BaseInput from './module/baseInput.vue'
import NavigationLink from './module/navigationLink.vue'
import BaseLayout from './module/baseLayout.vue'
import CurrentUser from './module/currentUser.vue'
export default {
  components: {
    BaseCheckbox,
    BaseInput,
    NavigationLink,
    BaseLayout,
    CurrentUser
  },
  data() {
    return {
      lovingVue: true,
      lovingInput: '11',
      list: [1, 2, 3],
      user: {
        firstName: 'Li',
        lastName: 'li'
      },
      show: true

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
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

