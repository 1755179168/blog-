//1.需要有处理事件的方法（）
//2.需要有监听事件的方法
//3.需要有解除事件的方法
//4. 需要有传递数据的方法
//
const listeners = {};
const event = {
  $on(eventName, func) {
    if (!listeners[eventName]) {
      listeners[eventName] = [];
    }
    for (const callback of listeners[eventName]) {
      if (callback.name === func.name) {
        return;
      }
    }
    listeners[eventName].push(func);
  },
  $emit(eventName, ...args) {
    if (!listeners[eventName]) {
      return;
    }
    for (const callback of listeners[eventName]) {
      callback(...args);
    }
  },
  $off(eventName, func) {
    if (!listeners[eventName]) {
      return;
    }
    listeners[eventName] = listeners[eventName].filter(
      (callback) => callback !== func
    );
  },
};
export default event;
