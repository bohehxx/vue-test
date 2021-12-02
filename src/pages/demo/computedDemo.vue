<template>
  <div>
    <p>num {{ num }}</p>
    <p>double1 {{ double1 }}</p>
    <input v-model="double2" />

    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span> {{ active }} / {{ all }} </span>
    </div>
     <input type="text" v-model="title" @keydown.enter="addTodo">
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
const App = {
  data() {
    return {
      title: "", // 定义一个数据
      todos:['吃饭','睡觉']
    }
  },
  methods:{
    addTodo(){
      this.todos.push(this.title)
      this.title = ""
    }
  }
}
// 启动应用
Vue.createApp(App).mount('#app')
</script>


<script>
export default {
  data() {
    return {
      num: 20,
      title: "", // 定义一个数据
      todos: [
        { title: "吃饭", done: false },
        { title: "睡觉", done: true },
      ],
    };
  },
  computed: {
    double1() {
      return this.num * 2;
    },
    double2: {
      get() {
        return this.num * 2;
      },
      set(val) {
        this.num = val / 2;
      },
    },
    active() {
      return this.todos.filter((v) => !v.done).length;
    },
    all() {
      return this.todos.length;
    },
    allDone: {
      get: function () {
        return this.active === 0;
      },
      set: function (val) {
        this.todos.forEach((todo) => {
          todo.done = val;
        });
      },
    },
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.title,
        done: false,
      });
      this.title = "";
    },
  },
};
</script>
<style>
.done {
  color: gray;
  text-decoration: line-through;
}
</style>
