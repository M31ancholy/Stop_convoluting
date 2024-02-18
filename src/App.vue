<script setup>
import test_button from './components/test_button.vue'
</script>

<template>
  <div class = "black-background">
    <div class="main">
      <img src="./components/Img/Pic_Dong.jpg" class="header">
      <p style="color: white;">现在你有一个机会，只要按下这个按钮，你就能窃取到董神的一小部分智商</p>
      <test_button></test_button>
    </div>
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
.black-background {
    background-color: #000; /* 黑色背景 */
    width: 100vw; /* 视口宽度 */
    height: 100vh; /* 视口高度 */
    position: fixed; /* 使用固定定位 */
    top: 0;
    left: 0;
    z-index: -1; /* 确保它位于其他内容之下 */
  }

.main{
  z-index: 1;
}
</style>
