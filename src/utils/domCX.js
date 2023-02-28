/**
 * 判断一个元素是否出现在页面上可用于懒加载
 * @param {Number} visibaleArea 元素可见面积0.1表示百分之十
 * @param {Element} element
 */

export default function lazyLoad(element, callback, visibaleArea) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        callback(entry, observer);
        // observer.unobserve(entry.target);
      });
    },
    {
      threshold: visibaleArea,
    }
  );
  observer.observe(element);
}
