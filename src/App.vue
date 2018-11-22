<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <Header></Header>
    <!-- <Slider></Slider> -->
    <!-- <Home></Home> --> 
    <!-- 缓存首页 -->
    <!-- <keep-alive :include=:"home"> -->
        <router-view></router-view>
    <!-- </keep-alive> -->
    

    <Footer></Footer>

  </div>
</template> 


<script>

import Header from './components/commons/Header.vue'
// import Slider from './components/commons/Slider.vue'
// import Home from './components/pages/Home/Home.vue'

import Footer from "./components/commons/Footer.vue"


export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,Footer//,Slider,Home
  },
  mounted(){
    console.log(this);
  }
}
</script>


<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
#app{
  height:100%;
  display:flex;
  flex-direction: column;
}
</style>


<!--        http://10.3.136.28:8080/#/         -->
