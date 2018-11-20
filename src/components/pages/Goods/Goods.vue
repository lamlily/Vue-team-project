
<template>
    <div class="movie">
        我是电影页movie vue


        <Movielist></Movielist>

        <BackTop></BackTop>
    </div>
</template>


<script type="text/javascript">
import Movielist from './Movielist.vue'
import BackTop from '../../commons/BackTop.vue'


    export default{
        name:'Movie',
        // 注册组件
        components:{Movielist,BackTop},
        data(){
            return{
                         
            }
        },
        methods:{
           
        }

    }
</script>


<style lang="less" scoped>
@import url('../../../styls/main.less');


</style>