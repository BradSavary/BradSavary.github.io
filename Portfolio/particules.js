    let particles = [];

    function setup() {
        let canvas = createCanvas(windowWidth - 20, windowHeight - 20);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
        let numParticles = floor((windowWidth * windowHeight) / 10000); // Adjust number of particles based on screen size
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    function draw() {
        background("#D9D9D9");
        for (let particle of particles) {
            avoidCenter(particle);
            particle.update();
            particle.show();
            particle.connect(particles);
            particle.attractToMouse();
        }
    }

    class Particle {
        constructor() {
            this.pos = createVector(random(width), random(height));
            this.vel = createVector(random(-2, 2), random(-2, 2));
            this.size = 5;
        }

        update() {
            this.pos.add(this.vel);
            this.edges();
        }

        edges() {
            if (this.pos.x < 0 || this.pos.x > width) {
                this.vel.x *= -1;
            }
            if (this.pos.y < 0 || this.pos.y > height) {
                this.vel.y *= -1;
            }
        }

        show() {
            noStroke();
            fill("#528063");
            circle(this.pos.x, this.pos.y, this.size);
        }

        connect(particles) {
            for (let other of particles) {
                let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
                if (d < 120) {
                    stroke("#528063");
                    line(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
                }
            }
        }

        attractToMouse() {
            let mouse = createVector(mouseX, mouseY);
            let force = p5.Vector.sub(mouse, this.pos);
            let distance = force.mag();
            if (distance < 100) { // Adjust the distance for interaction
                force.setMag(0.4); // Adjust the strength of attraction
                this.vel.add(force);
            }
        }
    }

    // Adjust particle positions to avoid the center
    function avoidCenter(particle) {
        let centerX = width / 2;
        let centerY = height / 2;
        let distanceToCenter = dist(particle.pos.x, particle.pos.y, centerX, centerY);
        if (distanceToCenter < 300) { // Increased the distance to avoid the center more
            let angle = atan2(particle.pos.y - centerY, particle.pos.x - centerX);
            particle.pos.x = centerX + cos(angle) * 300;
            particle.pos.y = centerY + sin(angle) * 300;
        }
    }

setup();
draw();