/*
 	属性
 		哪些字母、个数有多少、速度、位置、生命值、分数
 	方法
 		产生字母、字母下落、消除、重新开始、下一关
 * */

function Game(){
	this.charArr = [
	['Q','img/Q.jpg'],
	['W','img/W.jpg'],
	['E','img/E.jpg'],
	['R','img/R.jpg'],
	['T','img/T.jpg'],
	['Y','img/Y.jpg'],
	['U','img/U.jpg'],
	['O','img/O.jpg'],
	['I','img/I.jpg'],
	['P','img/P.jpg'],
	['A','img/A.jpg'],
	['S','img/S.jpg'],
	['D','img/D.jpg'],
	['F','img/F.jpg'],
	['G','img/G.jpg'],
	['H','img/H.jpg'],
	['J','img/J.jpg'],
	['K','img/K.jpg'],
	['L','img/L.jpg'],
	['Z','img/Z.jpg'],
	['X','img/X.jpg'],
	['C','img/C.jpg'],
	['V','img/V.jpg'],
	['B','img/B.jpg'],
	['N','img/N.jpg'],
	['M','img/M.jpg']
	];
	
	//存储页面中的元素
	this.current = [];
	this.position = [];
	//页面中能产生的个数
	this.number = 10;
	this.speed = 10;
	this.gk =10;
	this.score = 0;
	this.words = [];
}
Game.prototype = {
	
	start:function(){
		this.getChars();
		this.drop();
		this.key();
	},
	//产生字符
	getChars:function(){
		for (let i=0;i<this.number;i++) {
			this.getChar();
		}
	},
	checkRepeat:function(word){
		let flag = this.words.some(function(value){
			return value == word;
		})
		return flag; 
	},
	getChar:function(){
		let num = Math.floor(Math.random()*this.charArr.length);
		//this.charArr[num]
		let divs = document.createElement('div');
		//divs.innerText = this.charArr[num];
		let word;
		do{
			num = Math.floor(Math.random()*this.charArr.length);
			word = this.charArr[num][0];
		}while(this.checkRepeat(word))
		divs.innerHTML = word;
		divs.classList.add('char');
		//top left
		let tops = Math.random()*100;
		let lefts = (innerWidth - 400)*Math.random()+200;
		while(this.checkPosition(lefts)){
			lefts = (innerWidth - 400)*Math.random()+200;
		}
		
		divs.style.cssText = `
				top:${tops}px;
				left:${lefts}px;
				background-image:url(${this.charArr[num][1]});
				
		`;
		//divs.style.background = color();
		document.body.appendChild(divs);
		this.current.push(divs);
		this.position.push(lefts);
		this.words.push(word);
	},
	checkPosition:function(lefts){
		let flag = this.position.some(function(value){
			return Math.abs(value - lefts) < 60;
		})
		return flag;
	},
	drop:function(){
		let that = this;
		this.t = setInterval(function(){
			for (let i=0;i<that.current.length;i++) {
				let tops = that.current[i].offsetTop + that.speed;
				that.current[i].style.top = `${tops}px`;
				if (tops >= 500) {
					document.body.removeChild(that.current[i]);
					that.current.splice(i,1);
					that.getChar();
				}
			}
		},300)
	},
	
	key:function(){
		let that = this;
		document.onkeydown = function(e){
			//e.keycode	divs.innerText
			for (let i=0;i<that.current.length;i++) {
				let fenshu = document.querySelector('.defen span');
				let guan = document.querySelector('.guan span');
				//fenshu.innerHTML = '';
				if(that.current[i].innerText == String.fromCharCode(e.keyCode)){
					console.log(e.keyCode);
					that.score += 2;		
					fenshu.innerHTML = `${that.score}`;					
					document.body.removeChild(that.current[i]);
					that.current.splice(i,1);
					that.position.splice(i,1);
					that.words.splice(i,1);
					that.getChar();
					if (that.score == that.gk) {
						that.next();
						guan.innerText++;
					}
				}
			}
			
		}
	},
	next:function(){
		clearInterval(this.t);
		for (let i=0;i<this.current.length;i++) {
			document.body.removeChild(this.current[i]);
		}
		this.current.length = 0;
		this.position.length = 0;
		this.words.length = 0;
		this.number++;
		this.score = 0;
		this.start();
	},
	restart:function(){
		clearInterval(this.t);
		for (let i=0;i<this.current.length;i++) {
			document.body.removeChild(this.current[i]);
		}
		this.current.length = 0;
		this.position.length = 0;
		this.words.length = 0;
		this.number = 5;
		this.gk = 10;
		this.start();
	},
	ending:function(){
		clearInterval(this.t);
		for (let i=0;i<this.current.length;i++) {
			document.body.removeChild(this.current[i]);
		}
		this.current.length = 0;
		this.position.length = 0;
		this.words.length = 0;
		this.number = 5;
		this.gk = 10;
	}
	
}
function color(){
	let str = 'rgba(';
	for(let i=0;i<3;i++){
		str = str + Math.round(Math.random()*255) + ',';
	}
					
	str = str.slice(0,-1);
	return str+ ','+ '0.4'+')'
	}
	console.log(color());