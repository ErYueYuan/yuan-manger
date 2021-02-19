//合并对象
let a1 = {
  a: 1
}
let a2 = {
  b: 2
}
let a3 = {
  c: 1
}
Object.assign(a1, a2, a3);
console.log(a1);

//为对象添加方法
// let SomeClass = {};
// Object.assign(SomeClass.property, {
//   ones(arg1, arg2) {

//   },
//   twos(arg1, arg2) {

//   }
// })

// someone.property.ones = (arg1,arg2){ 意思和上面一样
// }

// 克隆对象
function clone(obj) {
  return Object.assign({}, obj);
}
let a4 = clone(a1);
console.log(a4);

var a;

function foo() {
  console.log(this.a) // this指向window
}
var a = 1
foo()

var obj = {
  a: 2,
  foo: foo
}
obj.foo()

let a6 = new Promise(function(resolve, reject) {
  console.log(1);
  resolve(2)
})
a6.then((res) => {
  console.log(res);
})