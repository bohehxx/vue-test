<template>
    <div>
      {{obj.a}}
      {{obj.b.c}}
      {{this.d}}
    <div v-for="(item,index) in arr" :key="index">{{item}}</div>
    </div>
</template>
<script>
export default{
    data(){
     return {
         d:undefined
     }
    },
    props:{
        obj:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        arr:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
    methods:{
     getd(val){
         this.d = val.b.c+99
     }
    },
    watch:{
        obj:{
          handler(newVal){
           this.getd(newVal)
          },
          immediate:true,
          deep:true
        } 
    },
    mounted(){
        // this.getd(this.obj)
    }
}
</script>
