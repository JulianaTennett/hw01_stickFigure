
// Generic Ball class
class Textmsg {

    // Constructor function, used to create new instances
    constructor(piece, xpos) {
        // Taken from the constructor
        this.piece = piece
        if (xpos != null) {
            this.x = xpos;
        } else {
            this.x = random(this.r, width - this.r);
        }

        // Fixed values for all balls
        this.r = 30;
        this.intialR = 0;
        this.wiggleRange = 1;
        this.easeRange = 20;
        this.grow = random(1.5, 2.5);
        this.delay = random(0, 15);

        this.textScale = 0.10;
        this.targetScale = 0.10;

        // Some randomly generated values
        this.easing = 0.05 + random(-0.01, 0.01);  // add a little variation so that all balls don't pulse at the exact same rate

        // Values that depend on `maniacness`
        if (this.piece.maniac == true) {
            this.y = random(this.r, height / 4);
            this.color = redColor;
        } else {
            this.y = random(height * .75, height - this.r);
            this.color = blueColor;
        }

        // Initiate target for sidewayseased movement
        this.targetX = this.x;
    }

    // METHODS
    move() {
        // Wiggle or ease sideways
        if (this.piece.maniac == true) {
            this.x += random(-this.wiggleRange, this.wiggleRange);
            this.y += random(-this.wiggleRange, this.wiggleRange);
            if (this.y < this.r) {
              this.y = this.r;
            }
            if (this.y > height/4 - this.r) {
              this.y = height/4 - this.r;
            }
            if (this.x > width+this.r) {
              this.y = width+this.r;
            }
            if (this.x < this.r) {
              this.x = this.r;
            }
        } else {
            let dx = (this.targetX - this.x);
            this.x += this.easing * dx;
            if (abs(dx) < 0.1) {
                // Use the direction of the ball to go to the other side
                if (dx > 0) {
                    this.targetX = this.x - this.easeRange;
                } else {
                    this.targetX = this.x + this.easeRange;
                }
            }
        }
    }

    display() {
        push();
        fill(this.color);
        translate(this.x, this.y);
        scale(this.textScale);
        rectMode(CENTER);
        textAlign(LEFT, CENTER);
        text(this.piece.message, 0, 0, 250, 500);
        pop();
    }

    update() {
      let ds = (this.targetScale - this.textScale);
      this.textScale += this.easing * ds;
    }

    // Returns true if the coordinates are inside this ball
    isInside(xpos, ypos) {
        if (dist(this.x, this.y, xpos, ypos) < this.r) {
            return true;
            this.r += 5;
        }
        return false;
        this.r = 30;
    }

    expand() {
      this.targetScale = 1.0;
    }

    shrink() {
      this.targetScale = .10;
    }
}
