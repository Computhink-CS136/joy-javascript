let x = 50;
let y = 50;
let ballSize = 50;
let speedX = 2;
let speedY = 2;

function setup(){
    createCanvas(400, 400);
    background("pink");
}

function draw() {
    background("pink");
    fill("purple");
    circle(x, y, ballSize);

    x = x + speedX;
    y = y + speedY;

    if (x > 400){
        speedX = speedX * (-1)
    }
    if (x < 0){
        speedX = speedX * (-1)
    }
    if (y > 400){
        speedY = speedY * (-1)
    }

    // if (keyIsDown(LEFT_ARROW)){
    //     x = x - 5;
    // }

    // if (x < 25){
    //     x = 25;
    // }

    // if (keyIsDown(RIGHT_ARROW)){
    //     x=x+5;
    // }
    
    // if (x > 400-25){
        // x = 400-25;
    // }
}