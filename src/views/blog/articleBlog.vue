<template>
  <div
    class="article-blog-container"
    v-html="data.htmlContent"
  >

  </div>
</template>

<script>
import fetchBlog from "@/api/fetchBlogForId";
export default {
  async created() {
    const data = await fetchBlog("id");
    this.data = data;
  },
  data() {
    return {
      data: {},
    };
  },
};
</script>

<style>
</style>