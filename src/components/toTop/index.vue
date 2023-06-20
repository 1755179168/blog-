<template>
  <div
    class="toTop-container"
    v-if="show"
    @click="$emit('toTop')"
  >
    <Icon :type="'toTop'" />
  </div>
</template>

<script>
import Icon from "@/components/icon/index.vue";
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  //计算属性
  computed: {},
  //钩子
  created() {},
  methods: {},
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
div.toTop-container {
  width: 80px;
  height: 80px;
  position: fixed;
  right: 30px;
  bottom: 80px;
  cursor: pointer;
  font-size: 80px;
  color: rgb(4, 157, 238);
}
</style>