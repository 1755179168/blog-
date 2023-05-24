import url from "@/assets/loading.gif";
export default function () {
  return {
    bind(el, binding) {
      const pos = binding.arg || "absolute";
      const img = document.createElement("img");
      img.src = url;
      img.height = "200";
      img.width = "200";
      img.style.position = pos;
      img.style.left = "50%";
      img.style.top = "50%";
      img.style.transform = "translate(-50%,-50%)";
      img.className = "vloading";
      el.appendChild(img);
    },
    inserted(el, binding) {
      let pos = getComputedStyle(el).position;
      el.style.position = pos === "static" ? "relative" : pos;
      const img = el.querySelector(".vloading");
      if (!binding.value) {
        img.style.display = "none";
      } else {
        img.style.display = "block";
      }
    },
    update(el, binding) {
      const img = el.querySelector(".vloading");
      if (!binding.value) {
        img.style.display = "none";
      } else {
        img.style.display = "block";
      }
    },
  };
}
