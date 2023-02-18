<template>
  <Layout>
    <template v-slot:left>
      <Aside />
    </template>
    <template>
      <div></div>
    </template>
    <template v-slot:right>
      <div
        class="right"
        style="width:200px"
      >

      </div>
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
</style>