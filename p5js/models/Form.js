class Form {
    constructor(initialSpeed) {
        this.color = [0, 0, 0];

        this.initialWidth = 0;
        this.initialHeight = 0;

        this.height = 0;
        this.width = 0;

        this.scaleValue = 0;
        this.scaleIteration = 0.0;

        this.rotationValue = 0;
        this.rotationIteration = 0;

        this.scaleSpeed = 0.005;
        this.rotationSpeed = 0.001;
        this.lifespan = 0;

        this.grayTone = random(255);
        this.randomColor = color(random(255), 100, 100);

        this.weigth = 0.05

        this.x = mouseX;
        this.y = mouseY;

    }

    refreshSpeed(speed) {
        this.scaleSpeed = speed;
    }

    move() {
        this.lifespan++;

        // this.scaleValue = this.scaleIteration % 40;
        this.scaleValue = (sin(this.scaleIteration) * 20);
        // this.scaleValue = Math.abs(sin(this.scaleIteration / 4) * 10) + 10;

        // this.rotationValue = this.rotationIteration % 360;
        // this.rotationValue = (sin(this.rotationIteration / 2) * 10) + 10;
        this.rotationValue = Math.abs(sin(this.rotationIteration / 2) * 10) + 10;

        // this.scaleIteration += globalSettings.wave.speed / 4;
        this.scaleIteration += this.scaleSpeed;
        // this.rotationIteration += globalSettings.rotation.rotationSpeed / 4;
        this.rotationIteration += this.rotationSpeed / 4;
    }

    display() {
        switch ("two-tone") {
            case "two-tone":
                let hue = map(this.scaleValue, 5, 10, 100 - 80, 100 + 80)
                stroke(color(hue, 80, 50));
                break;
            case "white":
                stroke(color(0, 0, 1));
                break;
            case "black":
                stroke(color(255, 0, 0));
                break;
            case "random":
                stroke(color((sin(this.scaleIteration / 4) * 360) + 10, 1, 1));
                break;
            case "rainbow":
                stroke(color(this.lifespan % 255, 255, 255));
                break;
            case "black-white":
                stroke(color(0, 0, this.grayTone));
            default:
                break;
        }
    }
}
