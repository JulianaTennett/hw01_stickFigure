class Billboard {

  constructor(message) {
    this.message = message;
    //fixed values
    this.x = width/2;
    this.y = height/2;
  }

  displayTitle() {
    push();
    rectMode(CENTER);
    fill('#C1C4E1');
    rect(this.x + 10, this.y + 10, 600, 265, 20);
    fill(255);
    rect(this.x, this.y, 600, 265, 20);
    fill('#D3D0E4');
    textAlign(CENTER);
    textStyle(ITALIC);
    textFont('bitter');
    textSize(36);
    text('Some Things on Cyclothymia', this.x, this.y);
    pop();
  }

  displayMsg() {
    push();
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, 600, 265, 20);
    fill(0);
    textAlign(LEFT);
    textFont('asap');
    textSize(16);
    text(this.message, this.x, this.y, 500, 165);
    pop();
  }


}
