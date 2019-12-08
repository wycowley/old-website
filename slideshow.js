var scrollTop = 0;
var width = screen.width;

var slideFamily = ["family.jpg","kody.JPG","siblings.jpg"];
var slideInterests = ["caving.jpg", "shasta.jpg", "Tubing.jpg"];
var slideExtra = ["temple.jpg","piano.jpg","waterpolo.jpg"];
var f = 0;
var i = 0;
var e = 0;

setInterval(checkScroll,20);

function checkScroll(){
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //Enter in the boundaries you want for the scrolling, and enter in the ID
    if(width<1050 && width>600){
        document.getElementById("fadeInText2").style.opacity = 1;
        document.getElementById("fadeInText3").style.opacity = 1;
        document.getElementById("fadeInText").style.opacity = 1;
    }
	if(scrollTop>=125 && document.getElementById("fadeInText2").style.opacity == 0){
		x = 0;
		//First paramater needs to be name of id, second one is the name of the variable setInterval is set = to
		var fadeInText2 = setInterval(function() {fadeIn("fadeInText2", fadeInText2);},50);
	}
	if(scrollTop>=350 && document.getElementById("fadeInText3").style.opacity == 0){
		x = 0;
		//First paramater needs to be name of id, second one is the name of the variable setInterval is set = to
		var fadeInText3 = setInterval(function() {fadeIn("fadeInText3", fadeInText3);},50);
	}
	if(scrollTop>=0 && document.getElementById("fadeInText").style.opacity == 0){
		x = 0;
		//First paramater needs to be name of id, second one is the name of the variable setInterval is set = to
		var fadeInText = setInterval(function() {fadeIn("fadeInText", fadeInText);},50);
    }
	
	
	
	function fadeIn(object, stopVar){
		//console.log("test");
		if(x<100){
			//this can be changed to make it faster or slower
			x += 2;
			document.getElementById(object).style.opacity = x/100;
		}else{
			//this stops the function from continuing forever
			clearInterval(stopVar);
		}
	}
}



function PreviousSlideF(){
    f+=2;
    f=f%3;
    document.getElementById("imageFamily").src = slideFamily[f];
}
function NextSlideF(){
    f+=1;
    f=f%3;
    document.getElementById("imageFamily").src = slideFamily[f];
}



function PreviousSlideI(){
    i+=2;
    i=i%3;
    document.getElementById("imageInterests").src = slideInterests[i];
}
function NextSlideI(){
    i+=1;
    i=i%3;
    document.getElementById("imageInterests").src = slideInterests[i];
}
function PreviousSlideE(){
    e+=2;
    e=e%3;
    document.getElementById("imageExtracurriculers").src = slideExtra[e];
}
function NextSlideE(){
    e+=1;
    e=e%3;
    document.getElementById("imageExtracurriculers").src = slideExtra[e];
}
