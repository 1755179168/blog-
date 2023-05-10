<template>
  <div
    class="avatar-container"
    :style="{
      opacity: isLoad ? 1 : 0, 
      width: size + 'px',
      height: size + 'px',
    }"
  >
    <img
      :src="url"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 50,
      require: false,
    },
    url: {
      require: true,
      type: String,
      default: "",
    },
  },
  computed: {
    isLoad() {
      return this.url === "" ? false : true;
    },
  },
};
</script>

<style lang="less" scoped>
div.avatar-container {
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
