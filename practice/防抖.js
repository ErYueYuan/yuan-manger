let btn = document.querySelector('button');
btn.onclick = dosomthing(btncli,1000,true)
function  dosomthing(func,wait,immed){
    let timeout,result;
    var as = function(){
        clearTimeout(timeout)
        let cont = this;
        let arg = arguments;
        if(immed){
            //立即执行
            let callNow = !timeout;//利用判断变量
            timeout = setTimeout(()=>{
                console.log(1)
                callNow = null;
            },wait)
            if(callNow) result = func.apply(cont,arg);
        }else {
            //不立即执行
            timeout = setTimeout(() => {
                func.apply(cont,arg);
            }, wait);
        }
        return result
    }
    as.cancle = function (){
        clearTimeout(timeout);
    }
    return as
}
function btncli(e){
    console.log(e);
    console.log(this);
    //如果有返回值
    return  '测试'
}
//取消防抖
// btn.onclick = function (){
//     dosomthing.cancel();
// }