import axios from "./";
export default async function (limit = 10, page = 1) {
  return await axios.get("/api/article", {
    params: { limit, page }, //params用于请求的参数，可以是字符串、数字、布尔值、等等。limit用于限制请求的页面数量。
  });
}
