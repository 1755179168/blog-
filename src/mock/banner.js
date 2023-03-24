import Mock from "mockjs";
import big1Img from "../assets/banner/big1.jpg";
import noBig1Img from "../assets/banner/noBig1.jpg";
import big2Img from "../assets/banner/big2.jpg";
import noBig2Img from "../assets/banner/noBig2.jpg";
import big3Img from "../assets/banner/big3.jpg";
import noBig3Img from "../assets/banner/noBig3.jpg";
Mock.mock("/api/banner", "get", function () {
  return {
    code: 0,
    chat: "",
    data: [
      {
        bigImg: big1Img,
        noBigImg: noBig1Img,
        description:
          "伤口就像我一样，是个倔强的孩子，不肯愈合，因为内心是温暖潮湿的地方，适合任何东西生长。",
        title: "一个人一生可以爱上很多的人",
      },
      {
        bigImg: big2Img,
        noBigImg: noBig2Img,
        description:
          "我就像现在一样看着你微笑，沉默，得意，失落，于是我跟着你开心也跟着你难过，只是我一直站在现在而你却永远停留过去。",
        title: "大睡懒觉了房间",
      },
      {
        bigImg: big3Img,
        noBigImg: noBig3Img,
        description:
          "不走路，才不会摔倒;不航行，才没有危险。但船离开了大海，也就没有了存在的价值。",
        title: "友谊就好像传说中的海怪",
      },
    ],
  };
});
