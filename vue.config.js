module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule("tslint")
      .test(/\.ts$/)
      .use("tslint-loader")
      .loader("tslint-loader")
      .end();
    config.plugin("fork-ts-checker").tap(([options]) => {
      return [
        {
          async: false,
          tslint: true,
          vue: true,
          formatter: "codeframe",
        },
      ];
    });
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3001",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
  },
};
