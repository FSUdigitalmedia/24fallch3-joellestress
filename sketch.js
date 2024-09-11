// Variables for Shape 1
let x1 = 100;
let y1 = 0;
let xSpeed1 = 3;
let ySpeed1 = 7;
let d1 = 20;
let shapeType1 = 0; // 0 = circle, 1 = rectangle, 2 = triangle

// Variables for Shape 2
let x2 = 200;
let y2 = 10;
let xSpeed2 = 7;
let ySpeed2 = 3;
let d2 = 10;
let shapeType2 = 1; // 0 = circle, 1 = rectangle, 2 = triangle

let invertColors = false; // invert colors

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  // Set the background color depending on the invertColors flag
  if (invertColors) {
    background(255); // white background
  } else {
    background(0); // black background
  }

  // Move and draw Shape 1
  if (x1 > width || x1 < 0) {
    xSpeed1 = xSpeed1 * -1;
    shapeType1 = int(random(3)); // Change shape when hitting wall
  }
  x1 = x1 + xSpeed1;

  if (y1 > height || y1 < 0) {
    ySpeed1 = ySpeed1 * -1;
    shapeType1 = int(random(3)); // Change shape when hitting wall
  }
  y1 = y1 + ySpeed1;

  // Draw the first shape
  if (invertColors) {
    fill(0); // black shape when inverted
  } else {
    fill(255); // white shape normally
  }

  if (shapeType1 == 0) {
    ellipse(x1, y1, d1); // draw a circle
  } else if (shapeType1 == 1) {
    rect(x1, y1, d1, d1); // draw a rectangle
  } else {
    triangle(x1, y1, x1 - d1 / 2, y1 + d1, x1 + d1 / 2, y1 + d1); // draw a triangle
  }

  // Move and draw Shape 2
  if (x2 > width || x2 < 0) {
    xSpeed2 = xSpeed2 * -1;
    shapeType2 = int(random(3)); // Change shape when hitting wall
  }
  x2 = x2 + xSpeed2;

  if (y2 > height || y2 < 0) {
    ySpeed2 = ySpeed2 * -1;
    shapeType2 = int(random(3)); // Change shape when hitting wall
  }
  y2 = y2 + ySpeed2;

  // Draw the second shape
  if (invertColors) {
    fill(0); // black shape when inverted
  } else {
    fill(255); // white shape normally
  }

  if (shapeType2 == 0) {
    ellipse(x2, y2, d2); // draw a circle
  } else if (shapeType2 == 1) {
    rect(x2, y2, d2, d2); // draw a rectangle
  } else {
    triangle(x2, y2, x2 - d2 / 2, y2 + d2, x2 + d2 / 2, y2 + d2); // draw a triangle
  }
}

// Add a shape at the mouse click location
function mousePressed() {
  
}

// invert colors with space bar
function keyPressed() {
  if (key === ' ') {
    invertColors = !invertColors; // Toggle between true and false
  }
}
