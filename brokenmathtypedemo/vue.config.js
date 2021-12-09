// eslint-disable-next-line @typescript-eslint/no-var-requires
const StyleLintPlugin = require('stylelint-webpack-plugin');

const host = process.env.VUE_APP_ADMIN_WEB_HOST || '0.0.0.0';
const port = process.env.VUE_APP_ADMIN_WEB_PORT || 8080;

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}'],
      }),
    ],
    module: {},
  },
  lintOnSave: false,
  devServer: {
    host,
    port,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: ` 
          @import "~@/assets/scss/config.scss";
          @import "~@/assets/scss/contents/_buefy_overrides.scss";
        `,
      },
    },
  },
};
