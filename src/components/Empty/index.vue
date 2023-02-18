<template>
  <div class="empty-container">
    <Icon :type="'empty'" />
    <span class="description">{{description}}</span>
  </div>
</template>

<script>
import Icon from "@/components/icon/index.vue";
export default {
  components: {
    Icon,
  },
  props: {
    description: {
      type: String,
      default: "空的",
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.icon-container {
  font-size: 130px;
}
div.empty-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: @gray;
  span.description {
    margin-top: 30px;
    font-size: 45px;
  }
}
</style>