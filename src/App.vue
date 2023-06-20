<template>
  <Layout>
    <div class="toTop"></div>
    <template v-slot:left>
      <Aside />
    </template>
    <template>

      <router-view></router-view>
    </template>
    <Totop
      :show="show"
      @toTop="toTop"
    />
  </Layout>
</template>

<script>
import Event from "@/event";
import Totop from "@/components/toTop/index.vue";
import Aside from "@/components/Aside/index.vue";
import Layout from "@/components/Layout";
export default {
  mounted() {
    Event.$on("departure", () => {
      this.show = false;
    });
    Event.$on("wrapperScroll", (container) => {
      let scrollTop = container.scrollTop;
      if (scrollTop > 300) {
        this.show = true;
      } else {
        this.show = false;
      }
    });
  },
  methods: {
    toTop() {
      Event.$emit("toTop");
    },
  },

  data() {
    return { show: false };
  },
  components: {
    Layout,
    Aside,
    Totop,
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