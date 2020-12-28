"use strict"
const DataSource = {}

//判断是否为对象Object
function isObject(value){
       return value !=null && typeof value === "object"
}

//转为对象

function parObj(value){
       let obj = value;
       if(value){
              try{
              obj=JSON.parse(value)
              }catch(e) {
                     obj = value
              }
       }
       return obj
}

function toString(value){
       if(isObject(value)){
              return JSON.stringify(value)
       }else {
              return value
       }
}

//本地存储
DataSource.set = (scope,key,val)=>{
       if(scope==1){
              localStorage.setItem(key,toString(val))
       }else if(scope == 2){
              sessionStorage.setItem(key,toString(val))
       }
}

DataSource.get = (scope,key,val)=>{
       let _data ;
       if(scope == 1){
              _data = localStorage.getItem(key)
       }else if(scope == 2){
              _data = sessionStorage.getItem(key)
       }
       if(_data){
              _data = parObj(_data)
       }
       return _data
}

DataSource.dell = (scope,key,val)=>{
       if (scope == 1) {
              localStorage.removeItem(key)
       }else if(scope == 2){
              sessionStorage.removeItem(key)
 
       }
}

DataSource.clear = (scope) => {
  if (scope === 1) {
    localStorage.clear()
  } else if (scope === 2) {
    sessionStorage.clear()
  } else {
    localStorage.clear()
    sessionStorage.clear()
  }
}

export default DataSource;