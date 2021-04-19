
class MyPromise {
  constructor(excuetor){
    this.status = 'pending';
    this.value = undefined;
    this.erro = undefined;
    excuetor(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(val){
    this.status = 'fulfilled';
    this.value = val;
  }

  reject(err){
    this.status = 'rejected';
    this.erro = err;
  }

  /**
   * 
   * @param {} res resolve成功的方法 
   * @param {*} rej reject 成功的方法
   */
   then(res, rej){
    if(this.status === 'fulfilled'){
      res(this.val);
    }
    if(this.status === 'rejected'){
      rej(this.err);
    }
  }


}

new MyPromise((res, rej) => {
  res('111');
}).then( data => {
  console.log(data);
}, err => {
  console.log(err);
});