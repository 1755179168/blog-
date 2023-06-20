import Loading from "../assets/loading.gif";
import Event from "@/event";
const ele = [];

export default function () {
  return {
    bind(el, binding) {
      ele.push(el);
    },
    inserted(el, binding) {
      console.lg(el);
    },
    update(el, binding) {
      console.lg(el);
    },
  };
}
