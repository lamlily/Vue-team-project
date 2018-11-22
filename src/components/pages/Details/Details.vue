
<template>
    <div class="details" >
        <!-- 我是details我是details我是details我是details我是details我是details我是details我是details我是details我是details -->
        <!-- {{detailslist}} -->
        <div class="top">
            <div class="turn"><</div>
            <div class="banner">
                <!-- 复制swiper网站html代码到此处 -->
               <div class="swiper-container ">
                    <div class="swiper-wrapper">
                    <!-- 通过v-for循环动态生成数据 -->
                        <div class="swiper-slide" v-for="(item,index) in bannerlist" :key="index">
                            <!--轮播图的图片 -->
                            <img :src="item._big" alt="" />
                            <!-- 通过axios请求get获取到网站的图片 -->
                        </div>
                        <!-- <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div> -->
                        
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>     
                </div>
            </div>
            
        </div>
        <ul class="goodsInfo">
            <li v-for="(item,index) in detailslist.goods_info" :key="index">
                <p>
                <span>￥{{item.goods_price}}</span><span>￥{{item.goods_marketprice}}</span><span>包税价</span>
                </p>
                <p>{{item.goods_name}}</p>
                <p>{{item.goods_jingle}}</p>
                <div class="shui">
                    <p><span>{{item.goods_country}}</span><span>{{item.goods_bussiness_store}}</span><span>税费：预计{{item.goods_costprice}}</span></p>
                    <p></p>
                </div>
            </li>
        </ul>
         
        
    </div>

</template>


<script >
//引入vue
import Vue from 'vue';
//引入加载的字体图标mint-ui组件；
import {Toast} from 'mint-ui';
// 引入swiper 轮播图插件
import Swiper from 'swiper'
import {lazyload} from 'mint-ui';



    export default{
        name:'Details',
        components:{},
        data(){
            return{

              detailslist:[],
              bannerlist:[],

              //加载数据显示功能
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
                // if(this.current==this.total){
                //     // 到底了提示已经到底了并移除
                //     Toast({
                //     message:"已经到底了...",//配置信息
                //     position:'bottom',//距离，底部
                // // 移除图标
                //     duration:1000//5000多长时间消失，若为-1则不会自动关闭
                // });
                //     return false;
                // }
                // // 引入mint-ui中的toast组件（加载旋转字体图标）
                // let toast = Toast({
                //     message:"数据加载中...",//配置信息
                //     // position:'bottom',//距离
                //     iconClass: "fa fa-cog fa-spin",
                //     // 'icon icon-success'，以上为到字体图标库找到的加载的菊花图（可换），只需要类名即可；一般还要配置一个类名fa-spin使用才可以转起来
                //     duration:-1//5000多长时间消失，若为-1则不会自动关闭
                // });
                // // 触发请求，一旦在加载中时让loading为true即不滚动
                // this.loading=true



            this.$axios.get(`/api/mobile/index.php?act=goods&op=goods_detail&goods_id=877779407&key=&dis_id=&client=wap`,{
                // params:{
                //     __t:new Date().getTime(),//获取当前时间戳1542360314865,
                //     // page:1,
                //     page:this.current+1,
                //     // 默认为0所以this.current+1
                //     // count:1
                //     current:7}

            })
            .then((res)=>{
                console.log(res)
                
                this.detailslist=this.detailslist.concat(res.data.datas)
                this.bannerlist=this.bannerlist.concat(res.data.datas.image_list)

                
                
                // this.pic0=res.data.datas.list[1].home1.image
                
               
                console.log(this.detailslist)
                console.log(this.bannerlist)
                console.log(res)
                console.log(res.data.datas.goods_info)
                console.log(this.detailslist.goods_info)

            

                // 数据加载字体图标关闭（不管是否请求成功都要关闭）
                    // toast.close();
                    // // 请求后滚动图标再次滚动
                    // this.loading=false
                    // // 每次请求完成页数发生变化
                    // this.current=res.data.data.page.current
                    // this.total=res.data.data.page.total
                    
                Vue.nextTick(()=>{
                    console.log(this)
                    this.initSwiper()
                })
                
            })
            .catch((err)=>{
                console.log(err)
            })
          },
          //banner
          initSwiper(){
                console.log(111)
                    var mySwiper = new Swiper ('.swiper-container', {
                    // direction: 'vertical', // 垂直切换选项
                    loop: true, // 循环模式选项
                    autoplay: {
                    delay: 2500,
                    // disableOnInteraction: false,
                    },
                    // 分页器
                    pagination: {
                      el: '.swiper-pagination',
                    },
                   
                })
            }

        },
           
        created(){
            this.getData()
        }


    }

</script>


<style lang="less" scoped>
// 引入配置样式总模块，固定写法
@import url('../../../styls/main.less');
/*引入swiper 轮播图插件 样式*/
@import url('../../../../node_modules/swiper/dist/css/swiper.min.css');

.details{
    .top{
        .w(375);
        .h(411);
        .turn{
            .h(36);
        }
        .banner{
            .h(375);
            border:1px solid #ccc;
            img{
                .h(375);

            }
        }
    }
}
    

    
    
</style>
