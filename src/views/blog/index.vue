<template>
  <div class="blog-container">
    <Layout>
      <template>
        <div class="wrapper">
          <div class="blog">
            <Article
              :artData="prop"
              v-for="(prop,i) in artData.blog"
            />
          </div>
          <Page
            v-if="artData.total"
            :currentPage="artData.current"
            :pageSize="artData.limit"
            :total="artData.total"
            @pageChange="handler"
          />
        </div>
      </template>
      <template slot="right">
        <div class="right">
          <blog-list
            :listData="listData"
            :currentIndex="currentPage"
          ></blog-list> <!-- 用于展示分类列表的页面 -->
        </div>
      </template>

    </Layout>
  </div>
</template>

<script>
import getBlog from "@/api/blog"; // importar el nombre del módulo a utilizar, el cual es el que se pone en el at
import Article from "@/views/blog/component/article.vue";
import Page from "@/components/page/index.vue";
import Layout from "@/components/Layout/index.vue";
import BlogList from "@/views/blog/component/BlogList.vue"; // <--- This is the default. Just a comment. It will not

export default {
  components: {
    Layout, //页面布局组件
    BlogList,
    Article,
    Page,
  },
  data() {
    return {
      currentPage: 1,
      artData: {},
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
  async created() {
    this.artData = await getBlog(); // <--- This is the default. Just a comment. It will not show up.
  },
  methods: {
    async handler(e) {
      const data = await getBlog(10, e);
      this.artData = data;
      this.currentPage = e;
    },
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
div.wrapper {
  overflow-y: scroll;
  height: 100%;
  width: 100%;
}

div.blog {
  padding: 0 0 20px 0;
}
</style>