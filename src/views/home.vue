<template>
  <div
    class="home-container"
    ref="item-container"
  >
    <div
      class="wrapper"
      :style="{height:imgUrl.length*size.height + 'px'}"
    ></div>
  </div>
</template>

<script>
import ImgLoad from "@/components/ImgLoad/index.vue";
import axios from "axios";
export default {
  mounted() {
    axios.get("/api");
    this.size.width = parseInt(
      getComputedStyle(this.$refs["item-container"]).width
    );
    this.size.height = parseInt(
      getComputedStyle(this.$refs["item-container"]).height
    );
  },
  data() {
    return {
      size: {
        width: "",
        height: "",
      },
      imgUrl: [
        {
          big: "http://47.93.37.77/asset_test/big1.jpg",
          noBig: "http://47.93.37.77/asset_test/noBig1.jpg",
        },
        {
          big: "http://47.93.37.77/asset_test/big2.jpg",
          noBig: "http://47.93.37.77/asset_test/noBig2.jpg",
        },
        {
          big: "http://47.93.37.77/asset_test/big3.jpg",
          noBig: "http://47.93.37.77/asset_test/noBig3.jpg",
        },
      ], //请求改这里
    };
  },
  components: {
    ImgLoad,
  },
};
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100%;
}
</style>