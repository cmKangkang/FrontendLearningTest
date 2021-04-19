var enemyACount=20;				//A型敌人总数量
var enemysAPosX=new Array(enemyACount);//A型敌人x绝对坐标数组
var enemysAPosY=new Array(enemyACount);//A型敌人y绝对坐标数组
//储存最初坐标数据
var enemysAPosXInit=new Array(enemyACount);
var enemysAPosYInit=new Array(enemyACount);

var enemyASpeedX=new Array(enemyACount);				//A型敌人X方向上移动速度
// var enemyASpeedX=2;
var enemyASpeedY=4.5;				//A型敌人Y方向上移动速度
var enemyAIfGoingX=new Array(enemyACount);			//判断A是向右走||向左走||水平静止
var enemyAIfGoingY=new Array(enemyACount);			//判断A向上移动||向下移动||竖直静止
var enemyAIfOnground=new Array(enemyACount);

function enemyInit(){//敌人坐标初始化
	enemyAInit();
	enemyBInit();
	
}
function enemyMove(){
	
	enemeyAMove();
	
	enemyBMove();
	
}



function enemeyAMove(){
	
	var enemyAs=document.getElementsByClassName("enemyA");
	var floors=document.getElementsByClassName("floor");
	for(i=0;i<enemyACount;i++){//遍历A型敌人
		//检查是否碰撞地板
		enemyAIfGoingY[i]=-1;
		for(j=0;j<floorCount;j++){
			if(floorBoxCollider(enemyAs[i],floors[j])){//enemyA脚下有地板
				enemyAIfGoingY[i]=0;
				// alert("在地上");
			}
		}
		
		if(enemyAs[i].offsetTop>790){
			enemysAPosX[i]=enemysAPosXInit[i];
			enemysAPosY[i]=enemysAPosYInit[i]-50;
		}
		
		//检测是否来到地板边缘_____算了我没做A型敌人向右行走的动画,这个功能就阉割了吧
		// for(m=0;m<floorCount;m++){
		// 	enemyAIfGoingX[i]==-1&&enemysAPosX[i]<=floors[m]
		// }
		
		//检测是否碰撞子弹
		for(k=0;k<bulletCount;k++){
			if(BoxCollider(bullet[k],enemyAs[i])){
				bullet[k].style.display="none";
				enemyAs[i].style.display="none";
				score+=1;
				var scoresText=document.getElementById('scores');
				scoresText.innerHTML="<p>SCORES:</p><h2>"+score+"</h2>";
				
			}
		}
		
		enemysAPosX[i]+=enemyAIfGoingX[i]*enemyASpeedX[i];
		enemysAPosY[i]-=enemyAIfGoingY[i]*enemyASpeedY;
		
		
		enemyAs[i].style.left=enemysAPosX[i]-viewPos+"px";
		enemyAs[i].style.top=enemysAPosY[i]+"px";
		

		
		//检测是否碰撞水面
		
	}
}

function enemyBMove(){
	
}

function enemyAInit(){
	var enemyAs=document.getElementsByClassName("enemyA");
	for(i=0;i<enemyACount;i++){//给每一个A型敌人随机设置横向速度
		enemyASpeedX[i]=1.6*(Math.floor(Math.random()*8)/4)+0.5;
	}
	
	enemysAPosX[0]=3550;
	enemysAPosY[0]=260;
	enemyAIfGoingX[0]=-1;
	enemyAIfGoingY[0]=0;
	
	
	enemysAPosX[1]=4750;
	enemysAPosY[1]=50;
	enemyAIfGoingX[1]=-1;
	enemyAIfGoingY[1]=0;
	
	enemysAPosX[2]=4850;
	enemysAPosY[2]=150;
	enemyAIfGoingX[2]=-1;
	enemyAIfGoingY[2]=0;
	
	enemysAPosX[3]=4950;
	enemysAPosY[3]=150;
	enemyAIfGoingX[3]=-1;
	enemyAIfGoingY[3]=0;
	
	enemysAPosX[4]=4650;
	enemysAPosY[4]=150;
	enemyAIfGoingX[4]=-1;
	enemyAIfGoingY[4]=0;
	
	enemysAPosX[5]=4550;
	enemysAPosY[5]=150;
	enemyAIfGoingX[5]=-1;
	enemyAIfGoingY[5]=0;
	
	enemysAPosX[6]=4850;
	enemysAPosY[6]=150;
	enemyAIfGoingX[6]=-1;
	enemyAIfGoingY[6]=0;
	
	enemysAPosX[7]=4250;
	enemysAPosY[7]=50;
	enemyAIfGoingX[7]=-1;
	enemyAIfGoingY[7]=0;
	
	enemysAPosX[8]=4350;
	enemysAPosY[8]=50;
	enemyAIfGoingX[8]=-1;
	enemyAIfGoingY[8]=0;
	
	enemysAPosX[9]=5350;
	enemysAPosY[9]=-250;
	enemyAIfGoingX[9]=-1;
	enemyAIfGoingY[9]=0;
	
	enemysAPosX[10]=5550;
	enemysAPosY[10]=-250;
	enemyAIfGoingX[10]=-1;
	enemyAIfGoingY[10]=0;
	
	enemysAPosX[11]=5650;
	enemysAPosY[11]=-220;
	enemyAIfGoingX[11]=-1;
	enemyAIfGoingY[11]=0;
	
	
	enemysAPosX[12]=6350;
	enemysAPosY[12]=-450;
	enemyAIfGoingX[12]=-1;
	enemyAIfGoingY[12]=0;
	
	enemysAPosX[13]=6390;
	enemysAPosY[13]=-450;
	enemyAIfGoingX[13]=-1;
	enemyAIfGoingY[13]=0;
	
	enemysAPosX[14]=6400;
	enemysAPosY[14]=250;
	enemyAIfGoingX[14]=-1;
	enemyAIfGoingY[14]=0;
	
	enemysAPosX[15]=6450;
	enemysAPosY[15]=250;
	enemyAIfGoingX[15]=-1;
	enemyAIfGoingY[15]=0;
	
	enemysAPosX[16]=6750;
	enemysAPosY[16]=250;
	enemyAIfGoingX[16]=-1;
	enemyAIfGoingY[16]=0;
	
	enemysAPosX[17]=6850;
	enemysAPosY[17]=250;
	enemyAIfGoingX[17]=-1;
	enemyAIfGoingY[17]=0;
	
	enemysAPosX[18]=7150;
	enemysAPosY[18]=140;
	enemyAIfGoingX[18]=-1;
	enemyAIfGoingY[18]=0;
	
	enemysAPosX[19]=7250;
	enemysAPosY[19]=250;
	enemyAIfGoingX[19]=-1;
	enemyAIfGoingY[19]=0;
	
	for(i=0;i<enemyACount;i++){
		enemysAPosXInit[i]=enemysAPosX[i];
		enemysAPosYInit[i]=enemysAPosY[i];
	}
}

function enemyBInit(){
	
}