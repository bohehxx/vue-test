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
    {{ obj.b }}
    <p @click="add(obj)">add</p>
    <p @click="deleteName()">delete</p>
    {{ message | capitalize }}
    <div>
      <label for="bookNum">数 量</label>
      <button @click="setCount(count+1)">+</button>
      <span>{{ count }}</span>
      <button @click="setCount(count-1)">-</button>
    </div>
    <anchored-heading :level="1">Hello world!</anchored-heading>
  </div>
</template>
<script>
import BaseCheckbox from './module/baseCheckbox.vue'
import BaseInput from './module/baseInput.vue'
import NavigationLink from './module/navigationLink.vue'
import BaseLayout from './module/baseLayout.vue'
import CurrentUser from './module/currentUser.vue'
import { store, mutations } from '../../store/index'
import Vue from 'vue'
export default {
  components: {
    BaseCheckbox,
    BaseInput,
    NavigationLink,
    BaseLayout,
    CurrentUser
  },
  directives: {
    focus: {
    // 指令的定义
      inserted: function(el) {
        el.focus()
      }
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
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
      show: true,
      obj: {
        a: 1
      },
      nameList: {
        id: '1',
        name: '叶叶也'
      },
      message: 'john'

    }
  },
  computed: {
    filterList() {
      return this.list.filter(item => item === 1)
    },
    count() {
      return store.count
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
  created() {
    this.handleObj()
    Vue.component('anchored-heading', {
      props: {
        level: {
          type: Number,
          required: true
        }
      },
      render: function(createElement) {
        return createElement(
          'h' + this.level, // 标签名称
          this.$slots.default // 子节点数组
        )
      }
    })
  },
  methods: {
    onFocus() {
      console.log('focus')
    },
    handleObj() {
      // this.obj.b = 3
      this.$set(this.obj, 'b', 3)
    },
    add(obj) {
      console.log(obj, 'obj')
      obj.b = obj.b + 1
    },
    deleteName() {
      this.$delete(this.nameList, 'name')
      console.log(this.nameList, 'this.nameList')
    },
    setCount: mutations.setCount
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

