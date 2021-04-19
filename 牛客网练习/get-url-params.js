function getUrlParam(sUrl, sKey){
  let params = sUrl.split('?')[1].split('#')[0];
  console.log(params);
  let tmp = params.split('&');
  let res = [];
  tmp.forEach((item, idx) => {
    let [key, value] = item.split('=');
    console.log(key, value);
    if(key === sKey) res.push(value);
  })
  return res;
}

var a = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test1=4#hehe', 'test1');
console.log(a);
console.log(a.join('') === '4');