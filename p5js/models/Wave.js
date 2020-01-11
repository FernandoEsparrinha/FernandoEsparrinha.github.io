class Wave {
  constructor() {

    this.individualMode = true;

    this.initialWaves = 1;

    this.waves = [];
    this.speed = 0.04;

    console.log("Creating Rectangle Wave");
    console.log(this);
  }

  addWaves(amount) { }

  removeWaves(amount) { }

  reset() {
    this.waves = []
  }

  display() { }
}