function slidemarcas(obj, loop){
	marcaswidth = 0;
	$(obj+' .marcas .slide .box .marca').each(function(){
		marcaswidth += 240;
	});
	$(obj+' .marcas .slide .box').css('width',marcaswidth+'px');
	nmmarcas = 0;
	nmmarcasdir = 0;
	nmmarcashov = 0;
	nmmarcastop = 0;
	if(loop == 1)
		nmmarcastop = 1;
	$(obj+' .marcas .slide .box .gm .marca').hover(function(){
		nmmarcastop = 1;
	},function(){
		nmmarcastop = 0;
	});
	$(obj+' .marcas .ant').hover(function(){
		nmmarcasdir = 1;
		nmmarcashov = 1;
	},function(){
		nmmarcashov = 0;
		if(loop == 1)
			nmmarcastop = 1;
	});
	$(obj+' .marcas .sig').hover(function(){
		nmmarcasdir = 0;
		nmmarcashov = 1;
	},function(){
		nmmarcashov = 0;
		if(loop == 1)
			nmmarcastop = 1;
	});
	movemarcas = setInterval(function(){
		if(nmmarcasdir == 0){
			if(nmmarcastop == 0){
				nmmarcas--;
				if(nmmarcashov == 1){nmmarcas--;nmmarcas--;}
			}
			if(nmmarcas > $(obj+' .marcas .slide .box .gm:eq(0)').width() * -1){
				$(obj+' .marcas .slide .box').css('margin-left',nmmarcas+'px');
			}else{
				nmmarcas = 0;
				$(obj+' .marcas .slide .box').css('margin-left',nmmarcas+'px');
			}
		}else{
			if(nmmarcastop == 0){
				nmmarcas++;
				if(nmmarcashov == 1){nmmarcas++;nmmarcas++;}
			}
			if(nmmarcas < 0){
				$(obj+' .marcas .slide .box').css('margin-left',nmmarcas+'px');
			}else{
				nmmarcas -= $(obj+' .marcas .slide .box .gm:eq(0)').width();
				$(obj+' .marcas .slide .box').css('margin-left',nmmarcas+'px');
			}
		}
	},10);
}
$(function(){
	$('.menu > a.o, .menu div.o > a, .menu .sep').each(function(){
		nht = $(this).html().replace(' ','<br />');
		$(this).html(nht);
		nmt = ($(this).height() / 2) + 15;
		$(this).css('margin-top','-'+nmt+'px');
	});
	$('.menu div.o').hover(function(){
		$(this).find('.sub').css('display','block');
	},function(){
		$(this).find('.sub').css('display','none');
	});
});
function swfwrite(f,w,h,v){
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,29,0" width="'+w+'" height="'+h+'"><param name="movie" value="'+f+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="menu" value="false" /><param name="flashvars" value="'+v+'" /><embed src="'+f+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'" wmode="transparent" flashvars="'+v+'" menu="false" allowfullscreen="true"></embed></object>');
}