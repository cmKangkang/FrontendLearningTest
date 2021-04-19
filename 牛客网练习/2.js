function test(){
    var n=4399;

    function add(){
        console.log("-->",n)
        n++;
        // console.log("in fun add",this);
        console.log(n);
    }
    // console.log("in fun test",this);node
    console.log("==>",n);
    return {n:n,add:add};
}

var res1=test();
var res2=test();
res1.add();
console.log(res1.n);
res1.add();
console.log(res1.n);

res2.add();