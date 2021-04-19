import fetch from 'node-fetch';

const url = 'https://api.github.com/users/github';

const getUsers = function(url){
  fetch(url).then(res => {
    if(res.ok) return res.json();
    else{
      throw new  Error(res.statusText);
    }
  })
  .then(json => {
    console.log(json);
  }).catch(err => {
    console.log(err);
  })
}

getUsers(url);