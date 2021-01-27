// module.exports = {
//        publicPath: process.env.NODE_ENV == "development" ? '/' : "/ym/",
//        outputDir: 'dist', //打包文件目录
//        assetsDir: 'static', //打包静态资源文件路径
//        indexPath: 'index.html', //指定生成的html文件路径
//        filenameHashing: true, //生成文件名hash 值以便更好的控制缓存
//        lintOnSave: process.env.NODE_ENV !== "production", //是否如果你想要在生产构建时禁用 eslint-loader 设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
//        runtimeCompiler: false, //是否使用浏览器内编译器的完整构建版本
//        productionSourceMap: false, //生产是否需要source map 文件,加速生产环境构建
//        //调整内部的webpack配置 
//        // configureWebpack:{
//        //         plugins:{
//        //         }
//        // },
//        //  Vue CLI 内部的 webpack 配置是通过 webpack-chain 维护的
//        chainWebpack:config=>{
//               config.module
//               .rule('vue')
//               .use('vue-loader')
//               .tap(options=>{
//                      options.compilerOptions.preserveWhitespace = true
//                      return options;
//               })
//               .end()
//               .test(/\.svg$/)
//               .use('svg-sprite-loader')
//               .loader('svg-sprite-loader')
//               .end()
//        }
//        css: {
//               loaderOptions: {
//                      sass: {
//                             'predentData': `
//                             @import '@/styles/variable.scss';
//                             @import '@/styles/mixins.scss'
//                             `
//                      },
//               },
//        },
//        // chainWebpack: config => { //添加一个新loader svg图标自动注册
//        //        config.module
//        //               .rule('svg')
//        //               .exclude.add(resolve('src/icons')).end(); //end 结束
//        //        config.module
//        //               .rule('icon')
//        //               .test(/\.svg$/)
//        //               .include.add(resolve('src/icons'))
//        //               .end()
//        //               .use('svg-sprite-loader')
//        //               .loader('svg-sprite-loader')
//        // }
// }