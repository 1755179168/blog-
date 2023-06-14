<template>
  <div
    class="article-blog-container"
    v-if="article.htmlContent"
    ref="container"
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
          <Bord @submit="submit" />
          <Chat :chatList="chatList" />
          <!-- <div
            class="loading"
            v-show="loading"
            v-loading="loading"
          ></div> -->
        </div>
      </template>
    </Layout>
  </div>
</template>
<script>
import Layout from "@/components/Layout/index.vue";
import BlogList from "./component/BlogList.vue";
import fetchBlog from "@/api/fetchBlogForId";
import { debounce } from "@/utils/debounce";
import Message from "@/components/Message/index.vue";
import { postMessage } from "@/api/message";
import { getMessage } from "@/api/message";
import Chat from "@/views/blog/message.vue";
export default {
  methods: {
    async submit(info, callback) {
      const data = await postMessage(info);
      callback();
      this.chatList.unshift(data);
      this.$message(data.chat, "success");
    },
    botLoad() {
      const elements = Array.from(
        document.querySelectorAll('[id^="article-md-title-"]')
      );
      this.$refs["main"].addEventListener(
        "scroll",
        debounce(() => {
          let elementHeight = this.$refs["main"].scrollHeight;
          let elementClientHeight = this.$refs["main"].clientHeight;
          let elementTop = this.$refs["main"].scrollTop;
          if (
            elementHeight - elementTop - elementClientHeight < 10 &&
            !this.loading
          ) {
            this.loading = true;
            getMessage(Math.floor(this.chatList.length / 10 + 1), 10).then(
              (res) => {
                this.chatList = [...this.chatList, ...res];
                this.loading = false;
              }
            );
          }
          const temporary = [];
          elements.forEach((ele, index, va) => {
            const rect = ele.getBoundingClientRect(); //获取元素的位置信息，包括边界检测和元素自身的位置检测。
            if (rect.top < 200) {
              temporary.push({ ele, index });
            }
          });
          if (elements[temporary.length]) {
            if (elements[temporary.length].getBoundingClientRect().top < 200) {
              this.currentIndex = temporary.length; //如果滚动条到了顶部，则将currentIndex设置为元素数量-1。 		然后如果没有元素在滚动条上，则将currentIndex设置为0。
            } else {
              this.currentIndex = temporary.length - 1;
            }
          } else {
            this.currentIndex = elements.length - 1;
          }
        }, 100)
      );
      const h1 = document.querySelectorAll('h1[id^="article-md-title-"]');
      const h2 = document.querySelectorAll('h2[id^="article-md-title-"]');
      [...h1, ...h2].forEach((ele) => {
        ele.style.textAlign = "center";
        ele.style.fontSize = "30px";
        ele.style.fontWeight = "800"; //It's a CSS property. 	It's a property of the style object. 	It's applied to the element
      });
    },
  },
  components: {
    Layout,
    BlogList,
    Bord: Message,
    Chat,
  }, //attach the layout to the root element. 	It's a Vue component. 		It's
  async created() {
    getMessage().then((r) => {
      this.chatList = r;
    });
    const data = await fetchBlog("id");
    this.article = data;
  },
  data() {
    return {
      article: {},
      currentIndex: 0,
      chatList: [],
      login: false,
      loading: false,
    };
  },
  updated() {
    if (this.login === false) {
      this.login = true;
      this.botLoad();
    }
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
div.content {
  padding-bottom: 30px;
}
.bord-container {
  padding: 20px 0;
}
div.loading {
  width: 100%;
  height: 200px;
}
</style>