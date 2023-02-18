// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   css: {
//     extract: true,
//   },
//   lintOnSave: false,
//   devServer: {
//     hot: true,
//     proxy: {
//       "/api": {
//         target: "http://47.93.37.77:80",
//       },
//     },
//   },
// });

// vue-cli的配置文件
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://47.93.37.77",
      },
      // "/static" : {
      //   target: "http://127.0.0.1:7001"
      // }
    },
  },
  // configureWebpack: require("./webpack.config"),
};
