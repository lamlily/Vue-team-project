<template>
    <div class="home">
        <Banner></Banner>
        <Homelist></Homelist>
       <!-- 这里是home组件 -->
       <BackTop></BackTop>
    </div>
</template>


<script type="text/javascript">
// 引入banner和homelist组件
import Banner from './Banner.vue'
import Homelist from './Homelist.vue'
//引入返回顶部
import BackTop from  '../../commons/BackTop.vue'

    export default{
        name:'Home',
        // 注册组件
        components:{Banner,Homelist,BackTop},
        data(){
            return{
      
            }
        },

     
    }
</script>


<style lang="less" scoped>
@import url('../../../styls/main.less');
  .home{
    margin-top:39px;
  }


</style>