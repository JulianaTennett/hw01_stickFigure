var pink = '#F3C7C7';
var redColor = '#F15E6E';
var blueColor = '#7E91AB';
var white = '#fffff';

var screenMessage = "";

var manicBalls = [];
var depressBalls = [];


var manicBallMessages = [
  'Hyped up on Bitmokis and college apartment heaven on craigslist. cannot sleep. cannot calm down. too many possibilities. future!!!! 7/3/15'.toUpperCase(),
  'I AM IN A GREAT MOOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!! IT’S A GREAT DAY!!!!!!!!!!!!!!!!',
  'My therapist once told me "If people average 50 thoughts per minute, you must average 150" That’s when I realized my mind is a constant rapid whirlwind of thoughts, more thoughts than others usually have, and that’s why I am always buzzing. Always thinking. Always over-thinking.',
  'When you’re hyped up on coffee and Scout events and free pizza and your body doesn’t feel like it can contain the emotion...and suddenly your hype is deflated but that energy is still buzzing in your chest and now it’s really negative, embarrassed energy and not excited energy but close to excited, but not excited, it’s sad and now the negative energy is taking up all this space and you want to explode into star dust and tears at the same time 12/16/16',
  'I AM IN A GREAT MOOD!!!!!!!!!!!!!!!!!!!!!!!!!!!!! IT’S A GREAT DAY!!!!!!!!!!!!!!!!',
  'Since I was a kid, when I get really, really excited, I clench my jaw shut and close my eyes tight and squeeze my hands together under my chin with my forearms pressed into my chest. I don`t know why I do it, and if Im having a really good day my jaw literally starts to ache after a while and it`s not comfortable. I think it`s a way to cope with the feelings that inflate my chest and cannot be contained or ignored. Now that I`m older I only do this when I`m alone (or when I forget I`m around people). My dad pointed it out to me last summer.'
];

var depressBallMessages = [
  'Depressing MSG #1',
  'Depressing MSG #2',
  'Depressing MSG #3',
  'Depressing MSG #4'
]

function setup() {
  createCanvas(windowWidth, windowHeight);
	noStroke();

  // Create objects
  for (let i = 0; i < 6; i++) {
    manicBalls.push(new Ball(true, manicBallMessages[i]));
  }
  for (let i = 0; i < 4; i++) {
    depressBalls.push(new Ball(false, depressBallMessages[i]));
  }

}

function draw() {
  background(pink);

  for (let i = 0; i < manicBalls.length; i++) {
    manicBalls[i].move();
    manicBalls[i].display();
    if (manicBalls[i].isInside(mouseX, mouseY) == true) {
      screenMessage = manicBalls[i].message;
    }
  }

  for (let i = 0; i < depressBalls.length; i++) {
    depressBalls[i].move();
    depressBalls[i].display();
    if (depressBalls[i].isInside(mouseX, mouseY)) {
      screenMessage = depressBalls[i].message;
    }
  }

	push();
  fill(0);
  textAlign(LEFT);
  rectMode(CENTER);
  text(screenMessage, width/2, height/2, 500, 100);
	pop();
}

