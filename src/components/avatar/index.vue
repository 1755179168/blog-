<template>
  <div
    class="avatar-container"
    :style="{
      width: width_avatar + 'px',
      height: height_avatar + 'px',
    }"
  >
    <img
      v-if="imgLoad"
      :src="url"
      alt=""
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgLoad: false,
    };
  },
  created() {
    this.setUrl();
  },
  methods: {
    /**
     * 预加载
     */
    setUrl() {
      const img = new Image();
      img.src = this.url;
      img.onload = () => {
        this.imgLoad = true;
      };
    },
  },
  props: {
    width_avatar: {
      default: 50,
      require: false,
      type: Number,
    },
    height_avatar: {
      default: 50,
      require: false,
      type: Number,
    },
    url: {
      type: String,
      default: "",
      require: true,
    },
  },
};
</script>

<style scoped lang="less">
div.avatar-container {
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>