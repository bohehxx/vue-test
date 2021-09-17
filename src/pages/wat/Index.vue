<template>
  <div>
    {{ message2 }}
    <p>username:<input v-model="username" type="text"> {{ username }}</p>
    <p>password:<input v-model="password" type="text"> {{ password }}</p>
    <p>age:<input v-model="age" type="text"> {{ age }}</p>
    <p>
      student.id:<input v-model="student.id" type="text"> {{ student.id }}
    </p>
    <p>
      student.studentName:<input v-model="student.studentName" type="text">
      {{ student.studentName }}
    </p>
    <button @click="btnClick">点击</button>
    <button @click="btnClick2">点击</button>
    <button @click="btnClick3">点击</button>
    <dial :obj="obj" :arr="arr" />
    <div>{{ returnMsg() }}</div>
    <div>{{ returnMsg() }}</div>
    <!-- computed -->
    <div>{{ getMsg }}</div>
    <div>{{ getMsg }}</div>
  </div>
</template>
<script>
import Dial from './Dial.vue'
export default {
  components: {
    Dial
  },
  data() {
    return {
      name: 'li mei',
      username: 'lijiang',
      password: '123',
      age: 21,
      student: {
        id: 1,
        studentName: '李疆'
      },
      obj: {
        a: 1,
        b: {
          c: 3
        }
      },
      arr: [1, 3, 4],
      msg: 'll'
    }
  },
  computed: {
    message2: function() {
      console.log(11)
      return this.name.split(' ').reverse().join(' ')
    },

    getMsg() {
      console.log('computed: getMsg')
      return this.msg + ' hello computed'
    }
  },
  watch: {
    username: function(newValue, oldValue) {
      console.log(
        'username newValue:' + newValue + ',username oldValue:' + oldValue
      )
    },
    msg: function() {
      console.log('watch: msg')
      new Promise(() => {
        setTimeout(() => {
          this.msg = 'msg is changed by watch'
        }, 1000)
      })
    },

    password: 'Test',

    age: {
      handler: function(newValue, oldValue) {
        console.log('age newValue:' + newValue + ',age oldValue:' + oldValue)
      },
      immediate: true // 第一次刷新页面时就会执行
    },

    student: {
      handler: function(newValue, oldValue) {
        console.log(
          'student newValue.id:' + newValue.id + ',student oldValue:' + oldValue
        )
      },
      immediate: true,
      deep: true
    },

    'student.studentName': 'Test'
  },
  mounted() {
    setTimeout(() => {
      this.msg = 'msg is changed'
    }, 1000)
  },
  methods: {
    Test: function(newValue, oldValue) {
      console.log('newValue:%s,oldValue:%s', newValue, oldValue)
    },
    btnClick: function() {
      this.obj = {
        a: 1,
        b: {
          c: 4
        }
      }
    },
    btnClick2: function() {
      this.obj.b.c = 5
    },
    btnClick3: function() {
      //  this.arr[4]=5
      this.arr.push(5)
      // this.arr=[1,7]
    },
    returnMsg: function() {
      console.log('methods: returnMsg')
      return this.msg
    }
  }
}
</script>

