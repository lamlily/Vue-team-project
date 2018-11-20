<template>
    <div class="banner">
        <!-- <h1>{{name}}</h1> -->
        <!-- 复制swiper网站html代码到此处 -->
       <mt-swipe :auto="4000">
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

    </div>
</template>


<script type="text/javascript">
// 引入swiper 轮播图插件
// import Swiper from 'swiper'
// 引入vue    
import Vue from "vue"
// 引入axios(main.js)
import Axios from 'axios'

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



    export default{
        name:'Banner',
        data(){
            return{
                // name:'这里是Banner组件'
                bannerlist:[]
            }
        },
        methods:{
            
            handleChange(index){

            }
           
        },

        mounted(){
     
        },
        created(){
            //created发起ajax请求
            // this.getBannerData()
        }



        
         
    }



   

</script>


<style lang='less' scoped >
/*引入配置样式*/
@import url('../../../styls/main.less');
/*引入swiper 轮播图插件 样式*/
@import url('../../../../node_modules/swiper/dist/css/swiper.min.css');

img{
    .w(375);
    .h(210);
}

</style>