$(function(){
	/*产生扑克
	 s黑桃
	 h红桃
	 c梅花
	 d方块
	 * */
	let color = ['c','d','h','s'];
	let poke = [];
	let flag = {};
	
/*	for (let i=0;i<52;i++) {
		let hua = color[Math.floor(Math.random()*color.length)];
		let num = Math.floor(Math.random()*13+1);
		while(flag[`${hua}_${num}`]){
			hua = color[Math.floor(Math.random()*color.length)];
			num = Math.floor(Math.random()*13+1);
		}
		poke.push({hua,num});
		flag[`${hua}_${num}`] = true;
	}*/
	while(poke.length<52){
		let hua = color[Math.floor(Math.random()*color.length)];
		let num = Math.floor(Math.random()*13+1);
		if (!flag[`${hua}_${num}`]) {
			poke.push({hua,num});
			flag[`${hua}_${num}`] = true;
		}
	}
	let index = 0;
	for (let i=0;i<7;i++) {
		for (let j=0;j<=i;j++) {
			let left = 300-50*i + 100*j;
			let top = 60*i;
			//`url(../img/${poke[index].num}${poke[index].hua}.png)`
			//.html(`${poke[index]['hua']}---${poke[index]['num']}`)
			$('<div>').addClass('poke box')
			.attr('id',`${i}_${j}`)
			.data('num',poke[index].num)
			.css('background-image',`url(img/${poke[index].hua}${poke[index].num}.jpg)`)
			.appendTo('.zhuozi').delay(index*10).animate({left,top,opavity:1});
			index++;
		}
	}
	for (;index<poke.length;index++) {
		$('<div>').addClass('poke zuo').css('background-image',`url(img/${poke[index].hua}${poke[index].num}.jpg)`)
			.appendTo('.zhuozi').delay(index*10).animate({left:0,top:520,opavity:1})
			.data('num',poke[index].num)
			.attr('id',`${-2}_${-2}`);

	}
	let first = null;
	$('.zhuozi').on('click','.poke',function(e){
		let element = $(e.target);
		//element.animate({top:'-=10'}).css('box-shadow','0 0 0 3px #000');
		let ids = element.attr('id').split('_');
		let ele1 = `#${ids[0]*1+1}_${ids[1]*1}`;
		let ele2 = `#${ids[0]*1+1}_${ids[1]*1+1}`;
		if ($(ele1).length || $(ele2).length) {
			return;
		}
		
		element.toggleClass('active');
		if (element.hasClass('active')) {
			element.animate({top:'-=20'});
		}else{
			element.animate({top:'+=20'});
		}
		
		if (!first) {
			first = $(e.target);
		}else{
			if(first.data('num') + element.data('num') == 14){
				$('.active').animate({top:0,left:600},function(){
					$(this).remove();
				})
			}else{
				$('.active').animate({top:'+=20'},function(){
					$(this).removeClass('active');
				})
			}
			first = null;
		}
	})
	let zindex = 0;
	let left1 = $('.left');
	let right1 = $('.right');
	right1.on('click',function(){
		if (!$('.zuo').length) {
			return;
		}
		$('.zuo').eq(-1).css('z-index',zindex++).animate({left:600}).removeClass('zuo').addClass('you');		
	})
	left1.on('click',function(){
		if (!$('.you').length) {
			return;
		}
		zindex = 0;
		//$('.you').eq(-1).animate({left:0}).removeClass('you').addClass('zuo');
		$('.you').each(function(index){
			$(this).css('z-index',zindex++).delay(index*10).animate({left:0})
			.removeClass('you').addClass('zuo');
		})
		
	})
	
///////////////////
})