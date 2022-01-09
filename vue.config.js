// eslint-disable-next-line @typescript-eslint/no-var-requires
// const webpack = require('webpack')

// eslint-disable-next-line @typescript-eslint/no-var-requires
// process.env.VUE_APP_VERSION = require('./package.json').version

const isDev = process.env.NODE_ENV !== 'production'

const config = {
  lintOnSave: isDev,
  runtimeCompiler: true,
  // devServer: {
  //   port: process.env.PORT || 3001,
  //   contentBasePublicPath: process.env.PUBLIC_PATH,
  //   proxy: {
  //     [process.env.API_PATH + '/*']: { target: process.env.API_HOST, secure: false, pathRewrite: { '^/api': '' } },
  //   },
  //   compress: true,
  //   watchOptions: {
  //     ignored: ['node_modules'],
  //     aggregateTimeout: 1000,
  //     poll: 1500,
  //   },
  //   public: process.env.PUBLIC_URL, // url для проброса сервера во внешнюю сеть (нужен для разработки)
  // },

  css: { extract: true },

  // configureWebpack: {
  //   devtool: 'source-map',
  //   plugins: [
  //     new webpack.DefinePlugin({
  //       'process.env': {
  //         API_URL: JSON.stringify(process.env.API_PATH),
  //       },
  //     }),
  //   ],
  //   output: {
  //     filename: isDev ? '[name].[hash:8].js' : '[name].[contenthash:8].js',
  //     chunkFilename: isDev ? '[name].js' : '[name].[contenthash:8].js',
  //   },
  //   resolve: {
  //     extensions: ['.ts', '.js', '.vue', '.json'],
  //   },
  // },

  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //     .use('url-loader')
  //     .tap(options => {
  //       options.publicPath = process.env.PUBLIC_PATH
  //       options.limit = 5000
  //       return options
  //     })
  //
  //   config.module
  //     .rule('svg')
  //     .use('file-loader')
  //     .tap(options => {
  //       options.publicPath = process.env.PUBLIC_PATH
  //       return options
  //     })
  // },

  // pwa: {
  //   name: process.env.VUE_APP_TITLE,
  //   themeColor: '#3276b1',
  //   msTileColor: '#3276b1',
  //   manifestOptions: {
  //     background_color: '#f8f8f8',
  //   },
  // },
}

module.exports = config
