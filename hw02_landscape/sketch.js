//JULIANA TENNETT
//Cityscape
//Jan2018

//Remaining questions:
//omg my left cloud is BLURRY!
//clouds should proportionately scale WxH when screen width is adjusted :(
//why does my background not scale as the screen width gets bigger after loading smaller??

//IMAGES
var cloudLeft;
var cloudRight;

//VARIABLES


function preload() {
	cloudLeft = loadImage('assets/cloudLeft.svg');
	cloudRight = loadImage('assets/cloudRight.svg')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	//i dont wanna type these out
	var w = windowWidth;
	var h = windowHeight;

	//COLORS
	var skyBlue = color(194, 218, 227);
	var skyBluePurple = color(212, 210, 225);
	var skyPurple = color(228, 201, 222);
	var skyPink = color(238, 196, 221);
	var skyPinkOrange = color(239, 198, 202);
	var skyPinkOranger = color(237, 199, 183);
	var skyOrange = color(236, 199, 170);
	var skyOrange2 = color(236, 199, 170);
	var skyOrange3 = color(236, 199, 170);
	var gray = color(215, 215, 215);
	var white = color(255, 255, 255);
	var stars = color(250, 250, 250, 150);

	//SKY BACKGROUND
	var skyColor = [skyBlue, skyBluePurple, skyPurple, skyPink, skyPinkOrange, skyPinkOranger, skyOrange, skyOrange2, skyOrange3];
	var skyHeight = h/skyColor.length;
	for (var y = 0; y < skyColor.length; y = y + 1) {
		fill(skyColor[y])
		rect(0, y*skyHeight, w, skyHeight);
	}

	//STARS
	// fill(stars);
	// ellipse(starX, starY, 20, 20);
	//STARS
	fill(stars);
	for (var stars = 0; stars < 45; stars++) {
		// var starX = random(0, innerWidth);
		// var starY = random(0, innerHeight);
		var starX = random(windowWidth);
		var starY = random(windowHeight);
		var starR = 5;
		ellipse(starX, starY, starR*2, starR*2);
	}
}



function draw() {

	//i dont wanna type these out
	var w = windowWidth;
	var h = windowHeight;

	//CLOUDLEFT
	image(cloudLeft, 0, h/14, w/1.75, h/3);


	//CLOUDRIGHT
	image(cloudRight, window.innerWidth-w/12, h/1.95, w/12, h/7);


	//BLDG1
	beginShape();
	vertex(0, w/2);
	vertex(w/12, h/3);
	vertex()
	endShape();

	//FOREGROUND
	fill(gray);
	rect(0, 0+h-h/25, w, h/25);


}
