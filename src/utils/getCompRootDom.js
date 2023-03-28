import Vue from "vue";
/**
 * 获取组件渲染的根元素
 * @param {Object} comp
 * @param {Object} props
 */
export default function (comp, props) {
  const vm = new Vue({
    render: (h) => h(comp, { props }),
  });
  vm.$mount();
  return vm.$el;
}
