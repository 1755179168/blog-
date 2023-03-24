<template>
  <div
    class="blog-container"
    v-loading='loading'
  >

  </div>
</template>

<script>
export default {
  created() {
    setTimeout(() => {
      this.loading = true;
    }, 3000);
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/style/mixin/mixin.less";
.blog-container {
  .fill();
}
</style>