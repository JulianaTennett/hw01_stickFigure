var pink = '#F3C7C7';
var redColor = '#F15E6E';
var blueColor = '#7E91AB';
var white = '#fffff';

var screenMessage = "";

// Let's replace everything with one array for all balls!
var allBalls = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
	noStroke();

  // Let's create as many balls as obejcts in `data`, 
  // and store the datum object with all the piece information in the Ball directly! :)
  for (let i = 0; i < data.pieces.length; i++) {
    let pieceObj = data.pieces[i];
    let ball = new Ball(pieceObj);
    allBalls.push(ball);
  }

}

function draw() {
  background(pink);

  // Manage all the balls
  for (let i = 0; i < allBalls.length; i++) {
    allBalls[i].move();
    allBalls[i].display();
    if (allBalls[i].isInside(mouseX, mouseY) == true) {
      screenMessage = allBalls[i].piece.message;
    }
  }

	push();
  fill(0);
  textAlign(LEFT);
  rectMode(CENTER);
  text(screenMessage, width/2, height/2, 500, 100);
	pop();
}

