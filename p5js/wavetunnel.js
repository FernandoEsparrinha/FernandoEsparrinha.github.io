p5.disableFriendlyErrors = true;

var ran = true;
var numberOfWaves = 0;

function setup() {
  createCanvas(800, 800);
  rectangleWave = new PolygonWave();

}

function draw() {
  colorMode(HSB, 360, 100, 100);
  background(28, 7, 100);

  if (numberOfWaves % 10 == 0 && numberOfWaves < 300) {
    // for (var i = 0; i < 100; i++) {
    rectangleWave.addWaves(1);
    // }
  }
  numberOfWaves++;

  rectangleWave.display();
  // keyboardWaveControl();
}
