Array.prototype.uniq = function () {
  // let res = [];
  // let isnan = false;
  // this.forEach(el => {
  //   // NAN
  //     if(res.indexOf(el) === -1){
  //       if(isNaN(el)) {
  //         if(!isnan){
            
  //           isnan = true;
  //           console.log(isnan);
  //           res.push(el);
  //         }
  //       }else{
  //         console.log(el);
  //         res.push(el);
  //       }
  //     } 
  // })
  // return res;
  return Array.from(new Set(this));
}

let arr = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
console.log(arr.uniq());
let arr2 = [true, false, null, undefined, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
console.log(arr2.uniq());
let flag = (function () { var a = [true, false, null, undefined, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq(); return a.length === 10 && a[1] === false && a[0] === true && a[3] === undefined && a[2] === null && isNaN(a[4]); })();
console.log(flag);