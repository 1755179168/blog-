<template>
  <Layout>
    <div class="toTop"></div>
    <template v-slot:left>
      <Aside />
    </template>
    <template>

      <router-view></router-view>
    </template>
  </Layout>
</template>

<script>
import Aside from "@/components/Aside/index.vue";
import Layout from "@/components/Layout";

export default {
  components: {
    Layout,
    Aside,
  },
};
</script>

<style scoped>
div.layout-container {
  position: relative;
}
div.toTop {
  /* position: fix; */
}
</style>