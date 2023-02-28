import Axios from "axios";
import message from "@/utils/hintMessage/index";
const axios = Axios.create({});
axios.interceptors.response.use(
  (resp) => {
    if (resp.status === 200) {
      if (resp.data.code === 0) {
        return resp.data.data;
      }
      message(resp.data.chat || "请求出错", "error");
      throw new Error("网络请求错误" + resp.data.chat);
    }
    throw new Error("网络请求错误" + resp.statusText);
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default axios;
