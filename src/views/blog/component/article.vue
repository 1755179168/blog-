<template>
  <div class="article-container">
    <img
      v-if="artData.img"
      :src="artData.img"
      alt=""
    >
    <div class="text">
      <a
        href="#"
        class="title"
      >{{artData.title}}</a>
      <div class="blog-info">
        <a
          href="#"
          class="page-view"
        >
          评论：{{artData.comment}}
        </a href="#">
        <a
          href="#"
          class="date"
        >
          日期：{{artData.date}}
        </a href="#">
        <a
          href="#"
          class="page-view"
        >
          浏览：{{artData.pageView}}
        </a href="#">
        <a
          href="#"
          class="page-view"
        >
          分类：{{artData.blogType}}
        </a href="#">
      </div>
      <div class="content">
        {{artData.paragraph}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    artData: {
      type: Object,
      required: true, //required 必须 指示必须创建对象的成员。如果没有传递值，则应
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
div.article-container div.text a:hover {
  color: @primary;
}
.article-container {
  cursor: pointer;
  border-bottom: 1px solid #000;
  display: flex;
  box-sizing: border-box; //padding, border, margin不会影响布局，只是显示不着。这些是页面
  margin: 20px 20px 0 80px;
  padding-bottom: 18px;
  img {
    width: 260px;
    height: 180px;
    border-radius: 8px;
    margin-right: 15px;
  }
}
div.text {
  display: flex;
  flex-direction: column;
  a {
    color: inherit;
  }
  .title {
    font-size: 28px;
    font-weight: 600;
    margin: 15px 0;
    color: @dark;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  div.blog-info a.page-view {
    margin-left: 0;
  }
  div.blog-info a {
    margin: 0 10px;
    font-size: 14px;
    color: @words;
  }

  div.content {
    margin: 18px 0 0 0;
    font-size: 18px;
    line-height: 1.5em;
    color: @dark;
  }
}
</style>