var playerPosX = 3070; //player的绝对像素X坐标
var playerPosY = 265; //y坐标
var playerSpeedX = 2; //player的横向速度
var playerSpeedY = 4.5; //player的纵向速度
var playerIfGoingX = 0; //判断是向右走||向左走||水平静止
var playerIfGoingY = 0; //判断向上移动||向下移动||竖直静止
var playerIfOnground = true; //判断是否落地
var playerCanJumpAgain = true; //跳跃冷却
var playerJumpingUp = 0; //判断跳跃处于上升还是下降阶段
var playerCanShootAgain = true; //射击冷却
var playerCanFlashAgain =true;//闪现冷却
var playerDirection = 1; //射击方向/player朝向
// [-3,4,3]	参数与方向关系
// [-1,0,1]
// [-2,4,2]
var playerIfRunWhenEndJump = 1; //跳跃结束时播放跑动动画||静止动画


// var Player=document.getElementById("Player"); 										//获取元素player


function playerAction() {
	document.onkeydown = function(event) {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		var shootMusic = document.getElementById("shootMusic");
		if (e && (e.keyCode == 68 || e.keyCode == 39)) { // 向右 
			playerDirection = 1;
			playerIfGoingX = 1;
			playerIfRunWhenEndJump = 1;
			if (playerJumpingUp == 0) {

				playerRunToRight(); //修改动画

			}
		}
		if (e && (e.keyCode == 65 || e.keyCode == 37)) { // 向左 
			playerDirection = -1;
			playerIfGoingX = -1;
			playerIfRunWhenEndJump = -1;
			if (playerJumpingUp == 0) {

				playerRunToLeft(); //修改动画
			}

		}
		//  if(e && (e.keyCode==87||e.keyCode==38)){ 								// 向上 


		//   }
		//   if(e && (e.keyCode==83||e.keyCode==40)){ 								// 向下

		//   		alert("向下");
		//    }
		if (e && (e.keyCode == 74 || e.keyCode == 97)) { // 射击

			if (RunOrShoot == 0) {







				if (playerCanShootAgain == true) {
					//游戏没结束时播放枪声
					if (!ifTheGameIsEnd) {
						shootMusic.currentTime = 0;
						shootMusic.play();
					}


					switch (playerDirection) {
						case 1:
							bulletPosX[bulletNowPointer] = playerPosX + 53;
							bulletPosY[bulletNowPointer] = playerPosY + 25 + Math.random() * 10;
							break;
						case -1:
							bulletPosX[bulletNowPointer] = playerPosX - 10;
							bulletPosY[bulletNowPointer] = playerPosY + 25 + Math.random() * 10;
							break;

					}
					bulletDirections[bulletNowPointer] = playerDirection; //子弹方向和player朝向一致
					bullet[bulletNowPointer].style.left = bulletPosX[bulletNowPointer] + "px";
					bullet[bulletNowPointer].style.top = bulletPosY[bulletNowPointer] + "px";
					bullet[bulletNowPointer].style.display = "block";
					bulletNowPointer += 1;
					bulletNowPointer = bulletNowPointer % bulletCount;
					playerCanShootAgain = false;
					setTimeout(function() {
						playerCanShootAgain = true
					}, "200");
				}









			}


		}
		if (e && (e.keyCode == 75 || e.keyCode == 98)) { // 跳跃
			if (playerCanJumpAgain == true) {
				playerIfGoingY = 1; //速度向上
				playerJumpingUp = 1; //处于向上阶段
				playerJump(playerDirection);

				setTimeout(function() {
					playerIfGoingY = -1;
					playerJumpingUp = -1
				}, "400");

				setTimeout(playerEndJump, "800");

				playerCanJumpAgain = false;
			}

		}

		if (RunOrShoot == 1) {
			if (e && (e.keyCode == 76 || e.keyCode == 99)) { // 跑酷模式下闪现
				if(playerCanFlashAgain==true){
					playerPosX+=playerDirection*300;
					playerCanFlashAgain=false;
					setTimeout(function(){playerCanFlashAgain=true;},2000)
				}
				

			}

		}
		
		if (e && (e.keyCode == 85 || e.keyCode == 100)) { // 一键切换游戏模式
			// RunRunRun();
			if(RunOrShoot==0){
				RunRunRun();
				
			}
			else{
				ShootShootShoot();
				// alert(RunOrShoot);
			}
		
		}
		
		



	};
	document.onkeyup = function(event) {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if (e && (e.keyCode == 68 || e.keyCode == 39 || e.keyCode == 65 || e.keyCode == 37)) {

			if (playerJumpingUp == 0) {
				playerStop(playerDirection);
			}

			playerIfRunWhenEndJump = 0;
			playerIfGoingX = 0;
		}
	}

}

function playerMove() {
	var Player = document.getElementById("Player");
	var bg = document.getElementById("bg");

	//判断玩家是否掉到下边界,是则游戏失败
	if (Player.offsetTop > 690) {
		ifTheGameIsEnd = true;
		ifTheGameIsLose = true;
	}
	//判断玩家是否到达终点,是则游戏成功
	if (Player.offsetLeft > 1460) {
		ifTheGameIsEnd = true;
		ifTheGameIsWin = true;
	}

	//玩家超出一定范围后,viewPos才会移动
	//bg到头的时候viewPos也不再移动
	if ((Player.offsetLeft >= 500 && playerIfGoingX == 1 && viewPos <= 7105) || (Player.offsetLeft <= 300 &&
			playerIfGoingX == -1 && viewPos >= 2950)) {
		viewPos += playerIfGoingX * playerSpeedX;

	}

	//player绝对坐标一直在变化
	//但是当player处于地图边缘时,他会遇到空气墙
	if (!((playerPosX < 3000 && playerIfGoingX == -1) || (playerPosX > 9170 && playerIfGoingX == 1))) {
		playerPosX += playerIfGoingX * playerSpeedX;
		playerPosY -= playerIfGoingY * playerSpeedY;
	}


	//地板移动

	for (i = 0; i < floorCount; i++) {
		var floors = document.getElementsByClassName("floor");
		floors[i].style.left = floorsPosX[i] - viewPos + "px";

	}
	//判断player脚下有没有地板
	playerIfOnground = false;
	for (j = 0; j < floorCount; j++) {

		if (floorBoxCollider(Player, floors[j])) {

			playerIfOnground = true;
		}
		// alert(playerIfOnground);
	}

	// 如果player没有站在地板上 ,那他就需要下落


	if (!playerIfOnground) { //如果player没落地
		playerCanJumpAgain = false; //那么他就不能跳跃
		if (playerJumpingUp == 1) { //如果此时为上升阶段
			playerIfGoingY = 1; //向上
		}

		if (playerJumpingUp == -1 || playerJumpingUp == 0) {
			playerIfGoingY = -1; //向下阶段就向下
		}

	}
	if (playerIfOnground) { //如果player脚碰到地面了
		if (playerJumpingUp == 0) { //并且player不是跳跃上升阶段
			playerIfGoingY = 0; //那么他就不再上升或者坠落
			playerCanJumpAgain = true; //并且可以进行跳跃
		}
		if (playerJumpingUp == -1) {
			playerIfGoingY = 0;
			playerCanJumpAgain = true;
			playerEndJump();
		}

	}


	Player.style.left = playerPosX - viewPos + "px";
	Player.style.top = playerPosY + "px";
	// 背景移动
	bg.style.backgroundPositionX = bgPosX - viewPos + "px";


	//判断player是否和A型敌人装上.撞上则游戏结束
	var enemyAs = document.getElementsByClassName("enemyA");
	for (k = 0; k < enemyACount; k++) {
		if (BoxCollider(Player, enemyAs[k])) {
			ifTheGameIsEnd = true;
			ifTheGameIsLose = true;
		}
	}

	//跑酷模式下的得分
	if (RunOrShoot == 1 && !ifTheGameIsEnd) {
		score = Math.floor((playerPosX - 3070) / 100);
		var scoresText = document.getElementById('scores');
		scoresText.innerHTML = "<p>SCORES:</p><h2>" + score + "</h2>";
	}



}

//各种动作
function playerRunToRight() {

	Player.style.animation = "run_right 1s steps(1,start) infinite";

}

function playerRunToLeft() {
	Player.style.animation = "run_left 1s steps(1,start) infinite";
}

function playerStopToRight() {
	Player.style.animation = "stop_right 1s steps(1,start) infinite";
}

function playerStopToLeft() {
	Player.style.animation = "stop_left 1s steps(1,start) infinite";

}

function playerStop(direction) {

	if (1 == direction) {
		playerStopToRight();
	}
	if (-1 == direction) {

		playerStopToLeft();
	}

}

function playerJumpToRight() {
	Player.style.animation = "jump_right 1s steps(1,start) infinite";
}

function playerJumpToLeft() {
	Player.style.animation = "jump_left 1s steps(1,start) infinite";
}

function playerJump(direction) {
	if (direction == 1) {
		playerJumpToRight();
	}
	if (direction == -1) {
		playerJumpToLeft();
	}

}

//player跳跃落地后执行此操作:包括状态更改和动画更改
function playerEndJump() {
	playerIfGoingY = 0;
	playerJumpingUp = 0; //处于非跳跃状态

	if (playerIfOnground) {
		playerCanJumpAgain = true;
	}

	if (playerIfRunWhenEndJump == 0) {
		playerStop(playerDirection);
	}
	if (playerIfRunWhenEndJump == 1) {
		playerRunToRight();
	}
	if (playerIfRunWhenEndJump == -1) {
		playerRunToLeft();
	}

}
