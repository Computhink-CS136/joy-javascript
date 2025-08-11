// let circleSize = 5;
// let shapeColor = "Blue";
let xpos = 300
let ypos = 200
// let rectSize = 50;

function setup() {
    createCanvas(600, 400);
    background(100);
}

function draw(){
    background(200);
    // noStroke();
    // let xpos = 50;
    // let ypos = 50;
    // rect(xpos, ypos, rectSize, rectSize)

    // if (key === 'c'){
    //     circle(250, 150, 300);
    // }
    // else if (key === 's'){
    //     rect(50, 100, 200, 200);
    // }
    // else {
    //     triangle(50, 350, 150, 50, 350, 350);
    // }
    if (keyIsDown(RIGHT_ARROW)){
        xpos = xpos + 5;
    }
    if (keyIsDown(LEFT_ARROW)){
        xpos = xpos - 5;
    }
    xpos = constrain(xpos, 0+25, width-25)

    if (keyIsDown(UP_ARROW)){
        ypos = ypos - 5;
    }
    if (keyIsDown(DOWN_ARROW)){
        ypos = ypos + 5;
    }
    ypos = constrain(ypos, 0+25, height-25);

    fill("pink");
    circle(xpos, ypos, 50);
}
// function mousePressed() {
    // shapeColor = color(random(255), 0, random(255));
    // fill(shapeColor);
    // circleSize = 5;
// }
// function mouseDragged() {
    // circle(mouseX, mouseY, circleSize)
    // circleSize = circleSize + 0.5
// }

// function keyPressed() {
    // rectSize = 100;
    //  if (key === 'c'){
    // background(220);
    // textSize(64);
    // text(key, 50, 50);
    // text(keyCode, 50, 120)
    // if(keyCode === 38) {
    //     background(220);
    //     fill("red");
    //     circle(300, 200, 100);
    // }
    // if(keyCode === 40) { 
        // background(220);
        // fill("black");
        // circle(300, 200, 100);
    // }



// }
        // fill("purple")
        // circle(250, 150, 300);
    // }
    // else if (key === 's'){
        // background(220)
        // fill("pink")
        // rect(50, 100, 200, 200);
    // }
    // else {
        // background(220)
        // fill("white")
        // triangle(50, 350, 150, 50, 350, 350);
    // }



// function keyReleased(){
    // rectSize = 50
// }