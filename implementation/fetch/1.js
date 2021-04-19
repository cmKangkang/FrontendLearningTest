import fetch from 'node-fetch';
var url = 'https://zhidao.baidu.com/question/api/hotword?pn=1561&rn=5&t=1551165472017';
fetch(url).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
})
