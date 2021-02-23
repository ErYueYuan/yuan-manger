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
let revet = str=>str.split('').reverse().join('');
console.log(revet('Hello'));