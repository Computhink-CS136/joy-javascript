let x = 200;
function setup(){
    createCanvas(600, 400);
    background("pink");
}

function draw() {
    background("pink");
    circle(x, height/2, 50);

    if (keyIsDown(LEFT_ARROW)){
        x = x - 5;

    }
}