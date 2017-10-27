

function Snake(){
	this.snake = ['5_0','6_0','7_0','8_0'];
	this.sence = document.querySelector('div.sence');
	this.direction = 40;
	this.food = '';
	this.flag = {'5_0':true,'6_0':true,'7_0':true,'8_0':true};
	this.score = document.querySelector('.score span');
	this.fen = 0;
	
	
}
Snake.prototype = {
	start:function(){
		this.drawLine();
		this.drawSnake();
		this.move();
		this.key();
		this.dropFood();
	},
	drawLine:function(){
		for (let i=0;i<20;i++) {
			for (let j=0;j<20;j++) {
				this.sence.innerHTML += `<div class="block" id="${i}_${j}"></div>`;
			}
		}
	},
	//画蛇
	drawSnake:function(){
		this.snake.forEach(element =>{
			document.getElementById(element).classList.add('hot');
		})
		
	},
	move:function(){
		/*let oldt = this.snake[this.snake.length-1];
		let arr = oldt.split('_');
		let newt = `${arr[0]*1+1}_${arr[1]*1}`;
		this.snake.push(newt);
		let weiba = this.snake.shift();
		document.getElementById(weiba).classList.remove('hot');
		this.drawSnake();*/
		let that = this;
		let newt = '';
		this.t = setInterval(function(){
			let oldt = that.snake[that.snake.length-1];
			let arr = oldt.split('_');//1_0   '1''0'
			
			if (that.direction == 37) {
				newt = `${arr[0]*1}_${arr[1]*1-1}`;
			}else if(that.direction == 38){
				newt = `${arr[0]*1-1}_${arr[1]*1}`;
			}else if(that.direction == 39){
				newt = `${arr[0]*1}_${arr[1]*1+1}`;
			}else if(that.direction == 40){
				newt = `${arr[0]*1+1}_${arr[1]*1}`;
			}
			let newt1 = newt.split('_');
				
			
			if (newt1[1]<0 || newt1[1]>19 || newt1[0]<0 || newt1[0]>19 || that.flag[newt]) {
				clearInterval(that.t);
				alert('game over');
			}
			//新头坐标 == 实物坐标
			if(newt == that.food){
				that.fen++;
				that.score.innerHTML = that.fen;
				that.snake.push(newt);
				that.flag[newt] = true;
				document.getElementById(that.food).style.background = 'pink';
				that.dropFood();
				
			}else{
				that.snake.push(newt);
				that.flag[newt] = true;
				let weiba = that.snake.shift();
				delete that.flag[weiba];
				document.getElementById(weiba).classList.remove('hot');
			}
			/*that.snake.push(newt);
			that.flag[newt] = true;
			let weiba = that.snake.shift();
			delete that.flag[weiba ];
			document.getElementById(weiba).classList.remove('hot');*/
			that.drawSnake();
			
		},300)
	},
	key:function(){
		
		document.onkeydown = function(e){
			let keycode = e.keyCode;
			if (Math.abs(keycode - this.direction) == 2) {
				return;
			}
			this.direction = keycode;
		}.bind(this)
		
	},
	dropFood:function(){
		let x = Math.floor(Math.random()*20);
		let y = Math.floor(Math.random()*20);
		do{
			x = Math.floor(Math.random()*20);
			y = Math.floor(Math.random()*20);
		}while(this.flag[`${x}_${y}`]);
		this.food = `${x}_${y}`;
		document.getElementById(this.food).style.background = 'red';				
	},
	
	
	
	
	
	
}
