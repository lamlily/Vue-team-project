<template>
    <div class="search" >
      <!-- 这里是search组件 -->
       <!--  <div class="header">
            <input type="text" placeholder="儿童补钙"
            />
            <div class="log">搜索</div>  
        </div> -->
        <div class="tips">
            <p><i class="fa fa-clock-o" aria-hidden="true"></i>历史记录</p>
            <p><i class="fa fa-fire" aria-hidden="true"></i>热门搜索</p>
            <span>儿童补钙</span>
            <span>蛋白粉</span>
            <span>面膜</span>
            <span>汇仁</span>
        </div>
    </div>

</template>


<script >


    export default{
        name:'Search',
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
// *{
// //页面移动bug
//     border:1px solid red;
// }
.tips{
    width:100%;
    .h(56);
   
    .fs(16);
    .padding(15,10,10,10);
    margin-top:35px;
    box-sizing: border-box;
    p{
        .margin(10,0,20,0); 
        color:#999;
        i{
            margin-right:10px;
        }

    }
    span{
        color:#ccc;
        border:1px solid #ccc;
        border-radius: 10px;
        padding:3px;
        .fs(12);

    }
}

    
    
</style>
