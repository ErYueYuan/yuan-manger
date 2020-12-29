let arr= [1,3,9,21,0,4,5,6,7,34,54,5,46,57,6,7,34,2,3,23,25,7,6,87,8,7,7,56,4,5,3,5,24,123];
let child = arr.filter(item=>item>1).map(tem=>tem+1)
let ass = child.reduce((a,b)=>{
    return b-a
},1)
function maopao(arr){
    var start = new Date().getTime();//起始时间
//     for(var i=0;i<arr.length;i++){
//         for(var l=0;l<arr.length;l++){
//             if(arr[l+1]>arr[l]){
//                 var temp;
//                 temp = arr[l+1];
//                 arr[l+1] = arr[l];
//                 arr[l] = temp
//             }
//         }
// }
    if(!arr.length){
        return [];
    }
    let len = Math.floor(arr.length/2);
    let c = arr.splice(len,1);
    let l = [];
    let r = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>c){
            l.push(arr[i])
        }else{
            r.push(arr[i])
        }
    }

    var end = new Date().getTime();//接受时间
    console.log(start,end,end - start);//返回函数执行需要时间
    return maopao(r).concat(c,maopao(l));
}
let tes = maopao(arr)
console.log(tes)

function swap(array,left,right){
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}
let arr1= [2,0,2,1,1,0];
function sortColors(nums) {
    let left = -1;
    let right = nums.length;
    let i = 0;
    // 下标如果遇到 right，说明已经排序完成
    while (i < right) {
        if (nums[i] == 0) {
            swap(nums, i++, ++left);
        } else if (nums[i] == 1) {
            i++;
        } else {
            swap(nums, i, --right);
        }
    }
};
console.log(sortColors(arr1))