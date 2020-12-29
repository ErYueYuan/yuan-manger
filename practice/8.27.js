//原生自定义事件
//Event
// let myEvent = new Event('event_name');
// console.log(myEvent);

// let myEvent1 = new CustomEvent('ev',{
//     detail:{
//         name:'yuandada'
//     }
// })
// console.log(myEvent1);

let myEvent2 = document.createEvent('CustomEvent');
myEvent2.initEvent('myEvent2',true,true)
// console.log(myEvent2);

let btn = document.getElementsByTagName('button')[0];
btn.addEventListener('myEvent2',function(e){
 console.log(e);
})

setTimeout(()=>{
    btn.dispatchEvent(myEvent)
},1001)