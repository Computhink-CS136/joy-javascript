let xpos;
function setup() {
    createCanvas(600, 400)
    background("pink")
    xpos = width/2

}

function draw() {
    fill("cyan")
    textAlign(CENTER, BOTTOM);
    
    textSize(32);
    text("Bounce!", width/2, height/2);  
}