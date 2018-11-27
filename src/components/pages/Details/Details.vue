
<template>
    <div class="details">
        <!-- 我是Details.vue -->

        <detailslist></detailslist>

        <BackTop></BackTop>
    </div>
</template>


<script type="text/javascript">
import Detailslist from './detailslist.vue'
import BackTop from '../../commons/BackTop.vue'


    export default{
        name:'Details',
        // 注册组件
        components:{Detailslist,BackTop},
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