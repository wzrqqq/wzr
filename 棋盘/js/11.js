$(function(){
	let hei = {};
	let bai = {};
	for (let i=0;i<15;i++) {
		for (let j=0;j<15;j++) {
			$('<li>').addClass('qizi').data('pos',{x:i,y:j}).appendTo('.qipan');
		}
	}
	for (let i=0;i<15;i++) {
		$('<div>').addClass('hang').appendTo('.qipan');
		$('<span>').addClass('shu').appendTo('.qipan');
	}
	let flag = true;
	$('.qipan .qizi').on('click',function(){
		if ($(this).hasClass('hei') || $(this).hasClass('bai')) {
			return;
		}
		let data = $(this).data('pos');
		if (flag) {
			$(this).addClass('hei');
			hei[data.x+'_'+data.y] = true;
			if (panduan(data,hei) >= 5) {
				$('.qipan .qizi').off();
				alert('黑棋胜!');
			}
		}else{
			$(this).addClass('bai');
			bai[data.x+'_'+data.y] = true;
			if (panduan(data,bai) >= 5) {
				$('.qipan .qizi').off();
				alert('白旗胜!');
			}
		}
		flag = !flag;
	})
	
	
	function panduan(pos,obj){
		let rows = 0,cols = 0,zx = 0, yx = 0;
		let i = pos.x , j = pos.y;
		//行
		while (obj[i+'_'+j]){
			rows++;
			j++;
		}
		j = pos.y-1;
		while (obj[i+'_'+j]){
			rows++;
			j--;
		}
		//竖
		i = pos.x , j = pos.y;
		while (obj[i+'_'+j]){
			cols++;
			i++;
		}
		i = pos.x-1;
		while (obj[i+'_'+j]){
			cols++;
			i--;
		}
		//左斜
		i = pos.x , j = pos.y;
		while (obj[i+'_'+j]){
			zx++;
			i++;
			j++;
		}
		i = pos.x-1 , j = pos.y-1;
		while (obj[i+'_'+j]){
			zx++;
			i--;
			j--;
		}
		//右斜
		i = pos.x , j = pos.y;
		while (obj[i+'_'+j]){
			yx++;
			i--;
			j++;
		}
		i = pos.x+1 , j = pos.y-1;
		while (obj[i+'_'+j]){
			yx++;
			i++;
			j--;
		}
		console.log(yx)
		return Math.max(rows,cols,zx,yx);
	}
	
////////
})