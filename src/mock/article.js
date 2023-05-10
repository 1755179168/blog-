import Mock from "mockjs";
const reg = /^\/api\/article+.{1,}/i;
Mock.mock(reg, "get", function () {
  return {
    code: 200,
    chat: "",
    data: {
      date: Mock.Random.now("second"),
      title: Mock.Random.ctitle(3, 8),
      paragraph: Mock.Random.cparagraph(),
      img:
        Math.random() > 0.2
          ? Mock.Random.image("300x200", "skyblue", "pink").replace(/\\/gi, "")
          : "", //
    },
  };
});
