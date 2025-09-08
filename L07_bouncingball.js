let x = 200;
let y = 200;
ballS

function setup(){
    createCanvas(400, 400);
    background("pink");
}

function draw() {
    background("pink");
    circle(x, height/2, 50);

    if (keyIsDown(LEFT_ARROW)){
        x = x - 5;
    }

    if (x < 25){
        x = 25;
    }

    if (keyIsDown(RIGHT_ARROW)){
        x=x+5;
    }
    
    if (x > 400-25){
        x = 400-25;
    }
}