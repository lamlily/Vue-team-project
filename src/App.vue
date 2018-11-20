<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <Header></Header>
    <!-- <Slider></Slider> -->
    <!-- <Home></Home> -->
    <router-view></router-view>


  </div>
</template>


<script>

import Header from './components/commons/Header.vue'
// import Slider from './components/commons/Slider.vue'
// import Home from './components/pages/Home/Home.vue'

// 


export default {
  name: 'App',
  components: {
    // HelloWorld
    Header//,Slider,Home
  },
  mounted(){
    console.log(this);
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
