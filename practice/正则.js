// RegExp.$1是RegExp的一个属性,指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串
var r= /^(\d{4})-(\d{1,2})-(\d{1,2})$/; 
r.exec('1985-10-15');
let s1 = RegExp.$1
let reg = new RegExp('xgy','i');
console.log(reg,s1);
/foo.bar/.test('foo/bar')
console.log(/foo.bar/.test('foo/bar'));

