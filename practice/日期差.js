 //计算两个日期相差多少
 const dateDif = (date1,date2)=> Math.ceil(Math.abs(date1.getTime()-date2.getTime())/86400000)
 console.log(dateDif(new Date('2020-10-21'),new Date('2021-10-11')));
 
