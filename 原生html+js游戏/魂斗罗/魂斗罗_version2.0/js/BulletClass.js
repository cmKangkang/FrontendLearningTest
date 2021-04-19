var bulletSpeedX=7;						//子弹x方向上的速度
var bulletSpeedY=7;						//子弹y方向上飞行速度
var bulletCount=30;						//定义子弹总个数
var bulletDirections=new Array(bulletCount);//储存每个子弹射出时方向
var bulletPosX=new Array(bulletCount);		//储存子弹X坐标
var bulletPosY=new Array(bulletCount);		//储存子弹Y坐标
var bulletNowPointer=0;						//当前子弹编号指示器

var bullet=document.getElementsByClassName("myBullet");

function bulletCreat(){
	for(i=0;i<bulletCount;i++){
		var myBullet=document.createElement("div");
		myBullet.setAttribute("class","myBullet");
		document.body.appendChild(myBullet);
	}
}

function bulletMove(){
	
	for(i=0;i<bulletCount;i++){//遍历每一颗子弹
		//控制子弹移动
		bulletPosX[i]+=bulletSpeedX*bulletDirections[i];
		bullet[i].style.left=bulletPosX[i]-viewPos+"px";
		//飞出一定距离后子弹消失
		if(bullet[i].offsetLeft>1600){
			bullet[i].style.display="none";
		}
	}
	
}