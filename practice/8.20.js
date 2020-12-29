//去重方法
let arr = [1,2,3,4,5,5,6,1,1,1,1,2,2,2,3,3,];
//利用ES6方法
let a1 = Array.from(new Set(arr));
console.log(a1);

let a2 = [...new Set(arr)];
console.log(a2);

let a3 = [];
for(let i=0;i<arr.length;i++){
    if(!a3.includes(arr[i])){
        a3.push(arr[i]);
    }
}
console.log(a3);

//利用冒泡
for(let i=0;i<arr.length;i++){
    for(let y=i+1;y<arr.length;y++){
        if(arr[i] == arr[y]){
            arr.splice(y,1);
            y--;
        }
    }
}
console.log(arr);

//利用indexOf
let a4 = [];
for(let i=0;i<arr.length;i++){
    if(a4.indexOf(arr[i]) == -1){
        a4.push(arr[i])
    }
}
console.log(a4);

//利用reduce 
let arr1 = [1,2,3,4,5,5,6,1,1,1,1,2,2,2,3,3,];
let re = arr1.reduce((prev,cur)=>{
    if(!prev.includes(cur)){
        return prev.concat(cur);
    }else {
        return prev
    }
},[])
console.log(re);


