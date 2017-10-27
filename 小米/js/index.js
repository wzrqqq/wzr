window.onload = function(){
	//aside
	let aside = document.getElementsByTagName('aside')[0];
	//let lis = aside.getElementsByTagName('li');
	let lis = document.querySelectorAll('aside .left > li');
	let itemss = aside.getElementsByClassName('itemss');
	let flag = true;
	
	//console.log(lis);
	
	
	
	
	
	
	for (let i=0;i<lis.length;i++) {
		lis[i].onmouseover = function(){
			itemss[i].style.display = 'block';
			//console.log(itemss);
		}
		lis[i].onmouseout = function(){
			itemss[i].style.display = 'none';
		}
	}
	///////////////////////////////
	//btns
	let banner = document.getElementsByTagName('section')[0];
	//console.log(banner);
	let btnlist = banner.getElementsByClassName('btn-list')[0];
	let liss = btnlist.getElementsByTagName('li');
	let image =banner.getElementsByClassName('image1')[0];
	let li1 = image.getElementsByTagName('li');
	//console.log(liss);
	/*for (let i=0;i<liss.length;i++) {
		liss[i].onmouseover = function(){
			for (let j=0;j<li1.length;j++) {
				//li1[j].style.display = 'none';
				//animate(li1[j],{opacity:0});
				animate(li1[j],{left:W});
				liss[j].style.background = 'black';
			}
			//li1[i].style.display = 'block';
			//animate(li1[i],{opacity:1});
			animate(li1[i],{left:0});
			liss[i].style.background = '#665E57';
			num = i;
		}
		
	}*/
	
	//左右滑动的动效
	
	for (let i=0;i<liss.length;i++) {
		liss[i].onclick = function(){
			//now	i
			if (i == now) {
				return ;
			}
			if (i>now) {
			liss[now].style.background = 'black';
			liss[i].style.background = '#665E57';
			li1[i].style.left = W+'px';
			animate(li1[now],{left:-W});
			animate(li1[i],{left:0});
			now = next = i;
			}else if (i<now) {
				liss[now].style.background = 'black';
				liss[i].style.background = '#665E57';
				li1[i].style.left = -W+'px';
				animate(li1[now],{left:W});
				animate(li1[i],{left:0});
				now = next = i;
			}
			
		}
	}
	
	
	
	
	
	
	
	
	
	/////////////////////////////////////
	//轮播动效
	
	/*let t;
	let num = 0;
	t = setInterval(move,3000);*/
	
	//直接出来的动效
	/*function move(){
		num++;
		if (num == li1.length) {
			num = 0;
		}
		for (let i=0;i<li1.length;i++) {
			//li1[i].style.display = 'none';
			animate(li1[i],{opacity:0});
			liss[i].style.background = 'black';
		}
		//li1[num].style.display = 'block';
		animate(li1[num],{opacity:1});
		liss[num].style.background = '#665E57';
	}*/
	
	
	
	/*function move1(){
		num--;
		if (num == -1) {
			num = li1.length-1;
		}
		for (let i=0;i<li1.length;i++) {
			//li1[i].style.display = 'none';
			animate(li1[i],{opacity:0});
			liss[i].style.background = 'black';
		}
		//li1[num].style.display = 'block';
		animate(li1[num],{opacity:1});
		liss[num].style.background = '#665E57';
	}*/
	///////////////////////////////////////////
	//左右滑动的动效
	
	let now = 0;
	let next = 0;
	let W = parseInt(getComputedStyle(li1[0],null).width);
	
	let t = setInterval(move,3000);
	function move(){
		next++;
		if (next == li1.length) {
			next = 0;
		}
		li1[next].style.left = `${W}px`;
		liss[now].style.background = 'black';
		liss[next].style.background = '#665E57';
		animate(li1[now],{left:-W});
		animate(li1[next],{left:0},function(){
			flag = true;
		});
		now = next;

		
	}
	
	
	function move1(){
		next--;
		if (next == -1) {
			next = li1.length-1;
		}
		liss[now].style.background = 'black';
		liss[next].style.background = '#665E57';
		li1[next].style.left = `${-W}px`;
		animate(li1[now],{left:W});
		animate(li1[next],{left:0},function(){
			flag = true;
		});
		now = next;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	///////////////////////////////////////////
	//鼠标移入暂停t
	banner.onmouseover = function(){
		clearInterval(t);
	}
	banner.onmouseout = function(){
		
		t = setInterval(move,3000);
	}
	
	///////////////////////////////////////////
	//左右箭头
	
	let btnl = $('.btn-list')[0];
	let left1 = $('.left1',btnl)[0];
	let right1 = $('.right1',btnl)[0];
	//console.log(left1);
	//console.log(right1);
	left1.onclick = function(){
		if (!flag) {
			return ;
			
		}
		flag = false;
		move1();
		liss[now].style.background = 'black';
		liss[next].style.background = '#665E57';
	}
	
	right1.onclick = function(){
		if (!flag) {
			return;
			
		}
		flag = false;
		move();
		liss[now].style.background = 'black';
		liss[next].style.background = '#665E57';
	}
	////////////////////////////////////////
	
	
	//star-shop
	
	let ulstarS = document.querySelector('.shop-list');
	let ulSli = document.querySelector('.shop-list li');
	let a1 = document.querySelector('.a1');
	let a2 = document.querySelector('.a2');
	let w = (ulSli.offsetWidth + parseInt(getComputedStyle(ulSli,null).marginRight))*5;
	ulstarS.innerHTML += ulstarS.innerHTML;
	ulstarS.style.width = w*4+'px';
	let i = 0;
	
	
	a1.onclick = function(){
		
		if (i == 3) {
			a1.style.color = '#CCCCCC';
			return;
		}
		if (i<=3) {
			a1.style.color = 'black';
			a2.style.color = 'black';
		}
		i++;
		
		ulstarS.style.transform = `translateX(-${i*w}px)`;
		
	}
	a2.onclick = function(){
		if (i == 0) {
			a1.style.color = 'black';
			a2.style.color = '#CCCCCC';
			return;
		}
		if (i<=0) {
			a1.style.color = 'black';
			a2.style.color = 'black';
		}
		i--;
		ulstarS.style.transform = `translateX(-${i*w}px)`;
		
	}
	
	/*setTimeout(function(){
	animate(ulstarS,{left:-1240});
	},1000);*/
			
		
	/*setTimeout(function(){
	animate(ulstarS,{left:1240});
	},1000);*/
	////////////////////////////////////////////
	//为你推荐   	weibox-list
	let ulwei = document.querySelector('.shop-list1');
	let ulWli = document.querySelector('.shop-list1 li');
	let ww = (ulWli.offsetWidth + parseInt(getComputedStyle(ulWli,null).marginRight))*5;
	let a11 = document.querySelector('.a11');
	let a22 = document.querySelector('.a22');
	//console.log(ulwei)
	
	a11.onclick = function(){
		ulwei.style.transform = `translateX(-1240px)`;
	}
	
	a22.onclick = function(){
		ulwei.style.transform = `translateX(0)`;
	}
	////////////////////////////////
//	nav下拉图
	let nav = document.querySelectorAll('.nav-middle li');
	let item1 = document.querySelector('.item1');
	//console.log(nav);
	//console.log(item1);
	
	
	nav.forEach((element,index) =>{
		//console.log(element);
		element.addEventListener('mouseenter',function(){
			item1.style.display = 'block';
		})
		element.addEventListener('mouseleave',function(){
			item1.style.display = 'none';
		})
		
	})
	
	
	/*nav.onmouseover = function(){		
		
	}
	nav.onmouseout = function(){
		item1.style.display = 'none';
	}
	*/
	/////////////////////////////////////
	//下面滑动栏
	/*let huadong = document.querySelectorAll('.neibox-list .shop-list li');
	console.log(huadong);
	let anniu1 = document.querySelector('.neibox-list .shop-list li .zuo');
	let anniu2 = document.querySelector('.neibox-list .shop-list li .you');
	console.log(anniu1)
	console.log(anniu2)
	
	
	huadong.onmouseover = function(){
		anniu1.style.display = 'block';
		anniu2.style.display = 'block';
	}*/
		
	//单个左右换图
	let NBiglis = document.querySelectorAll('.neibox-list .shop-list .BigBox li');
	let Nzuo = document.querySelector('.neibox-list .shop-list .BigBox li .zuo');
	let Nyou = document.querySelector('.neibox-list .shop-list .BigBox li .you');
	let Nw = 296;
	let next11 = 0;
	
	Nzuo.onclick = function(){
		next11--;
		if (next11 == 0) {
			next11 = NBiglis.length;
		}
		NBiglis[next11].style.left = `${-Nw}px`;
		/*NBiglis[now].style.left = `${-Nw}px`;
		NBiglis[next].style.left = 0;*/
		animate(NBiglis[now],{left:Nw});
		animate(NBiglis[next11],{left:0});
		now = next11;
	}
	Nyou.onclick = function(){
		next11++;
		if (next11 == NBiglis.length) {
			next11 = 0;
		}
		NBiglis[next11].style.left = `${Nw}px`;
		/*NBiglis[now].style.left = `${-Nw}px`;
		NBiglis[next].style.left = 0;*/
		animate(NBiglis[now],{left:-Nw});
		animate(NBiglis[next11],{left:0});
		now = next11;
	}
	
	
	///////////////////////////////////
}
