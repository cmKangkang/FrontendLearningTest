var shijun =  this.document.getElementById("shijun")
var evil =  this.document.getElementById("evil")
var evil2 = this.document.getElementById("evil2")
var coldElement = this.document.getElementById("cold")
var attractor = this.document.getElementById("attractor")
var attractor2 = this.document.getElementById("attractor2")
var hpDom = this.document.getElementById("hp")
shijun._hp=100
//玩家状态
shijun._state = 0
this.Object.defineProperty(shijun,"hp",{
    get:function(){
        return this._hp
    },
    set:function(value){
        hpDom.style.color = "rgb("+(100-value)*2.55+","+value*2.55+",0)"
        hpDom.innerText = value
        this._hp = value
    }
})

this.Object.defineProperty(shijun,"state",{
    get:function(){
        return this._state
    },
    set:function(value){

        this._state = value
    }
})

//碰撞
//@params b dom to check
//@params len the size to check
function check_crash(b,len,callbak){
    if(Math.abs(shijun.offsetTop-b.offsetTop)<len)
    if(Math.abs(shijun.offsetLeft-b.offsetLeft)<len){
        shijun.style.left = b.offsetLeft-100+"px"
        if(callbak)callbak()
    }
}
function check_attract(b,len,callbak){
    if(Math.abs(shijun.offsetTop-b.offsetTop)<len)
    if(Math.abs(shijun.offsetLeft-b.offsetLeft)<len){
        shijun.style.left = b.offsetLeft-100+"px"
        shijun.style.top = b.offsetTop+"px"

        if(callbak)callbak()
    }
}


var check = setInterval(() => {
    //弓箭手1射出的箭
    if(Math.abs(shijun.offsetTop-115)<45){
        let jian = document.getElementsByClassName("jian")        
        if(jian.length>0){
            if(Math.abs(shijun.offsetLeft-jian[0].offsetLeft)<140){
                //判断是普通箭还是火箭
                var path = jian[0].src
                var filename
                if(path.indexOf("/")>0){
                    filename=path.substring(path.lastIndexOf("/")+1,path.length)
                }

                if(filename == "fireArrow.jpg"){
                    shijun.hp-=25
                    shijun.state = 2
                }
                
                else
                shijun.hp-=20
            jian[0].remove()
            }
        }  
    }
//2射出的箭
    if(Math.abs(shijun.offsetTop - 305 )<45){
        let jian = document.getElementsByClassName("jian2")        
        if(jian.length>0){
            if(Math.abs(shijun.offsetLeft-jian[0].offsetLeft)<140){

                var path = jian[0].src
                var filename
                if(path.indexOf("/")>0){
                    filename=path.substring(path.lastIndexOf("/")+1,path.length)
                }

                if(filename == "fireArrow.jpg"){
                    shijun.hp-=25
                    shijun.state = 2
                }
                
                else
                shijun.hp-=20
            jian[0].remove()
            }
        }  
    }
    //被火箭击中后的灼烧效果
    if(shijun.state == 2){

       shijun.hp -=5
       var t = setInterval(()=>{shijun.hp -=5},750)
       setTimeout(()=>{clearInterval(t)},1500)
       shijun.state =0
    }

    //被烧到
    let fire = document.getElementsByClassName("fireOfXHL")
    if(fire.length>0){
        if(Math.abs(shijun.offsetLeft-350)<80){
            shijun.hp-=10
            // this.clearInterval(check)
        }
    }

    //被阻挡
    check_crash(evil,80,()=>{
        shijun.hp-=3
    })
    check_crash(evil2,80,()=>{
        shijun.hp-=3
    })
    //被吸到固定位置
    check_attract(attractor,250,()=>{       
        var at = document.getElementById("attractor")
        if(at != null)
            at.parentNode.removeChild(at)})
    check_attract(attractor2,250,()=>{       
        var at = document.getElementById("attractor2")
        if(at != null)
            at.parentNode.removeChild(at)})
    //碰撞判定
    check_crash(document.getElementById("baijin"),80)
    check_crash(document.getElementById("baijin2"),80)
    check_crash(document.getElementById("xhl"),80)


    if(shijun.hp<=0){
        this.location.href="fail.html?level=4"
    }
    //通关
    check_crash(document.getElementById("out"),50,()=>{
        this.location.href="success.html"
    })
}, 100);
//火焰
let fire
setInterval(() => {
    fire = this.document.createElement("div")
    fire.classList="fireOfXHL image"
    fire.style.zIndex=-1
    this.document.body.appendChild(fire)
    setTimeout(()=>{fire.remove()},2000)
}, 3500);

//控制射击
var jianOrFireArrow = 0;
let jian
setInterval(() => {

   if(jian)jian.remove()
    jian = this.document.createElement("img")
    if(jianOrFireArrow <2){
        jian.src = "./image/jian.png"
        jianOrFireArrow = jianOrFireArrow+1
    }
    else {
        jian.src = "./image/fireArrow.jpg"
        jianOrFireArrow = 0
    }
    jian.classList="jian image"
    this.document.body.appendChild(jian)
}, 2000);

var jianOrFireArrow2 = 0;
let jian2
setInterval(() => {
   if(jian2)jian2.remove()
    jian2 = this.document.createElement("img")
    if(jianOrFireArrow2 <2){
        jian2.src = "./image/jian.png"
        jianOrFireArrow2 = jianOrFireArrow2+1
    }
    else {
        jian2.src = "./image/fireArrow.jpg"
        jianOrFireArrow2 = 0
    }
    jian2.classList="jian2 image"
    this.document.body.appendChild(jian2)
}, 2000);





