
<template>
    <div class="goodslist">
        <!-- 我是Goodslist vue   -->
        <ul class="nav">
               <li 
               v-for='(item,index) in navlist' 
                :key="index"
                @click="sel(item.class_code_id)"
                :class='selInit==item.class_code_id?"active":" "'
    
                >
                    <p>{{item.class_code_desc}}</p>
                    <p>{{item.class_code_entitle}}</p>
                </li>            
        </ul>  
        <div class="goods">
            <!-- {{goodslist}} -->
            
            <ul class="advertise"  @click="goDetails">
                <li>
                    <img :src="pic1" alt="" />
                </li>
            </ul>
            
            <ul class="top1" @click="goDetails">
                <li >
                    <img :src="pic21" alt="" />
                </li>
                <li >
                    <img :src="pic22" alt="" />
                </li>
                <li >
                    <img :src="pic23" alt="" />
                </li>
                <li >
                    <img :src="pic25" alt="" />
                </li>
                <li >
                    <img :src="pic26" alt="" />
                </li>
                <li >
                    <img :src="pic24" alt="" />
                </li>
                <li >
                    <img :src="pic24" alt="" />
                </li>
                <li >
                    <img :src="pic25" alt="" />
                </li>
                <li >
                    <img :src="pic26" alt="" />
                </li>
               
                
            </ul>
            <!-- <ul class='top2'>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
            </ul> -->


            <p>——   精选分类   ——</p>
            <ul class="advertise" @click="goDetails" >
                <li>
                    <img :src="pic2" alt="" />
                </li>
            </ul>
            <ul class="advertise" @click="goDetails">
                <li>
                    <img :src="pic3" alt="" />
                </li>
            </ul>
            

            <p>——   畅销商品  ——</p>
            <ul class='sales'>  
                <li v-for='(item,index) in goodslist3' 
                    :key="index" @click="goDetails">
                   <img :src="item.goods_image" alt="" />
                    <span>{{item.goods_name}}</span>
                    <span>￥{{item.goods_promotion_price}}</span> 
                </li>                     
            </ul>


            <!-- <div v-for='(item,index) in goodslist' 
            :key="index">  -->
            <p>——   热门品牌   ——</p>
            <ul class='hot' @click="goDetails">
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
               pic21:[],
               pic22:[],
               pic23:[],
               pic24:[],
               pic25:[],
               pic26:[],
               goodslist2:[],
               goodslist3:[],
               goodslist4:[],

               selInit:"17",


               loading:false,
                // 加载过程中不让加载字体图标滚动，false为触发滚动。true为不能滚动，默认为false可以滚动

                // 分页，默认为0;总页数为10
                current:0,
                total:10



            }
        },

        methods:{

            goDetails(){
                this.$router.push("/details")
            },

            sel(id){

                this.getData(id)
                this.selInit=id
                console.log(789789)
            },


           getData(id){

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




            this.$axios.get(`/api/mobile/index.php?act=goodsclass&op=list&${id}&gc_id=17`,{

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
                // this.goodslist2=this.goodslist.concat((res.data.datas.list[2].home5).slice(8));
                // thi.goodslist2=this.goodslist2.slice(0,8);
                this.goodslist2 = res.data.datas.list[2].home5

                this.pic21=res.data.datas.list[1].home8.rectangle1_image
                this.pic22=res.data.datas.list[1].home8.rectangle2_image
                this.pic23=res.data.datas.list[1].home8.rectangle3_image
                this.pic24=res.data.datas.list[2].home5.rectangle1_image
                this.pic25=res.data.datas.list[2].home5.rectangle2_image
                this.pic26=res.data.datas.list[2].home5.rectangle3_image

                //ul.salse
                this.goodslist3=res.data.datas.list[5].goods.item;
                //ul.hot
                this.goodslist4=res.data.datas.list[6].brand.item;

    

                // this.pic0=res.data.datas.list[1].home1.image
                console.log(this.pic1)

                console.log(this.navlist)
                console.log(this.goodslist4)



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
        // .active{
        //     background: #ff0066;
        //     color:#fff;
        // }
            



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
            // background: #000;
            li{
                .w(84);
                .h(56);
                // background: #58bc58;
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
                    color:#999;
                    .w(80);
                    .h(40);
                    display:block;
                    .fs(14);
                    overflow: hidden;
                    text-overflow:ellipsis;
                    // white-space: nowrap;
                    
                }
                span:last-of-type{
                        color:#ff0066;
                        .margin(5,0,0,0);
                        text-align: center;
                    }
            }
        }
        ul.hot{
            .w(284);
            .h(780);
            display:flex;
            flex-wrap:wrap;
            color:#999;

            li{
                .w(82);
                .h(150);
                // background: pink;
                .margin(0,8,1,0);
                position:relative;
                img{
                    .w(76);
                    .h(76);
                    .margin(5,0,0,0);
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
.active{
    background: #ff0066;
    color:#fff;
}
           

</style>