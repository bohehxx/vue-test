<template>
  <div>
    {{ message2 }}
    <p>username:<input type="text" v-model="username"> {{username}}</p>
    <p>password:<input type="text" v-model="password"> {{password}}</p>
    <p>age:<input type="text" v-model="age"> {{age}}</p>
    <p>student.id:<input type="text" v-model="student.id"> {{student.id}}</p>
    <p>student.studentName:<input type="text" v-model="student.studentName"> {{student.studentName}}</p>
    <button @click="btnClick">点击</button>
    <button @click="btnClick2">点击</button>
    <button @click="btnClick3">点击</button>
    <dial :obj="obj" :arr="arr"></dial>
  </div>
</template>
<script>
import Dial from './Dial.vue'
export default {
  data() {
    return {
      name:'li mei',
      username:'lijiang',
      password:'123',
      age:21,
      student:{
        id:1,
        studentName:'李疆'
      },
      obj:{
          a:1,
          b:{
              c:3
          }
      },
      arr:[1,3,4]
    }
  },
  components:{
    Dial
  },
  computed:{
  message2:function(){
      console.log(11)
   return  this.name.split(' ').reverse().join(' ')
  }
  },
  methods:{
     Test:function(newValue,oldValue){
           console.log('newValue:%s,oldValue:%s',newValue,oldValue);
     },
     btnClick:function(){
         this.obj = {
             a:1,
             b:{
                 c:4
             }
         }
     },
     btnClick2:function(){
         this.obj.b.c = 5
     },
     btnClick3:function(){
        //  this.arr[4]=5
         this.arr.push(5)
        // this.arr=[1,7]
     }
  },
  watch:{
      username:function(newValue,oldValue){
      console.log('username newValue:'+newValue+',username oldValue:'+oldValue);
    },
 
    password:'Test',
 
    age:{
      handler:function(newValue,oldValue){
        console.log('age newValue:'+newValue+',age oldValue:'+oldValue);
      },
      immediate:true //第一次刷新页面时就会执行
    },
 
    student:{
      handler:function(newValue,oldValue){
        console.log('student newValue.id:'+newValue.id+',student oldValue:'+oldValue);
      },
      immediate:true,
      deep:true
    },
    
    'student.studentName':'Test'
  }
}
</script>

