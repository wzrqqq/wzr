//aside  动效
window.onload = function(){
	let aside = document.getElementsByTagName('aside')[0];
	let lis = aside.getElementsByTagName('li');
	let itemss = document.getElementsByClassName('itemss');
	/*console.log(itemss);
	console.log(lis);*/
	for (let i = 0; i < lis.length; i++) {
		lis[i].onmouseover = function(){
			//let itemss = this.getElementsByClassName('itemss')[0];
			itemss[i].style.display = 'block';
		}
		lis[i].onmouseout = function(){
			//let itemss = this.getElementsByClassName('itemss')[0];
			itemss[i].style.display = 'none';
		}
	}
	
	
	
	//banner 的btns的动效
	let circle = document.getElementsByTagName('section')[2];
	let ul = circle.getElementsByClassName('circle-list')[0];
	let liss = ul.getElementsByTagName('li');
	let imagebox = circle.getElementsByClassName('imagebox')[0];
	let img = imagebox.getElementsByTagName('img');
	let now = 0;
	//console.log(ul);
	//console.log(liss);
	//console.log(img);
	for (let i=0;i<liss.length;i++) {
		/*liss[i].onmouseover = function(){
			img[i].style.zIndex = '2';
		}
		liss[i].onmouseout = function(){
			img[i].style.zIndex = '1';
		}*/
		
		liss[i].onmouseover = function(){
			for (let j=0;j<img.length;j++) {
				img[j].style.display = 'none';
			}
			img[i].style.display = 'block';
			//liss[i].style.background = 'red';
			for (let j=0;j<liss.length;j++) {
				liss[j].style.background = '#ccc';
			}
			liss[i].style.background = '#656665';
			num = i;
		}
		
	}
	
	
	

//////////////////////////////////////////////////////////	
	//轮播图动效
	let num = 0;
	let t;
	t = setInterval(move,2000);
	
	function move(){
		num++;
		if (num == img.length) {
			num = 0;
		}
		for (let i=0;i<img.length;i++) {
			img[i].style.display = 'none';
			liss[i].style.background = '#CCCCCC';
		}
		img[num].style.display = 'block';
		liss[num].style.background = '#656665';
	}
	
	//////////////////////////////////////////////////////////	
	//鼠标移入时暂停t
	circle.onmouseover = function(){
		clearInterval(t);
	}
	circle.onmouseout = function(){
		t = setInterval(move,2000);
		
	}
	
	//////////////////////////////////////////////////////////

















}




