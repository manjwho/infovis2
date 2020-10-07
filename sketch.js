// INSTRUCTIONS:
// Move mouse left/right to change pattern density
// Move mouse up/down to change line thickness
// Click anywhere on the canvas to download .png current pattern

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  frameRate(25);

}

function draw() {

  blendMode(BLEND);
  background(54, 73, 103); //navy blue

  let dash = 10 + mouseX; //space between dashes dash
  strokeWeight(2 + mouseY / 2);
  blendMode(LIGHTEST);

  stroke(231, 84, 128); //bright pink
  AAgrid(dash);

  rotate(90);
  translate(-width, -height);

  stroke(62, 103, 206); // bright blue
  AAgrid(dash);

}



function AAgrid(d) {

  for (let y = 1; y < 31; y++) {

    for (let x = 1; x < 31; x++) {

      line((x - 1) * 2 * d, (y - 1) * 2 * d, (2 * x - 1) * d, (2 * y - 1) * d)

    }
  }
}


function mousePressed() {
  saveFrames("out", "png", 1, 1);
}
