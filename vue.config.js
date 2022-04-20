const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/AtaskVue/" : "/",

  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          data: `
          @import "~@/assets/styles/global/_index.scss";
          `,
        }
      },
    },
  },
};
