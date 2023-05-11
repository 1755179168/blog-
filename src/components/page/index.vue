<template>
  <div
    class="pager-container"
    v-if="show"
    @click="handlerChangePage"
  >
    <span class="home">首页</span>
    <span class="pre">上一页</span>
    <span
      :class="{active:prop=== currentPage}"
      class="prop"
      v-for="(prop,i) in pageItem"
      :key="i"
      v-show="typeof prop==='number'"
    >{{prop}}</span>
    <span class="next">下一页</span>
    <span class="last">尾页</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalPage: Math.ceil(this.total / this.pageSize),
    };
  },
  methods: {
    handlerChangePage(e) {
      let changePage;
      if (e.target.tagName === "SPAN") {
        const newPage = e.target.innerText;
        if (newPage === "首页") {
          changePage = 1;
        } else if (newPage === "上一页") {
          changePage = this.currentPage - 1 < 1 ? 1 : this.currentPage - 1;
        } else if (newPage === "尾页") {
          changePage = this.totalPage;
        } else if (newPage === "下一页") {
          changePage =
            this.currentPage + 1 > this.totalPage
              ? this.totalPage
              : this.totalPage + 1;
        } else {
          changePage = Number(newPage);
        }
        this.currentPage !== changePage
          ? this.$emit("pageChange", changePage)
          : "";
      }
    },
  },
  computed: {
    show() {
      if (this.totalPage !== 1) {
        return true;
      }
      if (this.totalPage === 1 && this.visibalOfOne === true) {
        return true;
      }
      if (this.totalPage === 1 && this.visibalOfOne === false) {
        return false;
      }
    },
    pageItem() {
      let pageArr = new Array(this.pageSize);
      let btnN = {};
      this.pageSize % 2 === 0
        ? (btnN = {
            leftBtn: this.pageSize / 2 - 1,
            rightBtn: this.pageSize / 2,
          })
        : (btnN = {
            leftBtn: Math.floor(this.pageSize / 2),
            rightBtn: Math.floor(this.pageSize / 2),
          });
      let indexOfPageArr = 0;
      for (
        let i = this.currentPage - btnN.leftBtn;
        i <= this.currentPage + btnN.rightBtn;
        i++
      ) {
        if (i < 1) {
          btnN.rightBtn++;
          continue;
        }
        if (i > this.totalPage) {
          break;
        }
        pageArr[indexOfPageArr] = i;
        indexOfPageArr++;
      }
      return pageArr;
    },
  },
  props: {
    background: {
      type: Boolean,
      default: false,
    },
    pageSize: {
      type: Number,
      default: 6,
    },
    total: {
      type: Number,
      default: 1000,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    visibalOfOne: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less">
@import "./pager.module.less";
</style>