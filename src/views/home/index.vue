<template>
  <div
    class="home-container"
    ref="item-container"
  >
    <!-- 侧边小圆点 -->
    <div class="dot">
      <div
        v-for="(prop,i) in imgUrl"
        :key="i"
        :class="{active:i===index}"
      ></div>
    </div>
    <!-- 上下指引箭头图标 -->
    <div
      class="arrow-down"
      v-show="index<imgUrl.length-1"
    >
      <Icon :type="'arrowDown'" />
    </div>
    <!-- 上下指引箭头图标 -->
    <div
      class="arrow-up"
      v-show="index>0"
    >
      <Icon :type="'arrowUp'" />
    </div>

    <!-- 图片容器 -->
    <div
      ref="wrapper"
      class="wrapper"
      @transitionend="handlerEnd"
      @mousewheel="handlerRoll"
      :style="{
        height: imgUrl.length * size.height + 'px',
        marginTop: index * -size.height + 'px',
      }"
    >

      <div
        ref="img-item"
        class="img-item"
        :style="{ width: size.width + 'px', height: size.height + 'px' }"
        v-for="(prop, i) in imgUrl"
      >
        <img-load
          @load="canLoad(i)"
          :bigImgUrl="prop.bigImg"
          :noBigImgUrl="prop.noBigImg"
        ></img-load>
        <div class="centece">
          <div
            class="title"
            ref="title"
          >
            {{prop.title}}
          </div>
          <div
            class="d"
            ref="ref"
          >
            {{prop.description}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgLoad from "@/components/ImgLoad/index.vue";
import getBanner from "@/api/banner";
import Icon from "@/components/icon/index.vue";
import lazyLoad from "@/utils/domCX.js";
export default {
  mounted() {
    // 全局窗口改变事件
    window.onresize = this.resize;
    // 获取远程数据banner
    getBanner().then((r) => {
      this.imgUrl = r;
      this.canLoadIndex = new Array(this.imgUrl.length).fill(false);
    });
    // 初始化尺寸
    this.size.width = parseInt(
      getComputedStyle(this.$refs["item-container"]).width
    );
    this.size.height = parseInt(
      getComputedStyle(this.$refs["item-container"]).height
    );
  },
  updated() {
    if (this.imgUrl.length) {
      //获取滚动句子的宽度
      this.titleWidth = parseFloat(
        getComputedStyle(this.$refs["title"][0]).width
      );
      this.refWidth = parseFloat(getComputedStyle(this.$refs["ref"][0]).width);
      this.imgUrl.forEach((item, i) => {
        this.$refs.title[i].classList.add("none");
        this.$refs.ref[i].classList.add("none");
      });
    }
  },
  data() {
    return {
      size: {
        width: "",
        height: "",
      },
      imgUrl: [], //请求改这里
      index: 0,
      continue: true,
      titleWidth: 0,
      refWidth: 0,
      canLoadIndex: [],
      width: "0px",
    };
  },
  components: {
    ImgLoad,
    Icon,
  },
  methods: {
    lazyLoad,
    handlerEnd() {
      this.continue = true;
    },
    resize() {
      this.size = {
        width: parseFloat(getComputedStyle(this.$refs["item-container"]).width),
        height: parseFloat(
          getComputedStyle(this.$refs["item-container"]).height
        ),
      };
    },
    canLoad(i) {
      this.canLoadIndex[i] = true;
      const arr = this.canLoadIndex;
      this.canLoadIndex = arr;
    },
    handlerRoll(e) {
      if (!this.continue) return;
      if (e.deltaY > 0 && this.index + 1 < this.imgUrl.length) {
        this.continue = false;
        this.index =
          this.index + 1 >= this.imgUrl.length - 1
            ? this.imgUrl.length - 1
            : this.index + 1;
      } else if (e.deltaY < 0 && this.index - 1 >= 0) {
        this.continue = false;
        this.index = this.index-- <= 0 ? 0 : this.index--;
      }
    },
  },
  watch: {
    index: {
      handler(a, b) {
        if (!this.canLoadIndex[a]) return;
        this.$refs.ref[a].style.opacity = "1";
        this.$refs.ref[a].style.width = "100%";
        this.$refs.title[a].style.opacity = "1";
        this.$refs.title[a].style.width = "100%";
      },
      immediate: true,
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  },
};
</script>

<style scoped lang="less">
@import "./description.less";
@import "~@/style/mixin/mixin.less";
.home-container {
  width: 100%;
  height: 100%;
}
div.wrapper {
  transition: 0.5s;
  transition-timing-function: cubic-bezier(0, 0.88, 0.55, 0.9);
}
div.dot {
  position: absolute;
  display: flex;
  width: 30px;
  height: 80px;
  flex-direction: column;
  z-index: 100;
  align-items: center;
  justify-content: center;
  .self-center(fixed);
  left: 98%;
}
div.dot div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 5px;
  background: #e5d5d5;
  box-shadow: 0 0 3px 1px pink;
}
div.dot div.active {
  background: pink;
}
div.home-container {
  position: relative;
}
div.arrow-down,
div.arrow-up {
  position: fixed;
  z-index: 100;
  left: 53%;
  font-size: 40px;
  cursor: pointer;
  font-weight: 1000;
  color: #f4eded;
}
div.arrow-down {
  bottom: 30px;
  animation: arrow-down 2s ease 1s infinite normal none;
}
div.arrow-up {
  top: 30px;
  animation: arrow-up 2s ease 1s infinite normal none;
}
@keyframes arrow-down {
  from {
    opacity: 1;
    bottom: 30px;
  }
  to {
    opacity: 0.2;
    bottom: 0px;
  }
}
@keyframes arrow-up {
  from {
    opacity: 1;
    top: 30px;
  }
  to {
    opacity: 0.2;
    top: 0px;
  }
}
div.img-item {
  position: relative;
}
</style>
