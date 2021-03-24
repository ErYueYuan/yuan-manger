//改变this指向 call，bind，apply
//三者区别：call接收的是参数列表，apply是数组 都是为了改变this指向
let obj = {
  name: '1'
}

function setName(name, age) {
  console.log(this.name);
  console.log(name, age);
}
setName.call(obj, 'yck', '24')
setName.apply(obj, ['yck', '24'])
setName.bind(obj, 'yck', '25')()

//call内部构成手写
Function.prototype.myCall = function(contxt) {
  //判断是否传入参数,没有的话就是window
  let cont = contxt || window;
  // console.log(cont, this);
  //{ name: '1' } [Function: setName] 正在调用的函数
  //把当前调用的方法定义在cont.fn上,此时this是调用函数本身
  cont.fn = this;
  // console.log(arguments);
  //   [Arguments] {
  //   '0': { name: '1', fn: [Function: setName] },  此时调用函数和接收的参数在一个对象中
  //   '1': 'mycall',  //额外传入参数
  //   '2': '21'       //额外传入参数
  // }
  //把contxt的参数取出来
  let arg = [...arguments].slice(1);
  // console.log(arg);
  //取到后面全部的值
  let res = cont.fn(...arg);
  // console.log(cont);
  //   [Arguments] {
  //   '0': { name: '1', fn: [Function: setName] },  此时调用函数和接收的参数在一个对象中，参数已经传入fn函数中，这时都在一个对象中固然能取到值
  // }
  delete cont.fn
  return res;
}
setName.myCall(obj, ['wy', '25'])

Function.prototype.myApply = function(contxt) {
  let cont = contxt || window;
  cont.fn = this;
  console.log(arguments, arguments[1]);
  // [Arguments] {
  //   '0': {
  //     name: '1',
  //     fn: [Function: setName]
  //   },
  //   '1': ['1', '2']
  // }
  //[ '1', '2' ]
  let res = cont.fn(...arguments[1]);
  delete cont.fn
  return res
}
setName.myApply(obj, ['1', '2'])

Function.prototype.myBind = function(contxt) {
  // if (this instanceof Function) {
  //   throw 'error'
  // }
  let cont = contxt || window;
  cont.fn = this;
  let arg = [...arguments].slice(1);
  return function() {
    //由于返回的是一个函数 所有考虑传入的参数要合并一下 借助一下apply
    return (cont.fn).apply(contxt, arg.concat(...arguments))
  }
}
setName.myBind(obj, 'xiao', 'you')()

//new 都做了什么?
//1>  创建一个新对象
//2>  把构造函数的this赋值给这个新对象
//3>  执行构造函数中的新代码
//4>  返回这个对象
function Student(name) {
  this.name = name;
  // this.doSth();
}
Student.prototype.doSth = function() {
  console.log(this.name);
};
var student1 = new Student('若'); //重新创建了对象
var student2 = new Student('川');
console.log(student1.doSth()); // {name: '若'} '若'
console.log(student2, student2.doSth()); // {name: '川'} '川' 

function myNew() {
  //先创建一个对象
  var obj = new Object();
  Cont = [...arguments].slice(1);
  //链接原型，obj可以访问到原型上的属性    
  obj._proto_ = Cont.prototype
  //实现继承
  Cont.apply(obj, arguments)
  return obj

}

function create() {
  // 创建一个空的对象
  var obj = new Object(),
    // 获得构造函数，arguments中去除第一个参数
    Con = [...arguments].slice(1);
  // 链接到原型，obj 可以访问到构造函数原型中的属性
  obj.__proto__ = Con.prototype;
  // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
  Con.apply(obj, arguments);
  // 返回对象
  return obj;
};
let obj2 = create(Student, 'black');
console.log('测试:', obj2);