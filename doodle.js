function setup() {
    createCanvas(600, 400);
    background(200);
}

function draw(){
    background(100);
    noStroke();
    let xpos = 50;
    let ypos = 50;
    rect(xpos, ypos, rectSize, rectSize)
}
function mousePressed() {
    shapeColor = color(random(255), 0, random(255));
    fill(shapeColor);
    circleSize = 5;
}
function mouseDragged() {
    circle(mouseX, mouseY, circleSize)
    circleSize = circleSize + 0.5
}