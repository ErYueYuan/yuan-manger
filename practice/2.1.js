function person(val) {
  val.age = '18'
  val = {
    name: 'sg',
    age: '25'
  }
  return val
}

var bok = {
  name: 'ag',
  age: '10'
}
var bok2 = person(bok);
console.log(bok);
console.log(bok2);

// null不是对象，最初是为了性能考虑使用低位存储变量的数据信息，000是对象object,null是全零的

//instanceof判断数据类型
function myInstanceof(params, right) {
  if (typeof params !== 'object' || params === null) return false;
  let proto = Object.getPrototypeof(params);
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeof(params)
  }
}

console.log(myInstanceof('aa', String));


//
console.log([] == ![]);

//闭包的作用：有权访问另一个函数的变量的函数，自下向上查找，直到window
function name(name, age) {
  this.name = name;
  this.age = age,
    this.say = function() {
      console.log(1);
    }
}
let ob = new name();
console.log('原型:' + (ob._proto_ == name.prototype), name.prototype.constructor);

function setName(params) {
  name.call(this)
}
let per = new setName()
per.name = 'wangzhe';
console.log(per.name);

//借助原型链阿
function setName2() {
  this.names = 'cs';
}

setName2.prototype = new name();
console.log(new setName);

//箭头函数的使用
var box = {
  firstName: 'hello',
  lastName: 'word',
  btnfun: function() {
    console.log(this);
    let btnfun2 = () => {
      return this.firstName + this.lastName
    }
    return btnfun2()
  },

}
console.log(box.btnfun());


//promisi的使用
// let promise = new Promise((resolve, reject) => {
//   resolve('success')
//   console.log(1);
// })
// promise.then(res => {
//   console.log(2);
//   console.log(res);
// })

//使用定时器测试
// let promise2 = new Promise((resolve, reject) => {
//   console.log('1');
//   resolve('2')
//   setTimeout(() => {
//     console.log('3');
//   }, 0);
// })
// promise2.then(res => {
//   console.log(res);
// })

//定时器嵌套promise

// let promise3 = new Promise((resolve, reject) => {
//   console.log('1');
//   setTimeout(() => {
//     console.log('2');
//     resolve('3')
//     console.log('4');
//   }, 0);
// })
// promise3.then(res => {
//   console.log(res);
// })  //答案：1 2 4 3

//测试resoleve 和 reject的返回结果问题

Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
Promise.reject(1).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})


//合并数组
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [2, 3, 4, 4, 5]
Array.prototype.push.apply(arr1, arr2);
console.log(arr1);

//测试