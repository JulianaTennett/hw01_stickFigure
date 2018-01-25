//SPRINKLES
var arrowBlue;
var arrowOrange;
var arrowRed;
var asterikBlue;
var asterikOrange;
var pentaBlue;
var pentaRed;
var squiggleBlue;
var squiggleOrange;
var xOrange;
var xRed;

//Questions
//Why isn't my for loop array working :(
//Need to implement color change into the for loop for circles/outline squares

function preload() {
	arrowBlue = loadImage('assets/sprinkle_arrowBlue.svg');
	arrowOrange = loadImage('assets/sprinkle_arrowOrange.svg')
	arrowRed = loadImage('assets/sprinkle_arrowRed.svg')
	asterikBlue = loadImage('assets/sprinkle_asterikBlue.svg')
	asterikOrange = loadImage('assets/sprinkle_asterikOrange.svg')
	pentaBlue = loadImage('assets/sprinkle_pentaBlue.svg')
	pentaRed = loadImage('assets/sprinkle_pentaRed.svg')
	squiggleBlue = loadImage('assets/sprinkle_squiggleBlue.svg')
	squiggleOrange = loadImage('assets/sprinkle_squiggleOrange.svg')
	xOrange = loadImage('assets/sprinkle_xOrange.svg')
	xRed = loadImage('assets/sprinkle_xRed.svg')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('#fffff');
	noStroke();

	for (var pentaBlueSprinkle = 0; pentaBlueSprinkle < 2; pentaBlueSprinkle++) {
		var x = random(0, windowWidth);
		var y = random(0, windowHeight);
		image(pentaBlue, x, y, 50, 50);
	}

	for (var squiggleOrangeSprinkle = 0; squiggleOrangeSprinkle < 2; squiggleOrangeSprinkle++) {
		var x = random(0, windowWidth);
		var y = random(0, windowHeight);
		image(squiggleOrange, x, y, 75, 50);
	}

	fill('#E6AEAF'); //red
	for (var ellipseRedSprinkle = 0; ellipseRedSprinkle < 4; ellipseRedSprinkle++) {
		var x = random(0, windowWidth);
		var y = random(0, windowHeight);
		var d = random(65, 120);
		ellipse(x, y, d, d);
	}

	noFill();
	stroke('#F4D4AD'); //orange
	strokeWeight(2);
	for (var ellipseRedSprinkle = 0; ellipseRedSprinkle < 4; ellipseRedSprinkle++) {
		var x = random(0, windowWidth);
		var y = random(0, windowHeight);
		var w = random(65, 120);
		rect(x, y, w, w);
	}



	// var sprinkles = [arrowBlue, arrowOrange, arrowRed, asterikBlue, asterikOrange, pentaBlue, pentaRed, squiggleOrange, squiggleBlue, xOrange, xRed];
	// var sprinkleNumber = 25;
	// for (var s = 0; s < sprinkleNumber; s++) { //how many times do we wanna run this code???? 25! 0-24
	// 	var randomSprinkle = random(0, sprinkles.length); //random number from sprinkles array
	// 	var x = random(0, windowWidth); //random x coordinate each time
	// 	var y = random(0, windowHeight); //random y coordinate each time
	// 	image(sprinkles[randomSprinkle], x, y, 50, 50); //call a random sprinkle from sprinkles array, a random x, a random y, and make them 50x50
	// }
}

function draw() {

}
