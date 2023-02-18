<template>
  <div class="imgLoad-container">
    <img
      @load="bigImgLoading"
      :style="{display:bigImgLoad === true ? 'block' : 'none'}"
      class="bigImg"
      :src="bigImgUrl"
      alt=""
    >
    <img
      :style="{display: show===false ?'none' : 'block'}"
      @transitionend="imgTransitionEnd"
      :class="{hidden:bigImgLoad}"
      @load="noBigImgLoad"
      class="noBigImg"
      :src="noBigImgUrl"
      alt=""
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      bigImgLoad: false,
      show: true,
    };
  },
  methods: {
    bigImgLoading() {
      this.bigImgLoad = true;
    },
    imgTransitionEnd() {
      this.show = false;
      this.$emit("load");
    },
  },
  props: {
    bigImgUrl: {
      require: true,
      type: String,
      default: "",
    },
    noBigImgUrl: {
      require: true,
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/style/mixin/mixin.less";
.imgLoad-container {
  position: relative;
  img.hidden {
    opacity: 0;
    transition: 0.5s;
  }
  img {
    .pos-fill();
    object-fit: cover;
  }
  .noBigImg {
    filter: blur(5px);
  }
}
</style>