<template>
    <div>
        <my-component :render="render"></my-component>
    </div>
</template>
<script>
import MyComponent from './my-component.vue'
export default{
 components:{MyComponent},
 data(){
     return{
         render:(h)=>{
             return h('div',{
                 style:{
                     color:'red'
                 }
             },'自定义内容')
         }
     }
 }
}
</script>
