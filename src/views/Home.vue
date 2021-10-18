<!--
 * @Author: yuyongxing
 * @Date: 2021-10-18 11:40:35
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-10-18 13:40:24
 * @Description: 
-->
<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="hello vue-mobile-template" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img{
    width: 100px;
  }
}
</style>
