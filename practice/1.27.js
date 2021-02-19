let a = Math.log1p(1)
console.log(a);
let b = 10;
console.log(Math.log10);
console.log(2 ** 2); //指数运算符
//函数声明 默认值
function sy(x, y = 'sy') {
  return {
    x,
    y
  }
}
console.log(sy());

//随机布尔值
const bool = () => Math.random() >= 0.5
console.log(bool())

//判断是否工作日
const day = (date) => date.getDay() % 6 !== 0;
console.log(day(new Date(2021, 0, 11)));

//反转字符串
const reverse = str => str.split('').reverse('').join('');
console.log(reverse('ascdefg'));



//检查是不是奇数
const num = num => num % 2 === 0
console.log(num(2), num(3));


//对时间进行切片处理
const time = (date) => date.toTimeString().slice(0, 8);
console.log(time(new Date(2020, 0, 10, 17, 0, 30)));

//保留小数字  Math.pow(x,y) 以x为底y次幂的值 
const pow = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
console.log(pow(1.123123123, 1));


//函数ES6用法
let x = 1;

function name(x, b = x) {
  console.log(b);
}
console.log(name(2));

//rest用法
function rest(...res) {
  let sum = 0;
  for (let i in res) {
    sum += res[i]
  }
  return sum;
}
console.log(rest(10, 20, 30));

function sort() {
  return Array.prototype.slice.call(arguments).sort
}

let nums = (...num)=> num.sort()
console.log(nums(4,1,3,5));

//关于箭头函数的错误典型
let objs= {
  num:1,
  sun:()=>{
    this.num // 这里的this获取的全局下的num，不是对象内的，因为对象不构成单独的作用域
  }
}
console.log(objs.sun());

//阶乘
function  sum(n){
  if(n === 1) return 1;
  return n* sum(n-1)
}
console.log('和：'+sum(6));

function sum1(n,total) {
  if(n===1)return total;
  return sum1(n-1,n*total)
}
console.log('总和:'+sum1(6,1));

