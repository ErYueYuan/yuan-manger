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