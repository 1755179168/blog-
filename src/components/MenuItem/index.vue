<template>
  <div class="menu-item-container">
    <Icon :type="iconType" /> <span class="text">{{text}}</span>
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

<style scoped>
.menu-item-container:hover {
  background-color: #5a5555;
  /* color: #ccc; */
}
.menu-item-container {
  font-size: 18px;
  align-items: center;
  height: 45px;
  display: flex;
  color: rgb(217, 212, 212);
  box-sizing: border-box;
  padding-left: 80px;
  cursor: pointer;
  width: 100%;
}
span {
  margin-left: 10px;
}
</style>