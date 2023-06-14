<template>
  <div
    class="chat-container"
    v-if="chatList.length"
  >
    <div class="title">
      {{title}}
    </div>
    <div
      class="chat"
      v-for="(prop,i) in chatList"
      :key="i"
    >
      <Avatar
        :url="prop.url"
        :size="40"
      />
      <div class="text">
        <div class="userinfo">{{prop.nickName}}</div>
        <div class="userText">{{prop.text}}</div>
      </div>
    </div>
    <!-- <V /> -->
  </div>
</template>

<script>
import Avatar from "@/components/avatar/index.vue";
export default {
  components: {
    Avatar,
  },
  props: {
    title: {
      type: String,
      default: "评论区",
    },
    chatList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.chat-container {
  .title {
    font: normal 800 20px/1.5 "", "";
    margin: 10px 0px;
  }
  div.chat {
    display: flex;
    div.avatar-container {
      flex: 0 0 40px;
      margin: 10px 10px 0 0;
    }
  }
}
div.text div.userinfo {
  color: @success;
  font-weight: 500;
  padding: 5px 0;
  font-size: 18px;
}
div.text div.userText {
  color: @words;
  font-size: 15px;
  line-height: 1.3em;
  //
}
div.chat {
  padding: 20px 0;
  border-bottom: 1px solid @gray;
}
</style>