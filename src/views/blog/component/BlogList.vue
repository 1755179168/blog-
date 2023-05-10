<template>
  <div class="blog-list-container">
    <div
      class="title"
      v-if="listData.title!=''"
    >

      {{listData.title}}
    </div>
    <div class="list-prop">
      <ul>
        <li
          class="prop"
          v-for="(prop,index) in listData.list"
          :class="{ selected: index === currentIndex }"
          :key="index"
        >
          <span class="blog">{{ prop.title }}</span><span class="sub">{{ prop.sub }}</span>
          <List
            v-if="prop.children"
            :listData="prop.children"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "List", // <--- class name for this element.  probably a bad idea.  use a different name for this component.  probably not
  props: {
    listData: {
      type: Object,
      require: true,
      default: () => ({}), //default is an empty object, but if you want to make it dynamic, you can use this.foo, but you need
    },
    currentIndex: {
      type: Number,
    },
  },
};
</script>

<style lang="less" scoped>
div.blog-list-container ul li {
  cursor: pointer;
  margin: 15px 0;
}
ul li:hover > span {
  color: #f40;
}
li.selected > span {
  color: #f40;
  font-weight: 1000;
}
div.title {
  font-size: 28px;
  font-weight: 1000;
}
div.list-prop ul li span.blog {
  padding-right: 20px;
}
div.list-prop ul li span {
  font-size: 22px;
}
div.blog-list-container div.blog-list-container {
  padding-left: 20px;
}
</style>
