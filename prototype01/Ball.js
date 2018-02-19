
// Generic Ball class
class Ball {

    // Constructor function, used to create new instances
    constructor(maniac) {
        this.maniac = maniac;
        this.r = 25;
        this.x = random(this.r, width - this.r);

        if (this.maniac == true) {
            this.y = random(this.r, height / 3);
        } else {
            this.y = random(0.666 * height, height - this.r);
        }
    }

    // METHODS
    move() {
        let cap = this.maniac == true ? 1 : 0.25;
        this.x += random(-cap, cap);
        this.y += random(-cap, cap);
    }

    display() {
        push();
        if (this.maniac) {
            fill(redColor);
        } else {
            fill(blueColor);
        }
        ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
        pop();
    }
}