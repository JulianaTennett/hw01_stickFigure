class Title {

  constructor() {
    //fixed values
    this.x = width/2;
    this.y = height/2;
  }

  displayTitle() {
    push();
    fill('#DEDBEE');
    textAlign(CENTER);
    textStyle(ITALIC);
    textFont('bitter');
    textSize(70);
    text('Some Things on Cyclothymia', this.x, this.y);
    pop();
  }


}
