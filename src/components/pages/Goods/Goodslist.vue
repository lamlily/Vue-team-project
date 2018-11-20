
<template>
    <div class="goodslist">
        我是Goodslist vue     
    </div>
</template>


<script type="text/javascript">
//引入vue
import Vue from 'vue';
//引入加载的字体图标mint-ui组件；
import {Toast} from 'mint-ui';
//引入无限加载mint-ui组件
import {InfiniteScroll} from "mint-ui";
Vue.use(InfiniteScroll);

    export default{
        name:'Goodslist',
        components:{},
        data(){
            return{
               
            }
        },
        methods:{
           
        },

        watch:{
           
        },

        created(){
                       
        }

    }
</script>


<style lang="less" scoped>
@import url('../../../styls/main.less');

</style>