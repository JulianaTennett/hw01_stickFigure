var pink = '#F3C7C7';
var redColor = '#F15E6E';
var blueColor = '#7E91AB';
var white = '#fffff';
var d;

// var manic1;
// var manic2;
// var manic3;
// var manic4;
// var manic5;
// var manic6;
var s;

var manicBalls = [];
var depressBalls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
	noStroke();

  // Create objects
  // manic1 = new Ball(true);
  // manic2 = new Ball(true);
  // manic3 = new Ball(true);
  // manic4 = new Ball(true);
  // manic5 = new Ball(true);
  // manic6 = new Ball(true);

  // depress1 = new Ball(false);
  // depress2 = new Ball(false);
  // depress3 = new Ball(false);
  // depress4 = new Ball(false);

  for (let i = 0; i < 6; i++) {
    manicBalls.push(new Ball(true));
  }

  for (let i = 0; i < 4; i++) {
    depressBalls.push(new Ball(false));
  }

  s = "";
}

function draw() {
  background(pink);

	push();
	fill(redColor);
  for (let i = 0; i < manicBalls.length; i++) {
    manicBalls[i].move();
    manicBalls[i].display();
  }
	pop();

	push();
	fill(blueColor);
  for (let i = 0; i < depressBalls.length; i++) {
    depressBalls[i].move();
    depressBalls[i].display();
  }
  pop();
  
	push();
	fill(pink);
	ellipse(manic5.x, manic5.y, 20, 20);
  if (mouseX > (manic1.x-manic1.r) && mouseX < (manic1.x+manic1.r) && mouseY > (manic1.y-manic1.r) && mouseY < (manic1.y+manic1.r)) {
    s = 'Hyped up on Bitmokis and college apartment heaven on craigslist. cannot sleep. cannot calm down. too many possibilities. future!!!! 7/3/15'.toUpperCase();
	} else if (mouseX > (manic2.x-manic2.r) && mouseX < (manic2.x+manic2.r) && mouseY > (manic2.y-manic2.r) && mouseY < (manic2.y+manic2.r)) {
    s = 'I AM IN A GREAT MOOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!! IT’S A GREAT DAY!!!!!!!!!!!!!!!!';
	} else if (mouseX > (manic3.x-manic3.r) && mouseX < (manic3.x+manic3.r) && mouseY > (manic3.y-manic3.r) && mouseY < (manic3.y+manic3.r)) {
    s = 'My therapist once told me "If people average 50 thoughts per minute, you must average 150" That’s when I realized my mind is a constant rapid whirlwind of thoughts, more thoughts than others usually have, and that’s why I am always buzzing. Always thinking. Always over-thinking.';
	} else if (mouseX > (manic4.x-manic4.r) && mouseX < (manic4.x+manic4.r) && mouseY > (manic4.y-manic4.r) && mouseY < (manic4.y+manic4.r)) {
    s = 'When you’re hyped up on coffee and Scout events and free pizza and your body doesn’t feel like it can contain the emotion...and suddenly your hype is deflated but that energy is still buzzing in your chest and now it’s really negative, embarrassed energy and not excited energy but close to excited, but not excited, it’s sad and now the negative energy is taking up all this space and you want to explode into star dust and tears at the same time 12/16/16';
	} else if (mouseX > (manic5.x-manic5.r) && mouseX < (manic5.x+manic5.r) && mouseY > (manic5.y-manic5.r) && mouseY < (manic5.y+manic5.r)) {
    s = 'I AM IN A GREAT MOOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!! IT’S A GREAT DAY!!!!!!!!!!!!!!!!';
	} else if (mouseX > (manic6.x-manic6.r) && mouseX < (manic6.x+manic6.r) && mouseY > (manic6.y-manic6.r) && mouseY < (manic6.y+manic6.r)) {
    s = 'Since I was a kid, when I get really, really excited, I clench my jaw shut and close my eyes tight and squeeze my hands together under my chin with my forearms pressed into my chest. I don`t know why I do it, and if Im having a really good day my jaw literally starts to ache after a while and it`s not comfortable. I think it`s a way to cope with the feelings that inflate my chest and cannot be contained or ignored. Now that I`m older I only do this when I`m alone (or when I forget I`m around people). My dad pointed it out to me last summer.';
	} else if (mouseX > (depress1.x-depress1.r) && mouseX < (depress1.x+depress1.r) && mouseY > (depress1.y-depress1.r) && mouseY < (depress1.y+depress1.r)) {
    s = 'I AM IN A GREAT MOOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!! IT’S A GREAT DAY!!!!!!!!!!!!!!!!';
	} else if (mouseX > (depress2.x-depress2.r) && mouseX < (depress2.x+depress2.r) && mouseY > (depress2.y-depress2.r) && mouseY < (depress2.y+depress2.r)) {
    s = 'I AM IN A GREAT MOOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!! IT’S A GREAT DAY!!!!!!!!!!!!!!!!';
	} else if (mouseX > (depress3.x-depress3.r) && mouseX < (depress3.x+depress3.r) && mouseY > (depress3.y-depress3.r) && mouseY < (depress3.y+depress3.r)) {
    s = 'I AM IN A GREAT MOOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!! IT’S A GREAT DAY!!!!!!!!!!!!!!!!';
	} else if (mouseX > (depress4.x-depress4.r) && mouseX < (depress4.x+depress4.r) && mouseY > (depress4.y-depress4.r) && mouseY < (depress4.y+depress4.r)) {
    s = 'I AM IN A GREAT MOOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!! IT’S A GREAT DAY!!!!!!!!!!!!!!!!';
	} else {
    s = '';
  }
  fill(0);
  textAlign(LEFT);
  rectMode(CENTER);
  text(s, width/2, height/2, 500, 100);
	pop();

}

