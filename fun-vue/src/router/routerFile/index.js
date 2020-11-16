/**
 * 路由合并汇总
 * 增加的路由文件需引入，并写入routeList*
 * */

import login from './login'
import home from './home'
import my from './my'
import product from './product'
import sell from './sell'
import service from './service'
import mess from './mess'

let routeList = [
  login,
  home,
  my,
  product,
  sell,
  service,
  mess
];
let routes = [];
for (let routeModuleIndex in routeList) {
  for (let routeIndex in routeList[routeModuleIndex]) {
    routes.push(routeList[routeModuleIndex][routeIndex]);
  }
}

export default routes