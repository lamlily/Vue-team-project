<template>
    <div class="homelist">
      <!-- 这是homelist组件 -->
        <div class="homebox">

            <div class="head">
                <img v-lazy="pic0" alt="" />
            </div>

            <div class="menu1">
               <ul>
                   <li 
                   v-for="(item,index) in menu1" 
                   :key="index"
                   >
                        <img :src="item.nav_image" alt="" />
                        <span>{{item.nav_title}}</span>
                    </li>
                   
               </ul>
            </div>
            <div class="menu2" >
                <ul>
                    <li v-for="(item,index) in menu2" :key="index"><img :src="item.rectangle1_image" alt="" /><img :src="item.rectangle2_image" alt="" /></li>
                               
                </ul>
                <ul>
                    <li v-for="(item,index) in menu3" :key="index"><img :src="item.rectangle1_image" alt="" /><img :src="item.rectangle2_image" alt="" /></li>
                </ul>
            </div>

            
            <div class="product1 product0">
                <div><img :src="productpic" alt="" /></div>
                <ul>
                    <li v-for="(item,index) in product" :key="index">
                        <img :src="item.goods_image" alt="" />
                        <p>{{item.goods_name}}</p>
                        <p>{{item.goods_ad}}</p>
                        <p>￥{{item.goods_price}}<span>￥{{item.goods_marketprice}}</span></p>
                    </li>  
                    <li v-for="(item,index) in product0" >
                        <img :src="item.goods_image" alt="" />
                        <p>{{item.goods_name}}</p>
                        <p>{{item.goods_ad}}</p>
                        <p>￥{{item.goods_price}}<span>￥{{item.goods_marketprice}}</span></p>
                    </li>      
                </ul>
                 <!-- <ul> -->
                          
                <!-- </ul> -->
            </div>
            <div class="product2 product0">
                <div><img :src="productpic1" alt="" /></div>
                <ul>
                    <li v-for="(item,index) in product1" :key="index">
                        <img :src="item.goods_image" alt="" />
                        <p>{{item.goods_name}}</p>
                        <p>{{item.goods_ad}}</p>
                        <p>￥{{item.goods_price}}<span>￥{{item.goods_marketprice}}</span></p>
                    </li>  
                      
                </ul>
                 <!-- <ul> -->
                          
                <!-- </ul> -->
            </div>
            <div class="product3 product0">
                <div><img :src="productpic2" alt="" /></div>
                <ul>
                    <li v-for="(item,index) in product2" :key="index">
                        <img :src="item.goods_image" alt="" />
                        <p>{{item.goods_name}}</p>
                        <p>{{item.goods_ad}}</p>
                        <p>￥{{item.goods_price}}<span>￥{{item.goods_marketprice}}</span></p>
                    </li>                       
                </ul>
                 <!-- <ul> -->
                          
                <!-- </ul> -->
            </div>


            <div class="produce1 produce0">
                <div><img :src="producepic" alt="" /></div>
                <ul>
                    <li v-for="(item,index) in produce" :key="index">
                        <img :src="item.goods_image" alt="" />
                        <p>{{item.goods_name}}</p>
                        <p>{{item.goods_ad}}</p>
                        <p>￥{{item.goods_price}}<span>￥{{item.goods_marketprice}}</span></p>
                    </li>               
                </ul>
            </div>
            <div class="produce2 produce0">
                <div><img :src="producepic1" alt="" /></div>
                <ul>
                    <li v-for="(item,index) in produce1" :key="index">
                        <img :src="item.goods_image" alt="" />
                        <p>{{item.goods_name}}</p>
                        <p>{{item.goods_ad}}</p>
                        <p>￥{{item.goods_price}}<span>￥{{item.goods_marketprice}}</span></p>
                    </li>               
                </ul>
            </div>
            <div class="produce3 produce0">
                <div><img :src="producepic2" alt="" /></div>
                <ul>
                    <li v-for="(item,index) in produce2" :key="index">
                        <img :src="item.goods_image" alt="" />
                        <p>{{item.goods_name}}</p>
                        <p>{{item.goods_ad}}</p>
                        <p>￥{{item.goods_price}}<span>￥{{item.goods_marketprice}}</span></p>
                    </li>               
                </ul>
            </div>
            

            <div class="produce4 produce0 produce9">
                <div><img :src="producepic4" alt="" /><span>Eric Favre埃里克</span></div>
                <ul>
                    <li v-for="(item,index) in produce4" :key="index">
                        <img :src="item.goods_image" alt="" />
                        <p>{{item.goods_name}}</p>
                        <p></p>
                        <p>￥{{item.goods_price}}<span>￥{{item.goods_marketprice}}</span></p>
                    </li>
                </ul>
            </div>
            <div class="produce4 produce0 produce9">
                <div><img :src="producepic5" alt="" /></div>
                <ul>
                    <li v-for="(item,index) in produce5" :key="index">
                        <img :src="item.goods_image" alt="" />
                        <p>{{item.goods_name}}</p>
                        <p></p>
                        <p>￥{{item.goods_price}}<span>￥{{item.goods_marketprice}}</span></p>
                    </li>
                </ul>
            </div>
            <div class="produce4 produce0 produce9">
                <div><img :src="producepic6" alt="" /></div>
                <ul>
                    <li v-for="(item,index) in produce6" :key="index">
                        <img :src="item.goods_image" alt="" />
                        <p>{{item.goods_name}}</p>
                        <p></p>
                        <p>￥{{item.goods_price}}<span>￥{{item.goods_marketprice}}</span></p>
                    </li>
                </ul>
            </div>


            <div class="produce7 produce0">
                <div><img :src="producepic7" alt="" /></div>
                <ul>
                    <li v-for="(item,index) in produce7" :key="index">
                        <img :src="item.goods_image" alt="" />
                        <p>{{item.goods_name}}</p>
                        <p>{{item.goods_ad}}</p>
                        <p>￥{{item.goods_price}}<span>￥{{item.goods_marketprice}}</span></p>
                    </li>               
                </ul>
            </div>
            <div class="produce8 produce0">
                <div><img :src="producepic8" alt="" /></div>
                <ul>
                    <li v-for="(item,index) in produce8" :key="index">
                        <img :src="item.goods_image" alt="" />
                        <p>{{item.goods_name}}</p>
                        <p>{{item.goods_ad}}</p>
                        <p>￥{{item.goods_price}}<span>￥{{item.goods_marketprice}}</span></p>
                    </li>               
                </ul>
            </div>
            <!-- <div class="produce9 produce0">
                <div  ><img :src="producepic9" alt=""  /></div>
                <ul>
                    <li v-for="(item,index) in produce9" :key="index">
                        <img :src="item.goods_image" alt="" />
                        <p>{{item.goods_name}}</p>
                        <p>{{item.goods_ad}}</p>
                        <p>￥{{item.goods_price}}<span>￥{{item.goods_marketprice}}</span></p>
                    </li>               
                </ul>
            </div> -->


            <div class="others">
                <p class="every">大家都在看</p>
                <ul>
                    <li v-for="(item,index) in others" :key="index">
                        <img :src="item.goods_image" alt="" />
                        <p>{{item.goods_name}}</p>
                        <p>{{item.goods_ad}}</p>
                        <p>￥{{item.goods_price}}<span>￥{{item.goods_marketprice}}</span></p>
                    </li>  
                </ul>
            </div>
            <p class="last">----  我可是有底线的哟 ----</p>
         
        </div>
    </div>
</template>

<script type="text/javascript">
//引入vue
import Vue from 'vue'
//引入懒加载，缓存
import {lazyload} from 'mint-ui';
//引入加载的字体图标mint-ui组件；
import {Toast} from 'mint-ui';
//引入无限加载mint-ui组件
import {InfiniteScroll} from "mint-ui";
Vue.use(InfiniteScroll);


    export default{
        name:'Homelist',
        data(){
            return{
              piclist:[],
              pic0:[], 
              menu1:[],
              menu2:[],
              menu3:[],
              product:[],
              product0:[],
              product1:[],
              product2:[],
              productpic:[],
              productpic1:[],
              productpic2:[],
              produce:[],
              produce1:[],
              produce2:[],
              producepic:[],
              producepic1:[],
              producepic2:[],
              produce4:[],
              produce5:[],
              produce6:[],
              producepic4:[],
              producepic5:[],
              producepic6:[],
              produce7:[],
              produce8:[],
              produce9:[],
              producepic7:[],
              producepic8:[],
              producepic9:[],
              others:[],


              loading:false,
                // 加载过程中不让加载字体图标滚动，false为触发滚动。true为不能滚动，默认为false可以滚动

                // 分页，默认为0;总页数为10
                current:0,
                total:10
             
            }
        },
        methods:{


          getData(){

            // 因为页面到底会出现加载图标一直滚动因为距离一直在滚动的范围；因此请求数据前要先判断如果页数到了最后一页就不需要再次请求数据了
                if(this.current==this.total){
                    // 到底了提示已经到底了并移除
                    Toast({
                    message:"已经到底了...",//配置信息
                    position:'bottom',//距离，底部
                // 移除图标
                    duration:1000//5000多长时间消失，若为-1则不会自动关闭
                });
                    return false;
                }
                // 引入mint-ui中的toast组件（加载旋转字体图标）
                let toast = Toast({
                    message:"数据加载中...",//配置信息
                    // position:'bottom',//距离
                    iconClass: "fa fa-cog fa-spin",
                    // 'icon icon-success'，以上为到字体图标库找到的加载的菊花图（可换），只需要类名即可；一般还要配置一个类名fa-spin使用才可以转起来
                    duration:-1//5000多长时间消失，若为-1则不会自动关闭
                });
                // 触发请求，一旦在加载中时让loading为true即不滚动
                this.loading=true



            this.$axios.get(`/api/mobile/index.php?act=index`,{
                

            })
            .then((res)=>{
                // console.log(res.data.datas.list[1].home1.image)
                 // console.log(res.data.datas.list)
                // console.log(piclist)
                // 打印获取到的数据为数组需要和原来定的piclist合并数组
                this.piclist=this.piclist.concat((res.data.datas.list).slice(2))
                //获取到的数据List[0]为banner;[1]为box头部,从[2]开始截取
                //boxhead一个图片
                this.pic0=res.data.datas.list[1].home1.image
                //menu1:
                this.menu1=this.menu1.concat(res.data.datas.list[2].icons.item)
                //menu2
                this.menu2=this.menu2.concat(res.data.datas.list[3].home7)
                this.menu3=this.menu3.concat(res.data.datas.list[4].home7)
                //product
                this.productpic = this.productpic.concat(res.data.datas.list[5].goods.image)
                this.product = this.product.concat(res.data.datas.list[5].goods.item)
                this.product0 = this.product0.concat((res.data.datas.list[6].goods.item).slice(-1))
                this.product1 = this.product1.concat((res.data.datas.list[7].goods.item))
                this.productpic1 = this.productpic1.concat(res.data.datas.list[7].goods.image)
                this.product2 = this.product2.concat((res.data.datas.list[9].goods.item))
                this.productpic2 = this.productpic2.concat(res.data.datas.list[9].goods.image)
                //produce
                this.produce = this.produce.concat((res.data.datas.list[11].goods.item).slice(0,3))
                this.producepic = this.producepic.concat(res.data.datas.list[11].goods.image)
                this.produce1 = this.produce1.concat((res.data.datas.list[12].goods.item).slice(0,3))
                this.producepic1 = this.producepic1.concat(res.data.datas.list[12].goods.image)
                this.produce2 = this.produce2.concat((res.data.datas.list[13].goods.item).slice(0,3))
                this.producepic2 = this.producepic2.concat(res.data.datas.list[13].goods.image)
                //produce456
                this.produce4 = this.produce4.concat((res.data.datas.list[14].goods.item).slice(0,3))
                this.producepic4 = this.producepic4.concat(res.data.datas.list[14].goods.image)
                this.produce5 = this.produce5.concat((res.data.datas.list[15].goods.item).slice(0,3))
                this.producepic5= this.producepic5.concat(res.data.datas.list[15].goods.image)
                this.produce6 = this.produce6.concat((res.data.datas.list[16].goods.item).slice(0,3))
                this.producepic6 = this.producepic6.concat(res.data.datas.list[16].goods.image)
                //produce789
                this.produce7 = this.produce7.concat((res.data.datas.list[17].brand.item).slice(0,3))
                this.producepic7 = this.producepic7.concat(res.data.datas.list[17].brand.image)
                this.produce8 = this.produce8.concat((res.data.datas.list[18].brand.item).slice(0,3))
                this.producepic8 = this.producepic8.concat(res.data.datas.list[18].brand.image)
                this.produce9 = this.produce9.concat((res.data.datas.list[19].brand.item).slice(0,3))
                this.producepic9 = this.producepic9.concat(res.data.datas.list[19].brand.image)
                //others
                this.others = this.others.concat(res.data.datas.list[22].new_goods.item)
               


                console.log(this.piclist)
                // =>this.movielist=res.data.data.films
                // res.data.datas.list[1].home1.image
                //res.data.datas.list[0].adv_list.item
                // console.log(res)
            
                // console.log(this.pic0)
                console.log(this.menu2)
                console.log(this.product0)


                // 数据加载字体图标关闭（不管是否请求成功都要关闭）
                    toast.close();
                    // 请求后滚动图标再次滚动
                    this.loading=false
                    // 每次请求完成页数发生变化
                    this.current=res.data.data.page.current
                    this.total=res.data.data.page.total
                
                
            })
            .catch((err)=>{
                console.log(err)
            })
          }
        },
        created(){
          this.getData()
        }
    }

</script>

<style  lang="less" scoped>
@import url('../../../styls/main.less');
.homelist{
    // .w(375);

    .homebox{
        .w(375);
        .h(9420);
        background:rgba(0,255,200,0.2);
        .head{
            .h(62);
            // background:rgba(0,255,180);
            margin-bottom:0.2rem;
            img{
                .w(373);
                .h(62);
            }
        }
        .menu1{
            ul{
                .h(165);
                display:flex;
                // jsutify-content:space-between;
                // li换行
                flex-wrap:wrap;  
                li{
                    width:20%;
                    // flex:1;
                    .h(75);
                    // background: pink;
                    text-align: center;
                    .lh(75);
                    position:relative;
                    img{
                        // .w(52);
                        .h(52);
                    }
                    span{
                        .fs(12);
                        position:absolute;
                        // left:12px;
                        // top:29px;
                        .left(12);
                        .top(29);
                    }
                }
            }
        }
        .menu2{
            display:flex;
            flex-wrap:wrap;
            ul{
                width:50%;            
                .h(188);
                li{
                   .h(85);
                   // background: skyblue; 
                   .margin(8,2,2,6);

                   img{
                    // .w(178);
                    .h(85);
                   }
                }
            }
        }
        .product0{
            // .w(363);
            .h(500);
            // background:orange;
            .margin(0,0,10,0);
            div{
                // .w(363);
                .h(157);
                // background: #58bc58;
                .margin(5,0,0,4);
                img{
                    .h(157);
                }
            }
            ul{
                // .w(363);
                display:flex;
                flex-wrap:wrap;
                box-sizing: border-box;
                .margin(0,6,0,6);


                // .margin(5,0,0,26);

                li{
                    width:33.3%;
                    .h(171);
                    background: #fff;
                

                    img{
                        // .w(84);
                        .h(84);
                        .margin(5,10,0,15);

                    }
                    p{
                        .fs(12);
                        // margin-bottom:5px;
                        .margin(0,0,5,0);
                        span{
                            .fs(12);
                            text-decoration:line-through;
                            color:#ccc;
                        }
                    }
                    p:first-of-type{
                        // .h(40);
                        // text-align: center;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    p:nth-of-type(2){
                        color:#fff;
                        background: #ff0066;
                        // border-radius: 10px;
                        .border-radius(10);
                        .w(108);
                        text-align: center;
                    }
                    p:last-of-type{
                        color:#ff0066;
                    }
                }
            }
        }
        .produce0{
            // .w(363);
            .h(241);
            // background: yellow;
             .margin(0,0,10,0);
            div{
                // .w(363);
                .h(70);
                background: #fff;
                .margin(5,8,0,6);
                img{
                    .w(364);
                    .h(70);
                }
            }
            ul{
                // .w(363);
                display:flex;
                flex-wrap:wrap;
                .margin(0,6,0,6);

                 li{
                    width:33.3%;
                    .h(171);
                    background: #fff;

                    img{
                        // .w(84);
                        .h(84);
                        .margin(5,10,0,15);

                    }
                    p{
                        .fs(12);
                        // margin-bottom:5px;
                        .margin(0,0,5,0);
                        span{
                            .fs(12);
                            text-decoration:line-through;
                            color:#ccc;
                        }
                    }
                    p:first-of-type{
                        // .h(40);
                        // text-align: center;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    p:nth-of-type(2){
                        color:#fff;
                        background: #ff0066;
                        // border-radius: 10px;
                        .border-radius(10);
                        .w(108);
                        text-align: center;
                    }
                    p:last-of-type{
                        color:#ff0066;
                    }
                }
            }
        }
        .produce9{
            // .w(363);
            .h(325);
            // background: red;
            div{
                // .w(360);
                .h(155);
                img{
                    .w(360);
                    .h(155);
                }

            }
        }
        .special img{
            .h(50);
        }
        .others{
            .every{
                .h(30);
                .fs(20);
                font-weight: bold;
               text-align: center;
               .lh(30);
            }
            ul{
                display:flex;
                flex-wrap:wrap;
                .margin(0,2,0,4);

                li{
                    width:49%;
                    .h(251);
                    background: #fff;
                    // border:1px solid #ccc;
                    .margin(2,1,1,1);
                    // border-radius:5px;
                    .border-radius(5);
                    img{
                        // .w(168);
                        .h(178);
                    }
                    p{
                        .fs(12);
                        // margin-bottom:5px;
                        .margin(0,0,5,0);
                        span{
                            .fs(12);
                            text-decoration:line-through;
                            color:#ccc;
                        }
                    }
                    p:first-of-type{
                        // .h(40);
                        // text-align: center;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    p:nth-of-type(2){
                        color:#fff;
                        background: #ff0066;
                        // border-radius: 10px;
                        .border-radius(10);
                        .w(108);
                        text-align: center;
                    }
                    p:last-of-type{
                        color:#ff0066;
                    }
                }
            }
        }
        .last{
            .h(50);
            // color:#ccc;
            .fs(16);
            text-align: center;
            .lh(50);
        }
    }
    

}
   
</style>