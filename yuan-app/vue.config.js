module.exports = {
       devServer: {
              port: 8080,
              proxy: {
                     '/chmobile': {
                            target: 'http://127.0.0.1:8081',
                            changeOrigin: true,
                            pathRewrite: {
                                   '^/chmobile': '/'
                            }
                     }
              }


       }
}