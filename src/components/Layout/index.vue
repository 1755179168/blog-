<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@import "~@/style/mixin/mixin.less";
div.layout-container {
  display: flex;
  .fill();
  div.left,
  div.right {
    flex: 0 0 auto;
  }
  div.main {
    flex: 1 1 auto;
  }
  & > div {
    overflow: hidden;
  }
}
</style>
