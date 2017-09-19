window.onload = function(){
	//aside
	let aside = document.getElementsByTagName('aside')[0];
	let lis = aside.getElementsByTagName('li');
	let itemss = aside.getElementsByClassName('itemss');
	
	for (let i=0;i<lis.length;i++) {
		lis[i].onmouseover = function(){
			itemss[i].style.display = 'block';
		}
		lis[i].onmouseout = function(){
			itemss[i].style.display = 'none';
		}
	}
	
	//btns
	let banner = document.getElementsByTagName('section')[0];
	//console.log(banner);
	let btnlist = banner.getElementsByClassName('btn-list')[0];
	let liss = btnlist.getElementsByTagName('li');
	let image =banner.getElementsByClassName('image1')[0];
	let li1 = image.getElementsByTagName('li');
	//console.log(liss);
	for (let i=0;i<liss.length;i++) {
		liss[i].onmouseover = function(){
			for (let j=0;j<li1.length;j++) {
				li1[j].style.display = 'none';
				liss[j].style.background = 'black';
			}
			li1[i].style.display = 'block';
			liss[i].style.background = '#665E57';
			num = i;
		}
		
	}
	
	
	/////////////////////////////////////
	//轮播动效
	
	let t;
	let num = 0;
	t = setInterval(move,2000);
	
	function move(){
		num++;
		if (num == li1.length) {
			num = 0;
		}
		for (let i=0;i<li1.length;i++) {
			li1[i].style.display = 'none';
			liss[i].style.background = 'black';
		}
		li1[num].style.display = 'block';
		liss[num].style.background = '#665E57';
	}
	
	
	
	function move1(){
		num--;
		if (num == -1) {
			num = li1.length-1;
		}
		for (let i=0;i<li1.length;i++) {
			li1[i].style.display = 'none';
			liss[i].style.background = 'black';
		}
		li1[num].style.display = 'block';
		liss[num].style.background = '#665E57';
	}
	///////////////////////////////////////////
	//鼠标移入暂停t
	banner.onmouseover = function(){
		clearInterval(t);
	}
	banner.onmouseout = function(){
		t = setInterval(move,2000);
	}
	
	///////////////////////////////////////////
	//左右箭头
	
	let btnl = $('.btn-list')[0];
	let left1 = $('.left1',btnl)[0];
	let right1 = $('.right1',btnl)[0];
	//console.log(left1);
	//console.log(right1);
	left1.onclick = function(){
		move1();
	}
	
	right1.onclick = function(){
		move();
	}
	
}
