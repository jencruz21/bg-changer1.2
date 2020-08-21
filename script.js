var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var text1 = document.querySelector(".text1");
var text2 = document.querySelector(".text2");

//Setting color with color input
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

//Setting bgcolor with text input
function setBgColor() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ text1.value 
	+ ", " 
	+ text2.value 
	+ ")";
	css.textContent = body.style.background;
	text1.value = "";
	text2.value = "";
}

function getGradient(event) {
	if(event.keyCode == 13){
		setBgColor();
	}
		
}
//input change bg color
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//text change bg color
text1.addEventListener("keypress", getGradient);
text2.addEventListener("keypress", getGradient);