//手写bind，apply，call 
//用于改变this执行
var a = 2;
function foo() { // 运行
    console.log( this.a);
}


(function() { // 严格模式下调用函数则不影响默认绑定
    "use strict";
    
    foo(); // 2
})();

var obj = {
    a: 2,
    foo: foo
};

obj.foo(); // 2

foo.call(obj)