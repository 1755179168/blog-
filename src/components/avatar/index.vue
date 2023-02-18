<template>
  <div
    class="avatar-container"
    :style="{
      width: width_avatar + 'px',
      height: height_avatar + 'px',
    }"
  >
    <img
      :src="url"
      alt=""
    >
  </div>
</template>

<script>
export default {
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