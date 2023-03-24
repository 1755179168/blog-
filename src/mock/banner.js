import Mock from "mockjs";
//注释
Mock.mock("/api/banner", "get", function () {
  return {
    code: 0,
    chat: "",
    data: [
      {
        bigImg: "http://47.93.37.77/asset_test/big1.jpg",
        noBigImg: "http://47.93.37.77/asset_test/noBig1.jpg",
        description:
          "伤口就像我一样，是个倔强的孩子，不肯愈合，因为内心是温暖潮湿的地方，适合任何东西生长。",
        title: "一个人一生可以爱上很多的人",
      },
      {
        bigImg: "http://47.93.37.77/asset_test/big2.jpg",
        noBigImg: "http://47.93.37.77/asset_test/noBig2.jpg",
        description:
          "我就像现在一样看着你微笑，沉默，得意，失落，于是我跟着你开心也跟着你难过，只是我一直站在现在而你却永远停留过去。",
        title: "大睡懒觉了房间",
      },
      {
        bigImg: "http://47.93.37.77/asset_test/big3.jpg",
        noBigImg: "http://47.93.37.77/asset_test/noBig3.jpg",
        description:
          "不走路，才不会摔倒;不航行，才没有危险。但船离开了大海，也就没有了存在的价值。",
        title: "友谊就好像传说中的海怪",
      },
    ],
  };
});
