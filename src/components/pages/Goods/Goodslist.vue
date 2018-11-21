
<template>
    <div class="goodslist">
        <!-- 我是Goodslist vue   -->
        <ul class="nav">
               <li v-for='(item,index) in navlist' 
            :key="index">
                    <p>{{item.class_code_desc}}</p>
                    <p>{{item.class_code_entitle}}</p>
                </li>            
        </ul>  
        <div class="goods">
            <!-- {{goodslist}} -->
            
            <ul class="advertise" >
                <li>
                    <img :src="pic1" alt="" />
                </li>
            </ul>
            
            <ul class="top1">
                <li v-for='(item,index) in goodslist2' 
                 :key="index">
                    <img :src="pic4" alt="" />
                </li>
                
            </ul>
            <!-- <ul class='top2'>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
            </ul> -->


            <p>——   精选分类   ——</p>
            <ul class="advertise">
                <li>
                    <img :src="pic2" alt="" />
                </li>
            </ul>
            <ul class="advertise">
                <li>
                    <img :src="pic3" alt="" />
                </li>
            </ul>
            

            <p>——   畅销商品  ——</p>
            <ul class='sales'>  
                <li v-for='(item,index) in goodslist3' 
                    :key="index">
                   <img :src="item.goods_image" alt="" />
                    <span>{{item.goods_name}}</span>
                    <span>￥{{item.goods_promotion_price}}</span> 
                </li>  
                         
            </ul>


            <!-- <div v-for='(item,index) in goodslist' 
            :key="index">  -->
            <p>——   热门品牌   ——</p>
            <ul class='hot'>
                <li 
                    v-for='(item,index) in goodslist4' 
                    :key="index"
                >
                  <img :src="item.brand_pic" alt="" />
                  <span>{{item.brand_name}}</span>  
                </li>
                
            </ul>
                
            

        </div> 
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
               navlist:[],
               goodslist:[],
               goodslist1:[],
               pic1:[],
               pic2:[],
               pic3:[],
               pic4:[],
               goodslist2:[],
               goodslist3:[],
               goodslist4:[],


            }
        },

        methods:{
           getData(){
            this.$axios.get(`/api/mobile/index.php?act=goodsclass&op=list&class_code_id=17&gc_id=17`,{

            })
            .then((res)=>{
                console.log(res)
                //获取导航数据
                this.navlist=res.data.datas.nav;
                //获取商品数据
                this.goodslist=res.data.datas.list;
                //advertise
                this.goodslist1=res.data.datas.list[0].home1;
                this.pic1=res.data.datas.list[0].home1.image;
                this.pic2=res.data.datas.list[3].home1.image;
                this.pic3=res.data.datas.list[4].home1.image;
                //ul.top
                this.goodslist2=res.data.datas.list[1].home8;
                this.pic4=res.data.datas.list[1].home8.rectangle1_image

                //ul.salse
                this.goodslist3=res.data.datas.list[5].goods.item;
                //ul.hot
                this.goodslist4=res.data.datas.list[6].brand.item;

                


                // this.pic0=res.data.datas.list[1].home1.image
                console.log(this.pic1)

                console.log(this.navlist)
                console.log(this.goodslist4)

            })
            .catch((err)=>{
                console.log(err)
            })


           }
        },

        watch:{
           
        },

        created(){
            this.getData()    
            console.log(this.$route)
            console.log(this.$route.params.id)
        }

    }
</script>


<style lang="less" scoped>
@import url('../../../styls/main.less');
.goodslist{
    ul.nav{
        position:fixed;
        left:0;
        top:0;

        .w(75);
        height:100%;
        margin-top:46px;
        border:1px solid #dedede;
        li{
            .w(75);
            .h(68);
            // background: red;
            .fs(14);
            text-align: center;
            padding-top:16px;
            box-sizing: border-box;
            p:nth-of-type(2){
                .fs(6);
            }
            .active{
                background: #ff0066;
                color:#fff;
            }

        }
    } 
    .goods{
        .margin(46,0,0,90);
        .advertise{
           .w(252);
           .h(90);
           // background: skyblue; 
           .margin(0,0,2,0);
           img{
            .h(90);
            .w(252);
           }
        }
        p{
            .w(284);
            .h(50);
            .fs(16);
            text-align: center;
            .lh(50);
        }
        ul.top1{
            .w(252);
            .h(170);
            // background: pink;
            display:flex;
            flex-wrap: wrap;
            li{
                .w(83);
                .h(56);
                background: orange;
                img{
                    .h(56);
                }
            }
        }
        ul.top2{
            .w(252);
            .h(56);
            display:flex;
             li{
                .w(84);
                .h(56);
                background: #fff;
            }

        }
        ul.sales{
            .w(284);
            .h(184);
            display:flex;
            li{
                .w(82);
                .h(170);
                // background: yellow;
                .margin(0,3,1,0);
                img{
                    .w(76);
                    .h(76);
                }
                span{
                    // color:#ccc;
                    .fs(14);
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                span:last-of-type{
                        color:#ff0066;
                    }
            }
        }
        ul.hot{
            .w(284);
            .h(780);
            display:flex;
            flex-wrap:wrap;

            li{
                .w(82);
                .h(150);
                // background: pink;
                .margin(0,8,1,0);
                position:relative;
                img{
                    .w(76);
                    .h(76);
                }
                span{
                    // color:#ccc;
                    .fs(14);
                    text-align: center;
                                  
                }
            }
        }
    }
}

</style>