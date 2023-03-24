import Mock from "mockjs";
Mock.mock("/api/getUserInfo", "post", function () {
  return {
    code: 200,
    chat: "",
  };
});
