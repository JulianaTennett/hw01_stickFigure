//Juliana Tennett
//Homework Assignment 01: Stick Figure
//Title: A Stick Figure of How I Looked Yesterday

var hair;
function preload() {
	hair = loadImage('assets/hair.svg');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {

	//VARIABLES
	var skin = color('#F7E7E6');
	var black = color(0, 0, 0);
	var bean = color(165, 122, 81);
	var boot = color(88,82,76);
	var orangeLace = color(255, 167, 92);
	var white = color(255, 255, 255);
	var charcoal = color(89, 89, 89);
	var iris = color(81, 113, 94);

	//HANDS
	fill(skin);
	noStroke();
	ellipse(460, 325, 25, 25); //left hand
	ellipse(540, 325, 25, 25); //left hand

	//PANTS
	fill(black);
	strokeWeight(2.5);
	strokeJoin(ROUND);
	stroke(black);
	rect(460, 320, 80, 60);

	//BOOTS
	fill(bean);
	stroke(bean);
	rect(458, 380, 38, 30); //left boot
	rect(504, 380, 38, 30); //right boot
	//foot
	fill(boot);
	stroke(boot);
	rect(455, 403, 91, 18);
	//sole
	fill(bean);
	stroke(bean);
	rect(454, 421, 93, 1);
	//left laces
	stroke(orangeLace);
	strokeWeight(2);
	line(468, 386, 487, 389);
	line(468, 389, 487, 386);
	line(468, 393, 487, 396);
	line(468, 396, 487, 393);
	//right laces
	line(514, 386, 533, 389);
	line(514, 389, 533, 386);
	line(514, 393, 533, 396);
	line(514, 396, 533, 393);

	//SHIRT
	fill(white);
	stroke(charcoal);
	rect(450, 250, 25, 75); //left arm
	rect(525, 250, 25, 75); //right arm
	//torso
	beginShape();
	vertex(470, 250);
	vertex(530, 250);
	vertex(540, 325);
	vertex(460, 325);
	vertex(470, 250);
	endShape();
	//stripes
	line(450, 255, 550, 255);
	line(450, 265, 550, 265);
	line(450, 275, 550, 275);
	line(450, 285, 550, 285);
	line(450, 295, 550, 295);
	line(450, 305, 550, 305);
	line(450, 315, 550, 315);

	//FACE
	fill(skin);
	noStroke();
	ellipse(500, 200, 114, 114); //head
	//eyes
	fill(white);
	ellipse(470, 200, 29, 29); //left eye
	ellipse(530, 200, 29, 29); //right eye
	fill(iris);
	ellipse(470, 200, 17, 17); //left iris
	ellipse(530, 200, 17, 17); //right iris
	//mouth
	fill(charcoal);
	beginShape();
	curveVertex(480, 225);
	curveVertex(480, 225);
	curveVertex(490, 245);
	curveVertex(510, 245);
	curveVertex(520, 225);
	curveVertex(520, 225);
	endShape();

	image(hair, 426, 125, 152, 143);
}
