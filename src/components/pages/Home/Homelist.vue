<template>
    <div class="homelist">
      <!-- 这是homelist组件 -->
        <div class="homebox">
            <div class="head">
                <img src="" alt="" />
            </div>
            <div class="menu1">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="menu2">
                <div class="box1"></div>
                <div class="box2"></div>
                <div class="box3"></div>
                <div class="box4"></div>
            </div>

        </div>
    </div>
</template>

<script type="text/javascript">
//引入vue
import Vue from 'vue'

import {lazyload} from 'mint-ui';


    export default{
        name:'Homelist',
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

<style  lang="less" scoped>
@import url('../../../styls/main.less');
.homelist{
    .homebox{
        .w(375);
        .h(10075);
        background:rgba(0,255,200,0.2);
    }
}
   
</style>