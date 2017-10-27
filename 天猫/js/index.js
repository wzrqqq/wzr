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
	/*for (let i=0;i<liss.length;i++) {
		
		
		liss[i].onmouseover = function(){
			for (let j=0;j<img.length;j++) {
				//img[j].style.display = 'none';
				animate(img[j],{opacity:0});
			}
			//img[i].style.display = 'block';
			animate(img[i],{opacity:1});
			//liss[i].style.background = 'red';
			for (let j=0;j<liss.length;j++) {
				liss[j].style.background = '#ccc';
			}
			liss[i].style.background = '#656665';
			num = i;
		}
		
	}*/
	///////////////////////////////////////////
	//左右滑动动效
	for(let i=0;i<liss.length;i++){
		liss[i].onclick = function(){
			if(i == now){
				return ;
			}
			if (i>now) {
				liss[i].style.background = '#656665';
				liss[now].style.background = '#CCCCCC';
				img[i].style.left = W+'px';
				animate(img[now],{left:-W});
				animate(img[i],{left:0});
				now = next = i;
			}else if(i<now){
				liss[i].style.background = '#656665';
				liss[now].style.background = '#CCCCCC';
				img[i].style.left = -W+'px';
				animate(img[now],{left:W});
				animate(img[i],{left:0});
				now = next = i;
			}
		}
	}
	
	

//////////////////////////////////////////////////////////	
	//轮播图动效	直接出来的效果
	/*let num = 0;
	let t;
	t = setInterval(move,2000);
	
	function move(){
		num++;
		if (num == img.length) {
			num = 0;
		}
		for (let i=0;i<img.length;i++) {
			//img[i].style.display = 'none';
			animate(img[i],{opacity:0});
			liss[i].style.background = '#CCCCCC';
		}
		//img[num].style.display = 'block';
		animate(img[num],{opacity:1});
		liss[num].style.background = '#656665';
	}*/
	
	//左右滑动的动效
	let next = 0;
	let W = parseInt(getComputedStyle(img[0],null).width);
	let t = setInterval(move,2000);
	
	function move(){
		next++;
		if (next == img.length) {
			next = 0;
		}
		liss[now].style.background = '#CCCCCC';
		liss[next].style.background = '#656665'
		img[next].style.left = `${W}px`;
		animate(img[now],{left:-W});
		animate(img[next],{left:0})
		now = next;
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
	//优化页面		按需加载
	let ch = innerHeight;
	let section = document.querySelectorAll('section.biao');
	//let Slast = document.querySelectorAll('section.biao:last-of-type');
	let sectionarr = [];
	let search = document.querySelector('.nav-top');
	let flag1 = true;
	let asideL = document.querySelector('.asideleft');
	let asideA = document.querySelectorAll('.asideleft a');
	let colorL = ['#64C333','red','#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#ccc','black']
	let arrS = [];
	
	console.log(section);
	console.log(asideA);
	console.log(colorL);
	
	//侧边导航
	section.forEach(element => {
		arrS.push(element.offsetTop);
	})
	console.log(arrS);
	
	
	section.forEach(element => {
		sectionarr.push(element.offsetTop);
	})
		
	window.onscroll = function(){
		let scrollTop = document.documentElement.scrollTop;
		//console.log(scrollTop);
		if (scrollTop >= 800) {
			if (flag1) {
				flag1 = !flag1;
				animate(search,{top:0});
				animate(asideL,{left:92,top:179});
				//animate(asideL,{top:179});
			}
			
		}else{
			if (!flag1) {
				flag1 = !flag1;
				animate(search,{top:-50});
				animate(asideL,{top:328,left:-36})
			}
		}
		/*if(screenTop >= 4533){
			Slast.Style.background = 'pink'
		}*/
		
		sectionarr.forEach((value,index) => {
			if (ch + scrollTop >= value) {
				let imgs = section[index].getElementsByTagName('img');
				for (let i=0;i<imgs.length;i++) {
					imgs[i].src = imgs[i].getAttribute('src');
				}
			}
		});
		//侧边导航
		
		/*if (!flag1) {
			return;
		}*/
		arrS.forEach((value,index) => {
			if (scrollTop + ch >= value + 250) {
				for (let i=0;i<asideA.length;i++) {
					asideA[i].style.background = '#626262';
				}
				asideA[index].style.background = colorL[index];
			}
		})
		
		
		
		
		
	}
///////////////////////////////////////////////////////
	//网站导航
	let webli = document.querySelector('header.top .topbox .topbox-right .web-nav');
	let webnav = document.querySelector('.webnav');
	webli.onmouseover = function(){
		webnav.style.display = 'block'
	}
	webli.onmouseout = function(){
		webnav.style.display = 'none'
	}
///////////////////////////////////////////////
	//右边导航
	let divss = document.querySelectorAll('.right-dao>div');
    let itemsss = document.getElementsByClassName('leitem');
    console.log(itemsss)
    for (let i=0;i<divss.length-1;i++) {
   	    divss[i].onmouseover = function(){
   	    	itemsss[i].style.display = 'block';
   	    	animate(itemsss[i],{left:-92});
   	    }
   	     divss[i].onmouseout = function(){
   	     	itemsss[i].style.display = 'none';
   	    	animate(itemsss[i],{left:-101});
   	    }
   	    
    }
	

	
	
	
	
	
	
	
	
	
	

//////////////////////////////////////////////////////////////////////////////////////
}




