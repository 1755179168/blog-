<template>
  <div
    class="article-blog-container"
    v-if="article.htmlContent"
  >
    <Layout>
      <template slot="right">
        <div class="bloglist"><blog-list
            :listData="{list:article.toc,title:''}"
            :currentIndex="currentIndex"
          ></blog-list></div>
      </template>
      <template>
        <div
          class="main"
          ref="main"
        >
          <h1>{{article.title}}</h1>
          <div class="blog">
            <div class="page-vivew">
            </div>
            <div
              class="content"
              v-html="article.htmlContent"
            >
            </div>
          </div>
        </div>
      </template>
    </Layout>
  </div>
</template>
<script>
import Layout from "@/components/Layout/index.vue";
import BlogList from "./component/BlogList.vue";
import fetchBlog from "@/api/fetchBlogForId";
import debouce from "@/utils/";
export default {
  components: {
    Layout,
    BlogList,
  }, //attach the layout to the root element. 	It's a Vue component. 		It's
  async created() {
    const data = await fetchBlog("id");
    this.article = data;
  },
  data() {
    return {
      article: {},
      currentIndex: 0,
    };
  },
  updated() {
    this.$refs["main"].addEventListener("scroll", () => {
      console.log(111);
    });
    const h1 = document.querySelectorAll('h1[id^="article-md-title-"]');
    const h2 = document.querySelectorAll('h2[id^="article-md-title-"]');
    [...h1, ...h2].forEach((ele) => {
      ele.style.textAlign = "center";
      ele.style.fontSize = "30px";
      ele.style.fontWeight = "800"; //It's a CSS property. 	It's a property of the style object. 	It's applied to the element
    });
  },
};
</script>

<style lang="less" scoped>
@import url("~@/style/mixin/mixin.less");
.article-blog-container {
  .fill();
  box-sizing: border-box;
  overflow-x: hidden;

  h1 {
    text-align: center;
    margin: 20px 0;
    font-size: 28px;
    font-weight: 1000;
  }
  margin: 0 30px; //to make the content area to be flush with the top of the page. 		It's a style rule. 		It's a
  div.bloglist {
    width: 280px;
    margin: 100px 0 0 30px;
  }
  div.main {
    .fill();
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
  div.blog {
    text-decoration: 2em;
    div.content h1[id^="article-md-title-"] {
      text-align: center;
      font-weight: 1000;
      font-size: 20px;
    }
  }
}
</style>