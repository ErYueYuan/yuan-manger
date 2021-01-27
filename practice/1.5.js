let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}
let arr = Object.keys(obj);
for (let i in obj) {
  console.log(i, obj[i]);
}
console.log(arr);
let ar1 = Object.assign(
  Object.create(Objcet.getPrototypeOf(obj)),
  obj
);
console.log(ar1);
console.log(ar1);