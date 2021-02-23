//改变this指向
let obj = {
  a: 1,
  onec: function() {
    console.log(this.a);
  }
}

function cs() {
  console.log(this.a);
  console.log(this.yck);
}
cs.call(obj, 'yck', 24)


//检查数据类型
console.log((2).constructor === Number);
console.log(('w').constructor === String);
console.log(Object.prototype.toString.call(2))
console.log(Object.prototype.toString.call(true))

//反转字符串
let revet = str => str.split('').reverse().join('');
console.log(revet('Hello'));

console.log(" " && true && 5); // 逻辑与   当&&前面的是true，不管后面是true或者false，始终返回后面的
console.log(true && 5);
console.log(true || " "); // 逻辑或   当||前面的是true，不管后面是true或者false，始终返回前面的

let res = ['1', '3', '10'].map(parseInt)
console.log(res);