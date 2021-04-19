var bgPosX=0;			//bg的位置


//背景音乐播放初始化
function bgMusicPlay(){
	var bgMusic=document.getElementById("bgMusic");
	if(!ifTheGameIsEnd){
		if(bgMusic.paused){
			bgMusic.play();
			bgMusic.volume=0.5;
		}
	}
	else{
		bgMusic.pause();
	}
	
}