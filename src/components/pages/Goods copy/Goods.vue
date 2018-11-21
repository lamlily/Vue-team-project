
<template>
    <div class="goods">
        我是电影页movie vue


        <Goodslist></Goodslist>

        <BackTop></BackTop>
    </div>
</template>


<script type="text/javascript">
import Goodslist from './Goodslist.vue'
import BackTop from './BackTop.vue'


    export default{
        name:'Goods',
        // 注册组件
        components:{Goodslist,BackTop},
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