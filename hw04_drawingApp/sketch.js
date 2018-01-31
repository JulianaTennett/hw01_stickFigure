//VARIABLES
var gray;
var white;
var toolsX;
var penY;
var markerY;
//BOOLEANS
var penStroke;
var markerStroke;
//IMAGES
var pen;
var marker;

function preload() {
	pen = loadImage('assets/pen.png');
	marker = loadImage('assets/marker.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	gray="#F8F6F6";
	white="#fffff";
	toolsX = (windowWidth/6)/2;
	penY = windowHeight/2;
	markerY = windowHeight/3.5;
	// toolsX = 100;
	// penY = 100;
	// markerY = 250;
	penStroke = false;
	markerStroke = false;

	//CANVAS ELEMENTS
	background(white);
	noStroke();
	fill(gray);
	rect(0, 0, windowWidth/6, windowHeight);

}

function draw() {
	gray="#F8F6F6";
	white="#fffff";

	stroke(0);
	strokeWeight(4);
	strokeCap(ROUND);
	smooth();

	//IMAGES
	imageMode(CENTER);
	image(pen, toolsX, penY, 100, 100);
	image(marker, toolsX, markerY, 100, 100);
	// image(pen, 100, 100, 100, 100);
	// image(marker, 100, 250, 100, 100);

	//make one of the strokes true when mouse is pressed
	//when the stroke is true, this stroke style is applied
	//when the mouse is pressed and held, draw with this stroke

	if (mouseIsPressed) {
		if (penStroke) {
			stroke(0, 255);
			strokeWeight(1);
		} else if (markerStroke) {
			stroke(0, 220);
			strokeWeight(7);
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
	}
	if ((mouseX > toolsX - 50) && (mouseX < toolsX + 50) && (mouseY > markerY - 50) && (mouseY < markerY + 50)) {
		markerStroke = true;
		penStroke = false;
	}
}

function windowResize() {
	resizeCanvas(windowWidth, windowHeight);  // full screen
}
