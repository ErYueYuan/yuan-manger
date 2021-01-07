console.log(['1', '2', '3'].map(parseInt)); //[ 1, NaN, NaN ]
//解析:  map内部callback参数1 当前值 ，参数2 索引 ， parseInt参数1处理的值(字符串) 参数2 基数
//过程:  parseInt('1',0) 基数为0  参数不以0x或者0开头,自动以基数10计算 返回1
//       parseInt('2',1) 基数为1进制 表示的数中最大数小于2 所以返回NaN  
//       parseInt('3',2) 基数为2进制 表示的数中最大数小于3 所以返回NaN 

//call和apply 的区别
function thron(fn, wait, bol) {
       let timer;
       return () => {
              let _this = this;
              let arg = arguments;
              if (timer) {
                     clearTimeOut(timer)
              }
              timer = setTimeout(() => {
                     fn.apply(this, arg)
              }, wait);
       }
}

