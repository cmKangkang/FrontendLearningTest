function dateFormat(date, format){
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  
  const weekday = ['日', '一', '二', '三', '四', '五', '六'];

  let week = weekday[date.getDay()];

  let res = format;
  return res.replace('yyyy', year)
    .replace('yy', pad(year % 100))
    .replace('MM', pad(month))
    .replace('M', month)
    .replace('dd', pad(day))
    .replace('d', day)
    .replace('HH', pad(hour))
    .replace('H', hour)
    .replace('hh', pad(hour % 12))
    .replace('h', hour % 12)
    .replace('mm', pad(minute))
    .replace('m', minute)
    .replace('ss', pad(second))
    .replace('s', second)
    .replace('w', week);
}

function pad(num){
  return num < 10 ? '0' + num : num;
}

var off = new Date().getTimezoneOffset()*60*1000;

let date = new Date(1409894060000 + off);

let res = dateFormat(date, 'yyyy-MM-dd HH:mm:ss 星期w');
console.log(res);