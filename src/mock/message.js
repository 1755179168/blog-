import Mock from "mockjs";

Mock.mock("/api/message", "post", function (option) {
  return {
    code: 0,
    chat: "",
    data: {
      chat: "提交成功！",
      date: new Date("T"),
      ...JSON.parse(option.body),
      url: Mock.Random.pick([
        Mock.Random.image("260x180", "#ffc0cb", "#f40", "image"),
        Mock.Random.image("260x180", "#ffe0cb", "#f40", "image2"),
        Mock.Random.image("260x180", "#ffg0cb", "#f40", "image3"),
        Mock.Random.image("260x180", "#ffa0cb", "#f40", "image4"),
      ]),
      praise: 0,
    },
  };
});
const reg = /^\/api\/message\?(.+)$/;
Mock.mock(reg, "get", function (option) {
  return {
    code: 0,
    chat: "",
    data: new Array(10).fill(0).map(() => ({
      text: Mock.Random.cparagraph(2, 20),
      date: Mock.Random.now("week"),
      url: Mock.Random.pick([
        Mock.Random.image("260x180", "#ffc0cb", "#f40", "image"),
        Mock.Random.image("260x180", "#ffe0cb", "#f40", "image2"),
        Mock.Random.image("260x180", "#ffg0cb", "#f40", "image3"),
        Mock.Random.image("260x180", "#ffa0cb", "#f40", "image4"),
      ]),
      nickName: Mock.Random.cname(), //随机生成一个nick名,可以自己随机生成或写入自己的名字
      praise: Mock.Random.natural(20, 1000),
      total: Mock.Random.natural(0, 1000), //记录总数，可以自己调用来产生随机数生成器，
    })),
  };
}); //匹配匹配的请求地址以/api/message开头的请求，并执行
