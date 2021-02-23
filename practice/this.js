// 1. this 是一种更优雅的方式指出对象的引用
// 2. this 一般在函数内使用， 指的是所在函数对象，
// 3. 在object中使用this， 指的是当前对象， 最近对象
// 4. 如果是普通函数中的this， 此时指的window， 严格模式下指的是undefined
// 5. 构造函数的调用， this指的是实例化的新对象
var name = '卡卡';

function Cat() {
  this.name = '有鱼';
  this.type = '英短蓝猫';
}
var cat1 = new Cat();
console.log(cat1); // 实例化新对象 Cat {name: "有鱼", type: "英短蓝猫"}
console.log(cat1.name); // 有鱼

// 6. call, bind, apply 改变this指向， 此时this指的是参数中的对象
