function Part() {
    this.pos = createVector(int(random(0, window.innerWidth)), int(random(0, window.innerHeight)));
    this.vel = createVector(int(random(-2, 2)), int(random(-2, 2)));
    while(this.vel.x * this.vel.y == 0){this.vel = createVector(int(random(-2, 2)), int(random(-2, 2)));}
    this.n = [];
    this.r = int(random(1000 / 10, 1000 / 5));

    this.move = function () {
        this.pos.add(this.vel);
        if (this.pos.x < 0 || this.pos.x > window.innerWidth) {
            this.vel.x *= -1;
        }
        if (this.pos.y < 0 || this.pos.y > window.innerHeight) {
            this.vel.y *= -1;
        }
    }

    this.show = function () {
        //stroke(255, 255);
        fill(255, 255, 255, 0);
        stroke(int((this.pos.x/window.innerWidth)*255),0, int((this.pos.y/window.innerHeight)*255), 100);
        strokeWeight(1);
        ellipse(this.pos.x, this.pos.y, this.r/10, this.r/10);
        this.n.forEach(element => {
            line(this.pos.x, this.pos.y, element.pos.x, element.pos.y);
        });
    }

    this.connect = function (part) {
        this.n = [];
        part.forEach(element => {
            if (this.distance(element) < this.r && this.pos != element.pos) {
                this.n.push(element);
            }

        });
    }

    this.distance = function (part) {
        return Math.sqrt(Math.abs(Math.pow(this.pos.x - part.pos.x, 2) + Math.pow(this.pos.y - part.pos.y, 2)));
    }
}