module.exports = {
       css:{
              loaderOptions:{
                     sass:{
                            'predentData':`
                            @import '@/styles/variable.scss';
                            @import '@/styles/mixins.scss'
                            `
                     },
              },
       },
       chainWebpack:config=>{//添加一个新loader svg图标自动注册
              config.module
              .rule('svg')
              .exclude.add(resolve('src/icons')).end();//end 结束
              config.module
              .rule('icon')
              .test(/\.svg$/)
              .include.add(resolve('src/icons'))
              .end()
              .use('svg-sprite-loader')
              .loader('svg-sprite-loader')
       }
}