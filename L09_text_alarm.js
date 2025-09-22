let xpos;
let velocityX = 0.6
function setup() {
    createCanvas(600, 400);
    background("pink");
    xpos = width/2;

}

function draw() {
    fill("gray")
    textAlign(CENTER, BOTTOM);

    textSize(32);
    text("Bounce!", xpos, height/2);  
    xpos = xpos + velocityX;
}