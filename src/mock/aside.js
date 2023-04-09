import Mock from "mockjs";
import avatar from "../assets/banner/big1.jpg";
Mock.mock("/api/userInfo", "get", function () {
  return {
    code: 0,
    chat: "",
    data: {
      avatar,
      nickname: "gudua",
      email: "1755179168@qq.com",
      weixin: "18280632051",
      github: "https://github.com/1755179168",
      qq: "511461653534",
    },
  };
});
