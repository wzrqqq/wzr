$(function(){
	let container = $('section.container');
	let lis = $('ul.pictures li .zhe');
	let mask = $('.contentC .mask');
	let liss = $('ul.pictures li');
	let mImg = $('.mask > img');
	let close = $('.close');
	let btnL = $('.btnL');
	let btnR = $('.btnR');
	let index = 0;
	let scrollTop = 0;
	let h = $(window).innerHeight();
	/*console.log(h)
	$(window).scroll(function(){
		scrollTop = $(window).scrollTop();
	})*/
	
	lis.on('click',function(){
		
		let src = $(this).parent().find('img').prop('src');
//		console.log(src)
		index = $(this).parent().index();
		console.log(index)
		mImg.prop('src',src);
		mask.addClass('active');	
	})
	close.click(function(){
		mask.removeClass('active');
	})
	btnL.on('click',function(){
		index--;
		if (index < 0) {
			index = lis.length-1;
		}
		let src = $('img',liss[index]).prop('src');
		console.log(src)
		mImg.prop('src',src)
	})
	btnR.on('click',function(){
		index++;
		if (index > lis.length-1) {
			index = 0;
		}
		let src = $('img',liss[index]).prop('src');
		mImg.prop('src',src)
	})
})