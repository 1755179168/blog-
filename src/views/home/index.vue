<template>
  <div
    class="home-container"
    ref="item-container"
    v-loading="loading"
  >
    <!-- 侧边小圆点 -->
    <div class="dot">
      <div
        v-for="(prop, i) in fetchData"
        :key="i"
        :class="{ active: i === index }"
      ></div>
    </div>
    <!-- 上下指引箭头图标 -->
    <div
      class="arrow-down"
      v-show="index < fetchData.length - 1"
    >
      <Icon :type="'arrowDown'" />
    </div>
    <!-- 上下指引箭头图标 -->
    <div
      class="arrow-up"
      v-show="index > 0"
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
        height: fetchData.length * size.height + 'px',
        marginTop: index * -size.height + 'px',
      }"
    >
      <div
        ref="img-item"
        class="img-item"
        @mousemove="handlerMove"
        <<<<<<<
        HEAD
        :style="{ width: size.width + 'px', height: size.height + 'px' }"
        v-for="(prop, i) in imgUrl"=======:style="{
          width: size.width + 'px',
          height: size.height + 'px',
          left: left + 'px',
          zIndex: index === i ? 1000 : -1,
          top: i * size.height + top + 'px', // 垂直对齐，居中显示。 (0.1 / 2 = 0.5) / 2 = 0.5 / 1 = 0
        }"
        v-for="(prop, i) in fetchData"
      >>>>>>> qiu-dev
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
            {{ prop.title }}
          </div>
          <div
            class="d"
            ref="ref"
          >
            {{ prop.description }}
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
import mixins from "@/mixins/mixins.js";
export default {
  computed: {
    position() {
      this.left = (this.size.width * 0.1) / 2;
      this.top = (this.size.height * 0.1) / 2;
    },
  },
  mounted() {
    // 全局窗口改变事件
    window.onresize = this.resize;
    // 获取远程数据banner
    getBanner().then((r) => {
      this.fetchData = r;
    });
    // 初始化尺寸
    this.size.width = parseInt(
      getComputedStyle(this.$refs["item-container"]).width
    );
    this.size.height = parseInt(
      getComputedStyle(this.$refs["item-container"]).height
    );
    this.currentLeft = (this.size.width * 0.1) / 2;
    this.currentTop = (this.size.height * 0.1) / 2; // 设置游戏区域中心点的位置 （
  },
  updated() {
    if (this.fetchData.length) {
      //获取滚动句子的宽度
      this.titleWidth = parseFloat(
        getComputedStyle(this.$refs["title"][0]).width
      );
      this.refWidth = parseFloat(getComputedStyle(this.$refs["ref"][0]).width);
      this.fetchData.forEach((item, i) => {
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
      index: 0,
      continue: true,
      titleWidth: 0,
      refWidth: 0,
      width: "0px",
      left: 0,
      top: 0,
      currentLeft: 0,
      currentTop: 0,
    };
  },
  mixins: [mixins([])],
  components: {
    ImgLoad,
    Icon,
  },
  methods: {
    handlerMove(e) {
      // console.log(e.movementX, e.movementY);
      // if (Math.abs(this.top + e.movementY) >= this.currentTop) {
      //   if (e.movementY > 0) {
      //     this.top = this.currentTop;
      //   } else {
      //     this.top = -this.currentTop;
      //   }
      // } else {
      // }
      // this.top = this.top + e.movementY; //移动距离 顶部的距离 下移动距离 上移
      // this.left = this.left + e.movementX; //移动距离 左上角的距离
      if (e.movementY >= 0) {
        if (this.top + 1 >= this.currentTop) {
          this.top = this.currentTop;
        }
        this.top = this.top + 1; //移动距离 顶部的距离 下移动距离 上移
      } else {
        if (this.top - 1 <= -this.currentTop) {
          this.top = -this.currentTop;
        }
        this.top = this.top - 1; //移动距离 顶部的距离 下移动距离 上移
      }
      if (e.movementX >= 0) {
        if (this.left + 1 >= this.currentLeft) {
          this.left = this.currentLeft;
        }
        this.left = this.left + 1; //移动距离 顶部的距离 下移动距离 上移
      } else {
        if (this.left - 1 <= -this.currentLeft) {
          this.left = -this.currentLeft;
        }
        this.left = this.left - 1; //移动距离 顶部的距离 下移动距离 上移
      }
    },
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
      if (i === 0) {
        this.loading = false;
        this.$refs.title[0].ontransitionend = () => {
          this.$refs.ref[0].style.opacity = "1";
          this.$refs.ref[0].style.width = "100%";
        };
        this.$refs.title[0].style.opacity = "1";
        this.$refs.title[0].style.width = "100%";
      }
    },
    handlerRoll(e) {
      if (!this.continue) return;
      if (e.deltaY > 0 && this.index + 1 < this.fetchData.length) {
        this.continue = false;
        this.index =
          this.index + 1 >= this.fetchData.length - 1
            ? this.fetchData.length - 1
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
        if (!this.$refs.title) return;
        this.$refs.title[a].ontransitionend = () => {
          this.$refs.ref[a].style.opacity = "1";
          this.$refs.ref[a].style.width = "100%";
        };
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
  .fill();
}
div.wrapper {
  transition: 0.5s;
  transition-timing-function: cubic-bezier(0, 0.88, 0.55, 0.9);
  // overflow: hidden;
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
  width: 100%;
  height: 100%;
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
  position: absolute;
  transform: scale(1.1, 1.1);
}
div.centece {
  transform: scale(0.9, 0.9);
}
</style>
