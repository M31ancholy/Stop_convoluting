<script setup>
import test_button from './components/test_button.vue'
</script>

<template>
  <div class = "BackGroundCSS">  </div>
  <div class="main">
    <img src="./components/Img/Pic_Dong.jpg" class="header">
    <p style="color: white;">现在你有一个机会，只要按下这个按钮，你就能窃取到董神的一小部分智商</p>
    <test_button></test_button>
    </div>
</template>

<style scoped>
.header {
  background-color: #F1F1F1;
  text-align: center;
  padding: 20px;
  height: 300px;
  width: 300px;
}
.BackGroundCSS1{
  width: 1000000px;
  height: 10000000px;
  z-index: -1;
  position: absolute;
}
.BackGroundCSS {
  width: 100vh;
  height: 100vh;
  background: url("./components/Img/blackPic.jpg") center center no-repeat;
  background-size: 100% 100%;
  position: absolute;
  z-index: -1;
}
.main{
  z-index: 1;
}
</style>
