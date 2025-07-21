
function setup() {
    createCanvas(895, 400);
    background(220);
    // noLoop(); // Stops continuous drawing
    colorX = 0
  }
  
function draw() {
  // Recap 1: Repeating Circles
  let posX = 50;
  let posY = 200;
  let circleD = 90;
  let colorB = 0

  for (let i=1; i<15; i++){
    posX = posX + circleD + 10;
    fill(colorB, 0, 225)
    colorB = colorB + 35;
    circle(posX, posY, circleD);

  }



  // circle(posX ,posY, circleD)
  // circle(posX, posY, circleD)
  // circle(posX, posY, circleD)
  // circle(posX, posY, circleD)
  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}