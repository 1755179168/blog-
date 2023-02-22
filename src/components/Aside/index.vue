<template>
  <div class="aside-container">
    <Avatar
      :url="'http://47.93.37.77/asset_test/noBig1.jpg'"
      :width_avatar="200"
      :height_avatar="200"
    />

    <!-- >  -->

    <h2 class="nickname">abdsfsdaf</h2>
    <div class="menu">
      <MenuItem
        :iconType="'home'"
        :text="'首页'"
        class="active"
      />
      <MenuItem
        :iconType="'blog'"
        :text="'文章'"
      />
      <MenuItem
        :iconType="'about'"
        :text="'关于我'"
      />
      <MenuItem
        :iconType="'project'"
        :text="'项目&效果'"
      />
      <MenuItem
        :iconType="'message'"
        :text="'留言板'"
      />
    </div>
    <div class="info">
      <a :href="'https://github.com/1755179168'">
        <MenuItem
          :iconType="'github'"
          :text="'bangbangji-Edu'"
        />
      </a>
      <a :href="'mailto:'+'132123@qq.com'">
        <MenuItem
          :iconType="'email'"
          :text="'1755179168@qq.com'"
        />
      </a>
      <a :href="'tencent://message/?uni='+'123123123'">
        <MenuItem
          :iconType="'qq'"
          :text="'1755179168'"
        />
      </a>
      <MenuItem
        :iconType="'weixin'"
        :text="'18280632051'"
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
export default {
  components: {
    Avatar,
    MenuItem,
  },
};
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.aside-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: @dark;
  align-items: center;
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
  margin: 30px 0;
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
div.menu div.menu-item-container.active {
  background-color: lighten(@dark, 4.7%);
}
div.menu div.menu-item-container {
  margin: 5px 0;
}
</style>