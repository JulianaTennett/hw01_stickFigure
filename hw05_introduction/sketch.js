//COLORS
var redLight = "#F3C7C7";
var redColor = "#B05959";
//FONTS
var robotoMonoBold;
var robotoMono;
//POSITIONING
var titleX;
var titleY;
var navX;
var navY;
var navH;
//TEXT
var navS = ['my passion', 'my relationships', 'my mentality', 'my faves'];
var noS = '';
var passionS = 'I love what I do, I love making things beautiful, functional, and human-centered through design and design thinking. I apply principles I’ve learned through design to my work and to everything else in my life. It helps me strategize, organize, and focus on empathy.';
var relatS = 'The relationships I have with those around me define so much about who I am at any given time in my life; my relationship with my girlfriend, with the colleagues and close friends I have been able to make in my design studio, and that which I have with my family members. These relationships are clear indications of how supported I feel, how I spend my time, who I trust and what I value.';
var mentalS = 'I spend so much time thinking about everything and, as a result, I have some strongly held mentalities that I take with me day to day and effect how I communicate with others, how I spend my time, and I approach more situations. My mentality at the highest level is to approach all things with passion, openness, kindness, and logic. There is pretty much no lukewarm with me, I swing between lovelovelove and hatehatehate, often back and forth many times (hence the openness part)';
var favesS = 'I LOVE SO MANY THINGS! I love to talk in all caps and watch lots of TV (the rate at which we consume media in todays society is a blessing and a curse), I love eating really really good food and going to the movies and ordering popcorn. I love chocolate in all of my baked goods and talking about the past and future. I LOVE THINGS!';
var s;
//HOVER DIMENSIONS
//passion
var hoverX;
var hoverH = 40;
var passionY;
var passionW = 125;
var relatY;
var relatW = 190;
var mentalY;
var mentalW = 150;
var favesY;
var favesW = 105;

function preload() {
  robotoMonoBold = loadFont('assets/RobotoMono-Bold.ttf');
	robotoMono = loadFont('assets/RobotoMono-Regular.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  resizeElements();

  //BASE STYLE
  noStroke();
  fill(redColor);
	textSize(18);

  s = '';
}

function draw() {
	background(redLight);

  var passionsArr = passionS.split('');
  var startingX = 0;
  var startingY = 50;
  passionsArr.forEach( function(letter, index) {
    startingX
    push();
    textFont(robotoMono);
    text(letter, startingX + index*10, startingY);
    pop();
  });

  //TITLE
  push();
	textFont(robotoMonoBold);
	text('i’m julie', titleX, titleY); //haha I can't use apostrophes in my text
  pop();

  //NAV
  push();
  textFont(robotoMono);
  text('my passion', navX, navY);
  text('my relationships', navX, navY+75);
  text('my mentality', navX, navY+150);
  text('my faves', navX, navY+225);
  // for (i = 0; i < navS.length; i++) {
  //   text(navS[i], navX, navY);
  //   navY = navY + 50; //this makes the words MOVE!!!
  // }
  pop();

  //TEXT PAR
  push();
  textFont(robotoMono);

  //empty state
  text(s, width/3, height/3, width/2, height/2);
  //passion
  if (mouseX > hoverX && mouseX < hoverX + passionW && mouseY > passionY && mouseY < passionY+hoverH) {
    push();
    s = passionS;
    textFont(robotoMonoBold);
    text('my passion', navX, navY);
    pop();
  } else if (mouseX > hoverX && mouseX < hoverX + relatW && mouseY > relatY && mouseY < relatY+hoverH) {
    push();
    s = relatS;
    textFont(robotoMonoBold);
    text('my relationships', navX, navY+75);
    pop();
  } else if (mouseX > hoverX && mouseX < hoverX + mentalW && mouseY > mentalY && mouseY < mentalY+hoverH) {
    push();
    s = mentalS;
    textFont(robotoMonoBold);
    text('my mentality', navX, navY+150);
    pop();
  } else if (mouseX > hoverX && mouseX < hoverX + favesW && mouseY > favesY && mouseY < favesY+hoverH) {
    push();
    s = favesS;
    textFont(robotoMonoBold);
    text('my faves', navX, navY+225);
    pop();
  } else {
    s = noS;
  }


  pop();




}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);  // full screen
	resizeElements();
}

function resizeElements() {
  titleX = width/9;
  titleY = height/5;
  navX = width/9;
  navY = height/3;
  hoverX = navX - 10;
  passionY = navY - 25;
  relatY = navY + 50;
  mentalY = navY + 125;
  favesY = navY + 200;
}
