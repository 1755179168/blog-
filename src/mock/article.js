import Mock from "mockjs";
import Query from "qs";
const reg = /^\/api\/article+.{1,}$/i;
Mock.mock(reg, "get", function (option) {
  const param = Query.parse(option.url.slice(option.url.indexOf("?") + 1));
  return {
    code: 0,
    chat: "",
    data: {
      total: 12321,
      current: +param.page,
      limit: +param.limit,
      blog: new Array(10).fill(0).map(() => ({
        date: Mock.Random.now("second"),
        title: Mock.Random.ctitle(3, 8),
        paragraph: Mock.Random.cparagraph(),
        pageView: Mock.Random.natural(1, 1000), // 发布次数或阅读次数的整数随机数，也称为页
        comment: Mock.Random.natural(1, 300),
        blogType: Mock.Random.natural(1, 10),
        img:
          Math.random() > 0.2
            ? Mock.Random.image("260x180", "#ffc0cb", "#f40", "image").replace(
                /\\/gi,
                ""
              )
            : "", //
      })),
    },
  };
});
