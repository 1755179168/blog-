import Mock from "mockjs";
Mock.mock("/api/category", "get", function () {
  return {
    code: 0,
    //0表示成功，其他值表示失败。 创建者是否有加分项，是否有删除项。 总数是否有加分项，是否有删除项。 数据是否有删除项。 创建者是否有加分项，是否有删除项。总数是否有加分项，是否有删除项。 数据是否有删除项。 创建者是否有加分项，是否有删除项。
    chat: "",
    data: {
      title: "文章总数",
      list: new Array(10).fill(0).map((item, i) => ({
        title: `第${i + 1}分裂`,
        sub: `${Mock.Random.natural(20, 3000)}篇`,
      })),
    },
  };
});
