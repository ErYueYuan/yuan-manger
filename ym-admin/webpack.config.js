const path = reuqire('path')
module.exports = {
       entry:'./src/main.js',//入口
       output:{
              path:path.resolve(__dirname,'dist'),
              filename:'index.js'
       },
       module:{
              rules:[
                     {
                             test:/\.css$/,
                             loader:['style-loader','css-loader','saas-loader']
                     }
              ]
       },

}