


$(function(){
	//banner
	let now = 0;
	let next = 0;
	let len = $('.images li').length;
	let W = $('.images li').width();
	let img = $('.images li');
	let btns = $('.btns-list li');
	let t = setInterval(move,2000);
	
	function move(){
			next++;
			if (next == len) {
				next = 0;
			}	
			btns[now].style.background = '#372F2C';
			btns[next].style.background = 'yellow';
			
			/*img[now].style.left = `${-W}px`;
			img[next].style.left = `${0}px`;*/
			img[next].style.left = `${W}px`;
			/*$(img[now]).animate({left:-W})
			$(img[next]).animate({left:0})*/
			img.eq(next).animate({left:0});
			img.eq(now).animate({left:-W});
			now = next;
		}


//点击
for(let i=0;i<btns.length;i++){
	btns[i].onclick = function(){
		if (i == now) {
			return;
		}
		if (i > now) {
			btns[now].style.background = '#372F2C';
			btns[i].style.background = 'yellow';
			img[i].style.left = W+'px';
			$(img[now]).animate({left:-W})
			$(img[i]).animate({left:0})
			now = next = i;
		}else if(i<now){
			btns[now].style.background = '#372F2C';
			btns[i].style.background = 'yellow';
			img[i].style.left = -W+'px';
			$(img[now]).animate({left:W})
			$(img[i]).animate({left:0})
			now = next = i;
			}
	}
}
//鼠标移入停止
img.on('mouseenter',function(){
	clearInterval(t);
})
img.on('mouseleave',function(){
	t = setInterval(move,2000);
})
//navfixed
let nav = $('nav')
let scrollTop = 0;
let flag = true;
let ch = $(window).innerHeight();

$(window).scroll(function(){
	scroll = $(window).scrollTop();
	if (scroll >= 610) {
		$(nav).css({position:'fixed',top:0,zIndex:999})
//		$('<div>').css({height:108,width:100}).insetAfter($('section.banner'))
	}else{
		$(nav).css({position:'relative',zIndex:999})
	}
	
})
//上面图片移入放大
let Bimg = $('section.lesson ul.advertise li .imgbao > img');
Bimg.on('mouseenter',function(e){
	let element = $(e.target);
	element.css({transform: 'scale(1.3,1.3)'});
});
Bimg.on('mouseleave',function(e){
	let element = $(e.target);
	element.css({transform: 'scale(1,1)'});
});




//////////////////////
})


