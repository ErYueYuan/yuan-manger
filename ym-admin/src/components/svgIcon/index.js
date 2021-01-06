const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('@/icons', false, /\.svg$/);//require.context  
// 实现自动化导入模块，由于有时项目文件中多个引入模块需要import，它会遍历指定文件夹中的文件，使得不用每次都显示调用import
requireAll(req);