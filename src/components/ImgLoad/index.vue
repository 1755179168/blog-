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
      class="noBigImg"
      :src="noBigImgUrl"
      alt=""
      v-if="imgLoading"
    >
  </div>
</template>

<script>
export default {
  created() {
    const img = new Image();
    img.src = this.noBigImgUrl;
    img.onload = () => {
      this.imgLoading = true;
    };
  },
  data() {
    return {
      bigImgLoad: false,
      show: true,
      imgLoading: false,
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
  .fill();
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