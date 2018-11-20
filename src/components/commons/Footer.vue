<template>
    <div class="footer" >
       <ul>
           <li>
                <i class="fa fa-university" aria-hidden="true"></i>
                <span>商城</span>
            </li>
           <li>
                <i class="fa fa-bars" aria-hidden="true"></i>
                <span>分类</span>
           </li>
           <li>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <span>购物车</span>
           </li>
           <li>
                <i class="fa fa-user" aria-hidden="true"></i>
                <span>我的</span>
           </li>
       </ul>
    </div>

</template>


<script >


    export default{
        name:'Footer',
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
@import url('../../styls/main.less');

.footer{
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    ul{
        display:flex;
        jsutify-content:space-between;
        background: #fff;
        li{
            // .w(20);
            flex:1;
            .fs(12);
            display:flex;
            flex-direction:column;
            jsutify-content:center;
            text-align: center;
            color:#999;
            margin-top: 5px;
            i{
                .fs(22);
            }

        }
    }
}
    
    
</style>
