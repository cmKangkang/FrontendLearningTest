(function() {
	//简单来说是一个背景对象，用于场景的创建
	function Background() {
		var ctx = window.ctx;
		var canvas = window.canvas;
		var img = window.img;

		this.draw = draw;

		function draw() {
			ctx.drawImage(img.imgObject.background, 0, 0, canvas.width, canvas.height);
		}
	}

	//新建游戏背景
	game.background = new Background();
})();
