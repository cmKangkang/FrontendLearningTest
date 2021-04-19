// promise 处理多个相互关联的异步请求，解决回调地狱
const get = url =>{
  let xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        if( xhr.status === 200) resolve(xhr.responseText);
        else reject(xhr.status)
      }
    }
    xhr.open('GET', url);
    xhr.send();
  });
}

const url = 'https://www.fastmock.site/mock/4bb9a95aff13186f64738dd7707e7930/form/api/project';

let myGet = get(url);
myGet.then(data => {
  console.log(data);
}).catch(erro => {
  console.log("erro :" + erro);
})