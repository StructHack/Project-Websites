//########## This hack is ugly :/
window.onload = function(){
	var body = document.body;
	var html = document.documentElement;
	var heighty = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
	document.querySelector('aside').style.height = document.body.scrollHeight+'px';
}

window.onresize =function(){
	var body = document.body;
	var html = document.documentElement;
	var heighty = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
	document.querySelector('aside').style.height = heighty+'px';
	if(window.innerWidth >600){
		document.querySelector('aside').style.display = "block";
	}else{
		document.querySelector('aside').style.display = "none";
		document.querySelector('aside').style.zIndex="1";	
	}
}


//########### functions

document.querySelector('#image_x').addEventListener('click',function(){
	document.querySelector('aside').style.display = "none";
});

document.querySelector('.small_screen_1').addEventListener('mouseover',function(){
	document.querySelector('.small_screen_1').style.position = "relative";
	document.querySelector('.small_screen_1').style.width = "100%";
	document.querySelector('.small_screen_1_nested').style.width = "100%";
	document.querySelector('.small_screen_1_nested').style.textAlign = "center";
	document.querySelector('.small_screen_2').style.position = "absolute";
	document.querySelector('.small_screen_1_nested').style.display = "block";
	document.querySelector('.small_screen_1_nested').style.position = "absolute";
	document.querySelector('.small_screen_1_nested').style.right = "0"
	document.querySelector('.small_screen_1_nested').style.left = "0";
});

document.querySelector('.small_screen_1').addEventListener('mouseout',function(){
	document.querySelector('.small_screen_1').style.position = "static";
	document.querySelector('.small_screen_1_nested').style.textAlign = "center";
	document.querySelector('.small_screen_1_nested').style.display = "none";
});

document.querySelector('.small_screen_2').addEventListener('click',function(){
	document.querySelector('aside').style.display="block";
	document.querySelector('aside').style.zIndex="1";	
});
