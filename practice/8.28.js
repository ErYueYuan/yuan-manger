// let http = require('http');
// // let fs = require('fs');
// let path = require('path');
// // fs.readFile('./节流.js',function(error,data){
// //     console.log(data.toString());
// // })
// var serve = http.createServer()
// serve.on('request',function(req,res){
//    req.setHeader('Content-Type','text/plain')
    
//      console.log('收到请求');
// })
// serve.listen(3010,'127.0.0.1',function(){
//     console.log('开启');
// })
let name = 'ConardLi';
function changeValue(name){
  name = 'code秘密花园';
}
changeValue(name);
console.log(name);

let sy = Symbol('b');
console.log(sy);
let st1 = {
    name:'1',
    [Symbol('names')]:'2'
}
console.log(Object.getOwnPropertySymbols(st1));

function per(name,age){
    this.name = name
    this.age = age
}
let t1 = new per('xiaomgn',17)
console.log(t1);
Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
      return undefined; // 用于防止 Function.prototype.myCall() 直接调用
    }
    context = context || window;
    const fn = Symbol();
    context[fn] = this;
    console.log(context[fn]);
    const args = [...arguments].slice(1);
    const result = context[fn](...args);
    console.log(context[fn],args,result);
    delete context[fn];
    return result;
  }

  let t2 = t1.myCall(this,t1)
  console.log(t2);