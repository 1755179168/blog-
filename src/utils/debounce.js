/**
 *
 * @param {Function} fnc 执行的回调
 * @param {Number} timer 时间
 *  @return Function
 */
export function debounce(fnc, timer) {
  let time = null;
  return function (...arg) {
    if (time) clearTimeout(time);
    time = setTimeout(() => {
      time = null;
      fnc(...arg);
    }, timer);
  };
}

export function throttle(fnc, timer) {
  let time = null;
  return function (...arg) {
    if (!time) {
      fnc(...arg);
      time = setTimeout(() => {
        time = null;
      }, timer);
    }
  };
}
