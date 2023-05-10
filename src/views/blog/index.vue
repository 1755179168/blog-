<template>
  <div class="blog-container">
    <Layout>
      <template slot="main"></template>
      <template slot="right">
        <div class="right">
          <blog-list
            :listData="listData"
            :currentIndex="0"
          ></blog-list> <!-- 用于展示分类列表的页面 -->
        </div>
      </template>

    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout/index.vue";
import BlogList from "@/views/blog/component/BlogList.vue"; // <--- This is the default. Just a comment. It will not
export default {
  components: {
    Layout, //页面布局组件
    BlogList,
  },
  data() {
    return {
      listData: {
        title: "My Life", // <--- This is the default. Just a comment. It will not show up.
        list: [
          {
            title: "a",
            sub: "b",
            children: {
              list: [
                {
                  title: "c1",
                  sub: "d0",
                  children: {
                    list: [{ title: "cq", sub: "abc" }],
                  },
                },
              ],
            }, //children是一个数组，数组的元素是一个字符串类型
          },
          {
            title: "c",
            sub: "d",
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/style/mixin/mixin.less";
.blog-container {
  .fill();
}
div.right {
  min-width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>