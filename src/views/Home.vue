<!--
 * @Author: yuyongxing
 * @Date: 2021-10-18 11:40:35
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-10-18 18:05:57
 * @Description:
-->
<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="hello vue-mobile-template" />
    <button @click="showToast" />
    <mt-button type="default">
      default
    </mt-button>
    <mt-button type="primary">
      primary
    </mt-button>
    <mt-button type="danger">
      danger
    </mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui"
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    showToast() {
      Toast("13123")
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img {
    width: 100px;
  }
}
</style>
