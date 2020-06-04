<template>
    <li>
        {{msg.item}}<button @click="handleDelMsg" class='delbtn-box'>删除</button>
    </li>
</template>

<script>

export default {
    props:{
        msg:{
            type: Object,
        }
    },

    setup(props, context){
        const handleDelMsg =()=>{
            context.emit('delmsg', props.msg.index)
        }
        return {
           handleDelMsg 
        }
    }
    
}
</script>

<style lang="scss" scoped>
.delbtn-box{
    float:right;
}
</style>