var viewPos=2950;			//表示玩家观测点的世界坐标  
var ifTheGameIsEnd=false;	//判断游戏是否已经结束的参数
var ifTheGameIsLose=false;	//游戏输
var ifTheGameIsWin=false;	//游戏赢
var score=0;				//游戏分数
var RunOrShoot=0;			//0代表射击模式 1代表跑酷模式
var index=5;				//碰撞器参数,这个值越大,元素的实际可碰撞体积越小 
							//跑酷模式下设为10,射击模式下设为5

window.onload=function(){
	Init();//包含全部初始化内容
	playerAction();//对玩家操作的监听
	setInterval('playerMove();',10);//player移动以及各种动作——逐帧
	setInterval('bulletMove();',10);//子弹飞行轨迹——逐帧
	setInterval('enemyMove();',10);//A型敌人的运动——逐帧
	setInterval('ifGameEnd();',10);//时刻监听游戏是否结束
	setInterval('bgMusicPlay();',10);//监听背景音乐——防止背景音乐因为意外情况中断
	
	var bgMusic=document.getElementById("bgMusic");
	// bgMusic.currentTime=0;
	// bgMusic.play();
	// alert("123");
}

function Init(){
	bulletCreat();
	floorsInit();
	enemyInit();

}

function GameIsON(){
	
}

//元素碰撞检测器(除地板外)
function BoxCollider(box1,box2){
	var l1=box1.offsetLeft;
	var r1=box1.offsetLeft+box1.offsetWidth;
	var t1=box1.offsetTop;
	var b1=box1.offsetTop+box1.offsetHeight;
	
	var l2=box2.offsetLeft;
	var r2=box2.offsetLeft+box2.offsetWidth;
	var t2=box2.offsetTop;
	var b2=box2.offsetTop+box2.offsetHeight;
	
	
	
	l1+=index;
	r1-=index;
	t1+=index;
	b1-=index;
	
	l2+=index;
	r2-=index;
	t2+=index;
	b2-=index;	
	
	// alert(l2);
	if(b1<t2 || l1>r2 || t1>b2 || r1<l2){
			//没撞上
		return false;
	}
	else{
		return true;
	}
}

//地板碰撞检测器
function floorBoxCollider(box,floor){
	var bb=box.offsetTop+97;
	//var bb=box.offsetTop+box.offsetHeight+5;
	var bbl=box.offsetLeft;
	var bbr=box.offsetLeft+box.offsetWidth;
	var ft=floor.offsetTop;
	var fb=floor.offsetTop+floor.offsetHeight;
	var fl=floor.offsetLeft;
	var fr=floor.offsetLeft+floor.offsetWidth;
	
	if(bb>=ft&&bb<fb&&bbl<fr&&bbr>fl){
		return true;
	}
	else{
		return false;
	}
	
	// box.offsetTop+box.offsetHeight+5>=floor.offsetTop;
	// box.offsetTop+box.offsetHeight+5<floor.offsetTop+floor.offsetHeight;
	// box.offsetLeft+box.offsetWidth>floor.offsetLeft;
	// box.offsetLeft<floor.offsetLeft+floor.offsetWidth;
}

//游戏结束监视器
function ifGameEnd(){
	
	if(ifTheGameIsEnd){
		var PlayerThings=document.getElementById("PlayerThings");
		PlayerThings.style.display="none";
		if(ifTheGameIsLose){
			loseGame();
		}
		if(ifTheGameIsWin){
			winGame();
		}
	}
}
//游戏结束弹出画面
//失败画面
function loseGame(){
	var scores=document.getElementById("scores");
	scores.style.width="100vw";
	scores.style.height="100vh";
	scores.innerHTML="<h2>Y<br/>O<br/>U<br/> <br/>D<br/>E<br/>A<br/>D<br/>!</h2><h3>你的分数是:"+score+"</h3>";
	
}
//胜利画面
function winGame(){
	var scores=document.getElementById("scores");
	scores.style.width="100vw";
	scores.style.height="100vh";
	scores.style.backgroundColor="rgba(84, 255, 184, 229)";
	scores.innerHTML="<h2 style='color: #FF0000;'>Y<br/>O<br/>U<br/> <br/>W<br/>I<br/>N<br/><br/>!</h2><h3>你的分数是:"+score+"</h3>";
	
}

//跑酷模式
function RunRunRun(){
	RunOrShoot=1;
	playerSpeedX=3.5;
	playerSpeedY=5;
	index=11;
	alert("'跑酷模式'已选,Enter后继续游戏");
}
//射击模式
function ShootShootShoot(){
	RunOrShoot=0;
	index=5;
	alert("'射击模式'已选,Enter后继续游戏");
}