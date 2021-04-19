(function() {
	//角色人物对象的类
	function Lead() {
		var canvas = window.canvas;
		var ctx = window.ctx;
		var _this = this;

		//角色基本信息初始化
		this.leadInfo = {
			'bodyColor': 'orange',
			'eyeOuterColor': '#fff',
			'eyeInnerColor': '#000',
			'mouthColor': '#fff',
			'aureoleColor': 'red',
			'moveDirection': null,
			'position': {
				'x': canvas.width / 10,
				'y': canvas.height / 10 * 9 - 48,
			},
			'size': {
				'x': 40,
				'y': 40
			}
		}
		//角色状态初始化
		this.state = {
			'isAccunulate': false
		}
		//角色眼睛的初始化
		this.eyeOuterRadius = this.leadInfo.size.x / 12 * 2;
		this.eyeOuterPosition = {
			'left': {
				'x': this.leadInfo.position.x + this.leadInfo.size.x / 12 + this.eyeOuterRadius,
				'y': this.leadInfo.position.y + this.leadInfo.size.y / 12 + this.eyeOuterRadius
			},
			'right': {
				'x': this.leadInfo.position.x + this.leadInfo.size.x / 12 * 3 + this.eyeOuterRadius * 3,
				'y': this.leadInfo.position.y + this.leadInfo.size.y / 12 + this.eyeOuterRadius
			}
		}
		this.eyeInnerDirection = 'center';
		this.eyeInnerRadius = this.eyeOuterRadius / 2;
		this.eyeInnerPosition = {
			'left': {
				'center': {
					'x': this.eyeOuterPosition.left.x,
					'y': this.eyeOuterPosition.left.y
				},
				'top': {
					'x': this.eyeOuterPosition.left.x,
					'y': this.eyeOuterPosition.left.y - this.eyeInnerRadius
				},
				'bottom': {
					'x': this.eyeOuterPosition.left.x,
					'y': this.eyeOuterPosition.left.y + this.eyeInnerRadius
				},
				'left': {
					'x': this.eyeOuterPosition.left.x - this.eyeInnerRadius,
					'y': this.eyeOuterPosition.left.y
				},
				'right': {
					'x': this.eyeOuterPosition.left.x + this.eyeInnerRadius,
					'y': this.eyeOuterPosition.left.y
				}
			},
			'right': {
				'center': {
					'x': this.eyeOuterPosition.right.x,
					'y': this.eyeOuterPosition.right.y
				},
				'top': {
					'x': this.eyeOuterPosition.right.x,
					'y': this.eyeOuterPosition.right.y - this.eyeInnerRadius
				},
				'bottom': {
					'x': this.eyeOuterPosition.right.x,
					'y': this.eyeOuterPosition.right.y + this.eyeInnerRadius
				},
				'left': {
					'x': this.eyeOuterPosition.right.x - this.eyeInnerRadius,
					'y': this.eyeOuterPosition.right.y
				},
				'right': {
					'x': this.eyeOuterPosition.right.x + this.eyeInnerRadius,
					'y': this.eyeOuterPosition.right.y
				}
			}
		};
		this.eyeInnerCurrentPosition = {
			'left': this.eyeInnerPosition.left.center,
			'right': this.eyeInnerPosition.right.center
		};
		this.mouthSize = {
			'x': this.leadInfo.size.x / 12 * 10,
			'y': this.leadInfo.size.y / 12 * 4,
			'radius': this.leadInfo.size.y / 12 * 2
		};
		//角色的嘴巴初始化
		this.mouthIsRect = false;
		this.mouthPosition = {
			'x': this.leadInfo.position.x + this.leadInfo.size.x / 12,
			'y': this.leadInfo.position.y + this.leadInfo.size.x / 12 + this.eyeOuterRadius * 3,
			'cx': this.leadInfo.position.x + this.leadInfo.size.x / 2,
			'cy': this.leadInfo.position.y + this.leadInfo.size.y / 12 * 3 + this.eyeOuterRadius * 2 + this.mouthSize.radius
		};
		//蓄力光圈初实话
		this.aureoleRadius = {
			'min': this.leadInfo.size.x * 0.4,
			'max': this.leadInfo.size.x,
			'current': this.leadInfo.size.x,
			'step': 10 / 1000 * 5
		}
		this.aureolePosition = {
			'x': this.leadInfo.position.x + this.leadInfo.size.x / 2,
			'y': this.leadInfo.position.y + this.leadInfo.size.y / 2
		};
		//运动信息初始化
		this.sportInfo = {
			'needAddSpeed': {
				'x': false,
				'y': true
			},
			'addSpeed': {
				'x': 300,
				'y': 600
			},
			'maxSpeed': {
				'x': 240,
				'y': 1200
			},
			'speed': {
				'x': 0,
				'y': 0
			}
		}
		//上面的全是属性
		
		//下面的是角色内的操作
		//渲染函数
		this.draw = draw;
		//改变嘴巴状态(方块，圆形)
		this.changemouthState = changemouthState;
		//改变眼睛状态
		this.changeEyeState = changeEyeState;
		//改变移动状态
		this.move = move;
		//更新所有的位置
		this.updateLeadAllPosition = updateLeadAllPosition;
		//
		this.accunulateJump = accunulateJump;
		//计算人物位置
		this.computeLeadPosition = computeLeadPosition;
		//更新人物位置和速度
		this.updateLeadPositionAndSpeed = updateLeadPositionAndSpeed;
		//改变加速度
		this.changeAddSpeed = changeAddSpeed;
		//改变速度
		this.changeSpeed = changeSpeed;
		//改变蓄力光圈闪烁的速度
		this.changeAureoleShrinkSpeed = changeAureoleShrinkSpeed;
		//是否现在虚拟光圈
		this.changeAureoleIsShow = changeAureoleIsShow;

		//渲染函数
		/*
		主要功能：刷新人物所有信息后渲染人物
		*/
		function draw() {
			_this.updateLeadAllPosition();

			var pi2 = 2 * Math.PI;
			var leadInfo = _this.leadInfo;
			var eyeOuterRadius = _this.eyeOuterRadius;
			var eyeOuterPosition = _this.eyeOuterPosition;
			var eyeInnerCurrentPosition = _this.eyeInnerCurrentPosition;
			var eyeInnerRadius = _this.eyeInnerRadius;
			var eyeInnerPosition = _this.eyeInnerPosition;
			var mouthIsRect = _this.mouthIsRect;
			var mouthSize = _this.mouthSize;
			var mouthPosition = _this.mouthPosition;
			var aureoleRadius = _this.aureoleRadius;
			var aureolePosition = _this.aureolePosition;

			// drawAureole
			if (_this.state.isAccunulate) {
				ctx.beginPath();
				ctx.strokeStyle = _this.leadInfo.aureoleColor;
				ctx.arc(aureolePosition.x, aureolePosition.y, aureoleRadius.current, 0, pi2);
				ctx.stroke();
			}
			// draw body
			ctx.beginPath();
			ctx.fillStyle = leadInfo.bodyColor;
			ctx.fillRect(leadInfo.position.x, leadInfo.position.y, leadInfo.size.x, leadInfo.size.y);
			// draw eyeOuter
			ctx.beginPath();
			ctx.fillStyle = leadInfo.eyeOuterColor;
			ctx.arc(eyeOuterPosition.left.x, eyeOuterPosition.left.y, eyeOuterRadius, 0, pi2);
			ctx.fill();
			ctx.beginPath();
			ctx.arc(eyeOuterPosition.right.x, eyeOuterPosition.right.y, eyeOuterRadius, 0, pi2);
			ctx.fill();
			// draw eyeInner
			ctx.beginPath();
			ctx.fillStyle = leadInfo.eyeInnerColor;
			ctx.arc(eyeInnerCurrentPosition.left.x, eyeInnerCurrentPosition.left.y, eyeInnerRadius, 0, pi2);
			ctx.fill();
			ctx.beginPath();
			ctx.arc(eyeInnerCurrentPosition.right.x, eyeInnerCurrentPosition.right.y, eyeInnerRadius, 0, pi2);
			ctx.fill();
			// draw mouth 
			ctx.beginPath();
			ctx.fillStyle = leadInfo.mouthColor;
			if (mouthIsRect) {
				ctx.fillRect(mouthPosition.x, mouthPosition.y, mouthSize.x, mouthSize.y);
			} else {
				ctx.arc(mouthPosition.cx, mouthPosition.cy, mouthSize.radius, 0, pi2);
				ctx.fill();
			}
		}

		//改变嘴巴的状态(圆、方块)
		function changemouthState(state) {
			if (state === 'circle') {
				_this.mouthIsRect = false;
			} else if (state === 'square') {
				_this.mouthIsRect = true;
			}
		}

		//改变眼睛状态(往上，下，左，右看)
		function changeEyeState(position) {
			if (position === 'top' || position === 'bottom' || position === 'left' || position === 'right' || position ===
				'center') {
				_this.eyeInnerDirection = position;
				_this.eyeInnerCurrentPosition.left = _this.eyeInnerPosition.left[position];
				_this.eyeInnerCurrentPosition.right = _this.eyeInnerPosition.right[position];
			}
		}

		//更新人物所有位置(眼睛，嘴巴，虚拟光圈)
		function updateLeadAllPosition() {
			computeEyeOuterPosition();
			computeEyeInnerPosition();
			computemouthPosition();
			computeAureolePosition();

			//计算眼白位置
			function computeEyeOuterPosition() {
				_this.eyeOuterPosition = {
					'left': {
						'x': _this.leadInfo.position.x + _this.leadInfo.size.x / 12 + _this.eyeOuterRadius,
						'y': _this.leadInfo.position.y + _this.leadInfo.size.y / 12 + _this.eyeOuterRadius
					},
					'right': {
						'x': _this.leadInfo.position.x + _this.leadInfo.size.x / 12 * 3 + _this.eyeOuterRadius * 3,
						'y': _this.leadInfo.position.y + _this.leadInfo.size.y / 12 + _this.eyeOuterRadius
					}
				};
			}
			//计算眼黑位置
			function computeEyeInnerPosition() {
				_this.eyeInnerPosition = {
					'left': {
						'center': {
							'x': _this.eyeOuterPosition.left.x,
							'y': _this.eyeOuterPosition.left.y
						},
						'top': {
							'x': _this.eyeOuterPosition.left.x,
							'y': _this.eyeOuterPosition.left.y - _this.eyeInnerRadius
						},
						'bottom': {
							'x': _this.eyeOuterPosition.left.x,
							'y': _this.eyeOuterPosition.left.y + _this.eyeInnerRadius
						},
						'left': {
							'x': _this.eyeOuterPosition.left.x - _this.eyeInnerRadius,
							'y': _this.eyeOuterPosition.left.y
						},
						'right': {
							'x': _this.eyeOuterPosition.left.x + _this.eyeInnerRadius,
							'y': _this.eyeOuterPosition.left.y
						}
					},
					'right': {
						'center': {
							'x': _this.eyeOuterPosition.right.x,
							'y': _this.eyeOuterPosition.right.y
						},
						'top': {
							'x': _this.eyeOuterPosition.right.x,
							'y': _this.eyeOuterPosition.right.y - _this.eyeInnerRadius
						},
						'bottom': {
							'x': _this.eyeOuterPosition.right.x,
							'y': _this.eyeOuterPosition.right.y + _this.eyeInnerRadius
						},
						'left': {
							'x': _this.eyeOuterPosition.right.x - _this.eyeInnerRadius,
							'y': _this.eyeOuterPosition.right.y
						},
						'right': {
							'x': _this.eyeOuterPosition.right.x + _this.eyeInnerRadius,
							'y': _this.eyeOuterPosition.right.y
						}
					}
				};
				_this.eyeInnerCurrentPosition.left = _this.eyeInnerPosition.left[_this.eyeInnerDirection];
				_this.eyeInnerCurrentPosition.right = _this.eyeInnerPosition.right[_this.eyeInnerDirection];
			}
			//计算嘴巴的位置
			function computemouthPosition() {
				_this.mouthPosition = {
					'x': _this.leadInfo.position.x + _this.leadInfo.size.x / 12,
					'y': _this.leadInfo.position.y + _this.leadInfo.size.x / 12 + _this.eyeOuterRadius * 3,
					'cx': _this.leadInfo.position.x + _this.leadInfo.size.x / 2,
					'cy': _this.leadInfo.position.y + _this.leadInfo.size.y / 12 * 3 + _this.eyeOuterRadius * 2 + _this.mouthSize.radius
				};
			}
			//计算蓄力光圈位置
			function computeAureolePosition() {
				var aureoleRadius = _this.aureoleRadius;
				_this.aureolePosition.x = _this.leadInfo.position.x + _this.leadInfo.size.x / 2;
				_this.aureolePosition.y = _this.leadInfo.position.y + _this.leadInfo.size.y / 2;
				aureoleRadius.current = aureoleRadius.current - aureoleRadius.step;
				if (aureoleRadius.current < aureoleRadius.min) {
					aureoleRadius.current = aureoleRadius.max;
				}
				_this.aureoleRadius.current = aureoleRadius.current;
			}
		}

		//移动，改变人物移动的方向
		function move(direction) {
			if (direction === 'left' || direction === 'right' || direction === 'top' || direction === 'bottom') {
				_this.leadInfo.moveDirection = direction;
			}
		}

		function accunulateJump(accunulateTime) {
			var accunulateSpeedPerTime = -1200;

			if (_this.sportInfo.needAddSpeed.y) {
				var accunulateSpeed = accunulateSpeedPerTime * accunulateTime;
				_this.sportInfo.speed.y = accunulateSpeed;
			}
		}

		//更新人物的位置
		function computeLeadPosition(intervalTime) {
			var addSpeed = _this.sportInfo.addSpeed;
			var maxSpeed = _this.sportInfo.maxSpeed;
			var position = _this.leadInfo.position;
			var speed = _this.sportInfo.speed;
			var moveDirection = _this.leadInfo.moveDirection;

			if (moveDirection === 'left' || moveDirection === 'right' || moveDirection === 'top' || moveDirection === 'bottom' ||
				moveDirection === null) {
				var xResult = computeXYPosition('x');
				var yResult = computeXYPosition('y');
				return {
					'x': xResult,
					'y': yResult
				}
			}
			
			//计算xy的坐标
			function computeXYPosition(direction) {
				if (_this.sportInfo.needAddSpeed[direction]) {
					var currentSpeed = speed[direction] + addSpeed[direction] * (intervalTime / 1000);
					var computedSpeed = currentSpeed > maxSpeed[direction] ? maxSpeed[direction] : currentSpeed;
					return {
						'before': position[direction],
						'after': position[direction] + computedSpeed * (intervalTime / 1000),
						'speed': computedSpeed
					};
				} else {
					return {
						'before': position[direction],
						'after': position[direction] + speed[direction] * (intervalTime / 1000),
						'speed': speed[direction]
					};
				}
			}
		}

		//更新人物的位置和速度
		function updateLeadPositionAndSpeed(position) {
			updateXYPositionAndSpeed('x');
			updateXYPositionAndSpeed('y');

			function updateXYPositionAndSpeed(direction) {
				_this.sportInfo.speed[direction] = position[direction].speed;
				_this.leadInfo.position[direction] = position[direction].after;
			}
		}

		//改变加速度
		function changeAddSpeed(direction, addSpeed) {
			_this.sportInfo.addSpeed[direction] = addSpeed;
		}

		//改变速度
		function changeSpeed(direction, speed) {
			_this.sportInfo.speed[direction] = speed;
		}

		//蓄力光圈闪烁的速度
		/*
		实现原理:加快时间间隔让视觉效果更快
		*/
		function changeAureoleShrinkSpeed(speed, intervalTime) {
			var speed = speed || 5;
			var intervalTime = intervalTime || 5;
			_this.aureoleRadius.step = speed / 1000 * intervalTime;
		}

		//蓄力光圈显示状态
		/*
		实现原理：通过state属性来判断是否显示蓄力光圈
		*/
		function changeAureoleIsShow(state) {
			if (state === true || state === false) {
				_this.state.isAccunulate = state;
			}
		};
	}

	//创建角色对象
	game.lead = new Lead();
})();
