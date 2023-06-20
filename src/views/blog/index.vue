<template>
  <div class="blog-container">
    <Layout>
      <template>
        <div
          class="wrapper"
          ref="blogContainer"
        >
          <div
            v-if="artData.total"
            class="blog"
            v-loading:[pos]="underway"
          >
            <Article
              :artData="prop"
              v-for="(prop, i) in artData.blog"
              :data-classify="prop.classify"
              :data-uuid="prop.blogUuid"
              :key="i"
              @fetchBlog="fetchBlog"
              v-lazy="$refs['wrapper']"
              ref="wrapper"
            />
          </div>
          <Empty
            :description="'没有数据咯！'"
            v-if="!underway &&!artData.total"
          />
          <Page
            v-if="artData.total"
            :currentPage="routerPage"
            :pageSize="limit"
            :total="artData.total"
            @pageChange="handler"
          />
        </div>
      </template>
      <template slot="right">
        <div class="right">
          <blog-list
            :listData="listData"
            :currentIndex="+$route.query.category-1 || -1"
            @categoryClick="handlerClickCategory"
          ></blog-list>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import getBlog from "@/api/blog"; // importar el nombre del módulo a utilizar, el cual es el que se pone en el at
import Event from "@/event";
import Article from "@/views/blog/component/article.vue";
import Page from "@/components/page/index.vue";
import Layout from "@/components/Layout/index.vue";
import BlogList from "@/views/blog/component/BlogList.vue"; // <--- This is the default. Just a comment. It will not
import Empty from "@/components/Empty/index.vue"; // This is a comment. It will not be parsed as a component. It can be a method or a component.
import getCategory from "@/api/blogList.js";
export default {
  components: {
    Layout, //页面布局组件
    BlogList,
    Article,
    Page,
    Empty,
  },
  data() {
    return {
      artData: {},
      pos: "fixed",
      limit: 10,
      category: -1,
      underway: false,
      listData: {},
    };
  },
  created() {
    getCategory().then((r) => {
      this.listData = r; // data de la peticiosa a la api, data es un objeto. data.data es un
    });
    getBlog(this.limit, this.routerPage).then((r) => {
      this.artData = r;
    }); // <--- This is the default. Just a comment. It will not show up.
  },
  methods: {
    /**
     * 处理分页组件的函数
     */
    handler(e) {
      this.getDate(e, this.$route.query.category || -1);
    },
    /**
     * 根据参数请求数据
     * @param {} page -第几页的数据
     * @param {} category -分类id
     * @param {} limit
     */
    async getDate(page = 1, category = -1, limit = 10) {
      if (this.underway) return;
      this.underway = true; //正在进行分页请求
      const data = await getBlog(limit, page, category);
      this.$router.push(
        `/blog?page=${page}&category=${category}&limit=${limit}`
      );
      this.artData = data;
      this.underway = false; //Fin de la peticiosa a la api, data es un objeto. data.data es un objeto. data.data
    },
    wrapperScroll() {
      Event.$emit("wrapperScroll", this.$refs.blogContainer);
    },
    handlerClickCategory(title, sub) {
      const categoryId = (title + sub).match(/\d+/g);
      this.getDate(1, categoryId[0]);
    },
    async fetchBlog(id) {
      this.$router.push({
        name: "blogId",
        params: {
          article: id,
        },
      });
    },
  },
  computed: {
    routerPage() {
      if (!this.$route.query.page) {
        return 1; //如果没有query参数，则默认从第一页开始计算页码。
      }
      if (this.artData.total && +this.$route.query.page > this.artData.total) {
        this.$router.push(
          `/blog?page=${this.artData.total}&limit=${this.limit}`
        );
        return this.artData.total; //如果页码大于总页码，则默认从总页码开始计算页码。
      } else {
        return +this.$route.query.page;
      }
    },
  },
  // watch: {
  //   [this.$route.params]:{

  //   }
  // }
  mounted() {
    this.$refs["blogContainer"].addEventListener("scroll", this.wrapperScroll);
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
  padding-top: 20px;
}
div.wrapper {
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
}

div.blog {
  padding: 0 0 20px 0;
}
</style>
