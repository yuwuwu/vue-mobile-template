<!--
 * @Author: yuyongxing
 * @Date: 2021-10-18 11:40:35
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-10-18 13:41:26
 * @Description: 
-->
<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  width: 100%;
  p{
    text-align: center;
    color: blue;
  }
}
</style>
