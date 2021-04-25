module.exports = {

  plugins: {
    'postcss-pxtorem': { // 方案1：使用pxtorem配合在head中使用动态改变font-siz
      rootVale: 32, //根目录的字体大小为32px
      propList: ['*'], //设置哪些属性转换为rem,可选列表 font,font-size
      minPixeValue: 2 //最小转换单位，最小转化单位为2px
    }
  }
}

//方案2：使用转化px成vw完成
// module.exports = {
//   plugins: {
//     "postcss-write-svg": {
//       utf8: false
//     },
//     "postcss-px-to-viewport": {
//       unitToConvert:'px',//要转换的单位
//       viewportWidth: 750, //UI设计稿宽度
//       unitPrecision: 3, //转换后的精度,即小数点位数
//       viewportUnit: "vw", //指定需要转换成的视窗单位 vw
//       porpList: ["*"], //指定要转换的css属性的单位 *代表的全部
//       selectorBlackList: ['.ignore', '.hairlines'],
//       minPixeValue: 1, //默认值是1 小于或等于1px则不进行转换
//       mediaQuery: false // 是否在媒体查询css中进行转换  默认false
//       exclude:[/node_modules/] // 设置忽略文件，用正则匹配
//     },
//   }
// }