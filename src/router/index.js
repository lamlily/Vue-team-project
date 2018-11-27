
// 引入Vue
import Vue from 'vue'
// 引入VueRouter路由
import VueRouter from 'vue-router'
// 实例化Vue.use才可以调用this.$route
Vue.use(VueRouter)
//1. 引入组件(3.调用切换跳转组件需要先引入组件)
import Home from '../components/pages/Home/Home.vue'
// 引入电影页movie
import Goods from '../components/pages/Goods/Goods.vue'
// 后缀名vue可以不写
// 引入详情页details
import Details from "../components/pages/Details/Details.vue"
// 引入search搜索页面
import Search from '../components/pages/Search/Search.vue'
//引入购物车页面
import ShoppingCar from "../components/pages/ShoppingCar/ShoppingCar.vue"


//引入我的页面my
import My from "../components/pages/My/My.vue"
//引入My我的页面下的子页面login登录页面
import Login from "../components/pages/My/Login.vue"
//引入我的页面下的子页面Myinfo个人信息页面
import Myinfo from "../components/pages/My/MyInfo.vue"
//引入我的页面下的子页面register注册页面
import Register from "../components/pages/My/Register.vue"



// 设置路由 配置
let router = new VueRouter({
    routes:[
    {
        path:'/',
        component:Home,
        name:'home'
    },
    {
        path:'/home',
        component:Home,
        name:'home'
    },
    {
        path:'/goods',//:id
        component:Goods,
        name:'goods'
    },
    {
        path:'/goods/:id/:code',//:id
        component:Goods,
        name:'goods'
    },
    {
        //路由传参：
        //1.动态路由
        path:'/details/:id',//:id
        component:Details,
        name:"details"
    },
    {
        path:'/search',
        component:Search,
        name:'search'
    },
    {
        path:'/shoppingcar',
        component:ShoppingCar,
        name:'shoppingcar'
    },

    {
        path:'/my',
        component:My,
        name:'my',
        children:[
            {
                path:'login',
                component:Login,
                name:'login'
            },{
                path:'myinfo',
                component:Myinfo,
                name:'myinfo'
            },{
                path:'register',
                component:Register,
                name:'register'
            }
        ]
    }
    ]
})


// 抛出路由
export default router

