<template>
    <div>
       <input type="text" v-model="msg">
       <button @click="handleSaveMsg">save</button>
       <!-- <p>{{msgList}}</p> -->
       <div class='msg-box'>
           <ul>
               <MsgItem v-for="(item,index) in msgList" :msg="{item,index}" :key="index" @delmsg = "handleDel"/>
           </ul>
       </div>
    </div>
</template>

<script>
import MsgItem from './item'
 import { reactive, toRefs } from 'vue'

 export default {
     setup(){
         const state = reactive({
             msgList:[],
             msg:'',
         })
         const handleSaveMsg = ()=>{
             if(state.msg==='')return;
             state.msgList.push(state.msg)
             state.msg = ''
         }
         const handleDel = (id)=>{
             state.msgList.splice(id,1)
         }
         return {
             ...toRefs(state),
             handleSaveMsg,
             handleDel
         }
     },
     components:{
         MsgItem
     }
 }
</script>

<style lang="scss" scoped>
    .msg-box{
        ul{
            margin:0;
            padding:0;
            list-style-type: none;
            li{
                background: #eee;
                width:300px;
                margin-top:10px;
            }
        }
    }
</style>