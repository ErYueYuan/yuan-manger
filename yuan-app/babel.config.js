module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugin:[
    [
      'import',{
        libraryName:'vant',
        libraryDirectory:'es',
        style:true
      },'vant'
    ]
  ]
}
