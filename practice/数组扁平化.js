var arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];
var flt1 = arr.flat(4);
// var arrnew = Array.from(new Set(flt))
// var sortArr = arrnew.sort((a, b) => a - b);
// console.log(sortArr);
// var flt1 = arr.toString();
var strArr = Array.from(new Set(flt1))
var srtArr = strArr.sort((a, b) => a - b);
console.log(srtArr);
for(var i of srtArr){
  console.log(i);
}

