let x = [];     // store x positions of shapes
let y = [];     // store y positions of shapes
let xSpeed = [];  // store x speeds of shapes
let ySpeed = [];  // store y speeds of shapes
let d = [];      // store diameters of shapes
let shapeType = []; // store shape types

let invertColors = false; //color inversion


function setup() {
  createCanvas(2560, 1440);
  
  // two inital objects 
  addShape(300, 0, 3, 7, 20);
  addShape(500, 10, 7, 3, 10);
}

function draw() {
  if (invertColors) {
    background(255); // white background when inverted
  } else {
    background(0); // black background normally
  }

  // all shapes and update their positions
  for (let i = 0; i < x.length; i++) {
    // Check for collisions with walls and update position
    if (x[i] > width || x[i] < 0) {
      xSpeed[i] = xSpeed[i] * -1;
      shapeType[i] = int(random(3)); // change shape on wall hit
    }
    x[i] = x[i] + xSpeed[i];

    if (y[i] > height || y[i] < 0) {
      ySpeed[i] = ySpeed[i] * -1;
      shapeType[i] = int(random(3)); // change shape on wall hit
    }
    y[i] = y[i] + ySpeed[i];


    if (invertColors) {
      fill(0); // black shapes when inverted
    } else {
      fill(255); // white shapes normally
    }

    // Draw the shape
    if (shapeType[i] == 0) {
      ellipse(x[i], y[i], d[i]); // draw circle
    } else if (shapeType[i] == 1) {
      rect(x[i], y[i], d[i], d[i]); // draw rectangle
    } else {
      triangle(x[i], y[i], x[i] - d[i] / 2, y[i] + d[i], x[i] + d[i] / 2, y[i] + d[i]); // draw triangle
    }
  }
}

// when the mouse is clicked
function mousePressed() {
  // Add a new shape at mouse click
  let randomXSpeed = random(-5, 5);
  let randomYSpeed = random(-5, 5);
  let randomSize = random(10, 30);
  addShape(mouseX, mouseY, randomXSpeed, randomYSpeed, randomSize);
}

//add a new shape
function addShape(newX, newY, newXSpeed, newYSpeed, newSize) {
  x.push(newX);
  y.push(newY);
  xSpeed.push(newXSpeed);
  ySpeed.push(newYSpeed);
  d.push(newSize);
  shapeType.push(int(random(3))); 
}
// when space bar is clicked
function keyPressed() {
  if (key === ' ') {
    invertColors = !invertColors;
  }
}
