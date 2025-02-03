export const isObject =   (x:any) => { return(Object.prototype.toString.call(x)==='[object Object]'?true:false)}
export const isArray =    (x:any) => { return(Object.prototype.toString.call(x)==='[object Array]' ?true:false)}
