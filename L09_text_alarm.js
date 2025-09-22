let xpos;
let velocityX = 
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
    xpos = xpos + 0.6
}