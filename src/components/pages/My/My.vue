<template>
    <div class="my" >
      这是我的页面
      <router-view></router-view>
    </div>

</template>


<script >


    export default{
        name:'My',
        components:{},
        data(){
            return{
              
            }
        },
        methods:{
           
        },
        created(){

        }


    }
</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url('../../../styls/main.less');


    
    
</style>
