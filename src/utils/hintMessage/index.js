import style from "./hintMessage.module.less";
import getCompRootDom from "../getCompRootDom";
import Icon from "@/components/icon";
/**
 * 消息提示插件
 * @param {string} hintText
 * @param {string} type 图标类型可选值：success、error、warn、info
 * @param {Dom} container
 */
export default function (
  hintText,
  type = "success",
  container = document.body,
  duration = 2
) {
  const div = document.createElement("div");
  div.className = style["message-container"];
  div.classList.add(style["message-container-" + type]);
  const span = document.createElement("span");

  div.appendChild(getCompRootDom(Icon, { type }));
  span.className = style["text"];
  span.innerHTML = hintText;
  div.appendChild(span);
  div.style.transform = "translateY(0px)";
  div.style.transition = "1s";
  getComputedStyle(container).position === "static"
    ? (container.style.position = "relative")
    : "";
  setTimeout(() => {
    div.style.transform = "translateY(-45px)";
    setTimeout(() => {
      div.style.transform = "translateY(-100px)";
      div.style.opacity = 0;
      div.addEventListener("transitionend", () => {
        div.style.display = "none";
        div.remove();
      });
    }, duration * 1000);
  }, 0);
  container.appendChild(div);
}
