var scrollTop = 0;
var width = screen.width;
setInterval(checkScroll,20);

function checkScroll(){
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	//Enter in the boundaries you want for the scrolling, and enter in the ID
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
	if(scrollTop>=0 && document.getElementById("fadeInText").style.opacity == 0  && !width<1050 && !width>600){
		x = 0;
		//First paramater needs to be name of id, second one is the name of the variable setInterval is set = to
		var fadeInText = setInterval(function() {fadeIn("fadeInText", fadeInText);},50);
    }
    if(width<1050 && width>600){
        document.getElementById("fadeInText2").style.opacity = 1;
        document.getElementById("fadeInText3").style.opacity = 1;
        document.getElementById("fadeInText").style.opacity = 1;
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
    var slidenum1 = document.getElementById("imageFamily").src;
    if (slidenum1 == "file:///Users/wycowley/Documents/WyattWebsite/siblings.jpg"){
        document.getElementById("imageFamily").src = "family.jpg"
    } 
    if (slidenum1 == "file:///Users/wycowley/Documents/WyattWebsite/family.jpg"){
        document.getElementById("imageFamily").src = "kody.JPG"
    }''
    if (slidenum1 == "file:///Users/wycowley/Documents/WyattWebsite/kody.JPG"){
        document.getElementById("imageFamily").src = "siblings.jpg"
    }
}
function NextSlideF(){
    var slidenum1 = document.getElementById("imageFamily").src;
    if (slidenum1 == "file:///Users/wycowley/Documents/WyattWebsite/siblings.jpg"){
        document.getElementById("imageFamily").src = "kody.JPG"
    }
    if (slidenum1 == "file:///Users/wycowley/Documents/WyattWebsite/family.jpg"){
        document.getElementById("imageFamily").src = "siblings.jpg"
    }
    if (slidenum1 == "file:///Users/wycowley/Documents/WyattWebsite/kody.JPG"){
        document.getElementById("imageFamily").src = "family.jpg"
    }
}



function PreviousSlideI(){
    
    var slidenum2 = document.getElementById("imageInterests").src;
    if (slidenum2 == "file:///Users/wycowley/Documents/WyattWebsite/Tubing.jpg"){
        document.getElementById("imageInterests").src = "caving.jpg"
        document.getElementById("imageInterests").style =  "transform: scaleY(1) scaleX(1)"
    } 
    if (slidenum2 == "file:///Users/wycowley/Documents/WyattWebsite/caving.jpg"){
        document.getElementById("imageInterests").src = "shasta.jpg"
        document.getElementById("imageInterests").style =  "transform: scaleY(1) scaleX(1)"
    }
    if (slidenum2 == "file:///Users/wycowley/Documents/WyattWebsite/shasta.jpg"){
        document.getElementById("imageInterests").src = "Tubing.jpg"
        document.getElementById("imageInterests").style =  "transform: scaleY(1) scaleX(1)"
        
    }
}
function NextSlideI(){
    
    var slidenum2 = document.getElementById("imageInterests").src;
    if (slidenum2 == "file:///Users/wycowley/Documents/WyattWebsite/Tubing.jpg"){
        document.getElementById("imageInterests").style = "transform: scaleY(-1) scaleX(-1)"
        document.getElementById("imageInterests").src = "shasta.jpg"
    } 
    if (slidenum2 == "file:///Users/wycowley/Documents/WyattWebsite/caving.jpg"){
        document.getElementById("imageInterests").src = "Tubing.jpg"
        document.getElementById("imageInterests").style =  "transform: scaleY(1) scaleX(1)"
    }
    if (slidenum2 == "file:///Users/wycowley/Documents/WyattWebsite/shasta.jpg"){
        document.getElementById("imageInterests").src = "caving.jpg"
        document.getElementById("imageInterests").style =  "transform: scaleY(1) scaleX(1)"
    }
}
function PreviousSlideE(){
    
    var slidenum3 = document.getElementById("imageExtracurriculers").src;
    
    if (slidenum3 == "file:///Users/wycowley/Documents/WyattWebsite/piano.jpg"){
        document.getElementById("imageExtracurriculers").src = "waterpolo.jpg"
    } 
    if (slidenum3 == "file:///Users/wycowley/Documents/WyattWebsite/waterpolo.jpg"){
        document.getElementById("imageExtracurriculers").src = "temple.jpg"
    }
    if (slidenum3 == "file:///Users/wycowley/Documents/WyattWebsite/temple.jpg"){
        document.getElementById("imageExtracurriculers").src = "piano.jpg"
        
    }
}
function NextSlideE(){
    
    var slidenum3 = document.getElementById("imageExtracurriculers").src;
    
    if (slidenum3 == "file:///Users/wycowley/Documents/WyattWebsite/piano.jpg"){
        document.getElementById("imageExtracurriculers").src = "temple.jpg"
    } 
    if (slidenum3 == "file:///Users/wycowley/Documents/WyattWebsite/waterpolo.jpg"){
        document.getElementById("imageExtracurriculers").src = "piano.jpg"
    }
    if (slidenum3 == "file:///Users/wycowley/Documents/WyattWebsite/temple.jpg"){
        document.getElementById("imageExtracurriculers").src = "waterpolo.jpg"
        
    }
}
