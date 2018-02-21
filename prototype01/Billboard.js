class Billboard {

  constructor(message) {
    this.message = message;
    //fixed values
    this.x = width/2;
    this.y = height/2;
  }

  display() {
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
