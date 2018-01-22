function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
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
	var stars = color(255, 255, 255, 150);

	//i dont wanna type these out
	var w = windowWidth;
	var h = windowHeight;

	noStroke();

	//SKY BACKGROUND
	var skyColor = [skyBlue, skyBluePurple, skyPurple, skyPink, skyPinkOrange, skyPinkOranger, skyOrange, skyOrange2, skyOrange3];
	var skyHeight = h/skyColor.length;
	for (var y = 0; y < skyColor.length; y = y + 1) {
		fill(skyColor[y])
		rect(0, y*skyHeight, w, skyHeight);
	}

	//STARS


	//CLOUD1
	fill(white);
	// bezier(0, 50, 500, 10, 700, 350, 0, 250);

	beginShape();
	vertex(0, h/13.5);
	bezierVertex(150, 35, 300, 60, 225, 50); //200, 40 is the anchor
	bezierVertex(400, 125, w/2+50, 125, w/2, 125);
	bezierVertex(600, 100, 600, 200, 600, 140);
	bezierVertex(400, 200, w/2+50, 200, w/2, 200,);
	bezierVertex(225, 250, 375, 225, 300, 200);
	vertex(200, 255);
	vertex(0, h/2.75);
	endShape();


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
