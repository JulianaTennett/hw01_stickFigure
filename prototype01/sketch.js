var pink = '#F3C7C7';
var lightBlue = '#B9D8FC';
var redColor = '#F15E6E';
var blueColor = '#7E91AB';
var white = '#fffff';
var screenMessage = "";

var b1, b2, c1, c2;

var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;

// Let's replace everything with one array for all balls!
var allBalls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
	noStroke();

  c1 = color('#F3C7C7');
  c2 = color('#B9D8FC');

  /*
   Since we want nice spaced even distribution in the X axis for each group of balls,
   there is some precalcs we need to do:
   - Figure out how many maniacs/depressed balls are in the `data` object
   - Generate random numbers for each spacing between balls in the group
    (+1 for the last gap to the gap between the last ball and the right of the screen)
   - Find the random total per group and normalize these random numbers for screen values
   - Initiate the balls with those random x values :)
   */
  let maniacCount = 0,
      depressCount = 0;
  for (let i = 0; i < data.pieces.length; i++) {
    if (data.pieces[i].maniac == true) {
      maniacCount++;
    } else {
      depressCount++;
    }
  }

  // Random gaps
  let randomGapMin = 3,
      randomGapMax = 5;
  let maniacGaps = [],
      maniacGapsTotal = 0,
      depressGaps = [],
      depressGapsTotal = 0;
  let rn;
  for (let i = 0; i < maniacCount + 1; i++) {
    rn = random(randomGapMin, randomGapMax);
    maniacGaps.push(maniacGapsTotal + rn);
    maniacGapsTotal += rn;
  }
  for (let i = 0; i < depressCount + 1; i++) {
    rn = random(randomGapMin, randomGapMax);
    depressGaps.push(depressGapsTotal + rn);
    depressGapsTotal += rn;
  }

  // Normalize them to screen coordinates
  for (let i = 0; i < maniacCount + 1; i++) {
    maniacGaps[i] = width * maniacGaps[i] / maniacGapsTotal;
  }
  for (let i = 0; i < depressCount + 1; i++) {
    depressGaps[i] = width * depressGaps[i] / depressGapsTotal;
  }

  // Let's create as many balls as obejcts in `data`,
  // and store the datum object with all the piece information in the Ball directly! :)
  // Lat's also use the randomly generated x coordinates
  let manIt = 0,
      depIt = 0;
  for (let i = 0; i < data.pieces.length; i++) {
    let pieceObj = data.pieces[i];
    let ball;
    if (pieceObj.maniac == true) {
      ball = new Ball(pieceObj, maniacGaps[manIt]);
      manIt++;
    } else {
      ball = new Ball(pieceObj, depressGaps[depIt]);
      depIt++;
    }
    allBalls.push(ball);
  }

}

function draw() {
  // background(pink);
  // var inter = map(i, y, y+h, 0, 1);
  // var backColor = lerpColor(pink, lightBlue, inter);
  // background(backColor);
  setGradient(0, 0, width, height, c1, c2, Y_AXIS);

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

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}
