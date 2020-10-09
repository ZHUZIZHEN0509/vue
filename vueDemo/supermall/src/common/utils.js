export function debounce(func,delaytime){
  let timer = null;
  return function (...args) {
    //如果有值进行清除
    if(timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this,args)
    },delaytime)
  }
}

export function formatDate(date, fmt) {
  //正则表达式是干嘛的？ 字符串匹配 利器（难，规则太多）
  //1.获取年份
  //首先匹配y
  //y+   +一个或者多个    *  0个或多个  ? 0个或者一个
  // 多个y    2019 yyyy  yy 19 y 9
  //RegExp.$1 匹配到的结果 yyyy    date.getFullYear() + '' 将数字转成字符串  substr 截取0位 （4 - RegExp.$1.length）
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  //2.获取 M+ -> 正则表达式中的一个规则
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  //统一处理
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  //不足两位补齐两位
  return ('00' + str).substr(str.length);
};

