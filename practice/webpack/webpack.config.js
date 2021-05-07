let htmlwebpackplugin = require('html-webpack-plugin');//
let path = require('path');
module.exports = {
  mode:'development',//模式
  entry:'./src/index.js',//输入文件路径
  outpt:{
    'filename':'buld.js',
    'path':path.resolve(__dirname,'dist'),//输出文件
  },
  plugins:{
    new htmlwebpackplugin({
    })
  },
  module:{
    rules:[
      {
        test:/\.css/,
        use:['style-css']
      },
      {
        test:/\.js/,
        use:[]
      }
    ]
  }
  
}