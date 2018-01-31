//VARIABLES
var gray;
var white;
var toolsX;
var penY;
var markerY;
var eraserY;
//BOOLEANS
var penStroke;
var markerStroke;
var eraserStroke;
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
	gray="#F8F6F6";
	white="#fffff";
	toolsX = (windowWidth/6)/2;
	penY = windowHeight/2;
	markerY = windowHeight/3.5;
	eraserY = windowHeight - (windowHeight/8);
	penStroke = false;
	markerStroke = false;
	eraserStroke = false;

	//CANVAS ELEMENTS
	background(white);
	noStroke();
	fill(gray);
	rect(0, 0, windowWidth/6, windowHeight);
	textStyle('asap');

}

function draw() {
	gray="#F8F6F6";
	white="#fffff";

	stroke(0);
	strokeWeight(4);
	strokeCap(ROUND);
	smooth();

	//TOOL BAR
	//tools
	imageMode(CENTER);
	image(pen, toolsX, penY, 100, 100);
	image(marker, toolsX, markerY, 100, 100);
	//eraser
	noStroke();
	fill(white);
	rectMode(CENTER);
	rect(toolsX, eraserY, 100, 50, 5);
	fill(0);
	textSize(16);
	textAlign(CENTER);
	text('ERASER', toolsX, eraserY);


	if (mouseIsPressed) {
		if (penStroke) {
			stroke(0, 255);
			strokeWeight(1);
		} else if (markerStroke) {
			stroke(0, 220);
			strokeWeight(15);
		} else if (eraserStroke) {
			stroke(white);
			strokeWeight(50);
		} else {
			noStroke();
		}
		line(pmouseX, pmouseY, mouseX, mouseY); //draw!
	}
}

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
	}
}

function windowResize() {
	resizeCanvas(windowWidth, windowHeight);  // full screen
}
