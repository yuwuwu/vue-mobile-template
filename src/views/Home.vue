<!--
 * @Author: yuyongxing
 * @Date: 2021-10-18 11:40:35
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-11-24 14:58:09
 * @Description:
-->
<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="hello world" />
    <van-button
      type="primary"
      @click="showToast"
    >
      primary
    </van-button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { login } from '@/api/public.js'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    showToast() {
      login().then(res => {
        console.log(res)
        if (res.code === 1) {
          this.$toast("成功")
        }
      })
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
    width: 2rem;
  }
}
</style>
