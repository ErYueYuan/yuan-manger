 //获取url参数
 const getUrl = (URL)=>{
    URL = JSON.parse(
        '{"'+decodeURI(URL.split('?')[1])
        .replace(/"/g,'\\"')
        .replace(/&/g,'","')
        .replace(/=/g,'":"')+
        '"}'
    )
    return JSON.stringify(URL)
   }
   console.log(getUrl('goole.com?se=1&s=2'));
   //更简单方法
   let urls = window.location.search
  console.log(Object.fromEntries(new URLSearchParams(urls)))