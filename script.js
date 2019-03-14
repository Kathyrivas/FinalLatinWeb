/* each of the 5 letter code are assign a name as known as ID */
a = document.getElementById("letterone");
b = document.getElementById("lettertwo");
c = document.getElementById("letterthree");
d = document.getElementById("letterfour");
e = document.getElementById("letterfive");
var mySound = document.getElementById('you-win');  

/*Whe more you click the button, the cycling of the image switch. Each button is assign to a images */
function nextImage(){
	var el=document.getElementById("letterone"); /*I gave an Id to the button so that button can change the image which is another div ( that will start the cycling of the images)*/
	if (el.src.match("images/m.png")){
		el.src = "images/n2.gif";
	} else if (el.src.match("images/n2.gif")){
		el.src = "images/o2.png";
	} else if (el.src.match("images/o2.png")){
		el.src = "images/m.png";
	} else {
		// do nothing
	}
}

/*Each button is assign to a images to do the cycling  */
function nextImage2(){
	var el=document.getElementById("lettertwo");
	if (el.src.match("images/w.png")){
		el.src = "images/x.png";
	} else if (el.src.match("images/x.png")){
		el.src = "images/y.png";
	} else if (el.src.match("images/y.png")){
		el.src = "images/z.png";
	} else if (el.src.match("images/z.png")){
		el.src = "images/w.png";
	} else {
		// do nothing
	}
}

/*Each button is assign to a images to do the cycling  */
function nextImage3(el){
	var el=document.getElementById("letterthree");
	if (el.src.match("images/t.png")){
		el.src = "images/u.png";
	} else if (el.src.match("images/u.png")){
		el.src = "images/v.png";
	} else if (el.src.match("images/v.png")){
		el.src = "images/t.png";
	} else {
		// do nothing
	}
}

/*Each button is assign to a images to do the cycling  */
function nextImage4(el){
	var el=document.getElementById("letterfour");
	if (el.src.match("images/o.png")){
		el.src = "images/n.png";
	} else if (el.src.match("images/n.png")){
		el.src = "images/m.png";
	} else if (el.src.match("images/m.png")){
		el.src = "images/o.png";
	} else {
		// do nothing
	}
}

/*Each button is assign to a images to do the cycling  */
function nextImage5(el){
	var el=document.getElementById("letterfive");
	if (el.src.match("images/c.png")){
		el.src = "images/b.png";
	} else if (el.src.match("images/b.png")){
		el.src = "images/a2.png";
	} else if (el.src.match("images/a2.png")){
		el.src = "images/c.png";
	} else {
		// do nothing
	}
}

/*The checkslot is to apporve the right code the user had inputting into the code setup. ( Just to see if the code is correct.) If the 5 letter code is correct, you then click on the green button to call ozuna. A alert will then pop out to show you futher instructions*/
function checkSlot(el){
	if (a.src.match("images/o2.png") && b.src.match("images/z.png") && c.src.match("images/u.png") && d.src.match("images/n.png") && e.src.match("images/a2.png")){
		document.getElementById('you-win').play()
		alert("You Win! Click on Ozuna to go to the NEXT LEVEL (:"); */ a pop up on the screen will show showing you information pf what to do next */
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
	}
}

/*The Second Checkslot is the same as the checkslot above,but this will to another page which is my partner escape room page (ahmad). It will only go to the next page if the 5 letter word is correct.*/
function checkSlot2(el){
	if (a.src.match("images/o2.png") && b.src.match("images/z.png") && c.src.match("images/u.png") && d.src.match("images/n.png") && e.src.match("images/a2.png")){
		document.getElementById('key'); /*the key will be on the image */
	}
}
