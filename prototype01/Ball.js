
// Generic Ball class
class Ball {

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
        this.r = 35;
        this.wiggleRange = 1;
        this.easeRange = 20;

        // Some randomly generated values
        this.easing = 0.05 + random(-0.01, 0.01);  // add a little variation so that all balls don't pulse at the exact same rate

        // Values that depend on `maniacness`
        if (this.piece.maniac == true) {
            this.y = random(this.r, height / 3);
            this.color = redColor;
        } else {
            this.y = random(0.666 * height, height - this.r);
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
        ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
        pop();
    }

    // Returns true if the coordinates are inside this ball
    isInside(xpos, ypos) {
        if (dist(this.x, this.y, xpos, ypos) < this.r) {
            return true
        }
        return false;
    }
}
