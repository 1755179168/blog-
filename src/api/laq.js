import axios from "axios";
let baseURL = "";
if (process.env.NODE_ENV == "development") {
  baseURL = "";
} else {
  baseURL = "";
}
const $http = axios.create({
  baseURL,
});
// create 是axios自带的方法
//$http拥有axios的get和post方法
// 添加请求拦截器,在请求头中加token
$http.interceptors.request.use(
  (config) => {
    //console.log(this.$store.state.user.Authorization);
    if (sessionStorage.getItem("Authorization")) {
      config.headers.token = sessionStorage.getItem("Authorization");
    }
    //if(this.$store.state.user.Authorization){//去vuex全局作用域找
    //config.headers.token=store.state.user.Authorization;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//在 response 拦截器实现
$http.interceptors.response.use(
  (res) => {
    const status = res.data.code;
    //如果是未登录
    if (status == 401 || status == "401") {
      app.$alert("登录已超时,请重新登录", "提示", {
        confirmButtonText: "确定",
        type: "warning",
        closeOnClickModal: false,
        callback: (action) => {
          app.$router.push("/login");
          return;
        },
      });
    }
    // if(status=-'10010'){
    //
    app.$router.push("/login");
    ////window.location.href="http://localhost:8080"
    // }
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
