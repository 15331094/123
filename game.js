
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
	    s.src = "lost.mp3";
	    s.play();
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
	    s.src = "win.mp3";
	    s.play();
	}
	else if (outSide == true && start == true) {
		scr.innerHTML = "Don't cheat, you should start from the 'S' and move to the 'E' inside the maze!";
	    s.src = "cheat.mp3";
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
		tip.innerHTML = "voice(off)"
	}
	else {
		music.muted = false;
		tip.innerHTML = "voice(on)"
	}
}
