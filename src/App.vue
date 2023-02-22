<template>
  <Layout>
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
console.log(Aside);

export default {
  components: {
    Layout,
    Aside,
  },
};
</script>

<style scoped>
</style>