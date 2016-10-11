
var start = false;

path = new Object();

path.one = false;
path.two = false;
path.three = false;
path.four = false;
path.five = false;
path.six = false;
path.seven = false;

var wall = false;
var outSide = false;



	



function reachPath (partPath) {
	switch(partPath) {
		case 1: path.one = true; start = true; break;
		case 2: path.two = true; break;
		case 3: path.three = true; break;
		case 4: path.four = true; break;
		case 5: path.five = true; break;
		case 6: path.six = true; break;
		case 7: path.seven = true; break;
	}
		//alert(partPath);
}

function crashWall () {
	var scr = document.getElementById('screen');
	var s = document.getElementById('sound');

	if (start == true) {
		scr.innerHTML = "You Lost!";
	    wall = true;

	    s.src = "./music/lost.mp3";
	    s.play();
	    //bgs.muted = false;
	}
	start = false;
	//alert(wall);
}

function cheat () {
	outSide = true;
	//alert("here");
}

function judge () {

	var scr = document.getElementById('screen');
	var s = document.getElementById('sound'); 

	if (path.one == true && path.two == true &&
		path.three == true && path.four == true &&
		path.five == true && path.six == true &&
		path.seven == true && wall == false && 
		outSide == false && start == true) {
		scr.innerHTML = "You Win!";
	    s.src = "./music/win.mp3";
	    s.play();
	}
	else if (outSide == true && start == true) {
		scr.innerHTML = "Don't cheat, you should start from the 'S' and move to the 'E' inside the maze!";
	    s.src = "./music/cheat.mp3";
	    s.play();
	}
	start = false;
}

function reset () {
	start = false;
	var src = document.getElementById('screen');
	src.innerHTML = "";

	path.one = false;
	path.two = false;
	path.three = false;
	path.four = false;
	path.five = false;
	path.six = false;
	path.seven = false;

	wall = false;

	outSide = false;
}

function end () {
	start = false;

	path.one = false;
	path.two = false;
	path.three = false;
	path.four = false;
	path.five = false;
	path.six = false;
	path.seven = false;

	wall = false;

	outSide = false;
}

function changeVoice () {
	var music = document.getElementById("sound");
	var tip = document.getElementById("music");

	if (music.muted == false) {
		music.muted = true;
		tip.innerHTML = "voice(off)";
		tip.style.backgroundColor = "red";
	}
	else {
		music.muted = false;
		tip.innerHTML = "voice(on)";
		tip.style.backgroundColor = "green";
	}
}

function crashRed(crash) {
	switch(crash) {
		case 1: document.getElementById("one").style.backgroundColor = "red"; break;
		case 2: document.getElementById("top-two").style.backgroundColor = "red"; break;
		case 3: document.getElementById("three").style.backgroundColor = "red"; break;
		case 4: document.getElementById("bottom-two").style.backgroundColor = "red"; 
		document.getElementById("center-four").style.backgroundColor = "red"; break;
		case 5: document.getElementById("five").style.backgroundColor = "red"; break;
	}
}

function resetGray(crash) {
	switch(crash) {
		case 1: document.getElementById("one").style.backgroundColor = "gray"; break;
		case 2: document.getElementById("top-two").style.backgroundColor = "gray"; break;
		case 3: document.getElementById("three").style.backgroundColor = "gray"; break;
		case 4: document.getElementById("bottom-two").style.backgroundColor = "gray";
		document.getElementById("center-four").style.backgroundColor = "gray"; break;
		case 5: document.getElementById("five").style.backgroundColor = "gray"; break;
	}
}
