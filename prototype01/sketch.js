var pink = '#F3C7C7';
var lightBlue = '#B9D8FC';
var redColor = '#D47E8E';
var blueColor = '#7E91AB';
var white = '#fffff';

var b1, b2, c1, c2;

var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;

var timer;

// Let's replace everything with one array for all balls!
var allMsgs = [];
var manicMsgs = [];
var depressMsgs = [];

var manIt;
var depIt;

//fonts
var asap;
var bitter;

function preload() {
  asap = loadFont('assets/fonts/Asap-Regular.ttf');
  bitter = loadFont('assets/fonts/Bitter-Italic.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
	noStroke();

  c1 = color('#F3C7C7');
  c2 = color('#B9D8FC');

  //Find spacing for x axis of balls
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
  manIt = 0;
  depIt = 0;
  for (let i = 0; i < data.pieces.length; i++) {
    let pieceObj = data.pieces[i];
    let msg;
    if (pieceObj.maniac == true) {
      msg = new Textmsg(pieceObj, maniacGaps[manIt]);
      manIt++;
      manicMsgs.push(msg);
    } else {
      msg = new Textmsg(pieceObj, depressGaps[depIt]);
      depIt++;
      depressMsgs.push(msg);
    }
    allMsgs.push(msg);
  }

console.log(allMsgs);
}

function draw() {
  setGradient(0, 0, width, height, c1, c2, Y_AXIS);

  var timer = frameCount;
  // console.log(timer);

  titleMsg = new Title();
	titleMsg.displayTitle();
  // Manage all the balls
  for (let i = 0; i < allMsgs.length; i++) {
    let textMsg = allMsgs[i];
    textMsg.update();

    if (timer % 3000 < 1500 ) {
      if (textMsg.piece.maniac) {
        textMsg.display();
      }
    } else {
      if (!textMsg.piece.maniac) {
        textMsg.display();
      }
    }

    if (textMsg.isInside(mouseX, mouseY) == true) {
      textMsg.expand();
    } else {
      textMsg.shrink();
      textMsg.move();
    }
  }

}

function setGradient(x, y, w, h, c1, c2, axis) {

  push();
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
  pop();
}
