//JULIANA TENNETT
//Cityscape
//Jan2018

//Remaining questions:
//clouds should proportionately scale WxH when screen width is adjusted :(
//why does my background not scale as the screen width gets bigger after loading smaller??
//how can i define colors outside of any function so that they can be used in every function?

//IMAGES
var cloudLeft;
var cloudRight;

//VARIABLES
var w;
var h;
var skyBlue;
var skyBluePurple;
var skyPurple;
var skyPink;
var skyPinkOrange;
var skyPinkOranger;
var skyOrange;
var skyOrange2;
var skyOrange3;
var white;
var stars;

var skyColor, skyHeight;

function preload() {
	cloudLeft = loadImage('assets/cloudLeft.svg');
	cloudRight = loadImage('assets/cloudRight.svg')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	w = width;
	h = height;

	noStroke();

	//SKY COLORS
	skyBlue = color(194, 218, 227);
	skyBluePurple = color(212, 210, 225);
	skyPurple = color(228, 201, 222);
	skyPink = color(238, 196, 221);
	skyPinkOrange = color(239, 198, 202);
	skyPinkOranger = color(237, 199, 183);
	skyOrange = color(236, 199, 170);
	skyOrange2 = color(236, 199, 170);
	skyOrange3 = color(236, 199, 170);
	white = color(255, 255, 255);
	stars = color(250, 250, 250, 150);

	//SKY BACKGROUND
	 skyColor = [skyBlue, skyBluePurple, skyPurple, skyPink, skyPinkOrange, skyPinkOranger, skyOrange, skyOrange2, skyOrange3];
	 skyHeight = h/skyColor.length;
	 for (var y = 0; y < skyColor.length; y = y + 1) {
 		fill(skyColor[y]);
 		rect(0, y*skyHeight, w, skyHeight);
 	}


	//STARS
	fill(stars);
	for (var stars = 0; stars < 45; stars++) {
		// var starX = random(0, innerWidth);
		// var starY = random(0, innerHeight);
		var starX = random(windowWidth);
		var starY = random(windowHeight);
		var starR = 5;
		ellipse(starX, starY, starR*2, starR*2);
	} // make an array of random x locatins and y locations, fill them once here in setup so they remain the same throughout the life of program, but then use those to draw the stars in draw every frame!
	//randomness should be a value from 0 to 1 * width???? work in normalized coordinates, and when yo udraw them you do the value from 0 to 1 times he width
}


function draw() {

	// for (var y = 0; y < skyColor.length; y = y + 1) {
	// 	fill(skyColor[y]);
	// 	rect(0, y*skyHeight, w, skyHeight);
	// }

	var gray = color(215, 215, 215);
	var orange = color('#FFE6CD');
	var orangeShadow = color('#F4CBA2');
	var orangeWind = color('#F7DCC0');

	//i dont wanna type these out
	var w = windowWidth;
	var h = windowHeight;


	//CLOUDRIGHT
	image(cloudRight, window.innerWidth-w/12, h/1.95, w/12, h/7);


	//BLDGs
	bldgDraw(width/2, height/12, width/6, height, '#F3DFE1', '#F6CCCD', '#F8D7D7', 3, 4); //fourth
	//CLOUDLEFT
	image(cloudLeft, 0, height/14, width/1.75, height/3);
	bldgDraw(width/5, height/6, height/3, height/1.25, '#FBF0F7', '#CCAEC0', '#F1DCE9', 4, 4); //second
	bldgDraw(width/15, height/2.25, height/3.1, height/1.75, '#FFE6CD', '#F4CBA2', '#F7DCC0', 3, 4); //first
	bldgDraw(width/2.75, height/1.75, width/7.25, height/2, '#F7E3F3', '#E4C9DE', '#E9D2E4', 1, 4); //third

	//FOREGROUND
	fill(gray);
	rect(0, 0+height-height/25, width, height/25);
}

// function bldgDraw(x, y, wBldg, hBldg, colorFront, colorShadow, colorWinda, rowWinda, columnWinda) {
function bldgDraw(x, y, wBldg, hBldg, colorFront, colorShadow, colorWinda, columnsWinda, rowsWinda) {
	//frontFace
	fill(colorFront);
	rect(x, y, wBldg, hBldg);
	//shadowFace
	fill(colorShadow);
	beginShape();
		vertex(x-(wBldg/2.5), y+(hBldg/11));
		vertex(x, y);
		vertex(x, height);
		vertex(x-(wBldg/2.5), h);
	endShape();
	//windows
	offset = wBldg/10;
	wWinda = (wBldg/2)/columnsWinda;
	for (var windaX = x+offset; windaX < x+wBldg; windaX += wWinda + offset) {
		for (var windaY = y+offset; windaY < innerHeight; windaY += wWinda + offset) { //for every x, do a y too
			rect(windaX, windaY, wWinda, wWinda);
		}
	}
}

function windowResize() {
	resizeCanvas(windowWidth, windowHeight);  // full screen
	w = width;
	h = height;
}

// function winda(xWinda, yWinda, color) {
// 	//xWinda = starting x
// 	//yWinda = starting y
// 	//rowWinda = number of windows rows
// 	//columnWinda = number of windows in each row
// 	//color = color
// 	fill(color);
// 	for (var windaX = xWinda; windaX < 320; windaX += 70) {
// 		for (var windaY = yWinda; windaY < innerHeight; windaY += 95) { //for every x, do a y too
// 			rect(windaX, windaY, 50, 50);
// 		}
// 	}
// }

// function frontFace(xFront, yFront, wFront, hFront, color) {
// 	fill(color);
// 	rect(xFront, yFront, wFront, hFront);
// 	// rect(w/14, h/2.25, h/3.1, h/1.75);
// }
//
// function shadowFace(xShadow, yShadow, wShadow, hShadow, color) {
// 	fill(color);
// 	beginShape();
// 		vertex(xShadow, yShadow);
// 		vertex(wShadow, hShadow);
// 		vertex(wShadow, h);
// 		vertex(xShadow, h);
// 	endShape();
// }

// function bldgDraw(x, y, wBldg, hBldg, colorFace, colorShadow, colorWinda, rowWinda, columnWinda) {
// 	frontFace(x, y, wBldg, hBldg, colorFace);
// 	shadowFace();
// 	winda();
// }
