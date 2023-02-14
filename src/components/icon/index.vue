<template>
  <i
    :class="iconName"
    class="icon-container"
  ></i>
</template>

<script>
import map from "./map.js";
export default {
  props: {
    type: {
      type: String,
      default: "",
      require: true,
    },
  },
  computed: {
    iconName() {
      return "iconfont" + " " + map[this.type];
    },
  },
};
</script>

<style scoped>
@import url("https://at.alicdn.com/t/c/font_2787040_7sv10g559mu.css");
</style>