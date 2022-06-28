// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false
// })
module.exports = {
  assetsDir: "assets",
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/dev-api": {
        target: "http://127.0.0.1:9528",
        // target:process.env.VUE_APP_BASE_URL,//
        pathRewrite: {
          //重写路径
          ws: true,
          changeOrigin: true,
        },
      },
    },
  },
};