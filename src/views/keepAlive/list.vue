<!--
 * @Author: yuyongxing
 * @Date: 2021-10-29 14:56:55
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-10-29 18:08:11
 * @Description:
-->
<template>
  <div class="box">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <li
        v-for="(item,index) in list"
        :key="index"
        @click="handleClick(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        const last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
