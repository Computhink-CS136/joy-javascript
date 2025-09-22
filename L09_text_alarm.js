let xpos;
function setup() {
    createCanvas(600, 400)
    background("pink")
    xpos = width/2

}

function draw() {
    textAlign(CENTER, BOTTOM);
    textColor("cyan");
    textSize(32);
    text("Bounce!", width/2, height/2);  
}