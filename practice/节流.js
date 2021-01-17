let btn = document.querySelector('button');
btn.onclick = thor(liu,1000)
function  liu(e){
    console.log(e,1)
}
//这种方式是 顾头不顾尾(）
function jeliu(fuc,wait){
    let old = 0;//声明旧时间
    let cont,arg;
    return function (){
        let da = new Date().valueOf();
        //this 是当前触发的对象
        cont = this;
        arg = arguments;
       if (da - old > wait){
            fuc.apply(cont,arg)
           old = da;
       }
    }
}
//优化
function thor(fuc,wait){
    let cont,arg,timeout
    let old = 0;
    return function (){
        cont = this;
        arg = arguments;
        let  news = new Date().valueOf();
        if(news - old > wait){
            console.log(1,timeout)
            if (timeout){

                clearTimeout(timeout)
                timeout = null
            }
            fuc.apply(cont,arg);
            old = news
        }else if (!timeout){
            timeout = setTimeout(()=>{
                old = new Date().valueOf();
                timeout = null;
                fuc.apply(cont,arg)
            },wait)
        }
    }
}

//ce