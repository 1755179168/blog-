<template>
  <div class="menu-item-container">
    <Icon :type="iconType" /> <span
      :title="text"
      class="text"
    >{{text}}</span>
  </div>
</template>

<script>
import Icon from "@/components/icon/index.vue";
export default {
  props: {
    text: {
      require: true,
      type: String,
    },
    iconType: {
      require: true,
      type: String,
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.menu-item-container:hover {
  background-color: lighten(@dark, 4.7%);
  /* color: #ccc; */
}
.menu-item-container {
  font-size: 18px;
  align-items: center;
  height: 45px;
  display: flex;
  color: rgb(217, 212, 212);
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  padding-left: 50px;
}
span {
  margin-left: 10px;
}
</style>