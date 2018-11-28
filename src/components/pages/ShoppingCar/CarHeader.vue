<template>
    <div class="carheader">
        <!-- 我是carheader.vue -->



        <header id="header" class="fixed top-header">
            <div class="header-wrap">     
                <div class="header-title">
                    <p>购物车</p>
                </div>
                <div class="header-r">
                    <a id="header-nav-edit" href="javascript:void(0);" style="">编辑</a>
                </div>
            </div>
            
        </header>


      
    </div>
</template>


<script type="text/javascript">

    export default{
        name:'CarHeader',
    
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

#header{
    background: #fff; 
    .header-wrap{
        display: flex;
        justify-content:space-between;
        text-align: right;
        border-bottom:1px solid #ccc;
        .fs(18);
        .h(40);
        .padding(3,3,3,50);
        box-sizing: border-box;
        div{
            flex:1;
        }
       
    }

}

a{
    text-decoration: none;
    color:#999;
}
</style>