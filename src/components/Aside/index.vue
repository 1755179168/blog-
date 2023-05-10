<template>
  <div class="aside-container">
    <Avatar
      :url="userInfo.avatar"
      :size="200"
    />

    <!-- >  -->

    <h2 class="nickname">{{userInfo.nickname}}</h2>
    <div class="menu">
      <router-link
        to="/"
        exact-active-class="active "
      >
        <MenuItem
          :iconType="'home'"
          :text="'首页'"
          class="active"
        />
      </router-link>
      <router-link
        to="/blog"
        active-class="active"
      >
        <MenuItem
          :iconType="'blog'"
          :text="'文章'"
        />
      </router-link>
      <router-link
        to="/about"
        exact-active-class="active"
      >
        <MenuItem
          :iconType="'about'"
          :text="'关于我'"
        />
      </router-link>
      <router-link
        to="/project"
        exact-active-class="active"
      >
        <MenuItem
          :iconType="'project'"
          :text="'项目&效果'"
        />
      </router-link>
      <router-link
        to="/chat"
        exact-active-class="active"
      >
        <MenuItem
          :iconType="'message'"
          :text="'留言板'"
        />
      </router-link>
    </div>
    <div class="info">
      <a :href="userInfo.github">
        <MenuItem
          :iconType="'github'"
          :text="'bangbangji-Edu'"
        />
      </a>
      <a :href="'mailto:'+userInfo.email">
        <MenuItem
          :iconType="'email'"
          :text="userInfo.email"
        />
      </a>
      <a :href="'tencent://message/?uni='+userInfo.qq">
        <MenuItem
          :iconType="'qq'"
          :text="userInfo.qq"
        />
      </a>
      <MenuItem
        :iconType="'weixin'"
        :text="userInfo.weixin"
      />
    </div>
    <div class="register">
      川IPC备5312146号
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/avatar/index.vue";
import MenuItem from "@/components/MenuItem/index.vue";
import userInfo from "@/api/userInfo.js";
export default {
  components: {
    Avatar,
    MenuItem,
  },
  created() {
    userInfo().then((r) => {
      this.userInfo = r;
    });
  },
  data() {
    return {
      userInfo: {},
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.aside-container {
  width: 230px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: @dark;
  align-items: center;
}
div.avatar {
  width: 200px;
  height: 200px;
}
.nickname {
  color: @Hword;

  font-size: 28px;
  margin: 25px 0;
}
div.menu {
  width: 100%;
}
div.avatar-container {
  margin: 50px 0;
}
div.info {
  width: 100%;
  margin: 30px 0 30px -18px;
}
div.info div.menu-item-container {
  padding-left: 20px;
  margin-right: 10px;
}
div.info div.menu-item-container:hover {
  background-color: transparent;
  color: @primary;
}
div.register {
  font-size: 14px;
  color: @words;
}
div.menu a.active div.menu-item-container {
  background-color: lighten(@dark, 4.7%);
}
div.menu-item-container {
  transition: 0.5s;
}
div.menu div.menu-item-container {
  margin: 5px 0;
}
</style>