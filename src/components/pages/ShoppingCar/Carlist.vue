
<template>
    <div class="carlist">
        <!-- 我是carlist.vue -->

        <div id="cart-list-wp" style="padding-bottom: 20%">
            <div class="login-prompt">
                <a href="../tmpl/member/login.html" class="login-btn border-color-main color-main">登录</a>
                登录后查看电脑与手机购物车中的商品
            </div>
        
       
            <div class="nctouch-cart-container">
                <dl class="nctouch-cart-store cart-wrapper">
                    <dt class="cart-head"><span class="store-check">
                                    <input class="store_checkbox" type="checkbox" checked="">
                                </span>
                        
                        <i class="icon-store icon-right"></i>
                        
                        <a class="cart-store-a" href="store.html?store_id=2">百洋健康跨境自营店&nbsp;&gt;</a>
                        
                    </dt>
                    
                    
                </dl>
                <ul class="nctouch-cart-item">
                    
                    
                    <li cart_id="877778605" class="cart-litemw-cnt cart-list-goods" style="height: 4rem">
                        <div class="good-item-wrap del-item">
                            <div class="goods-check">
                                <input type="checkbox" checked="" name="cart_id" value="877778605" data-crosstype="">
                            </div>
                            <div class="goods-pic">
                                
                                <a href="https://m.baiyangwang.com/tmpl/product_detail.html?goods_id=877778605">
                                    <img src="https://b2cstatic.baiyangwang.com/shop/store/goods/2/2_05938830409809021_360.jpg">
                                </a>
                            </div>
                            <dl class="goods-info">
                                <dt class="goods-name"><a href="https://m.baiyangwang.com/tmpl/product_detail.html?goods_id=877778605">
                                    
                                    【心脑血管健康】美国 Nature Made 天维美 fish oil深海鱼油软胶囊 220粒 </a></dt>
                                <dd class="goods-type"></dd>
                                <div class="goods-subtotal">
                                    <span class="goods-price">￥<em>119.00</em>                                   
                                    </span>

                                     <span class="goods-sale">                            
                                    </span>

                                    <div class="value-box">
                                        <span class="minus">
                                            <a href="javascript:void(0);" style="opacity: 0.3;filter:alpha(opacity=30);">&nbsp;</a>
                                        </span>
                                        <span>
                                            <input style="height: 1rem;width:1.5rem;line-height: normal;" type="text" pattern="[0-9]*" readonly="" class="buy-num buynum" value="1" data-tax-price="">
                                        </span>
                                        <span class="add">
                                            <a href="javascript:void(0);">&nbsp;</a>
                                        </span>
                                    </div>
                                </div>
                            </dl>
                            <!--<div class="goods-del" cart_id="877778605"><a href="javascript:void(0);"></a></div>-->
                          
                            
                        </div>
                       
                    </li>            
                </ul>         
            </div>
          

          <!--   <div class="cart-bottom-del" id="cart-bottom-del" style="margin-bottom:2rem">
                <div class="all-check"><input class="all_checkbox" type="checkbox" checked="">&nbsp; 全选</div>
                <div class="del-checked ok">
                    <a id="delete_all_btn" href="javascript:void(0)">删除</a>
                </div>
            </div> -->

        
            <!--<div class="nctouch-cart-bottom no-login" style="margin-bottom: 2.7rem">-->
            <!--<div class="cart-nologin-tip">结算购物车中的商品，需先登录商城</div>-->
            <!--<div class="cart-nologin-btn"><a href="../tmpl/member/login.html" class="btn">登录</a>-->
            <!--<a href="../tmpl/member/register.html" class="btn">注册</a>-->
            <!--</div>-->
            <!--</div>-->
        
        </div>
       
    </div>
</template>

<script type="text/javascript">

    export default{
        name:'Carlist',
    
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
.carlist{
    .fs(18);
    img{
        .w(50);
        .h(50);
    }
    #cart-list-wp{
        .login-prompt{
        border-bottom:1px solid #999;
        // .padding(10,10,10,10);
        // box-sizing: border-box;
        .fs(14);
        .h(46);
        .lh(46);
        color:#999;
        text-align: center;
            a{
                color:#ff0066;
                border:1px solid #ff0066;
                .padding(3,8,3,8);
                .margin(0,5,0,0);

            }
        }
    }
    .nctouch-cart-container{
        .nctouch-cart-store{
            .cart-head{
                border-bottom:1px solid #ccc;
                .h(46);
                .lh(46);
                .padding(0,0,0,15);
                .fs(14);
                a{
                    color:#000;
                }
            }
        }
        ul{
            .h(109);
            border-bottom: 1px solid #ccc;
            .padding(20,5,0,15);
            box-sizing: border-box;
            li{

                .good-item-wrap{
                    display:flex;
                    justify-content:space-between; 
                    align-items:center;
                    .fs(14);
                    a{
                        color:#000;
                    }
                    img{
                        .w(67);
                        .h(67);
                        .margin(0,5,0,0);

                    }
                   .goods-subtotal{
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        .h(21);
                        .padding(20,0,0,0);
                        .value-box{
                            // input{
                            //   .w(33);
                            //   .h(21);  
                            //   color:#fff;
                            //   // box-sizing: border-box;
                            // }
                        }
                        
                       
                   }
                }
                
            }
        }
    }



}
a{
    text-decoration: none;
}


</style>