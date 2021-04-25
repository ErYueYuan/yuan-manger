let promises = function (index){
    return new Promise((resolve, reject)=>{
        console.log('promise'+index)
        resolve()
    })
}
promises(1).then(()=>{
    return  promises('2')
}).then(()=>{
    return promises('4')
})
promises(3).then(()=>{
    return promises('5')
}).then(()=>{
    return promises('6')
})
/*
*  promise 是为了解决回调地域问题，有三种状态值 等待pending 成功fulfilled  失败rejected
*  1.可以链式调用(内部返回一个promise) then 方法就是把原来的回调写法分离出来，在异步操作执行完后，用链式调用的方式执行回调函数,优点在于then也可以再次声明promise
*  2.
*
* */


let fn = function  (index){
    return new Promise((resolve, reject)=>{
        setTimeout(function (){
            console.log(index)
            resolve()
        },500)
    })
}
let fn1 = async function(){
    await fn(1)
    await fn(2)
    await fn(3)
}
fn1()

/*
*  本质上就是优化promise
*  1.async 返回一个promise对象
*  2.调用方法和普通函数一样
*  3.非阻塞的 ，async和await 必须连着用
* */
