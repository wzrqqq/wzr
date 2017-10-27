/*
 
 	属性
 		长度、方向、速度、边界
 	
 	方法
*/

function Snake(){
	this.snake = ['5_0','5_1','5_2'];
	this.sence = document.querySelector('div.sence');
}
Snake.prototype = {
	start:function(){
		this.drawLine();
		this.drawSnake();
		
	},
	drawLine:function(){
		for (let i=0;i<20;i++) {
			for (let j=0;j<20;j++) {
				this.sence.innerHTML += `<div class="block" id="${i}_${j}"></div>`;
			}
		}
	},
	drawSnake:function(){
		this.snake.forEach(element =>{
			document.getElementById(element).classList.add('hot');
			console.log(document.getElementById(element))
			
		})
	},
	move:function(){
		/*
			旧头(X,Y)
			新头(x+1，y)
		*/
		let oldt = this.snake[this.snake.length-1];
		let arr = oldt.split('_');
		let newt = `${arr[0]*1+1}_${arr[1]*1}`;
		this.snake.push(newt);
		let weiba = this.snake.shift();
		document.getElementById(weiba).classList.remove('hot');
		this.drawSnake();
	}
}	
		
		
		
		
		
		
		
		
		
		
		
		
		
