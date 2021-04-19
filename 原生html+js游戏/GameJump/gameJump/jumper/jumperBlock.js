(function() {
	//游戏人物基本信息
	var leadInfo = game.lead.leadInfo;
	//画布
	var canvas = window.canvas;
	//ctx对象
	var ctx = window.ctx;

	//lead人物宽度
	var leadInfo = game.lead.leadInfo;

	//块对象，游戏人物跳的那些块
	function Block() {
		var _this = this;

		//跳台的基本信息(最小、最大宽度，最小，最大高度，颜色随机)，宽度与人物信息有关，高度与画布有关
		this.blockInfo = {
			'minWidth': leadInfo.size.x * 3,
			'maxWidth': leadInfo.size.x * 6,
			'minHeight': canvas.height / 10 * 7.5,
			'maxHeight': canvas.height / 10 * 9 ,
			'color': randomColorNotWhite()
		};
		//跳台数组初始化，简答说就是第一个跳台从10/1左右的位置开始出现
		this.positionArr = [{
			'x1': canvas.width / 10 - leadInfo.size.x,
			'x2': canvas.width / 10 + leadInfo.size.x * 2,
			//ceil是向上取整函数
			'y': Math.ceil(canvas.height / 10 * 9),
			'color': randomColorNotWhite()
		}];
		
		//最大随机得分是6
		this.toMaxRandomScore = 6;
		//跳过都总块数为0
		this.totalBlockNum = 0;

		this.checkBlockIsEnough = checkBlockIsEnough;
		this.createBlock = createBlock;
		this.resetBlockInfo = resetBlockInfo;
		this.draw = draw;

		//检查跳台是否为空
		/*
		实现原理：跳台数组的最后最后一个跳台的位置小于画布的宽度则不为空
		*/
		function checkBlockIsEnough() {
			var canvasWidth = canvas.width;
			var lastPointPosition = _this.positionArr[_this.positionArr.length - 1].x2;
			if (lastPointPosition < canvasWidth) {
				return false;
			} else {
				return true;
			}
		}

		//创建新跳台，this是这一刻的状态，_this是下一刻的状态
		function createBlock() {
			var toMaxRandomScore = _this.toMaxRandomScore;
			var totalBlockNum = _this.totalBlockNum;
			totalBlockNum = totalBlockNum > toMaxRandomScore ? toMaxRandomScore : totalBlockNum;

			var canvasWidth = canvas.width;
			//最后一块就是positionArr数组中的最后一块
			var lastBlock = _this.positionArr[_this.positionArr.length - 1];
			
			//新块高度，随机生成
			var newBlockHeight = Math.ceil(_this.blockInfo.maxHeight - (_this.blockInfo.maxHeight - _this.blockInfo.minHeight) *
				Math.random() * totalBlockNum / toMaxRandomScore);
			//最小距离
			var minDistance1 = Math.round(leadInfo.size.x * 1.5);
			var minDistance2 = Math.abs(_this.positionArr[_this.positionArr.length - 1].y - newBlockHeight);
			var minDistance = minDistance1 > minDistance2 ? minDistance1 : minDistance2;
			//最大距离，最小距离*5
			var maxDistance = minDistance * 5;
			//宽度随机
			var width = Math.ceil(_this.blockInfo.minWidth + (_this.blockInfo.maxWidth - _this.blockInfo.minWidth) * Math.random());
			//距离在最大最小之间随机
			var distance = Math.ceil(minDistance + (maxDistance - minDistance) * randomNoZero() * totalBlockNum /
				toMaxRandomScore);
			//生成新跳台
			var newBlockPosition = {
				'x1': lastBlock.x2 + distance,
				'x2': lastBlock.x2 + distance + width,
				'y': newBlockHeight,
				'color': randomColorNotWhite()
			}
			//加入跳台的数组positionArr
			_this.positionArr.push(newBlockPosition);
			_this.totalBlockNum++;
		}

		//重置跳台信息
		function resetBlockInfo() {
			_this.totalBlockNum = 0;
			_this.positionArr = [{
				'x1': canvas.width / 10 - leadInfo.size.x,
				'x2': canvas.width / 10 + leadInfo.size.x * 2,
				'y': Math.ceil(canvas.height / 10 * 9),
				'color': randomColorNotWhite()
			}];
		}

		//绘制跳台
		/*
		实现原理：foreach遍历跳台数组来一个一个的绘制矩形
		跳台数组中有着每个跳台的信息
		*/
		function draw() {
			console.log("draw进入");
			var blockInfo = _this.blockInfo;
			var positionArr = _this.positionArr;

			positionArr.forEach(function(position) {
				var startX = position.x1;
				var startY = position.y;
				var width = position.x2 - position.x1;
				var height = canvas.height - position.y;
				ctx.beginPath();
				ctx.fillStyle = position.color;
				//fillRect函数绘制一个矩形
				ctx.fillRect(startX, startY, width, height);
			})
		}
	}

	//获取一个非0随机数
	/*
	实现原理:利用random函数获取随机数(0-1)若是0则重复调用此函数，
	若不是0，直接输出
	*/
	function randomNoZero() {
		var num = Math.random();
		while (num) {
			return num;
		}
		return randomNoZero();
	}
	
	//颜色随机，随机获取颜色值
	/*
	实现原理：利用random随机函数和round取整函数获取一个三位数的数字，作为颜色的值
	*/
	function randomColorNotWhite() {
		var colorNum = randomColor();
		
		while (colorNum < 950) {
			console.log(colorNum);
			return '#' + colorNum;
		}
		return randomColorNotWhite();

		function randomColor() {
			return '' + Math.round(Math.random() * 9) + Math.round(Math.random() * 9) + Math.round(Math.random() * 9);
		}
	}

	game.block = new Block();
})();
