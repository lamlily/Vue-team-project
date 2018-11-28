
<template>
    <div class="shoppingcar">
        <!-- 我是SHOPPINGCAR.vue -->
        <CarHeader></CarHeader>
        <Carlist></Carlist>

      
    </div>
</template>


<script type="text/javascript">


import CarHeader from './CarHeader.vue'
import Carlist from './Carlist.vue'

    export default{
        name:'ShoppingCar',
        components:{CarHeader,Carlist},
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
.shoppingcar{
    .margin(46,0,0,0);

}


</style>