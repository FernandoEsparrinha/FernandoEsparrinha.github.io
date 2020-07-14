p5.disableFriendlyErrors = true;

var ran = true;
var numberOfWaves = 0;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('z-index', '2');
  cnv.position(0, 0);
  rectangleWave = new PolygonWave();
}

function draw() {
  if (focused) {
    // colorMode(HSB, 360, 100, 100);
    background(41, 36, 41);

    if (numberOfWaves % 10 == 0 && numberOfWaves < 300) {
      rectangleWave.addWaves(1)
    }

    if (numberOfWaves < 300) {
      numberOfWaves++
    }

    rectangleWave.display();
  }
}
