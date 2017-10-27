
function Game(){
	this.charArr = ['Q','W','E','R','T','Y','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
	
	this.arr = [];
	this.number = 10;
}
Game.prototype = {
	getChars:function(){
		for (let i=0;i<this.number;i++) {
			this.getchar();
		}
	},
	getchar:function(){
		let num = Math.floor(Math.random()*this.charArr.length);
		let divs = document.createElement('div');
		divs.innerText = this.charArr[num];
		divs.classList.add('char');
		let tops = Math.random()*100;
		let lefts = (innerWidth - 400)*Math.random()+200;
		divs.style.cssText = `
			top : ${tops}px;
			left : ${lefts}px;
			
		`;
		document.body.appendChild(divs);
	}
}
