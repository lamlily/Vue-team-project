<template>
    <div class="header">
        <!-- <div>这里是header</div> -->
        <div class="box">
           <input type="text" placeholder="儿童补钙"
            @click="search"
            />
            <div class="log">登录</div>  
        </div>
          
    </div>
</template>

<script type="text/javascript">


    export default{
        name:'Header',
        components:{},
        data(){
            return{
               
            }
        },
        methods:{
            search(){
                this.$router.push("/search")
            }
        }
    }

</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url('../../styls/main.less');
.header{
    position:fixed;
    top:0;
    left:0;
    z-index:999;
    .box{
        // width:100%;
        .w(375);
        .h(46);
        // height:2rem;
        // position:fixed;
        top:0;
        left:0;
        // background:#d92e35;
        // 自改色
        background: #ff0066;
        display: flex;
        align-items:center;
        input{
            width:82%;
            .h(30);
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            border-radius: 0.7rem;
            background: #fff;
            .padding(5,0,0,20);
            box-sizing: border-box;
        }
        .log{
            .w(40);
            .h(21);
            color:#eee;
            .fs(12);
            border:1px solid #fff;
            border-radius: 15px;
            text-align: center;
            .lh(21);
             margin-right: 0.2rem;
        }
    }
}
</style>
