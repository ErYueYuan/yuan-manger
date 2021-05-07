const path = require('path');

function resovle(params) {
  return path.join(__dirname, params)
}

module.exports = {
  //调整npm build时或者yarn build时的 目录位置
  outputDir: '../server/public/',
  //静态文件打包文件名
  assetsDir: 'assets',
  //指定生成的index.html 的输出路径
  indexPath: 'index.html',
  //默认情况下，生成的静态资源在它们文件中包含的hash值以便于控制缓存
  filenameHashing: true,
  //设置为true时，eslint-loader编译出错时会打印在命令行，而不会编译错误
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    port: 8080, //设置端口号
    open: true, //自动启动系统默认浏览器
    proxy: {
      '/chmobile': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/chmobile': '/'
        }
      }
      }
    },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resovle('src')
      }
    }
  }
}