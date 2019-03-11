a = document.getElementById("letterone");
b = document.getElementById("lettertwo");
c = document.getElementById("letterthree");
d = document.getElementById("letterfour");
e = document.getElementById("letterfive");
var mySound = document.getElementById('you-win');

function nextImage(){
	var el=document.getElementById("letterone");
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

function checkSlot(el){
	if (a.src.match("images/o2.png") && b.src.match("images/z.png") && c.src.match("images/u.png") && d.src.match("images/n.png") && e.src.match("images/a2.png")){
		document.getElementById('you-win').play()
		alert("You Win! Click on Ozuna to go to the NEXT LEVEL (:");
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
	}
}

function checkSlot2(el){
	if (a.src.match("images/o2.png") && b.src.match("images/z.png") && c.src.match("images/u.png") && d.src.match("images/n.png") && e.src.match("images/a2.png")){
		document.getElementById('key');
		document.location.href = "http://google.com";
	}
}