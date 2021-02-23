let htmlplugin = require('html-webpack-plugin');//
let path = reuqire('path');
module.exports = {
  mode:'development',//模式
  entry:'./src/index.js',//输入文件路径
  outpt:{
    'filename':'buld.js',
    'path':path.resolve(__dirname,'dist'),//输出文件
  },
  plugins:{
    new htmlplugin({
      
    })
  }
  module:{
    rules:[
      {
        test:/\.css/,
        use:['style-css']
      }
    ]
  }
  
}