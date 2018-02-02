//COLORS
var purple;
var purpleLight;
var blue;
var blueLight;
var gray;
var white;
//COLOR VARIABLES
var backgroundColor;
var panelColor;
var buttonColor;
var strokeColor;
var textColor;
//POSITION VARIABLES
var toolsX;
var penY;
var markerY;
var eraserY;
var panelW;
var purpleX;
var blueX;
var colorD;
var colorY;
//BOOLEANS
var penStroke;
var markerStroke;
var eraserStroke;
var purpleOn;
var blueOn;
var blackOn;
//IMAGES
var pen;
var marker;
//FONTS
var asap;

function preload() {
	pen = loadImage('assets/pen.png');
	marker = loadImage('assets/marker.png');
	asap = loadFont('assets/fonts/Asap-Regular.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	//COLORS
	gray="#F8F6F6";
	white="#fffff";
	purple="#F1DCE9";
	purpleLight="#FBF0F7";
	blue="#C4E2ED";
	blueLight="E3F3F9";
	//COLOR VARIABLES
	backgroundColor = white;
	panelColor = gray;
	buttonColor = white;
	textColor = 0;
	//POSITION VARIABLES
	// toolsX = (width/6)/2;
	// penY = height/6;
	// markerY = height/3;
	// eraserY = height - (height/5);
	// panelW = width/6;
	resizeElements();
	penStroke = false;
	markerStroke = false;
	eraserStroke = false;
	purpleOn = false;
	blueOn = false;
	blackOn = true;
	colorD = 35;
	// colorX = panelW/4;
	// colorY = height/1.75;

	//CANVAS ELEMENTS
	background(backgroundColor);
	textStyle('asap');
}

function draw() {
	gray="#F8F6F6";
	white="#fffff";

	//TOOL BAR
	push();
	noStroke();
	fill(panelColor);
	rect(0, 0, panelW, height);
	//tools
	imageMode(CENTER);
	image(pen, toolsX, penY, 100, 100);
	image(marker, toolsX, markerY, 100, 100);
	//buttons
	noStroke();
	fill(buttonColor);
	rectMode(CENTER);
	rect(toolsX, eraserY, 100, 50, 5); //eraser
	fill(textColor);
	textSize(16);
	textAlign(CENTER);
	text('ERASER', toolsX, eraserY);
	//colors
	fill(purple);
	ellipse(colorX, colorY, colorD, colorD);
	fill(blue);
	ellipse(colorX*2, colorY, colorD, colorD);
	fill(0);
	ellipse(colorX*3, colorY, colorD, colorD);
	pop();



	if (mouseIsPressed) {
		if (mouseX > panelW) {

			push();
			if (penStroke) {
				stroke(0, 255);
				strokeWeight(3);
			} else if (markerStroke) {
				stroke(0, 220);
				strokeWeight(15);
			} else if (eraserStroke) {
				stroke(backgroundColor);
				strokeWeight(50);
			} else {
				noStroke();
			}
			if (!eraserStroke) {
				if (purpleOn) {
					stroke(purple);
				} else if (blueOn) {
					stroke(blue);
				} else if (blackOn) {
					stroke(0);
				}
			}
			line(pmouseX, pmouseY, mouseX, mouseY); //draw!
			pop();
		}
	}
}

//create button on the colors
//create color booleans
//when mouse click on button boolean becomes true or false
//true or false determines color fill?


function mousePressed() {
	if ((mouseX > toolsX - 50) && (mouseX < toolsX + 50) && (mouseY > penY - 50) && (mouseY < penY + 50)) {
		penStroke = true;
		markerStroke = false;
		eraserStroke = false;
	} else if ((mouseX > toolsX - 50) && (mouseX < toolsX + 50) && (mouseY > markerY - 50) && (mouseY < markerY + 50)) {
		markerStroke = true;
		penStroke = false;
		eraserStroke = false;
	} else if ((mouseX > toolsX - 50) && (mouseX < toolsX + 50) && (mouseY > eraserY - 25) && (mouseY < eraserY + 25)) {
		markerStroke = false;
		penStroke = false;
		eraserStroke = true;
		purpleOn = false;
		blueOn = false;
		blackOn = false;
	}
	if ((mouseX > colorX - colorD/2) && (mouseX < colorX + colorD/2) && (mouseY > colorY - colorD/2) && (mouseY < colorY + colorD/2)) { //turn purple on
		purpleOn = true;
		blueOn = false;
		blackOn = false;
		panelColor = white;
		backgroundColor = purpleLight;
		buttonColor = purple;
		textColor = white;
		background(backgroundColor);
	} else if ((mouseX > colorX*2 - colorD/2) && (mouseX < colorX*2 + colorD/2) && (mouseY > colorY - colorD/2) && (mouseY < colorY + colorD/2)) { //turn blue on
		purpleOn = false;
		blueOn = true;
		blackOn = false;
		backgroundColor = '#E3F3F9';
		panelColor = white;
		buttonColor = blue;
		textColor = white;
		background(backgroundColor);
	} else if ((mouseX > colorX*3 - colorD/2) && (mouseX < colorX*3 + colorD/2) && (mouseY > colorY - colorD/2) && (mouseY < colorY + colorD/2)) { //turn black on
		purpleOn = false;
		blueOn = false;
		blackOn = true;
		panelColor= gray;
		backgroundColor = white;
		buttonColor = white;
		textColor = 0;
		background(backgroundColor);
	}
}

function keyTyped() {
	if (key === 'c' || key === 'C') {
		background(backgroundColor);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);  // full screen
	resizeElements();
}

function resizeElements() {
	toolsX = (width/6)/2;
	penY = height/6;
	markerY = height/3;
	eraserY = height - (height/5);
	panelW = width/6;
	colorX = panelW/4;
	colorY = height/1.75;
}
