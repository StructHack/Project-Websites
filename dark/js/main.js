
var i=0;
function blank_height(){
	var blank = window.outerHeight;
	var minus = document.querySelector('nav').offsetHeight+document.querySelector('header').offsetHeight;
	var final = blank-minus;
	document.querySelector('section').style.marginTop=final+'px';
	document.querySelector('.small_ul .small_ul_ul').style.display = "none";
	i=0;
}
function hide(){
	i+=1;
	if(i%2==0){
		document.querySelector('.small_ul .small_ul_ul').style.display = "none";	
	}else{
		document.querySelector('.small_ul .small_ul_ul').style.display = "block";
	}
}

function hide_all(){
	var all = document.querySelectorAll('.small_ul ul li');
	for(let i=0;i<all.length;i++){
		all[i].addEventListener('click',function(){
			hide();
		});
	}
}


window.onresize = function(){	
	blank_height();
}

document.querySelector('.small_ul>button').addEventListener('click',function(){
	hide();
});
blank_height();
hide_all();